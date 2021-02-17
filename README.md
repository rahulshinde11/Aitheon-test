# Aitheon-Test

## Step 0: 

Required Tools:
* Nodejs
* Angular cli(https://cli.angular.io/)

**ONLY FOR WINDOWS** \
(32bit installation) `npm config set script-shell "C:\\Program Files (x86)\\git\\bin\\bash.exe` \
(64bit installation) `npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe`

## Step 1:
Clone the repo and run `npm i`
## Step 2:
Create `.env` file in the root folder
## Step 3: 
Signup for `https://www.mongodb.com/` and create an account. Create a db and obtain a connection string.
## Step 4: 
Paste the connection string in `.env` file. example `MONGODB_URI=<Your connection String>`
## Step 5: 
Run the Server using `npm start`

## Step 6: 
In another terminal Install client node_modules using `npm run install:client`

## Step 7: 
Run the client using `npm run client:watch`
application running on `localhost:3000`
