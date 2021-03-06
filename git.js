// ЛОКАЛЬНО

// git init (установка репозитория)
// git config --global user.name "Denis"
// git config --global user.email denis.r2211@gmail.com (появляется файл "config")

// git status (статус файлов)
// git add -A (добавить все файлы и изменения в индекс репозитория)
// git status (проверка статуса)
// git commit -a -m"first commit" (создание контрольной точки)
// git log (проверить какие комиты были и их авторы)


// Git Hub

// echo "# gergr" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin git@github.com:denisr2211/gergr.git
// git push -u origin main

// git remote add origin git@github.com:denisr2211/gergr.git
// git branch -M main
// git push -u origin main

// git rm --cached filename.js   удалить фаил из индекса, но оставить локально


// If there are only two commits you want to merge, and they are the "most recent two", the following commands can be used to combine the two commits into one:

// git reset --soft "HEAD^"
// // git commit --amend