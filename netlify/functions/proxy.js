export async function handler(event, context) {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyTUgiuslcVFqG-U5Vd260sPcJYDaGPjMyNPKbV-e-KIhxwtOXU6jtJUS1Ab9ISLY8x/exec",
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

