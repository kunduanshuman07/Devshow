import User from "../models/users.model.js"

export const devShowNetworkUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        console.log("Success: /v1/network/all-users -> DevShow network users fetched successfully")
        res.status(200).json({ message: "DevShow network users fetched successfully", allUsers });
    } catch (error) {
        console.log("Error: /v1/network/all-users ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const allUserConnections = async (req, res) => {
    const { id } = req.body;
    try {
        const allUsers = await User.find();
        const userConnections = [];
        allUsers.map((user) => {
            if (user.connections.includes(id)) {
                userConnections.push(user);
            }
        });
        console.log("Success: /v1/network/all-user-connections -> All user connections fetched successfully")
        res.status(200).json({ message: "All user connections fetched successfully", userConnections });
    } catch (error) {
        console.log("Error: /v1/network/all-user-connections ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const pendingConnectionRequests = async (req, res) => {
    const { id } = req.body;
    try {
        const allUsers = await User.find();
        const userConnections = [];
        allUsers.map((user) => {
            if (user.requestsSent.includes(id)) {
                userConnections.push(user);
            }
        });
        console.log("Success: /v1/network/connection-requests -> All connection requests fetched successfully")
        res.status(200).json({ message: "All connection requests fetched successfully", userConnections });
    } catch (error) {
        console.log("Error: /v1/network/connection-requests ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const requestedConnections = async (req, res) => {
    const { id } = req.body;
    try {
        const allUsers = await User.find();
        const userConnections = [];
        allUsers.map((user) => {
            if (user.requestsReceived.includes(id)) {
                userConnections.push(user);
            }
        });
        console.log("Success: /v1/network/requested-connections -> All requested connections fetched successfully")
        res.status(200).json({ message: "All requested connections fetched successfully", userConnections });
    } catch (error) {
        console.log("Error: /v1/network/requested-connections ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const sendRequest = async (req, res) => {
    const { id, secondId } = req.body;
    try {
        const userOne = await User.findById(id);
        const userTwo = await User.findById(secondId);
        userOne.requestsSent.push(secondId);
        userTwo.requestsReceived.push(id);
        await userOne.save();
        await userTwo.save();
        console.log("Success: /v1/network/send-request -> Request sent succesfully")
        res.status(200).json({ message: "Request sent succesfully" });
    } catch (error) {
        console.log("Error: /v1/network/send-request ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const declineRequest = async (req, res) => {
    const { id, secondId } = req.body;
    try {
        const userOne = await User.findById(id);
        const userTwo = await User.findById(secondId);
        userOne.requestsReceived = userOne.requestsReceived.filter((userId) => userId !== secondId);
        userTwo.requestsSent = userTwo.requestsSent.filter((userId) => userId !== id);
        await userOne.save();
        await userTwo.save();
        console.log("Success: /v1/network/decline-request -> Request declined succesfully")
        res.status(200).json({ message: "Request declined succesfully" });
    } catch (error) {
        console.log("Error: /v1/network/decline-request ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const acceptRequest = async (req, res) => {
    const { id, secondId } = req.body;
    try {
        const userOne = await User.findById(id);
        const userTwo = await User.findById(secondId);
        userOne.connections.push(secondId);
        userOne.requestsReceived = userOne.requestsReceived.filter((userId) => userId !== secondId);
        userTwo.connections.push(id);
        userTwo.requestsSent = userTwo.requestsSent.filter((userId) => userId !== id);
        await userOne.save();
        await userTwo.save();
        console.log("Success: /v1/network/accept-request -> Request accepted succesfully")
        res.status(200).json({ message: "Request accepted succesfully" });
    } catch (error) {
        console.log("Error: /v1/network/accept-request ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}
