// pages/api/saveEntry.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// Path to the JSON file where names will be saved
const filePath = path.join(process.cwd(), 'data', 'entries.json');

// Helper function to read existing entries
const getEntries = () => {
  if (!fs.existsSync(filePath)) return [];
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
};

// API handler function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    // Read existing entries
    const entries = getEntries();

    // Add the new entry
    entries.push({ name, timestamp: new Date().toISOString() });

    // Save the updated entries
    fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));

    res.status(200).json({ message: 'Entry saved successfully' });
  } else if (req.method === 'GET') {
    const entries = getEntries();
    res.status(200).json(entries);
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
