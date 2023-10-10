import { forwardRef } from "react";

export const ModelSpinner: React.FC = () => (
  <div className="w-16 h-16 border-t-6 border-white border-solid rounded-full custom-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
);

export const ModelContainer = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children }, ref) => (
  <div
    ref={ref}
    className="relative m-auto mt-[-30px] md:mt-[-60px] lg:mt-[-90px] w-[185.22px] md:w-[317.52px] lg:w-[423.36px] h-[185.22px] md:h-[317.52px] lg:h-[423.36px]"
  >
    {children}
  </div>
));

export default function Loader() {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  );
}
