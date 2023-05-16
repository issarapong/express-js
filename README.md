#### Fast create project
```
mkdir project
cd project
touch app.js
npm init -y
npm i express dotenv mysql2
touch .env
echo "PORT=9999" >> .env
touch .gitignore
echo "/node_modules" >> .gitignore
echo ".env" >> .gitignore
code app.js
code .env
code package.json
```

#### Add package.json

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon"
```

#### Read Document As https://www.npmjs.com/package/mysql But use https://www.npmjs.com/package/mysql2