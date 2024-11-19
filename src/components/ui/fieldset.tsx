import { ReactNode } from "react";

type FieldsetProps = {
  legend?: string;
  gap?: string;
  children: ReactNode;
};

export default function Fieldset({ legend, gap, children }: FieldsetProps) {
  return (
    <fieldset>
      {legend && (
        <legend className="w-fit text-sm md:text-lg text-blue-gray font-bold">
          {legend}
        </legend>
      )}
      <div
        className={`flex ${gap} mt-2.5 md:mt-4 w-full justify-between items-center`}
      >
        {children}
      </div>
    </fieldset>
  );
}
