// frontend/src/pages/api/habits.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const habits = await prisma.habit.findMany()
    res.status(200).json(habits)
  }

  if (req.method === 'POST') {
    const { name, description, duration, level } = req.body
    const newHabit = await prisma.habit.create({
      data: { name, description, duration, level },
    })
    res.status(201).json(newHabit)
  }
}