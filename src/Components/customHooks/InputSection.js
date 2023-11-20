import { SectionHeading } from "../StepOneForm";
import CustomInput from "./CustomInput";

export const InputSection = ({ label, placeholder }) => (
    <div className="items-stretch flex grow basis-[0%] flex-col">
      <SectionHeading text={label} style="whitespace-nowrap" />
      <CustomInput placeholder={placeholder} />
    </div>
  );