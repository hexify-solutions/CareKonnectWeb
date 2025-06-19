import api from "@/http/api"

// interface VerificationResponse {
//     verificationUrl: string;
// }

export const handleSocialLogin = async (provider: string) => {
  try {
    const redirectUri = `${window.location.origin}/auth/callback/${provider}`
    const response = await api.get<{ data: { url: string } }>(
      `auth/oauth/${provider}?redirectUrl=${encodeURIComponent(redirectUri)}`
    )

    // if (response.data?.verificationUrl) {
    //     window.location.href = response.data.verificationUrl;
    // }
    if (response.data.url) {
      window.location.href = response.data.url
    } else {
      console.error("Error: No URL received from backend")
    }
  } catch (error) {
    console.error("Error getting verification URL:", error)
  }
}
