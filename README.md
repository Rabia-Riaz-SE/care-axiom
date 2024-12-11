
## Description

A RESTful API built with the NestJS framework, using TypeScript, TypeORM for database interactions, and BullMQ as a message queue for background tasks. This application demonstrates user management features, a PostgreSQL database schema, and integrates message queueing to simulate sending welcome messages upon user registration.

## Prerequisites for Running Application on Local System

- <a href="http://nodejs.org" target="_blank">Node.js</a> 
- <a href="https://www.postgresql.org" target="_blank">PostgreSQL</a>
- <a href="https://redis.io" target="_blank">Redis</a>

## Project setup

### Create .env 

```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=enpicom
DB_SYNC=true
REDIS_HOST= localhost
REDIS_PORT= 6379
```

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# production mode
$ npm run start:prod

# to run sample worker 
node worker.js
```

## Endpoints

these are the endpoints and there responses :
### Post Endpoints
- Call Type: Post
- Endpoint  : http://localhost:3000/users 
- Body : json object 
```
{
  "name": "user", 
  "age": 50,
  "email" : "user@gmail.com"
}
```
- response 
```
{
  "name": "user", 
  "age": 50,
  "email" : "user@gmail.com"
  "userId": 11
}

```
### Get Endpoints
- Call Type: get
- Endpoint  : http://localhost:3000/users 
- Query : http://localhost:3000/users?age=18


- response 
```
[
  {
    "name": "k",
    "email": "k@gmail.com",
    "age": 30
  },
  {
    "name": "kk",
    "email": "kk@gmail.com",
    "age": 30
  }
]

```

## API Performance and Security
### Performance Optimizations:
- Database Indexing: Index frequently queried fields as used for age.
- Caching
- Query Optimization use select only particular columns that are required.
- Pagination.

### Security Measures
- Data Validation, as Validate all input using class-validator or DTOs.
- Rate Limiting by using nestjs-rate-limiter.
- Authentication & Authorization.


