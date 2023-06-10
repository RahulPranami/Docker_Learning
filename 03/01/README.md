# Manage Data & Working With Volumes

- to build an image from dockerfile

  ```bash
    docker build -t feedback-node .
  ```

- to run a container from an image

  ```bash
    docker run -p 80:80 --name feedback-app --rm feedback-node
  ```

- after adding volumes to the container

  - build docker image from that dockerfile

    ```bash
      docker build -t feedback-node:volumes .
    ```

  - run the container from that image
    ```bash
      docker run -p 80:80 --rm --name feedback-app feedback-node:volumes
    ```

- to list volumes in docker

  ```bash
    docker volume ls
  ```

- passing volumes to the container

  ```bash
    docker run -p 80:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumes
  ```
