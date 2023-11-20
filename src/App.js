import React, { useState } from "react";
import StepOneForm from "./Components/StepOneForm";
import StepTwoForm from "./Components/StepTwoForm";
import SavedForm from "./Components/SavedEntry";
import { jobData } from "./data/jobData";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const renderSavedForms = () => {
    const savedForms = jobData.map((data, index) => (
      <SavedForm key={index} jobData={data} />
    ));

    return <div className="flex justify-center items-center gap-4 flex-wrap mt-4">{savedForms}</div>;
  };

  return (
    <div className="flex w-full items-center justify-center mt-20">
      {currentStep === 1 && <StepOneForm handleNext={handleNext} />}
      {currentStep === 2 && <StepTwoForm handleNext={handleNext} />}
      {currentStep === 3 && renderSavedForms()}
    </div>
  );
}
