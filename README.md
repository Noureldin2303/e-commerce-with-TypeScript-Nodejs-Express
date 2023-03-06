# e-commerce backend 🚀



### [![TypeScript](https://skillicons.dev/icons?i=ts)](https://skillicons.dev) [![Nodejs](https://skillicons.dev/icons?i=nodejs)](https://skillicons.dev) [![Express](https://skillicons.dev/icons?i=express)](https://skillicons.dev) [![MongoDB](https://skillicons.dev/icons?i=mongo)](https://skillicons.dev)


## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ yarn install
 
 
## Create a .env file in the root directory and add the following environment variables

    PORT
    MONGOS_CONNECTION_LINK
 
## Running the project

    $ yarn start

## Simple build for production

    $ yarn build
    
    
---


## End points

### Product

|  Method | Endpoint | Description |
|:-:|:-:|:-:|
| GET | / | get all products |
| GET | /:id | get a specific product |
| POST | / | add new product |
| DELETE | /:id | delete product |
| PUT | /:id | update product |


### User

|  Method | Endpoint | Description |
|:-:|:-:|:-:|
| GET | / | get all users |
| GET | /:id | get a specific user |
| POST | /register | create new user |
| POST | /login | authenticate user |
| DELETE | /:id | delete user |
| PUT | /:id | update user |
| PUT | /change-password/:id | change password |

---


## Collections

### User

    name: String,
    email: String,
    password: String
    

### Product

    name:String,
    description: String,
    price: Number,
    colors: Array,
    sizes: Array
   
