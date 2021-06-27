# Coport Assessment

This repo is for Coport Assessment Server Side.

## Install Dependencies

Use the package manager [npm](https://www.npmjs.com/) to install the dependencies.

```bash
npm install
```

## Add your MongoDB connection string into .env file

Create a new .env file in the root and add your mongoDB connection string as shown below.

```bash
DB_CONNECTION = `mongodb://<user>:<password>@cluster0-shard-00-00.z1axh.mongodb.net:27017,cluster0-shard-00-01.z1axh.mongodb.net:27017,cluster0-shard-00-02.z1axh.mongodb.net:27017/<myFirstDatabase>?ssl=true&replicaSet=atlas-kxv22h-shard-0&authSource=admin&retryWrites=true&w=majority`
```
Replace <password> with the password for the <user> user. Replace <myFirstDatabase> with the name of the database that connections will use by default.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.
