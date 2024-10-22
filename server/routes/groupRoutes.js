import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create a new group
router.post('/', async (req, res) => {
  const { name, description, created_by_id } = req.body;

  try {
    const group = await prisma.group.create({
      data: {
        name,
        description,
        created_by_id,
      },
    });
    res.status(201).json(group);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create group' });
  }
});

// Get all groups
router.get('/', async (req, res) => {
  try {
    const groups = await prisma.group.findMany({
      include: { members: true }, // Include members if needed
    });
    res.status(200).json(groups);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve groups' });
  }
});

// Get a group by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const group = await prisma.group.findUnique({
      where: { group_id: parseInt(id) },
      include: { members: true }, // Include members if needed
    });

    if (group) {
      res.status(200).json(group);
    } else {
      res.status(404).json({ error: 'Group not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve group' });
  }
});

// Update a group by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const group = await prisma.group.update({
      where: { group_id: parseInt(id) },
      data: {
        name,
        description,
      },
    });
    res.status(200).json(group);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update group' });
  }
});

// Delete a group by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.group.delete({
      where: { group_id: parseInt(id) },
    });
    res.status(204).json({ message: 'Group deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete group' });
  }
});

export default router;
