import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image mockup" />
          </div>
        ))}
      </div>
    </main>
  );
}
