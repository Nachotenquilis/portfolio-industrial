import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const GravityContainer = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // module aliases
    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite,
          Mouse = Matter.Mouse,
          MouseConstraint = Matter.MouseConstraint;

    // create an engine
    const engine = Engine.create();
    engineRef.current = engine;
    
    // adjust gravity slightly so it feels heavier (industrial)
    engine.world.gravity.y = 1.5;

    const width = sceneRef.current.clientWidth;
    const height = 400;

    // create a renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent'
      }
    });
    renderRef.current = render;

    // create static boundaries (walls and floor)
    const wallOptions = { 
        isStatic: true,
        render: { fillStyle: 'transparent' }
    };
    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, wallOptions);

    // Logos / Skills items as bodies
    const items = [
      { text: 'React', size: 60, color: '#00E5FF' },
      { text: 'PowerApps', size: 80, color: '#FF5722' },
      { text: 'Python', size: 65, color: '#FFC107' },
      { text: 'AutoCAD', size: 75, color: '#FF0000' },
      { text: 'Sika', size: 90, color: '#FFD700' }, // Gold/yellow
      { text: 'Energy', size: 65, color: '#39FF14' },
      { text: 'UPV', size: 70, color: '#FFFFFF' }
    ];

    const createBody = (item, x, y) => {
      return Bodies.circle(x, y, item.size / 2, {
        restitution: 0.6, // Bounciness
        friction: 0.3,
        density: 0.05,
        render: {
          fillStyle: '#2d3238', // Dark base
          strokeStyle: item.color,
          lineWidth: 3,
        },
        label: item.text
      });
    };

    const bodies = items.map((item, index) => 
       createBody(item, width/2 + (Math.random() * 200 - 100), -200 - (index * 150))
    );

    // add all of the bodies to the world
    Composite.add(engine.world, [ground, leftWall, rightWall, ...bodies]);

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Composite.add(engine.world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // After rendering setup, intercept the render event to draw custom text
    Matter.Events.on(render, 'afterRender', () => {
        const context = render.context;
        context.font = "bold 14px monospace";
        context.textAlign = "center";
        context.textBaseline = "middle";

        bodies.forEach(body => {
            const { x, y } = body.position;
            context.save();
            context.translate(x, y);
            context.rotate(body.angle);
            // Dynamic text color depending on theme would be complex in canvas without prop passing,
            // using white for contrast over dark circles
            context.fillStyle = "#ffffff"; 
            context.fillText(body.label, 0, 0);
            context.restore();
        });
    });

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // handle resize
    const handleResize = () => {
        if (!sceneRef.current) return;
        const newWidth = sceneRef.current.clientWidth;
        render.canvas.width = newWidth;
        render.options.width = newWidth;
        Matter.Body.setPosition(ground, { x: newWidth / 2, y: height + 25 });
        Matter.Body.setPosition(rightWall, { x: newWidth + 25, y: height / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas) render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <div className="relative metallic-panel border-4 border-industrial-600 rounded-b-xl overflow-hidden shadow-inner group">
      <div className="absolute top-0 left-0 w-full bg-industrial-800 text-industrial-300 font-mono text-xs p-1 text-center border-b border-industrial-600 z-10 flex justify-between px-4">
        <span>GRAVITY_TEST_CHAMBER.EXE</span>
        <span className="text-safety-orange animate-pulse font-bold">WARNING: INTERACTIVE ZONES</span>
      </div>
      <div ref={sceneRef} className="w-full h-[400px] cursor-grab active:cursor-grabbing bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-industrial-800 to-industrial-900 border-t-[8px] border-safety-yellow border-dashed opacity-90 transition-opacity group-hover:opacity-100"></div>
    </div>
  );
};

export default GravityContainer;
