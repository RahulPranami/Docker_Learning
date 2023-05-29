# Manage Data & Working With Volumes

- to build an image from dockerfile

  ```bash
    docker build -t feedback-node .
  ```

- to run a container from an image

  ```bash
    docker run -p 80:80 --name feedback-app --rm feedback-node
  ```
