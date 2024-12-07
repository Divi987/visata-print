// import { 
//     ActiveTool, 
//     Editor, 
//     STROKE_DASH_ARRAY, 
//     STROKE_WIDTH
//   } from "@/features/editor/types";
  
  import { cn } from "@/lib/util";
  import { ToolSidebarHeader } from "./tool-sidebar-header";
  import { ToolSidebarClose } from "./tool-sidebar-close";
  import { STROKE_DASH_ARRAY, STROKE_WIDTH } from "../types";
  import { ScrollArea } from "@/components/ui/scroll-area";
  import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
  
  export const StrokeWidthSidebar = ({
    editor,
    activeTool,
    onChangeActiveTool,
  }) => {
    const widthValue = editor?.getActiveStrokeWidth() || STROKE_WIDTH;
    const typeValue = editor?.getActiveStrokeDashArray() || STROKE_DASH_ARRAY;
  
    const onClose = () => {
      onChangeActiveTool("select");
    };
  
    const onChangeStrokeWidth = (value) => {
      editor?.changeStrokeWidth(value);
    };
  
    const onChangeStrokeType = (value) => {
      editor?.changeStrokeDashArray(value);
    }
  
    return (
      <aside
        className={cn(
          "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
          activeTool === "stroke-width" ? "visible" : "hidden",
        )}
      >
        <ToolSidebarHeader
          title="Stroke options"
          description="Modify the stroke of your element"
        />
        <ScrollArea>
          <div className="p-4 space-y-4 border-b">
            <Label className="text-sm">
              Stroke width
            </Label>
            <Slider
              value={[widthValue]}
              onValueChange={(values) => onChangeStrokeWidth(values[0])}
            />
          </div>
          <div className="p-4 space-y-4 border-b">
            <Label className="text-sm">
              Stroke type
            </Label>
            <Button
              onClick={() => onChangeStrokeType(STROKE_DASH_ARRAY)}
              variant={JSON.stringify(typeValue) === JSON.stringify(STROKE_DASH_ARRAY) ? 'secondary' : 'outline'}//"secondary"
              size="lg"
              className={cn(
                "w-full h-16 justify-start text-left",
                JSON.stringify(typeValue) === `[]` && "border-2 border-blue-500"
              )}
              style={{
                padding: "8px 16px"
              }}
            >
              <div className="w-full border-black rounded-full border-4" />
            </Button>
            <Button
              onClick={() => onChangeStrokeType([5, 5])}
              variant={JSON.stringify(typeValue) === JSON.stringify([5, 5]) ? 'secondary' : 'outline'}//"secondary"
              size="lg"
              className={cn(
                "w-full h-16 justify-start text-left",
                JSON.stringify(typeValue) === `[5,5]` && "border-2 border-blue-500"
              )}
              style={{
                padding: "8px 16px"
              }}
            >
              <div className="w-full border-black rounded-full border-4 border-dashed" />
            </Button>
          </div>
        </ScrollArea>
        <ToolSidebarClose onClick={onClose} />
      </aside>
    );
  };