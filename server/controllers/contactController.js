import Message from "../models/Message.js";

export const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
    const saved = await Message.create({ name, email, message });
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong saving your message." });
  }
};