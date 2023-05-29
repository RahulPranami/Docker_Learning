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

- to remove containers
  ```bash
  docker rm container_id
  ```
- to remove all stopped containers
  ```bash
    docker container prune
  ```
- to remove all containers
  ```bash
    docker rm -f $(docker ps -aq)
  ```
- to remove images
  ```bash
    docker rmi image_id
  ```
- to remove all images
  ```bash
    docker rmi $(docker images -q)
  ```
- to remove all images and containers
  ```bash
    docker system prune
  ```
- to remove all images and containers and volumes
  ```bash
    docker system prune -a
  ```
- to remove all images and containers and volumes and networks

  ```bash
    docker system prune -a --volumes
  ```

- to automatically remove the container after it exits

  ```bash
  docker run --rm -p 80:80 docker_id
  ```

- to get information about the container

  ```bash
  docker inspect container_id
  ```

- to get information about the image

  ```bash
  docker image inspect image_id
  ```

- to copy files into and from a container

  ```bash
  docker cp container_id:/path/to/file /path/to/destination
  docker cp /path/to/file container_id:/path/to/destination
  ```

## names and tags for images and containers

- to give a name to the container

  ```bash
      docker run --name container_name -p 80:80 docker_id
  ```

- to give a name to the image

  ```bash
    docker build -t image_name .
  ```

- to give a tag to the image

  ```bash
    docker build -t image_name:tag_name .
  ```

- to give a tag to the image
  ```bash
  docker build -t image_name:tag_name .
  ```

### Example

```bash
docker build -t node:latest .
docker run -p 80:80 -d --rm --name nodeApp node:latest
```
