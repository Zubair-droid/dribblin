import { domainToASCII } from "url";

const authConfig = {
  providers: [
    {
      // domain: "https://witty-jaybird-7.clerk.accounts.dev/",
      domain: process.env.CLERK_ISSUER_URL,
      applicationID: "convex",
    },
  ],
};

export default authConfig;