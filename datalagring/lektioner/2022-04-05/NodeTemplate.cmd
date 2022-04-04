@echo off
echo Enter project name
set /p input=""
echo Creating %input% project
mkdir %input%
cd  %input%

echo initializing project
call npm init -y
echo Installing dependencies
call npm install cors
call npm install express
call npm install dotenv
call npm install helmet
call npm install mongoose
call npm install chai -D
call npm install chai-http -D 
call npm install mocha -D
call npm install morgan
call npm install winston
call npm install nodemon -D

echo doing some security fixes (3 times should do it)
call npm audit fix --force
call npm audit fix --force
call npm audit fix --force

echo Creating frontend folder
mkdir frontend

echo creating backend folders
mkdir backend\src\configuration
mkdir backend\src\controllers
mkdir backend\src\middlewares
mkdir backend\src\models
mkdir backend\src\routes
mkdir backend\src\utils

echo creating test folders
mkdir backend\test\controllers
mkdir backend\test\middlewares
mkdir backend\test\models
mkdir backend\test\routes
mkdir backend\test\utils

echo Creating frontend file
echo. > frontend/index.html

echo creating dummy backend files
echo. > backend\server.js
echo. > backend\src\configuration\config.js
echo. > backend\src\controllers\person.js
echo. > backend\src\middlewares\middlewares.js
echo. > backend\src\models\person.js
echo. > backend\src\routes\index.js
echo. > backend\src\utils\utils.js

echo creating dummy test files
echo. > backend\test\controllers\person.test.js
echo. > backend\test\models\person.test.js
echo. > backend\test\middlewares\middlewares.test.js
echo. > backend\test\routes\index.test.js
echo. > backend\test\utils\utils.test.js

echo creating misc dummy files
echo .env > .gitignore
echo node_modules >> .gitignore
echo PORT=3001 > .env
echo MONGODB_URL=mongodb://localhost:27017/ >> .env
echo MONGODB_DB_NAME=api_users >> .env
echo MONGODB_COLLECTION=users >> .env
echo NODE_ENV=development >> .env
echo #NODE_ENV=production >> .env

echo Hello world >readme.md