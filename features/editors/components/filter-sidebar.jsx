import { 
    ActiveTool, 
    Editor,
    filters,
  } from "@/features/editors/types";
  import { ToolSidebarClose } from "@/features/editors/components/tool-sidebar-close";
  import { ToolSidebarHeader } from "@/features/editors/components/tool-sidebar-header";
  
  import { cn } from "@/lib/util";
  import { ScrollArea } from "@/components/ui/scroll-area";
  import { Button } from "@/components/ui/button";
  
  export const FilterSidebar = ({
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
          activeTool === "filter" ? "visible" : "hidden",
        )}
      >
        <ToolSidebarHeader
          title="Filters"
          description="Apply a filter to selected image"
        />
        <ScrollArea>
          <div className="p-4 space-y-1 border-b">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="secondary"
                size="lg"
                className="w-full h-16 justify-start text-left"
                onClick={() => editor?.changeImageFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </ScrollArea>
        <ToolSidebarClose onClick={onClose} />
      </aside>
    );
  };