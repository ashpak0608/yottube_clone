import express from 'express';
import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await prisma.loginUser.findUnique({
    where: { username },
  });

  if (existingUser) {
    return res.status(200).json({ success: false, error: 'Username already present' });
  }

  const newUser = await prisma.loginUser.create({
    data: { username, password },
  });

  res.status(201).json({ message: 'User created successfully', user: newUser });
});

app.listen(3000, () => {
  console.log('Server running at ');
});
