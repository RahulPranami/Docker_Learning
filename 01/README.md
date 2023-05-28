# Getting Started With Docker

- run below command in current directory to build docker image

```
docker build .
```

- run below command to run docker container and specify which port to expose to host
- change docker_id with the id you get from above command

```
docker run -p 3000:3000 docker_id
```
