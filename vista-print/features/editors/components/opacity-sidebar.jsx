import { useEffect, useMemo, useState } from "react";

// import { 
//   ActiveTool, 
//   Editor, 
// } from "@/features/editor/types";

import { cn } from "@/lib/util";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ToolSidebarHeader } from "./tool-sidebar-header";
import { ToolSidebarClose } from "./tool-sidebar-close";

export const OpacitySidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}) => {
  const initialValue = editor?.getActiveOpacity() || 1;
  const selectedObject = useMemo(() => editor?.selectedObjects[0], [editor?.selectedObjects]);

  const [opacity, setOpacity] = useState(initialValue);

  const onClose = () => {
    onChangeActiveTool("select");
  };

  const onChange = (value) => {
    editor?.changeOpacity(value);
    setOpacity(value);
  };
  
  useEffect(() => {
    if (selectedObject) {
      setOpacity(selectedObject.get("opacity") || 1);
    }
  }, [selectedObject]);

  


  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "opacity" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader
        title="Opacity"
        description="Change the opacity of the selected object"
      />
      <ScrollArea>
        <div className="p-4 space-y-4 border-b">
          <Slider
            value={[opacity]}
            onValueChange={(values) => onChange(values[0])}
            max={1}
            min={0}
            step={0.01}
          />
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};