# Bookkeeper Front-End Project 📚

## Collaborators

- James Emery (GitHub: [J-emery](https://github.com/J-emery))
- Chinika Charles (GitHub: [ChinikaC](https://github.com/ChinikaC))
- Ryder (GitHub: [rrydderr](https://github.com/rrydderr))

<hr />

## Table of Contents
1. Project Description
2. Diagrams
3. Tech Stack
4. Dependencies
5. Setup Instructions
6. Future Developments

<hr />

## 1. Project Description

For our front-end project, we were tasked with creating the client-side for another group's back-end project (an API). We were assigned the bookkeeper API which is a book inspired API, where users could add a book from the main book list (which came with app) to their personal book list. They could also categorise each book into three categories: to read, reading and read. A filter function also allowed users to filter books based on the author, genre and rating. 

Other functionalities included adding a new book and new user, updating a user's personal details, and deleting a user account.

<hr />

## 2. Diagrams

### Wireframe

Our wireframe displays what we originally intended our website to look like. We have the different sections - home, our books, update account details and sign in, and then the 'to-read', 'reading' and 'read' comes under the user account section. In our final product, we decided to not include images of the books for a more sleeker look, however, the rest of the design was almost identical to our finished product.

![Wireframe](images/Wireframe.png)

### Component Diagram

Our component diagram indicates the different sections that we had. This includes our TopContainer, pages and components and how they inherit from one another.

![Component Diagram](images/Component.png)

<hr />

## 3. Tech Stack

The technologies used in this project were:
- JavaScript
- React
- HTML
- CSS
- [The Bookkeeper API](https://github.com/aya-rh/bookkeeper_backend_project)

<hr />

## 4. Dependencies

The depenencies that were used in the API include:
- spring-boot-starter-data-jpa
- spring-boot-starter-web
- spring-boot-devtools
- postgresql
- spring-boot-starter-test

```
<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>
```

<hr />

## 5. Setup Instructions

**Instructions for the API:**<br>
**1. Installation:**<br>
The following will need to be installed onto your device:
- Intellij IDEA , running with JDK 17
- Postgres
- Postman
- Postico

**2. Cloning:**<br>
You will need to clone the API repository onto your device. Navigate back to the API ([click here](https://github.com/aya-rh/bookkeeper_backend_project)) and click on the green 'Code' button at the top of the page. Select SSH and copy the link, or simply copy it from here: `git@github.com:aya-rh/bookkeeper_backend_project.git`. 

Next, open your terminal and type in this command:
`git clone git@github.com:aya-rh/bookkeeper_backend_project.git`

Then press enter and open the file.

**3. PostgreSQL database:**<br>
Create a PostgresSQL database named 'bookkeeper_api' by opening your terminal and typing in the following command:<br>
`createdb bookkeeper_api`

**NOTE:** You can use Postico to check this has been created successfully.

**4. Running the application:**<br>
After opening your cloned bookkeeper_backend_project file in Intellij IDEA, go to the 'BookkeeperBackendProjectApplication' section and press the play button at the top of the file. This will run the API. Also ensure that it is running on port 8080.

**NOTE:** If you would like to check if the endpoints are all working, you can test this in Postman. To view the different endpoints, use this ([link](https://github.com/aya-rh/bookkeeper_backend_project)) and scroll down to the **'RESTful route endpoints' section**.

 <hr />

 **Instructions for the Client-Side:**<br>

 **1. Installation:**<br>
The following will need to be installed onto your device:
- Visual Studio Code

**2. Cloning:**<br>
You will need to clone this repository onto your device. Scroll to the top of this page and click on the green 'Code' button. Select SSH and copy the link, or simply copy it from here: `git@github.com:ChinikaC/FrontEnd_Project_Bookkeeper_App.git`. 

Next, open your terminal and type in this command:
`git clone git@github.com:ChinikaC/FrontEnd_Project_Bookkeeper_App.git`

Then press enter and open the file.

**3. Installation Pt.2:**<br>
Go to your terminal and write the following commands:
- For node modules: `npm install or npm i`

- For react router: `npm install react-router-dom \nnpm install --save styled-components`

- For react stars: `npm install react-rating-stars-component --save`

- For react tippy: `npm install --save react-tippy`

- For react icons: `npm install react -icons`

**4. Running the React application:**<br>
Type the following command into your terminal:
`npm start`

A new page should open in your browser. If you have any difficulty with this, you can type the following into the address bar: `http://localhost:3000`

<hr />

## 6. Future Developments

If we had more time, we would have liked to add the following to our project:
- **Dark mode** - This has already been implemented but not everything on the screen turns dark, so we would have liked to fix this.
- **Accessibility** - Making the website more accessible.
- **Mobile friendly** - Ensuring the site is mobile responsive.
- **Sign-in page** - Replicating an actual sign-in page that is functional.

<hr />

**DISCLAIMER:** All images used in this project were for educational purposes only. No Copyright Infringement Intended.


