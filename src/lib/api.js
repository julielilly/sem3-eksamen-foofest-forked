const url = process.env.NEXT_PUBLIC_API_URL; // data bliver inhentet fra .env.local

const headerList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  //   Prefer: "return=representation", // giver fejl på fetch fra local server
};

// // GET
// fetch bands
export async function getBands() {
  const response = await fetch(`${url}bands`, {
    method: "GET",
    headers: headerList,
  });

  const data = await response.json();
  return data;
}

// fetch single band by slug
export async function getSingleBand(slug) {
  const response = await fetch(`${url}bands/${slug}`, {
    method: "GET",
    headers: headerList,
  });

  let data = await response.json();
  return data;
}

// GET available spots
export async function getAvailableSpots() {
  const response = await fetch(`${url}available-spots`, {
    method: "GET",
    headers: headerList,
  });

  const data = await response.json();
  return data;
}

// PUT - reserve spots
export async function reserveSpot(reservationData) {
  const response = await fetch(`${url}reserve-spot`, {
    method: "PUT",
    headers: headerList,
    body: JSON.stringify(reservationData),
  });

  // Check if the response status is OK (status 200)
  if (!response.ok) {
    throw new Error("Failed to reserve spot");
  }

  // Parse the response as JSON
  const data = await response.json();

  // If the response contains the message "Reserved", handle it as success
  if (data.message === "Reserved") {
    return data; // Return the response data with the "Reserved" message
  } else {
    throw new Error(data.message || "Unknown error occurred during reservation");
  }
}

// POST - fullfill the reservation
export async function fullfillReservation(subdata) {
  const response = await fetch(`${url}fullfill-reservation`, {
    method: "POST",
    headers: headerList,
    body: JSON.stringify(subdata),
  });

  const data = await response.json();

  return data;
}
