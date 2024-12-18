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
  console.log("subdata being sent:", subdata);
  console.log(JSON.stringify(subdata));

  const response = await fetch(endpoint, {
    method: "POST",
    headers: headerList,
    body: JSON.stringify(subdata),
  });

  console.log(subdata);

  const data = await response.json();

  console.log(data);
  return data;
}
