export default async function handler(req, res) {
  try {
    const url = 'https://cqptwzrivcehefpgmtyu.supabase.co/rest/v1/membership_plans?select=id&limit=1';
    const key = 'sb_publishable_JaIED6uJ7UriEa35ftzarw_XX8qx5dN';
    const response = await fetch(url, {
      headers: { apikey: key, Authorization: Bearer ${key} }
    });
    return res.status(200).json({
      ok: true,
      supabase_status: response.status,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
