#### Fast create project
```
mkdir project
cd project
touch app.js
touch README.md
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


#### Using connection pools
การ เปิด Pool Conenction จะ กิน RAM เลย แต่ไม่ต้องต่อ Connecttion ไหม่ทุกครั้ง  ลักษณะเป็นการเปิดคู่สาย รอ
