import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import authRouter from './routes/auth.routes';
import userRouter from './routes/user.routes';
import tourRouter from './routes/tour.routes';
import bookingRouter from './routes/booking.routes';
import reviewRouter from './routes/review.routes';
import usersadminRouter from './routes/usersadmin.routes';
import { authenticateJWT } from './auth';


require('dotenv').config() 

const app = express();
const cors = require("cors");
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/auth', authRouter);
app.use('/users', authenticateJWT, userRouter);
app.use('/tours', tourRouter);
app.use('/bookings', authenticateJWT, bookingRouter);
app.use('/reviews', authenticateJWT, reviewRouter);
app.use('/usersadmin', authenticateJWT, usersadminRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
