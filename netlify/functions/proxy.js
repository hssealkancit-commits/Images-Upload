export async function handler(event, context) {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxkShoyY80SrdRQNbaokDenLN8KWgE3vc6ZoV6UsXx5aLZsBJlwhHrO6Z782oGZnAx0/exec",
    {
      method: event.httpMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: event.httpMethod === "POST" ? event.body : undefined,
    }
  );

  const data = await response.text();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: data,
  };
}
