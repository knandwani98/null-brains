import { cn } from "@/lib/utils";

type ContainerWrapperProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const ContainerWrapper = ({
  children,
  className,
}: ContainerWrapperProps) => {
  return (
    <div className={cn("max-w-md md:max-w-2xl lg:max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};
