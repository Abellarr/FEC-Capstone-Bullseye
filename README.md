# Bullseye.com (Target Clone)

> This repository is from Front-End Capstone (FEC) project that I worked on with Operation LevelUp - Advanced Software Engineering Web Immersive course offered through Galvanize Inc. The project focuses on creating a clone of a product detail page from Target.com, focused on functionality and proper stylization to simulate what the user would experience when visiting a similar Target product page.

Original Page: https://www.target.com/p/nikon-d7500-dx-format-dslr-camera-body-only-black/-/A-84158520

## Table of Contents
  - [General Information](#general-information)
    - [Technologies Used](#technologies-used)
    - [Features](#features)
    - [Screenshots](#screenshots)
    - [Setup](#setup)
    - [Personally Worked On](#Personally-Worked-On)
    - [Current Status](#current-status)
  - [Room For Improvement](#room-for-improvement)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)
  - [License](#license)


## General Information
  > The FEC project for Operation LevelUp consisted of teams of 4 students, with each team selecting a popular website to clone. The purpose of the project was to gain experience and expertise working with React.js to build a single-page application simulating the selected website and sharpen our back-end skills by building a supporting server and database through Express.js and PostgreSQL- while also learning and building experience with the AGILE workflow process utilizing the SCRUM methodology. The entire project was completed over an 11-day period.

  > Our team decided to emulate the Target.com website, using a Nikon camera's product detail page to clone. We began by diagramming our entity relationship diagrams (ERDs) and breaking down a general wireframe to use to figure out what components we needed and where their general placement would be. We then built out our back-end, focusing on getting a working server and database deployed to Render.com. Once the back-end was up and running, we were able to focus on building out our front-end components, using various React hooks and libraries as needed.


## Technologies Used
- Front End: React.js, JavaScript, JSX, HTML5, CSS3, React Star Ratings, Slick, Bootstrap, React Icons
- Back End: Node.js, PostgreSQL, Express.js, Cors
- Deployment/Container: Docker (Docker Desktop and Docker Compose), Render.com


## Features
- Database utilizing PostgreSQL for data storage and management
- Express server with RESTful routes
- Server and database run locally through Docker or remotely through Render.com
- Over 40 React components built to handle website functionality and appearance
- Separate CSS stylesheets for the various groups of components
- Source code/Version control handled through GitLab, following AGILE (SCRUM) Workflow methodology


## Screenshots
> ![ERD Schema](/bullseye/public/table_schema.png)
> ![Bullseye.com Main Page](/bullseye/public/Bullseye-Main-Loading.png)
> ![Bullseye.com Product Carousels](/bullseye/public/Bullseye-Carousels.png)
> ![Bullseye.com Reviews](/bullseye/public/Bullseye-Reviews.png)

## Setup (Local)
- Clone this repository to your local computer
- Run the following commands from the command line of the root project directory:
    - `npm install --prefix bullseye`
    - `npm install --prefix server`
    - `docker compose up`
    - `npm run migrate`
    - `npm run seed`
- 

