import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables

const router = express.Router();
const prisma = new PrismaClient();

// 1. Create a New Event
router.post('/', async (req, res) => {
  const { name, description, location, start_time, end_time, category, organizer_id } = req.body;

  try {
    const event = await prisma.event.create({
      data: {
        name,
        description,
        location,
        start_time: new Date(start_time),
        end_time: new Date(end_time),
        category,
        organizer_id,
      },
    });
    res.status(201).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

// 2. Get All Events
router.get('/', async (req, res) => {
  try {
    const events = await prisma.event.findMany();
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve events' });
  }
});

// 3. Get an Event by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const event = await prisma.event.findUnique({
      where: { event_id: parseInt(id) },
    });

    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve event' });
  }
});

// 4. Update an Event by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, location, start_time, end_time, category, organizer_id } = req.body;

  try {
    const event = await prisma.event.update({
      where: { event_id: parseInt(id) },
      data: {
        name,
        description,
        location,
        start_time: new Date(start_time),
        end_time: new Date(end_time),
        category,
        organizer_id,
      },
    });
    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update event' });
  }
});

// 5. Delete an Event by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.event.delete({
      where: { event_id: parseInt(id) },
    });
    res.status(204).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete event' });
  }
});

export default router;
