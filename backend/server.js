const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Endpoint to save lead
app.post('/leads', async (req, res) => {
  const { name, email, message } = req.body;
  const { data, error } = await supabase
    .from('leads')
    .insert([{ name, email, message }]);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ data });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server running on port', port);
});
