import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables

const router = express.Router();
const prisma = new PrismaClient();

// 1. Create a New Profile
router.post('/', async (req, res) => {
  const { user_id, hobbies, interests, location, friends } = req.body;

  try {
    const profile = await prisma.profile.create({
      data: {
        user_id,
        hobbies,
        interests,
        location,
        friends,
      },
    });
    res.status(201).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create profile' });
  }
});

// 2. Get All Profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await prisma.profile.findMany();
    res.status(200).json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve profiles' });
  }
});

// 3. Get a Profile by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await prisma.profile.findUnique({
      where: { profile_id: parseInt(id) },
    });

    if (profile) {
      res.status(200).json(profile);
    } else {
      res.status(404).json({ error: 'Profile not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve profile' });
  }
});

// 4. Update a Profile by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { hobbies, interests, location, friends } = req.body;

  try {
    const profile = await prisma.profile.update({
      where: { profile_id: parseInt(id) },
      data: {
        hobbies,
        interests,
        location,
        friends,
      },
    });
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

// 5. Delete a Profile by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.profile.delete({
      where: { profile_id: parseInt(id) },
    });
    res.status(204).json({ message: 'Profile deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete profile' });
  }
});

export default router;
