import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface HintProps {
  label: string;
  side?: "top" | "bottom" | "left" | "right"; // options
  align?: "start" | "center" | "end";
  children: React.ReactNode;
  sideOffset?: number;
  alignOffset?: number;
}

export const Hints = ({
  label,
  side,
  align,
  children,
  sideOffset,
  alignOffset,
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className='text-white bg-black border-black'
          side={side}
          align={align}
          alignOffset={alignOffset}
          sideOffset={sideOffset}>
          <p className='font-semibold capitalize'>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
