import ButtonRounded from "@/components/ButtonRounded";
import ButtonSharpEdge from "@/components/ButtonSharpEdge";
import EXAMPLEFullComp from "@/components/EXAMPLEFullComp";
import FormChooseTicket from "@/components/FormChooseTicket";
import FormReceipt from "@/components/FormReceipt";

export default function Home() {
  return (
    <div>
      <p className="font-skranji  text-title">I'm in the main.</p>
      <div className="grid gap-2">
        <ButtonRounded theme="fit">Buy tickets!""!!</ButtonRounded>
        <ButtonSharpEdge theme="black">hej</ButtonSharpEdge>
      </div>
      <EXAMPLEFullComp />
      <FormReceipt />
      <FormChooseTicket />
    </div>
  );
}
