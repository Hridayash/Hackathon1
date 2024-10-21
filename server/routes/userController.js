import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import authenticateToken from '../middleware/auth.js';
dotenv.config();

const prisma = new PrismaClient();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to authenticate JWT tokens


// Signup
router.post('/signup', async (req, res) => {
  
    const { name, email, password, profile_picture, bio, anonymous_mode } = req.body;
  try {
    

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ error: 'Email already in use.' });

    const password_hash = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: { name, email, password_hash, profile_picture, bio, anonymous_mode },
    });

    const token = jwt.sign({ user_id: newUser.user_id, email: newUser.email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to sign up user.' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: 'Invalid email or password.' });

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(400).json({ error: 'Invalid email or password.' });

    const token = jwt.sign({ user_id: user.user_id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Login successful!', token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login user.' });
  }
});

// Get All Users (Authenticated)
router.get('/users', authenticateToken, async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: { profile: true, events: true, group_memberships: true },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users.' });
  }
});

// Get User by ID (Authenticated)
router.get('/users/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { user_id: parseInt(id) },
      include: { profile: true, events: true, group_memberships: true },
    });

    if (!user) return res.status(404).json({ error: 'User not found.' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user.' });
  }
});

// Update User (Authenticated)
router.put('/users/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, email, password, profile_picture, bio, anonymous_mode } = req.body;

  try {
    let data = { name, email, profile_picture, bio, anonymous_mode };
    if (password) data.password_hash = await bcrypt.hash(password, 10);

    const updatedUser = await prisma.user.update({
      where: { user_id: parseInt(id) },
      data,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update user.' });
  }
});

// Delete User (Authenticated)
router.delete('/users/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({ where: { user_id: parseInt(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user.' });
  }
});

export default router;
