const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});


// Handle socket connections
io.on("connection", (socket) => {
    console.log(`✅ User connected: ${socket.id}`);

    // Add user to connected users map
    connectedUsers.set(socket.id, {
        id: socket.id,
        connectedAt: new Date(),
    });

    // Emit welcome message
    socket.emit("welcome", {
        message: "Welcome to Socket.io Server!",
        socketId: socket.id,
    });

    // Broadcast to all other clients that a new user joined
    socket.broadcast.emit("user-joined", {
        message: `User ${socket.id.substring(0, 8)} joined the chat`,
        timestamp: new Date(),
    });

    // Handle chat messages
    socket.on("chat-message", (data) => {
        console.log(`📨 Message from ${socket.id}:`, data);

        // Broadcast message to all clients including sender
        io.emit("chat-message", {
            id: socket.id,
            username: data.username || "Anonymous",
            message: data.message,
            timestamp: new Date(),
        });
    });

    // Handle joining a room
    socket.on("join-room", (roomName) => {
        socket.join(roomName);
        console.log(`🏠 ${socket.id} joined room: ${roomName}`);

        socket.emit("room-joined", {
            room: roomName,
            message: `You joined room: ${roomName}`,
        });

        // Notify others in the room
        socket.to(roomName).emit("room-notification", {
            message: `User ${socket.id.substring(0, 8)} joined the room`,
        });
    });

    // Handle room-specific messages
    socket.on("room-message", (data) => {
        const { room, message, username } = data;
        console.log(`📬 Room message in ${room} from ${socket.id}`);

        // Emit only to clients in the specified room
        io.to(room).emit("room-message", {
            id: socket.id,
            username: username || "Anonymous",
            message: message,
            room: room,
            timestamp: new Date(),
        });
    });

    // Handle typing indicator
    socket.on("typing", (data) => {
        socket.broadcast.emit("user-typing", {
            id: socket.id,
            username: data.username || "Someone",
            isTyping: data.isTyping,
        });
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log(`❌ User disconnected: ${socket.id}`);

        // Remove user from connected users map
        connectedUsers.delete(socket.id);

        // Notify all clients that a user left
        socket.broadcast.emit("user-left", {
            message: `User ${socket.id.substring(0, 8)} left the chat`,
            timestamp: new Date(),
        });
    });

    // Handle custom event with acknowledgment
    socket.on("get-user-count", (callback) => {
        if (typeof callback === "function") {
            callback({
                success: true,
                userCount: connectedUsers.size,
                message: `Currently ${connectedUsers.size} user(s) connected`,
            });
        }
    });
});

// Basic HTTP route
app.get("/", (req, res) => {
    res.json({
        status: "Server is running",
        message: "Socket.io WebSocket Server",
        connectedUsers: connectedUsers.size,
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 Socket.io server running on port ${PORT}`);
    console.log(`📡 WebSocket endpoint: ws://localhost:${PORT}`);
});
