import { StructurerWorkBenchLabelerProps } from "@/types";
import CategorySelector from "./CategorySelector";
import { useState } from "react";
import { resourceOptions } from "@/utils/constants";
import { defaultFocusResources } from "@/utils/constants";
import InputSelection from "./InputSelection";
import DisplayCategoriesBasic from "./DisplayCategoriesBasic";
import { useStore } from "@/stores/useStore";
import { PuffLoader } from "react-spinners";

const StructurerWorkBenchLabeler = (props: StructurerWorkBenchLabelerProps) => {
  const { mode, text, setMode, setText, llmResponse, setLlmResponse } = props;
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    defaultFocusResources.map((option) => option.value)
  );
  const [isLoading, setIslLoading] = useState<boolean>(false);

  const handleSelectCategory = (category: string) => {
    setSelectedCategories([...selectedCategories, category]);
  };
  const { activeAPIKey } = useStore((state) => {
    return {
      activeAPIKey: state.activeAPIKey,
    };
  });

  const handleLLMLabel = async () => {
    if (!activeAPIKey) {
      return;
    }
    try {
      setIslLoading(true);
      const response = await fetch(
        "http://localhost:8000/fhirchain/bundleOutlineV2/",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: text,
            focus_resources: selectedCategories,
            api_key: activeAPIKey,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIslLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <CategorySelector
        InputComponent={InputSelection}
        DisplayComponent={DisplayCategoriesBasic}
        placeholder="Select a resource"
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        onSelectCategory={handleSelectCategory}
        focusedCategory=""
        setFocusedCategory={() => {}}
        fetchCategories={() =>
          Promise.resolve(resourceOptions.map((option) => option.value))
        }
      />
      <button
        className={`${
          isLoading ? "bg-gray-500" : "bg-blue-500"
        } rounded-md transform hover:scale-y-105 flex flex-row gap-2 p-2 justify-center items-center`}
        disabled={isLoading}
        onClick={async () => await handleLLMLabel()}
      >
        {isLoading ? "Loading" : "LLM Label!"}
        {isLoading && <PuffLoader size={20} />}
      </button>
    </div>
  );
};

export default StructurerWorkBenchLabeler;