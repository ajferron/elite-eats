import { createClient, ApiKeyStrategy } from "@wix/sdk";
import { contacts } from "@wix/crm";
import { items } from "@wix/data";
import { submissions } from "@wix/forms";

export const wixClient = createClient({
  modules: { contacts, submissions, items },
  auth: ApiKeyStrategy({
    apiKey: process.env.WIX_API_KEY!,
    siteId: process.env.WIX_SITE_ID!,
    accountId: process.env.WIX_ACCOUNT_ID!,
  }),
});
