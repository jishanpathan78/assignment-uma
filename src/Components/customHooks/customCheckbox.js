export const CheckboxOption = ({ label }) => (
    <div className="items-stretch flex justify-between gap-1">
      <input
        type="checkbox"
        className=" flex w-4 h-4 rounded-full mt-0.5"
      />
      <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
        {label}
      </div>
    </div>
  );