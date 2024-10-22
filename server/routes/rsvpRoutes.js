import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create a new RSVP
router.post('/', async (req, res) => {
  const { user_id, event_id, status } = req.body;

  try {
    const rsvp = await prisma.rsvp.create({
      data: {
        user_id,
        event_id,
        status,
      },
    });
    res.status(201).json(rsvp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create RSVP' });
  }
});

// Get all RSVPs
router.get('/', async (req, res) => {
  try {
    const rsvps = await prisma.rsvp.findMany();
    res.status(200).json(rsvps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve RSVPs' });
  }
});

// Get an RSVP by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const rsvp = await prisma.rsvp.findUnique({
      where: { rsvp_id: parseInt(id) },
    });

    if (rsvp) {
      res.status(200).json(rsvp);
    } else {
      res.status(404).json({ error: 'RSVP not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve RSVP' });
  }
});

// Update an RSVP by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const rsvp = await prisma.rsvp.update({
      where: { rsvp_id: parseInt(id) },
      data: { status },
    });
    res.status(200).json(rsvp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update RSVP' });
  }
});

// Delete an RSVP by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.rsvp.delete({
      where: { rsvp_id: parseInt(id) },
    });
    res.status(204).json({ message: 'RSVP deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete RSVP' });
  }
});

export default router;
