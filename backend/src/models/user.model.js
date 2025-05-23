import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    savedPosts: {
      type: [String],
      default: [],
    },
    verificationToken: String,
    verificationTokenExpiredAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
