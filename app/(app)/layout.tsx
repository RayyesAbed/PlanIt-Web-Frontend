import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loginToken = (await cookies()).get("login");

  if (!loginToken) redirect("/login");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `login=${loginToken.value}`,
      },
      body: JSON.stringify({
        query: "query ValidateLogin { getUserData { __typename } }",
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    redirect("/login");
  }

  return children;
}
