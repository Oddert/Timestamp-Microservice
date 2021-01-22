# Timestamp Microservice

Microservice Node script for returning a timestamp. Created for a FreeCodeCamp project

## Live Demo
[https://enormous-sandwich.glitch.me/](https://enormous-sandwich.glitch.me/)

## Installation
```
$ git clone https://github.com/Oddert/Timestamp-Microservice.git
$ cd Timestamp-Microservice
$ npm i
$ npm start
```

## Scripts
| script | command                                        | action
|--------|------------------------------------------------|------------------------------------------------|
| start  | node app.js                                    | runs the server                                |
| server | nodemon app.js                                 | runs the server with auto restart              |

# Routes
| Route  | Params | Returns
|--------|-------------|-------------------|
| /  |  | returns a basic html page to interact with the API                                |
| /:time | String or Number representing a JS-compatible date | JSON object with unix timestamp and readable date |
