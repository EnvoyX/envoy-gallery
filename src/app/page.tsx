/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

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

const Images = async () => {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={`${image.name}`}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
      {/* {[...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
      <div key={image.id + "-" + idx} className="w-48">
        <img src={image.url} alt="image mockup" />
      </div>
    ))} */}
    </div>
  );
};

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in on above
        </div>
      </SignedOut>
      <SignedIn>
        <Images></Images>
      </SignedIn>
    </main>
  );
}
