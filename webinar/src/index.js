import http from "http";
import { app } from "./app.js";
import {Server as SocketServer} from "socket.io";

const httpServer = http.createServer(app);

const io = new SocketServer(httpServer);

io.on("connection", (socket)=> {
    console.log(socket);
    console.log(socket.id);
});

app.listen(8001, ()=>console.log("Http Server is running on port: 8001"));
io.listen(8002, ()=>console.log("Webinar Socket Server is running on port: 8002"));