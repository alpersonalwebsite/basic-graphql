# Basic GraphQL

[![Greenkeeper badge](https://badges.greenkeeper.io/alpersonalwebsite/basic-graphql.svg)](https://greenkeeper.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

Basic `GraphQl` and `Apollo` example.

## Installation
```
yarn install
```
## Running the server

### Development
```
yarn run dev
```

### Simulation of production
```
yarn run simulate-prod
```

### Production
```
yarn start
```

## Interacting with the `Playground` (dev) or querying.

Query:
```js
{
  luckyNumber
}
```

Returns: 
```json
{
  "data": {
    "luckyNumber": "Your lucky number is 97"
  }
}
```