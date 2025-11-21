import { readUserConfig } from "../dbService/readUserConfig";

export async function userInfo() {
  const cfg = await readUserConfig();

  return `
# User's Resume - 
${cfg.resumeTextarea}

# User's FAQ
${cfg.faqTextarea}

# Cover Letter
${cfg.coverLetterTextarea}
`;
}
