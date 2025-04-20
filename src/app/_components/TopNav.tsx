"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import SimpleUploadButton from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div className="">
        <Link href={`/`}>Envoy Gallery</Link>
      </div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <div className="rounded-lg border border-white px-2 py-1">
            <SignInButton></SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton></SimpleUploadButton>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
}
