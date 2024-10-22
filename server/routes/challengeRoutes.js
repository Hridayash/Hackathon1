import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create a new challenge
router.post('/', async (req, res) => {
  const { name, description, start_date, end_date } = req.body;

  try {
    const challenge = await prisma.challenge.create({
      data: {
        name,
        description,
        start_date,
        end_date,
      },
    });
    res.status(201).json(challenge);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create challenge' });
  }
});

// Get all challenges
router.get('/', async (req, res) => {
  try {
    const challenges = await prisma.challenge.findMany();
    res.status(200).json(challenges);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve challenges' });
  }
});

// Get a challenge by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const challenge = await prisma.challenge.findUnique({
      where: { challenge_id: parseInt(id) },
    });

    if (challenge) {
      res.status(200).json(challenge);
    } else {
      res.status(404).json({ error: 'Challenge not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve challenge' });
  }
});

// Update a challenge by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, start_date, end_date } = req.body;

  try {
    const challenge = await prisma.challenge.update({
      where: { challenge_id: parseInt(id) },
      data: {
        name,
        description,
        start_date,
        end_date,
      },
    });
    res.status(200).json(challenge);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update challenge' });
  }
});

// Delete a challenge by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.challenge.delete({
      where: { challenge_id: parseInt(id) },
    });
    res.status(204).json({ message: 'Challenge deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete challenge' });
  }
});

export default router;
