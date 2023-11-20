import React from "react";
import CustomInput from "./customHooks/CustomInput";
import { InputSection } from "./customHooks/InputSection";
import { CheckboxOption } from "./customHooks/customCheckbox";

const FormSection = ({ title, className , children}) => (
  <div className={`items-stretch flex grow basis-[0%] flex-col ${className}`}>
    <div className="text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap">
      {title}
    </div>
    {children}
  </div>
);

function StepTwoForm({handleNext}) {
  const containerStyles = "items-stretch self-stretch max-md:max-w-full";
  const buttonStyles =
    "text-white text-base cursor-pointer font-medium leading-6 whitespace-nowrap justify-center items-stretch shadow-sm bg-sky-500 aspect-[1.7] mt-24 mb-8 px-4 py-2 rounded-md self-end max-md:mt-10";

  return (
    <div
      className={`border border-color-#E6E6E6 bg-white flex flex-col px-8 border-solid max-md:px-5 ${containerStyles} mt-5`}
    >
      <div className="items-stretch self-stretch flex justify-between gap-2 mt-8 max-md:max-w-full max-md:flex-wrap">
        <div className="text-zinc-900 text-xl leading-7 grow shrink basis-auto">
          Create a job
        </div>
        <div className="text-zinc-900 text-right text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
          Step 2
        </div>
      </div>

      <div className="items-stretch self-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
        <FormSection title="Experience">
          <CustomInput placeholder="Minimum" />
        </FormSection>
        <FormSection title="" className="mt-5">
          <CustomInput placeholder="Maximum" />
        </FormSection>
      </div>

      <div className="items-stretch self-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
        <FormSection title="Salary">
          <CustomInput placeholder="Minimum" />
        </FormSection>
        <FormSection title="" className="mt-5">
          <CustomInput placeholder="Maximum" />
        </FormSection>
      </div>

      <div className="text-neutral-800 text-sm font-medium leading-5 self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
        <InputSection placeholder="ex. 100" label="Total employee" />
      </div>

      <div className="text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-6 self-start">
        Apply type
      </div>

      <div className="justify-center items-stretch flex w-[246px] max-w-full gap-4 mt-3 self-start">
        <CheckboxOption label="Quick apply" />
        <CheckboxOption label="External apply" />
      </div>

      <button className={`${buttonStyles} mt-28 mb-8 self-end max-md:mt-10`} onClick={handleNext}>
        Save
      </button>
    </div>
  );
}

export default StepTwoForm;
