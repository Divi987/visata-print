// import { ActiveTool, Editor, STROKE_COLOR } from "@/features/editor/types";
// import { ToolSidebarClose } from "@/features/editor/components/tool-sidebar-close";
// import { ToolSidebarHeader } from "@/features/editor/components/tool-sidebar-header";
// import { ColorPicker } from "@/features/editor/components/color-picker";

import { cn } from "@/lib/util";
import { ToolSidebarHeader } from "./tool-sidebar-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ColorPicker } from "./color-picker";
import { ToolSidebarClose } from "./tool-sidebar-close";
import { STROKE_COLOR } from "../types";

export const StrokeColorSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}) => {
  const value = editor?.getActiveStrokeColor() || STROKE_COLOR;

  const onClose = () => {
    onChangeActiveTool("select");
  };

  const onChange = (value) => {
    editor?.changeStrokeColor(value);
  };

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "stroke-color" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader
        title="Stroke color"
        description="Add stroke color to your element"
      />
      <ScrollArea>
        <div className="p-4 space-y-6">
          <ColorPicker
            value={value}
            onChange={onChange}
          />
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};