/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "~/server/db";

// This disables all caching of fetches and always revalidates
export const dynamic = "force-dynamic";
// Dont forget to change Typescript version for this project only (not TS version from VSCODE!)

const mockUrls = [
  "https://vpj0o8x22x.ufs.sh/f/r2ogEo82HpIZFkvfd74DxIQyaG9AMln8XoZbY2L7NB4mgicP",
  "https://vpj0o8x22x.ufs.sh/f/r2ogEo82HpIZPIXELxWevSgHGi3UcWZldQwanz1KT8YL4Fso",
  "https://vpj0o8x22x.ufs.sh/f/r2ogEo82HpIZgV1Jm4KTutOjX29Zo3Da1Kepx7bWyF8skn06",
  "https://vpj0o8x22x.ufs.sh/f/r2ogEo82HpIZDG8gdimoUqKDefTchMJmi3npa7vQXVGPB1wR",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
          <div key={image.id + "-" + idx} className="w-48">
            <img src={image.url} alt="image mockup" />
          </div>
        ))}
      </div>
    </main>
  );
}
