# Makefile

# Variables
IMAGE_NAME = gestao_estoque
CONTAINER_NAME = gestao_estoque_container
PORT = 3000

# Build the Docker image
build:
	docker build -t $(IMAGE_NAME) .

# Run the Docker container
run: build
	docker run -d -p $(PORT):$(PORT) --name $(CONTAINER_NAME) $(IMAGE_NAME)

# Stop the Docker container
stop:
	docker stop $(CONTAINER_NAME)

# Remove the Docker container
rm: stop
	docker rm $(CONTAINER_NAME)

# Clean up Docker images
clean: rm
	docker rmi $(IMAGE_NAME)

# Default target
default: run