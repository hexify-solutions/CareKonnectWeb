import { isFeatureEnabled } from "@hexify/atoms/src/theme/feature"
import getBranding from "@hexify/atoms/src/theme/getBranding"

export default function () {
  const help = isFeatureEnabled("help_center")
  const content = getBranding()?.content
  const urls = getBranding()?.urls
  return {
    logo: "/",
    linkGroup: [
      {
        label: "Navigation",
        links: [
          {
            label: "Home",
            path: "/",
            type: "internal",
            style: "link",
          },
          {
            label: "About",
            path: "/about",
            type: "internal",
            style: "link",
          },
        ],
      },
      help && {
        label: "Support Us",
        links: [
          {
            label: "FAQ'S",
            path: "/faqs",
            type: "internal",
            style: "link",
          },
          {
            label: "Contact Us",
            path: "/contact",
            type: "internal",
            style: "link",
          },
          {
            label: "Support Center",
            path: "/support",
            type: "internal",
            style: "link",
          },
        ],
      },
      {
        label: "Contact Us",
        links: [
          {
            label: urls?.helpCenterEmail || "help@carekonnect.com",
            path: "",
            type: "email",
            style: "link",
          },
          {
            label: urls?.helpCenterPhone || "+91-80-65652545",
            path: "",
            type: "phone",
            weight: "bold",
            style: "link",
          },
          help && {
            label: "Help Center",
            path: "/support",
            type: "internal",
            style: "button",
          },
        ],
      },
    ],
    socialLinks: [
      urls?.twitter && {
        iconPath: "twitter",
        path: "https://x.com/i/trends",
        type: "external",
        variant: "boarded",
        style: "link",
      },
      urls?.facebook && {
        iconPath: "facebook",
        path: "https://www.facebook.com/",
        type: "external",
        variant: "rounded",
        style: "link",
      },
      urls?.linkedin && {
        iconPath: "linkedin",
        path: "https://www.linkedin.com/",
        type: "external",
        style: "link",
      },
      urls?.youtube && {
        iconPath: "youtube",
        path: "https://www.youtube.com/",
        type: "external",
        style: "link",
      },
    ],
    copyright: `© ${content?.poweredByText}, ${new Date().getFullYear()}. All Right Reserved.`,
    terms: "Terms & Conditions,  Privacy Policy, Cookies Policy, Sitemap.",
  }
}
