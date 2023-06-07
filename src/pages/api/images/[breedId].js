import axios from 'axios';

export default async function handler(req, res) {
  const {
    query: { breedId },
  } = req;

  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=10`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
