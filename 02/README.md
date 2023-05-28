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

## Every time you make changes to the project you need to stop and start the container and also rebuild the image

- to improve this we can modify dockerfile to copy the project files to container and run the project from there after doing npm install

# Managing Image and Containers

- to start stopped container

```bash
docker start container_id
```

- docker run starts in attached mode, to run in detached mode

```bash
docker run -d -p 80:80 docker_id
```

- to run in attached mode after running in detached mode

```bash
docker attach container_id
```

- another way of getting the logs of the container

```bash
docker logs container_id

# to get the logs in real time [follow mode]
docker logs -f container_id

# to get the logs in real time [follow mode] and also get the logs from the start of the container
docker logs -f --since 0 container_id

# to start in attached mode
docker start -a container_id
```
