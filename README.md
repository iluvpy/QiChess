# QiChess
a chess platform similar to chess.com 


# Setup
first run `yarn` to install all the dependencies, then run `yarn build` to compile the typescript.
before running anything you need to create a `.env` file that should look like this;    
```
DATABASE_HOST="localhost" # or any other host
DATABASE_USER="your db user"
DATABASE_PASSWORD="your db password"
DATABASE_NAME="your db name"
``` 
after creating the `.env` file you can finally run `yarn serve` or `yarn devServe` for development.