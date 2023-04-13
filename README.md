# 🏭 Nestjs starter template API with PostgreSQL via Prisma

## Documentation

> [Changelog](CHANGELOG.md)

> [Nest Docs](https://docs.nestjs.com/)  

> [Prisma](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)  

> [PG](https://www.postgresql.org/docs/current/index.html)  

## Prerequisites

> [Docker](https://www.docker.com/)  

> [Yarn](https://yarnpkg.com/)

## Init project

```bash
cp .env.example .env && yarn && docker-compose down && docker-compose up -d && sleep 7 && yarn prisma:generate && yarn build
```

## Run

```bash
# restart DB
docker-compose down && docker-compose up -d && docker-compose logs -f

# development
yarn start

# watch mode
yarn start:dev

# production mode
yarn start:prod
```

## Test

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# test coverage
yarn test:cov
```

## Create user

```bash
curl --request POST 'http://localhost:8942/api/user/create' \
-H 'content-type: application/json' \
--data-raw '{"email": "baakey@21times2.com", "username": "baakey"}'
```

## Retrieve specific user

```bash
curl 'http://localhost:8942/api/user/all?email=baakey@21times2.com' --compressed
```

## References

![CleanArchitecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)  
[The Patterns Behind Scalable, Reliable, and Performant Large-Scale Systems](https://github.com/binhnguyennus/awesome-scalability)


## Tips

- How to create new files ?
> `npx nest generate --help`

- How to run db migrations ?
> `npx prisma migrate --help`

- How to connect to the local database from terminal ?
> `PGPASSWORD=postgres psql -h 127.0.0.1 -p 5442 -d dtk -U postgres`

- How to use `StandardDtkApiResponse` ?

```ts
// Response with data
const responseWithData: StandardDtkApiResponse<{ message: string }> = {
  data: { message: 'hello' },
  error: null,
};

// Response with error
const responseWithError: StandardDtkApiResponse<null, { code: number, message: string }> = {
  data: null,
  error: { code: 404, message: 'not found' },
};

// Response with data and error
const responseWithDataAndError: StandardDtkApiResponse<
  { message: string, id: number },
  { code: number, message: string, details: Record<string, any> }
> = {
  data: { message: 'hello', id: 123 },
  error: { code: 500, message: 'server error', details: { foo: 'bar' } },
};
```