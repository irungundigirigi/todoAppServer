# Node js, Postgresql todo app server

This is a nodejs server that connects to a Postgresql database to serve as a backend for
a todo app. It demonstrates the following:

1.  Handling incoming requests from the client-side using Nodejs.
2.  Connecting your server to Postgres database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Below steps are needed only for the first time when you setup your dev machine

### Installing

1. Install node.js.
   `npm install nodejs `

1. Clone this git repository, if you haven't done already.

   `git clone https://github.com/irungundigirigi/todoapp-server.git`

1. Install local npm dependencies

   `npm install`

### Install & Setup PostreSQL

1. Refresh your local package index
   `sudo apt update`

2. Install postres package along with the -contrib pacakge that adds some additional utilities and functionality:
   `sudo apt install postgresql postgresql-contrib`

3. Ensure that the server is running using the systemctl start command:
   `sudo systemctl start postgresql.service`

4. Switch over to your postgres account & Access the prompt.
   `sudo -i -u postgres psql`

   To log out of the shell type:  
    `\q`

5. Create a database and a table with the following commands on the prompt:
   `CREATE DATABASE [Database Name];`

`CREATE TABLE todo(todo_id SERIAL PRIMARY KEY,description VARCHAR(255 ))`

6. Create a .env file in the folder and add a variable
   `PASSWORD = [Your postgresql password]`

### Start the server

`npm start`

## Built With

- [Node](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [Express](https://expressjs.com/) - Node.js web application framework
