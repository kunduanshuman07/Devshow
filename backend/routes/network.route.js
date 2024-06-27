import express from "express"
import { acceptRequest, allUserConnections, declineRequest, devShowNetworkUsers, pendingConnectionRequests, requestedConnections, sendRequest } from "../controllers/network.controller.js";
const router = express.Router();

router.get('/all-users', devShowNetworkUsers);
router.post('/all-user-connections', allUserConnections);
router.post('/connection-requests', pendingConnectionRequests);
router.post('/requested-connections', requestedConnections);
router.post('/send-request', sendRequest);
router.post('/decline-request', declineRequest);
router.post('/accept-request', acceptRequest);

export default router;
