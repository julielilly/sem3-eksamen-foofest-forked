const endpoint = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const headerList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  apikey: supabaseKey,
  Prefer: "return=representation",
};

// POST - sender formdata til supabase
export async function addTicketData(subdata) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: headerList,
    body: JSON.stringify(subdata),
  });

  const data = await response.json();

  return data;
}
