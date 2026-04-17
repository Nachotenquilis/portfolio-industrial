@echo off
echo ========================================
echo Publishing Portfolio and Deploying...
echo ========================================
git add .
git commit -m "Deployment: Automated GitHub Pages setup and UI enhancements"
git push
echo ========================================
echo Done! GitHub Actions will now build and deploy the site.
echo ========================================
pause
