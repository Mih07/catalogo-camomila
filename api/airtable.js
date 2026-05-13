module.exports = async (req, res) => {
  const { tabela } = req.query;
  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
  const BASE_ID = 'appLjEcnveJBepp0D';

  const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(tabela)}`, {
    headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` }
  });
  
  const data = await response.json();
  res.status(200).json(data);
};