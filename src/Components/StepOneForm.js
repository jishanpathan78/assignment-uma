import React from "react";
import CustomInput from "./customHooks/CustomInput";
import { InputSection } from "./customHooks/InputSection";

export const SectionHeading = ({ text, alignment, style }) => (
  <div className={`text-${alignment || "neutral-800"} text-sm font-medium leading-5 ${style}`}>
    {text}
  </div>
);

const LabelWithAsterisk = ({ text }) => (
  <div className="text-red-400 text-sm font-medium leading-5 self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
    <span className="text-neutral-800">{text}</span>
    <span className="text-red-400">*</span>
  </div>
);



function StepOneForm({handleNext}) {
  const containerStyles = "items-stretch self-stretch max-md:max-w-full";
  const buttonStyles = "text-white text-base cursor-pointer font-medium leading-6 whitespace-nowrap justify-center items-stretch shadow-sm bg-sky-500 aspect-[1.7] mt-24 mb-8 px-4 py-2 rounded-md self-end max-md:mt-10";

  return (
    <div className={`border border-color-#E6E6E6 bg-white flex flex-col px-8 mt-5 border-solid max-md:px-5 ${containerStyles}`}>
      <div className="justify-between items-stretch self-stretch flex gap-5 mt-8 max-md:flex-wrap">
        <SectionHeading text="Create a job" alignment="zinc-900" style="text-xl leading-7" />
        <SectionHeading text="Step 1" alignment="zinc-900" style="text-right text-base font-medium leading-6 self-center" />
      </div>

      <LabelWithAsterisk text="Job title" />
      <CustomInput placeholder="ex. Software Engineer" />

      <LabelWithAsterisk text="Company name" />
      <CustomInput placeholder="ex. Google" />
      <LabelWithAsterisk text="Industry" />
      <CustomInput placeholder="ex. Software" />

      <div className="items-stretch self-stretch flex justify-between gap-5 mt-6 max-md:flex-wrap">
        <InputSection label="Location" placeholder="ex. Chennai" />
        <InputSection label="Remote type" placeholder="ex. In-office" />
      </div>

      <button className={buttonStyles} onClick={handleNext}>Next</button>
    </div>
  );
}

export default StepOneForm;
