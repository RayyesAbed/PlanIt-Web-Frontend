import { redirect } from "next/navigation";
import OAuthProvider from "../_types/OAuthProvider";

const continueWithProvider = (providerType: OAuthProvider) => {
  redirect(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/provider/${providerType}`,
  );
};

export default continueWithProvider;
