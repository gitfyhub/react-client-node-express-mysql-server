# React client with Node.js Rest APIs with Express & MySQL example


## Project setup
```
Run in the root and client folder
yarn
```

### Run
```
node server.js
```

### React Web site url
```
http://127.0.0.1:5000/
```

### API list url
```
http://127.0.0.1:5000/lists
```

### Docker Compose
```
docker-compose up --build
```

### Docker Compose close down
```
docker-compose down
```

### Docker Delete Images
```
docker images -a
docker image prune --all
docker rmi -f $(docker images -q)
```

### stop all docker images

```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi -f $(docker images -q)
```
