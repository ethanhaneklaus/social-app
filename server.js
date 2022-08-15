require("dotenv").config();
const userRoutes = require("./server/routes/users.routes");
const repliesRoutes = require("./server/routes/replies.routes");
const commentsRoutes = require("./server/routes/comments.routes")
const passport = require("./server/config/passport.config");
const cookieParser = require("cookie-parser");

const express = require("express");

const app = express();

const PORT = process.env.PORT ?? 8080;

app.use(express.json());

app.use(cookieParser());
app.use(passport.initialize());

app.use(express.static(__dirname + "/build"));


app.use("/api/replies", repliesRoutes);
app.use("/api/users", userRoutes);

app.get("*", (req, res) => {
    return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    socket.on("comment", (comment) => {
        io.emit("comment", comment);
    });
});

app.listen(PORT, () => console.log("Server is up and running!"));