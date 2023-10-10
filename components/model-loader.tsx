import { forwardRef } from "react";

const ModelSpinner: React.FC = () => (
  <div className="border-t-2 border-gray-800 border-solid rounded-full w-12 h-12 spinner animate-spin"></div>
);

const ModelContainer = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children }, ref) => (
  <div
    ref={ref}
    className="relative m-auto mt-[-30px] w-[250px] h-[250px] md:w-[317.52px] md:h-[317.52px] md:mt-[-60px] lg:w-[423.36px] lg:h-[423.36px] lg:mt-[-90px]"
  >
    {children}
  </div>
));

ModelContainer.displayName = "ModelContainer";

export default function Loader() {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  );
}

export { ModelContainer, ModelSpinner };
