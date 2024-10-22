import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create a new discussion thread
router.post('/', async (req, res) => {
  const { title, created_by_id, category } = req.body;

  try {
    const thread = await prisma.discussionThread.create({
      data: {
        title,
        created_by: {
          connect: { user_id: created_by_id }, // Connect to the user who created the thread
        },
        category,
      },
    });
    res.status(201).json(thread);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create discussion thread' });
  }
});

// Get all discussion threads
router.get('/', async (req, res) => {
  try {
    const threads = await prisma.discussionThread.findMany({
      include: {
        replies: true, // Include replies in the response
      },
      orderBy: { created_at: 'desc' }, // Sort by creation date, newest first
    });
    res.status(200).json(threads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve discussion threads' });
  }
});

// Get a discussion thread by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const thread = await prisma.discussionThread.findUnique({
      where: { thread_id: parseInt(id) },
      include: {
        replies: true, // Include replies in the response
      },
    });

    if (thread) {
      res.status(200).json(thread);
    } else {
      res.status(404).json({ error: 'Discussion thread not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve discussion thread' });
  }
});

// Update a discussion thread by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, category } = req.body;

  try {
    const thread = await prisma.discussionThread.update({
      where: { thread_id: parseInt(id) },
      data: {
        title,
        category,
      },
    });
    res.status(200).json(thread);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update discussion thread' });
  }
});

// Delete a discussion thread by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.discussionThread.delete({
      where: { thread_id: parseInt(id) },
    });
    res.status(204).json({ message: 'Discussion thread deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete discussion thread' });
  }
});

export default router;
