import { getAllProfiles } from "@/server/userdata";

export default async function sitemap() {
  const baseURL = "https://pouzz.xyz";

  const response = await getAllProfiles();

  const profiles = response.map((profile: any) => {
    return {
      url: `${baseURL}/${profile.username}`,
      lastModified: profile.usernameUpdatedAt,
    };
  });
  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/terms`,
      lastModified: new Date(),
    },
    ...profiles,
  ];
}
