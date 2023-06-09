import axios from 'axios';

export default async function handler(req, res) {
  const { id } = req.query;
  const response = await axios.get(`https://api.thecatapi.com/v1/images/${id}`);
  res.status(200).json(response.data);
}
