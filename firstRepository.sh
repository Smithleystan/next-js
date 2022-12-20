git init
git add . 
git commit -m "first"
git branch -M main

echo 'saisissez l adresse du repositiorie'
read link

git remote add origin $link

git push origin main