add env file in root directory  
.env file example  
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/worryNot?schema=public"  
JWT_SECRET = "example"

npm install (in root)  
cd apps/api  
npx prisma generate

go back in root directory

npm run build  
npm start
