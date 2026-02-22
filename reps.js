export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { zip } = req.query;
  if (!zip || zip.length !== 5) return res.status(400).json({ error: 'Invalid ZIP' });
  try {
    const [senRes, repRes] = await Promise.all([
      fetch(`https://whoismyrepresentative.com/getall_sens_byzip.php?zip=${zip}&output=json`),
      fetch(`https://whoismyrepresentative.com/getall_reps_byzip.php?zip=${zip}&output=json`)
    ]);
    const senData = senRes.ok ? await senRes.json() : { results: [] };
    const repData = repRes.ok ? await repRes.json() : { results: [] };
    const senators = (senData.results || []).map(r => ({ name: r.name, party: r.party, phone: r.phone, link: r.link, chamber: 'U.S. Senator' }));
    const reps = (repData.results || []).map(r => ({ name: r.name, party: r.party, phone: r.phone, link: r.link, chamber: 'U.S. Representative' }));
    return res.status(200).json({ senators, reps });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch' });
  }
}
