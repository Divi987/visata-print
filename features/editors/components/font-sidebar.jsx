// import { 
//     ActiveTool, 
//     Editor,
//     fonts, 
//   } from "@/features/editor/types";
  import { ToolSidebarClose } from "@/features/editors/components/tool-sidebar-close";
  import { ToolSidebarHeader } from "@/features/editors/components/tool-sidebar-header";
  
  import { cn } from "@/lib/util";
  import { ScrollArea } from "@/components/ui/scroll-area";
  import { Button } from "@/components/ui/button";
  import { fonts } from "../types";
  
  export const FontSidebar = ({
    editor,
    activeTool,
    onChangeActiveTool,
  }) => {
    const fontFamily = editor?.getActiveFontFamily();
  
    const onClose = () => {
      onChangeActiveTool("select");
    };
  
    return (
      <aside
        className={cn(
          "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
          activeTool === "font" ? "visible" : "hidden",
        )}
      >
        <ToolSidebarHeader
          title="Font"
          description="Change the text font"
        />  
        <ScrollArea>
          <div className="p-4 space-y-1 border-b">
            {fonts.map((font) => (
              <Button
                key={font}
                variant={fontFamily === font ? 'secondary' : 'outline'} //"secondary"
                size="lg"
                className={cn(
                  "w-full h-16 justify-start text-left", 
                  // value === font && "border-2 border-blue-500",
                )}
                style={{
                  fontFamily: font,
                  fontSize: "16px",
                  padding: "8px 16px"
                }}
                onClick={() => editor?.changeFontFamily(font)}
              >
                {font}
              </Button>
            ))}
          </div>
        </ScrollArea>
        <ToolSidebarClose onClick={onClose} />
      </aside>
    );
  };