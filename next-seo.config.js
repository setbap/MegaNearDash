import names from "lib/utility/names";

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "MegaNearDash",
  titleTemplate: "%s | Business Intelligence Dashboard Near",
  defaultTitle: "MegaNearDash | Business Intelligence Dashboard Near ",
  description:
    "Best Business Intelligence Dashboard Near by MetricsDao, Flipside Crypto and Setbap ",
  canonical: "https://MegaNearDash.vercel.app/",
  openGraph: {
    url: "https://MegaNearDash.vercel.app/",
    title: "MegaNearDash",
    description:
      "Best Business Intelligence Dashboard Near by MetricsDao, Flipside Crypto and Setbap ",
    images: [
      {
        url: `https://${names.SITE_URL}/og.png`,
        alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
      },
    ],
    site_name: "MegaNearDash",
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
