# Image and Containers

- run below command to get the image from docker hub if not exists in local and runs it

```
docker run node
```

- run below command to get the container image id and other details

```
docker ps -a
```

- run below command to start an interactive session with container

```
docker run -it node
```

## Running node project

- change docker_id with the id you get from above command

```
docker run -p 80:80 docker_id
```
