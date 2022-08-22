set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:zainhubb/play-ground-vue3.git master:gh-pages
