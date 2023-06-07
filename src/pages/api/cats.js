import axios from 'axios';

export default async function handler(req, res) {
  const response = await axios.get(
    'https://api.thecatapi.com/v1/images/search?limit=10'
  );
  res.status(200).json(response.data);
}
