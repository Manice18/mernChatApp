# Shardings Meet (ReactJS Development internship) Assessment
## MERN Chat Web App
- This is a realtime chat app build with the famous MERN stack.
- Realtime feature has been implemented by the usage of Websockets.
- Websockets have been integrated by the use of socket.io in the NodeJS server and socket.io-client in the ReactApp .
- A rich text editor has been made manually for users to chat with each other, that has features like:
  - bold, italics, strikethrough
  - hyperlink
  - bullet orderedlist
  - numbered orderedlist
  - code snippet, code block
  - file upload.
  - emoji

## How to use:
1. clone the give directory by using ```git clone https://github.com/Manice18/mernChatApp.git```
2. fireup 2 terminal windows and use the command  ```cd server``` in one and ```cd client``` on the other.
3. now use the command ```npm i``` on both the terminals (This will install all the necessary dependencies required to run the application).
4. now inside your server directory create a ".env" file
5 inside the ".env" file add the following:
  - DB_URI= (Create a database in the MongoDB Atlas and grab the url for connecting to the database and put it here)
  - JWT_PRIVATE_KEY= (generate your own json web token private key)
  - BASE_URL=http://localhost:5173
6. make sure your have nodemon installed as a global npm package.
7. now just use the command ```npm start``` in from the server terminal and ```npm run dev``` from the client terminal.
8. now your are good to go !

## Deploying the Web app: I'll show about how to deploy using vercel(for frontend) and render(for backend)
1. In your Github account make 2 repositories, one for the backend and the other for the frontend.
2. from the terminal of you frontend, add the files to the fronend directory that your just created on your GitHub account, do the same as well for the backend.
3. Go to render.com where you can host your backend for free, there just add connect your github account and add the backend repo after clicking on "+NEW" and from there select web services.
4. give you service a name and add your environment variables. You will add the BASE_URL after we have deployed our frontend.
5. now just deploy your backend and grab the url.
6. now with the url of the backend, add it inside the index.js file in the Chat folder. (Line no.6)
7. push the changes to your frontend github repo 
8. now in vercel.com connect your github account and connect your frontend github repo to deploy the frontend.
9. now grab the frontend url and add it to the BASE_URL environment variable in your backend service that you crated in you render account.
10. finally you are done with the fully deployed working realtime web app.

## Working Video:

https://github.com/Manice18/mernChatApp/assets/91601706/08b3e8f0-d898-4fee-9300-1b9f45c79aee


