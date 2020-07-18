# Practice-Prisma2
- 이 프로젝트는 Prisma2 를 연습해보기 위한 프로젝트입니다.


```
npm init
```


```
# package.json

{
  "name": "practice-prisma2",
  "version": "1.0.0",
  "description": "- 이 프로젝트는 Prisma2 를 연습해보기 위한 프로젝트입니다.",
  "main": "index.js",
  "scripts": {
    "dev": "ts-node ./index.ts"
  },
  "dependencies": {
    "@prisma/client": "^2.2.2",
    "@types/node": "12.12.50"
  },
  "devDependencies": {
    "@prisma/cli": "2.2.2",
    "ts-node": "8.10.2",
    "typescript": "3.9.6"
  },
  "engines": {
    "node": ">=10.0.0"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/daadaadaah/Practice-Prisma2.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/daadaadaah/Practice-Prisma2/issues"
  },
  "homepage": "https://github.com/daadaadaah/Practice-Prisma2#readme"
}
```

```
npm install
```

```
npx prisma init
```

```
# prisma/.env


DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<database>?schema=<schema>"
```

0. show DB
```
npx prisma studio --experimental  
```

1. DB -> Code
```
npx prisma introspect
```

2. Code -> DB
```
npx prisma generate

npm run dev
```
