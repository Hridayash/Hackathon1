import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create a new group member
router.post('/', async (req, res) => {
  const { group_id, user_id, role } = req.body;

  try {
    const groupMember = await prisma.groupMember.create({
      data: {
        group_id,
        user_id,
        role,
      },
    });
    res.status(201).json(groupMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create group member' });
  }
});

// Get all group members
router.get('/', async (req, res) => {
  try {
    const groupMembers = await prisma.groupMember.findMany();
    res.status(200).json(groupMembers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve group members' });
  }
});

// Get a group member by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const groupMember = await prisma.groupMember.findUnique({
      where: { member_id: parseInt(id) },
    });

    if (groupMember) {
      res.status(200).json(groupMember);
    } else {
      res.status(404).json({ error: 'Group member not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve group member' });
  }
});

// Update a group member by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { group_id, user_id, role } = req.body;

  try {
    const groupMember = await prisma.groupMember.update({
      where: { member_id: parseInt(id) },
      data: {
        group_id,
        user_id,
        role,
      },
    });
    res.status(200).json(groupMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update group member' });
  }
});

// Delete a group member by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.groupMember.delete({
      where: { member_id: parseInt(id) },
    });
    res.status(204).json({ message: 'Group member deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete group member' });
  }
});

export default router;
