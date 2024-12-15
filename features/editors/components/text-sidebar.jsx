// import { 
//     ActiveTool, 
//     Editor, 
//   } from "@/features/editor/types";
  import { ToolSidebarClose } from "@/features/editors/components/tool-sidebar-close";
  import { ToolSidebarHeader } from "@/features/editors/components/tool-sidebar-header";
  
  import { cn } from "@/lib/util";
  import { ScrollArea } from "@/components/ui/scroll-area";
  import { Button } from "@/components/ui/button";
  
  export const TextSidebar = ({
    editor,
    activeTool,
    onChangeActiveTool,
  }) => {
    const onClose = () => {
      onChangeActiveTool("select");
    };
  
    return (
      <aside
        className={cn(
          "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
          activeTool === "text" ? "visible" : "hidden",
        )}
      >
        <ToolSidebarHeader
          title="Text"
          description="Add text to your canvas"
        />
        <ScrollArea>
          <div className="p-4 space-y-4 border-b">
            <Button
              className="w-full"
              onClick={() => editor?.addText("Textbox")}
            >
              Add a textbox
            </Button>
            <Button
              className="w-full h-16"
              variant="secondary"
              size="lg"
              onClick={() => editor?.addText("Heading", {
                fontSize: 80,
                fontWeight: 700,
              })}
            >
              <span className="text-3xl font-bold">
                Add a heading
              </span>
            </Button>
            <Button
              className="w-full h-16"
              variant="secondary"
              size="lg"
              onClick={() => editor?.addText("Subheading", {
                fontSize: 44,
                fontWeight: 600,
              })}
            >
              <span className="text-xl font-semibold">
                Add a subheading
              </span>
            </Button>
            <Button
              className="w-full h-16"
              variant="secondary"
              size="lg"
              onClick={() => editor?.addText("Paragraph", {
                fontSize: 32,
              })}
            >
              Paragraph
            </Button>
          </div>
        </ScrollArea>
        <ToolSidebarClose onClick={onClose} />
      </aside>
    );
  };