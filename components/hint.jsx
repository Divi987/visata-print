import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

  export const Hint = ({
    label,
    children,
    side,
    align,
    sideOffset,
    alignOffset
  }) => {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            {children}
          </TooltipTrigger>
          <TooltipContent
            className="text-white bg-slate-800 border-slate-800"
            side={side}
            align={align}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
          >
            <p className="font-semibold capitalize">
              {label}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };