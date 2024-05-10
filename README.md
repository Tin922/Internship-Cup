## Worry Knot - Mental health application

![logo (Small)](https://github.com/Tin922/Internship-Cup/assets/71632978/19096457-e9c9-4912-ae60-30a2cc1cb7c0)

Mobile app built using React and Nest for the DUMP Internship Cup

## Build instructions
add env file in root directory  

```shell
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/worryNot?schema=public"  
JWT_SECRET = "example"
```

```shell
npm install (in root)  
cd apps/api  
npx prisma generate
```
go back in root directory
```
npm run build  
npm start
```
