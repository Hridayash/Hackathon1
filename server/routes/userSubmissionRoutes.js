import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create a new user submission
router.post('/', async (req, res) => {
  const { challenge_id, user_id, content, photo_url } = req.body;

  try {
    const submission = await prisma.userSubmission.create({
      data: {
        challenge: {
          connect: { challenge_id }, // connect to existing challenge
        },
        user: {
          connect: { user_id }, // connect to existing user
        },
        content,
        photo_url,
      },
    });
    res.status(201).json(submission);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create submission' });
  }
});

// Get all user submissions
router.get('/', async (req, res) => {
  try {
    const submissions = await prisma.userSubmission.findMany({
      include: {
        challenge: true, // Include challenge details
        user: true,      // Include user details
      },
    });
    res.status(200).json(submissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve submissions' });
  }
});

// Get a user submission by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const submission = await prisma.userSubmission.findUnique({
      where: { submission_id: parseInt(id) },
      include: {
        challenge: true, // Include challenge details
        user: true,      // Include user details
      },
    });

    if (submission) {
      res.status(200).json(submission);
    } else {
      res.status(404).json({ error: 'Submission not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve submission' });
  }
});

// Update a user submission by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { content, photo_url } = req.body;

  try {
    const submission = await prisma.userSubmission.update({
      where: { submission_id: parseInt(id) },
      data: {
        content,
        photo_url,
      },
    });
    res.status(200).json(submission);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update submission' });
  }
});

// Delete a user submission by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.userSubmission.delete({
      where: { submission_id: parseInt(id) },
    });
    res.status(204).json({ message: 'Submission deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete submission' });
  }
});

export default router;
