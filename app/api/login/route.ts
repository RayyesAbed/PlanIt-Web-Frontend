export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    }
  );

  return new Response(await response.text(), {
    status: response.status,
    headers: response.headers, // <-- forwards Set-Cookie
  });
}
