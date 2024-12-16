"use client";
// NOTE I do not want to use client here if it's just going to be a static page. Client would only make sense if it was more of a "pop-up" experience we wanted to give the user.

import { useSingleBand } from "@/lib/hooks/useSingleBand";
import { useParams } from "next/navigation";
useParams;

export default function TestPage() {
  const { slug } = useParams();

  const { data: singleBand, isLoading, isError } = useSingleBand(slug); // pass the `slug` to the hook

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry, an error occurred</div>;

  return (
    <div className="py-24">
      <h1>Testing Fetching Single Band</h1>

      <div>
        <h2>{singleBand.name}</h2>
      </div>

      <ul></ul>
    </div>
  );
}
