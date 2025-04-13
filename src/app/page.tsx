/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "~/server/db";

// This disables all caching of fetches and always revalidates
// change Typescript version for this project only (installed within node_modules) not from TS version from vscode!
export const dynamic = "force-dynamic";

// const mockUrls = [
//   "https://vpj0o8x22x.ufs.sh/f/r2ogEo82HpIZFkvfd74DxIQyaG9AMln8XoZbY2L7NB4mgicP",
//   "https://vpj0o8x22x.ufs.sh/f/r2ogEo82HpIZPIXELxWevSgHGi3UcWZldQwanz1KT8YL4Fso",
//   "https://vpj0o8x22x.ufs.sh/f/r2ogEo82HpIZgV1Jm4KTutOjX29Zo3Da1Kepx7bWyF8skn06",
//   "https://vpj0o8x22x.ufs.sh/f/r2ogEo82HpIZDG8gdimoUqKDefTchMJmi3npa7vQXVGPB1wR",
// ];

// const mockImages = mockUrls.map((url, idx) => ({
//   id: idx + 1,
//   url,
// }));

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, idx) => (
          <div key={image.id + "-" + idx} className="flex w-48 flex-col">
            <img src={image.url} alt={`${image.id}`} />
            <div>{image.name}</div>
          </div>
        ))}
        {/* {[...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
          <div key={image.id + "-" + idx} className="w-48">
            <img src={image.url} alt="image mockup" />
          </div>
        ))} */}
      </div>
    </main>
  );
}
