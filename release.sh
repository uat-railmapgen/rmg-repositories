echo "App name: $1"
echo "Version: $2"
echo "Environment: $3"

cd TARGET_REPO/
{ git checkout gh-pages || git checkout -b gh-pages }
cd ..
rm -rf TARGET_REPO/*
cp -r ./$1/$2/* TARGET_REPO/
cd TARGET_REPO
git add .
git commit -m "Release version $2 to $3"
git push -u origin gh-pages
