# User Service App

A Node.js app for showing and storing users from API. 

## Description

The app consists of three parts: `MainApp` `Microservice` and `Postgres` instance running in Docker containers. 

The `MainApp` serves the frontend and DB, while the `Microservice` handles API requests.

![Screenshot from 2024-05-30 16-36-20](https://github.com/jsonslim/iht/assets/20793480/34d10556-78fd-41a4-bc51-9e3b655d89b8)


## Prerequisites

`Ubuntu` with `Docker` installed.

## Setup and run
The easiest way is running the command from the root folder:

   
    ```
    cd ./deploy docker-compose up --build
    ```


The command pulls the three containers from the docker hub and runs it. 

After the build is done, the API endpoint will be exposed on `localhost:3000`. 

Open the `index.html` from the root folder, and it will show the page with the UI.

