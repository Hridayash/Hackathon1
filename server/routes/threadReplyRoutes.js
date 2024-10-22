import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create a new thread reply
router.post('/', async (req, res) => {
  const { thread_id, user_id, content, is_anonymous } = req.body;

  try {
    const reply = await prisma.threadReply.create({
      data: {
        thread: {
          connect: { thread_id },  // Connect to the DiscussionThread using its ID
        },
        user: {
          connect: { user_id },     // Connect to the User using its ID
        },
        content,
        is_anonymous,
      },
    });
    res.status(201).json(reply);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create thread reply' });
  }
});

// Get all replies for a specific thread
router.get('/thread/:threadId', async (req, res) => {
  const { threadId } = req.params;

  try {
    const replies = await prisma.threadReply.findMany({
      where: { thread_id: parseInt(threadId) },
    });
    res.status(200).json(replies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve replies' });
  }
});

// Get a reply by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const reply = await prisma.threadReply.findUnique({
      where: { reply_id: parseInt(id) },
    });

    if (reply) {
      res.status(200).json(reply);
    } else {
      res.status(404).json({ error: 'Reply not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve reply' });
  }
});

// Update a reply by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { content, is_anonymous } = req.body; // You can add other fields to update as needed

  try {
    const reply = await prisma.threadReply.update({
      where: { reply_id: parseInt(id) },
      data: {
        content,
        is_anonymous,
      },
    });
    res.status(200).json(reply);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update reply' });
  }
});

// Delete a reply by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.threadReply.delete({
      where: { reply_id: parseInt(id) },
    });
    res.status(204).json({ message: 'Reply deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete reply' });
  }
});

export default router;
