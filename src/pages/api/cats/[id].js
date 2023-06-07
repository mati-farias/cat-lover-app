import axios from 'axios';

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/breeds/search?q=${id}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
