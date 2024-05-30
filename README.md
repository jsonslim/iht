# User Service App

A Node.js app for showing and storing users from API. 

## Description

The app consists of three parts: `MainApp` `Microservice` and `Postgres` instance running in Docker containers. 

The `MainApp` serves the frontend and DB, while the `Microservice` handles API requests.

## Prerequisites

Ubuntu with Docker installed.

## Setup and run
The easiest setup can be done by running commands:

* Run the command from the root folder:
   
    ```
    cd ./deploy docker-compose up --build
    ```


The command pulls 3 containers from the docker hub and runs it. 

After the build is done, the API endpoint will be exposed on `localhost:3000`. 

Open the `index.html` from the root folder, and it will show the page with the UI.

