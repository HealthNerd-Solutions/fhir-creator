import { useState } from "react";
import { StructurerModes, Outline, SectionInfo } from "@/types";
import StructurerText from "./StructurerText";
import StructurerWorkBench from "./StructurerWorkBench";
import StructurerOutline from "./StructurerOutline";
import { dummyOutline } from "@/utils/constants";

const StructurerBody = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<StructurerModes>(StructurerModes.inputText);
  const [llmResponse, setLlmResponse] = useState<string>();
  const [outline, setOutline] = useState<SectionInfo[]>([]);

  return (
    <div className="w-full p-4 flex flex-row gap-4">
      <StructurerText
        setMode={setMode}
        setText={setText}
        text={text}
        mode={mode}
        llmResponse={llmResponse}
        setLlmResponse={setLlmResponse}
        outline={outline}
        setOutline={setOutline}
      />
      <StructurerWorkBench
        mode={mode}
        setMode={setMode}
        text={text}
        setText={setText}
        llmResponse={llmResponse}
        setLlmResponse={setLlmResponse}
        outline={outline}
        setOutline={setOutline}
      />
      <StructurerOutline outline={outline} setOutline={setOutline} />
    </div>
  );
};

export default StructurerBody;