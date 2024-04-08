README file

# Home Page
![Screenshot 2024-04-07 223507](https://github.com/roushanku/Tech_Wizard_Intern_Assign/assets/121100409/6c2cb959-d5e5-4789-bea3-53010b892f93)
# list of produts availbe
![Screenshot 2024-04-07 223432](https://github.com/roushanku/Tech_Wizard_Intern_Assign/assets/121100409/52263094-bfc2-4e6b-890f-394543ee655a)
![Screenshot 2024-04-07 223407](https://github.com/roushanku/Tech_Wizard_Intern_Assign/assets/121100409/bd303ac2-8afd-463e-97ad-4dbe8f4e948c)

This repository contains a MERN (MongoDB, Express.js, React.js, Node.js)
stack project.

## Installation:
Installation Before running the project, ensure you have the following
prerequisites installed on your system:

Node.js: Make sure Node.js is installed. You can download it from
https://nodejs.org/. MongoDB: Install MongoDB and make sure it\'s
running locally or you have access to a MongoDB instance. You can
download MongoDB from https://www.mongodb.com/. After ensuring you have
the prerequisites, follow these steps to install the project:

Clone the repository to your local machine: bash Copy code git clone
\<repository-url\>

Navigate into the project directory: bash Copy code cd
\<project-folder\>

Install dependencies for both the client and server: bash Copy code cd
frontend npm install cd .. cd backend npm install cd ..

# Running the code
Running the Project Once you have installed the dependencies, you can
run the project. Follow these steps:

Start the server:

cd backend npm start This will start the Node.js server, and it will be
listening for requests on port 5000 by default.

Start the client: cd frontend npm start This will start the React
development server, and it should open a new browser window/tab with the
application running on http://localhost:3000

## Note..
Additional Information Make sure to set up your MongoDB connection
string in the server\'s configuration file (server/config/default.json).
You may need to adjust CORS settings if you\'re facing CORS-related
issues. This can be done in the server code (usually in server.js or
middleware).

# Feature exlpained
Home page contains two button : 1) add products , 2)QR scanner 1) on
clciking add product button a form will open fill the necessary
information and save and click on \"city fasion icon\" on top left
corner to see the all listed products. 2) click on QR scanner , it will
ask for camera access , after that scan the QR code it will generate
link click on link

Each product card has two button "Show More" -> shows the more details like rating , description and quantity remaining and "Buy products" -> it will ask to enter the quantity you want to buy and pay ask to pay required amount (altough payment console is not added yet)...

There is Search Bar just below two button , You can type the name or
brand of product for Searching\...
