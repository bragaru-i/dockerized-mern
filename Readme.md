Dockerized MERN app with Hot Reloading and nodeJS.

#### To delete all containers including its volumes use, To delete all the images,Remove all unused containers, volumes, networks and images

docker rm -vf $(docker ps -a -q) && docker rmi -f $(docker images -a -q) && docker system prune -a --volumes

# DOCKER ENV variables:

- in docker-compose only .env works, other are omitted.
  details: here => https://github.com/docker/compose/issues/4670
