// import { ActiveTool, Editor, FILL_COLOR } from "@/features/editor/types";
// import { ColorPicker } from "@/features/editor/components/color-picker";

import { cn } from "@/lib/util";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ToolSidebarHeader } from "./tool-sidebar-header";
import { ToolSidebarClose } from "./tool-sidebar-close";
import { ColorPicker } from "./color-picker";
import { FILL_COLOR } from "../types";


export const FillColorSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}) => {
  // const value = editor?.getActiveFillColor() || FILL_COLOR;
  const color = editor?.getActiveFillColor() || FILL_COLOR;
  // const color = editor?.fillColor || FILL_COLOR;


  const onClose = () => {
    onChangeActiveTool("select");
  };

  const onChange = (color) => {
    // editor?.changeFillColor(value);
    editor?.changeFillColor(color)
  };

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "fill" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader
        title="Fill color"
        description="Add fill color to your element"
      />
      <ScrollArea>
        <div className="p-4 space-y-6">
          <ColorPicker
            // value={value}
            value={color}
            onChange={onChange}
          />
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};