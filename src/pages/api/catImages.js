import axios from 'axios';

export default async (req, res) => {
  try {
    const limit = req.query.limit || 10; // Retrieve the limit parameter from the query string
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}`
    );
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
