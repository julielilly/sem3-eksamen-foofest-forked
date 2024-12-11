import ButtonRounded from "@/components/ButtonRounded";
import ButtonSharpEdge from "@/components/ButtonSharpEdge";
import EXAMPLEFullComp from "@/components/EXAMPLEFullComp";

export default function Home() {
  return (
    <div>
      <p className="font-germania-one text-title">I'm in the main.</p>
      <div className="grid gap-2">
        <ButtonRounded theme="fit">Buy tickets!""!!</ButtonRounded>
        <ButtonSharpEdge theme="black">hej</ButtonSharpEdge>
      </div>
      <EXAMPLEFullComp />
    </div>
  );
}
