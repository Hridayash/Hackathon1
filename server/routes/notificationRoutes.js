import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create a new notification
router.post('/', async (req, res) => {
  const { user_id, content } = req.body;

  try {
    const notification = await prisma.notification.create({
      data: {
        user: {
          connect: { user_id }, // Connect to the user who will receive the notification
        },
        content,
      },
    });
    res.status(201).json(notification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create notification' });
  }
});

// Get all notifications for a user
router.get('/:user_id', async (req, res) => {
  const { user_id } = req.params;

  try {
    const notifications = await prisma.notification.findMany({
      where: { user_id: parseInt(user_id) },
      orderBy: { created_at: 'desc' }, // Sort by creation date, newest first
    });
    res.status(200).json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve notifications' });
  }
});

// Mark a notification as read
router.put('/:id/read', async (req, res) => {
  const { id } = req.params;

  try {
    const notification = await prisma.notification.update({
      where: { notification_id: parseInt(id) },
      data: { is_read: true },
    });
    res.status(200).json(notification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to mark notification as read' });
  }
});

// Delete a notification by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.notification.delete({
      where: { notification_id: parseInt(id) },
    });
    res.status(204).json({ message: 'Notification deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete notification' });
  }
});

export default router;
