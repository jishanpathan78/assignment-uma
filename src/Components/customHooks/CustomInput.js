import React from 'react';

const CustomInput = ({ placeholder, className, ...props }) => {
  return (
    <input
      placeholder={placeholder}
      className={`text-neutral-500 text-sm leading-5 whitespace-nowrap self-stretch border border-[color:var(--elements-color-card-border-e-6-e-6-e-6,#E6E6E6)] bg-white mt-1 px-3 py-2 rounded-md border-solid max-md:max-w-full ${className}`}
      {...props}
    />
  );
};

export default CustomInput;
