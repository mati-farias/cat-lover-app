import axios from 'axios';

export default async function handler(req, res) {
  const { breedId } = req.query;
  const response = await axios.get(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedId}`
  );
  res.status(200).json(response.data);
}
