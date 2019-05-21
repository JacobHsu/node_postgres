# Node, SQL, PostgreSQL - Mastering Backend Web Development
"Node, SQL, PostgreSQL - Mastering Backend Web Development": Official guide repo used to accompany video lessons.

This provides the completed projects for:
- first_server
- fortunes_api
- "psql_section"
- monsters_api

Check out the original course: 
https://www.udemy.com/node-postgresql

## npm 

安裝 [pg](https://www.npmjs.com/package/pg)，也就是 [PostgreSQL client for Node.js](https://docs.microsoft.com/zh-tw/azure/postgresql/connect-nodejs)  

# Usage 

GET　http://localhost:3000/fortunes
POST http://localhost:3000/fortunes body RAW Text=>JSON  
> Header(1) Content-Type application/json
```js
{
	"message":"Love 3000",
	"lucky_number":22,
	"spirit_animal":"Avengers"
}
```

PUT http://localhost:3000/fortunes/4 body RAW Text=>JSON  
> Header(1) Content-Type application/json
```js
{
	"message":"Love 3000",
	"lucky_number":21,
	"spirit_animal":"Avengers"
}
```


# Tools

[Postman](https://www.getpostman.com) | API Development Environment
[Get Postman](https://www.getpostman.com/downloads/) for Windows  
[Postgres.app](https://postgresapp.com/) is a full-featured PostgreSQL installation packaged  as a standard Mac app. `$ psql -U postgres`   