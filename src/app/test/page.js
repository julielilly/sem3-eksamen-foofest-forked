"use client";
// I do not think it is relevant to use RQ to this sort of function, I just wanted to try it out.

import { useBands } from "@/lib/hooks/useBands";
import Link from "next/link";

export default function TestPage() {
  const { data: bands, isLoading, isError } = useBands();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry, an error occurred</div>;

  return (
    <div>
      <h1>Testing Fetching Bands</h1>
      <div className="py-3"></div>
      <ul>
        {bands.map((band) => (
          <Link key={band.id} href={`/test/${band.slug}`} slug={band.slug}>
            <li>{band.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
