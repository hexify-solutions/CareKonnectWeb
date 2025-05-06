"use client";

import api from "@/http/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthCallbackResponse {
    message: string;
    data: {
      firstName: string;
      lastName: string;
      email: string;
      userType: string;
      emailVerified: boolean;
      meta: string;
      id: string;
      userRef: string;
      createdAt: string;
      updatedAt: string;
      token: {
        type: string;
        name: string | null;
        token: string;
        abilities: string[];
        lastUsedAt: string | null;
        expiresAt: string;
      };
    };
}
  

const SocialAuthCallback = ({ params }: { params: { provider: string } }) => {
    const router = useRouter();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (code) {
            api.get<AuthCallbackResponse>(
                `auth/callback/${params.provider}?${urlParams.toString()}`,
                // { params: {code} }   
            )
            .then((response) => {
                console.log("Auth Response:", response.data)

                if (response.data && response.data.token && response.data.token.token) {
                    localStorage.setItem("authToken", response.data.token.token)
                    router.push("/user/dashboard");
                } else {
                    console.error("Authentication failed: No token received");
                    router.push("/onboarding/signin");
                }
            })
            .catch((error) => {
                console.error("Error completing authentication:", error);
                router.push("/onboarding/signin");
            });
        }
    }, [router, params.provider]);

    return <div>Authenticating...</div>;
};

export default SocialAuthCallback;