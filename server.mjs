import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";

const app = express();
const server = http.Server(app);
const port = 3000;
const host = "localhost";
const io = new Server({
    cors: { origin: "*"}
});

io.attach(server);

//Whenever someone connects this gets executed
io.on('connection', socket => {
   
});


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "index.html"));
});

server.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`);
});