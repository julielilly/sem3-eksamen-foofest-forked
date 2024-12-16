const url = process.env.NEXT_PUBLIC_API_URL; // data bliver inhentet fra .env.local

const headerList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  //   Prefer: "return=representation", // giver fejl på fetch fra local server
};

//fetch schedule
export async function getSchedule() {
  const response = await fetch(`${url}schedule`, {
    method: "GET",
    headers: headerList,
  });

  const data = await response.json();
  return data;
}
