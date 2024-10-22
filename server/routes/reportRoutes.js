import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create a new report
router.post('/', async (req, res) => {
  const { reported_by_id, reported_content_id, content_type, reason, status } = req.body;

  try {
    const report = await prisma.report.create({
      data: {
        reported_by: {
          connect: { user_id: reported_by_id },
        },
        reported_content_id,
        content_type,
        reason,
        status,
      },
    });
    res.status(201).json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create report' });
  }
});

// Get all reports
router.get('/', async (req, res) => {
  try {
    const reports = await prisma.report.findMany();
    res.status(200).json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve reports' });
  }
});

// Get a report by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const report = await prisma.report.findUnique({
      where: { report_id: parseInt(id) },
    });

    if (report) {
      res.status(200).json(report);
    } else {
      res.status(404).json({ error: 'Report not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve report' });
  }
});

// Update a report by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // You can add other fields to update as needed

  try {
    const report = await prisma.report.update({
      where: { report_id: parseInt(id) },
      data: {
        status,
      },
    });
    res.status(200).json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update report' });
  }
});

// Delete a report by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.report.delete({
      where: { report_id: parseInt(id) },
    });
    res.status(204).json({ message: 'Report deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete report' });
  }
});

export default router;
