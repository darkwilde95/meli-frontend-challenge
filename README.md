# MELI Frontend Challenge

This project was built with Next.js and Node.js + Express.js. 

## Getting Started

First install dependencies for each subproject (`meli-api-test` and `meli-front-test`).  
Go into each subprojects folder and run:

```bash
npm install
# or
yarn install
```

Then, run the Node api server (meli-api-test) with:

```bash
npm start
# or
yarn start
```

Finally, run the Next server (meli-api-test) with:

```bash
npm run dev
# or
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
 
  
## API Routes:
API routes can be accessed on `http://localhost:3001/api`.

- `/items?search=:q` returns a list of items based in `q` query param value. Example: [http://localhost:3001/api/items?search=iphone](http://localhost:3001/api/items?search=iphone).

- `/items/:id` returns details of item with `id` route param. Example: [http://localhost:3001/api/items/MLA1157306810](http://localhost:3001/api/items/MLA1157306810).
