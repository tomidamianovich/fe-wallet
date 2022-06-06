# Fe Wallet

> This proyect consist in a cryptocurrency wallet allowing a user to create transactions like purchases, sells, swaps, withdrawals, etc. Besides that, it also allow an user to convert currencies and see the transactions history.

## Environment setup

- Install [Node.js](https://nodejs.org/)
  - Recommended method is by using [NVM](https://github.com/creationix/nvm)
  - Recommended Node.js version is the latest LTS.
  - Update `npm` to the latest version by running `npm i -g npm@latest`
- Run `npm install` to install the project dependencies
- Run proyect:
  - Using Development Endpoints:
    - Run `npm start-server` to start local server
    - Check http://localhost:3001/[user, balance, currencies, rates].json
    - Run in other tab `npm start:dev` to run the proyect locally.
    - Open http://localhost:3000/ (It will be opened automatically).
  - Using Production Endpoints:
    - Run `npm start:prod` to run the proyect with prod server (.env.prod file is nedded).

## Development for Production

### 1) Build the assets:

```
  npm run predeploy
```

It will create a build for production. (Endpoint value in secret key of github pages)

```
  npm run deploy
```

It will create a deploy via action on github pages.

### 4) Navigate to:

```
  Navigate to https://github.com/tomidamianovich/fe-wallet
```

### 5) Testing

```
npm run test
```

### 5) Linting

```
npm run lint
```

### 5) Prettier

Check format:

```
npx prettier --check .
```

Fix format:

```
npx prettier --write .
```

## License

Damianovich Reddy, Tomás 2022.
