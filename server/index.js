import express from "express"
import cors from "cors"
import dotenv from "dotenv"


import userRouter from "./routes/userController.js"
import profileRoutes from "./routes/profileRoutes.js"
import eventRoutes from './routes/eventRoutes.js';
import rsvpRoutes from './routes/rsvpRoutes.js';
import groupRoutes from './routes/groupRoutes.js';
import groupMemberRoutes from './routes/groupMemberRoutes.js';
import challengeRoutes from './routes/challengeRoutes.js';
import userSubmissionRoutes from './routes/userSubmissionRoutes.js'; 
import notificationRoutes from './routes/notificationRoutes.js';
import discussionThreadRoutes from './routes/discussionThreadRoutes.js'; 
import threadReplyRoutes from './routes/threadReplyRoutes.js'; 
import reportRoutes from './routes/reportRoutes.js';

const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())





app.use('/api', userRouter);
app.use('/api/profiles', profileRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/rsvps', rsvpRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/group-members', groupMemberRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/submissions', userSubmissionRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/discussion-threads', discussionThreadRoutes);
app.use('/api/thread-replies', threadReplyRoutes);
app.use('/api/reports', reportRoutes);




app.listen(3002, ()=>{
    console.log("server is running on port 3002")
})