export async function POST(requst: Request) {
  const body = await requst.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/reset-password-request`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    }
  );
}
