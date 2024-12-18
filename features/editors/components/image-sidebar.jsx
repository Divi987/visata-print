import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, Loader2, Upload } from "lucide-react";

// import { ActiveTool, Editor } from "@/features/editor/types";
import { ToolSidebarClose } from "@/features/editors/components/tool-sidebar-close";
import { ToolSidebarHeader } from "@/features/editors/components/tool-sidebar-header";

import { useGetImages } from "@/features/images/api/use-get-images";

import { cn } from "@/lib/util";
// import { UploadButton } from "@/lib/uploadthing";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";

export const ImageSidebar = ({ editor, activeTool, onChangeActiveTool }) => {
  const pathname = usePathname().slice(8);
  const { datas, isLoading, isError } = useGetImages(pathname);
  const data = [{
    image: {
     url: "/images/logo-lg.png"
    } 

  }]

  const onClose = () => {
    onChangeActiveTool("select");
  };

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "images" ? "visible" : "hidden"
      )}
    >
      <ToolSidebarHeader title="Images" description="Add images to your canvas" />
      <div className="p-4 border-b">
        {/* <UploadButton
          appearance={{
            button: "w-full text-sm font-medium",
            allowedContent: "hidden",
          }}
          content={{
            button: "Upload Image",
          }}
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            editor?.addImage(res[0].url);
          }}
        /> */}
      </div>
      {isLoading && (
        <div className="flex items-center justify-center flex-1">
          <Loader2 className="size-4 text-muted-foreground animate-spin" />
        </div>
      )}
      {isError && (
        <div className="flex flex-col gap-y-4 items-center justify-center flex-1">
          <AlertTriangle className="size-4 text-muted-foreground" />
          <p className="text-muted-foreground text-xs">Failed to fetch images</p>
        </div>
      )}
      <ScrollArea>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {data &&
              data.map((image) => {
                return (
                  <button
                    onClick={() =>  editor?.addImage()}//editor?.addImage(image?.image?.url)} image.image.url
                    key={image._id}
                    className="relative w-full h-[100px] group hover:opacity-75 transition bg-muted rounded-sm overflow-hidden border"
                  >
                    <img
                      src={image?.image?.url || image?.image?.url}
                      alt={image.alt_description || "Image"}
                      className="object-cover"
                      loading="lazy"
                    />
                    <Link
                      target="_blank"
                      href={image?.image?.url}
                      className="opacity-0 group-hover:opacity-100 absolute left-0 bottom-0 w-full text-[10px] truncate text-white hover:underline p-1 bg-black/50 text-left"
                    >
                      {image.name}
                    </Link>
                  </button>
                );
              })}
          </div>
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};