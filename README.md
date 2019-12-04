# rudy
Tool for testing RUDY attacks against a server

## Running
Install dependencies:
```
npm install
```
Then start the application:
```
node index.js
```
The default target is `http://127.0.0.1:3000` and can be configured in `index.js`. You will be asked for how many connections you want to start against the target. The default number of connections is 5000.
