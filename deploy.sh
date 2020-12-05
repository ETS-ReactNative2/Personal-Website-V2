rm -rf ./build/public
npm run build
mkdir ./build/public
mv ./build/asset-manifest.json ./build/public
mv ./build/favicon.ico ./build/public
mv ./build/index.html ./build/public
mv ./build/static ./build/public
netlify deploy --prod
