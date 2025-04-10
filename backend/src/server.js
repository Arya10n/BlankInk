import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './lib/db.js';
import authRoutes from './routes/auth.route.js';
import postRouter from './routes/post.route.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors(process.env.CLIENT_URL));
console.log(process.env.CLIENT_URL);
app.use(express.json());
app.use(cookieParser());

// app.use('/users', userRouter);
app.use('/posts', postRouter);
// app.use('/comments', commentRouter);
app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || 'Something went wrong!',
    status: error.status,
    stack: error.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
