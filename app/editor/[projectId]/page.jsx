'use client'
import { Button } from "@/components/ui/button";
import { Editor } from "@/features/editors/components/editor";
import { useGetProject } from "@/features/projects/api/use-get-project";
import { Loader } from "lucide-react";
import { usePathname } from "next/navigation";

export default function EditorProjectIdPage ({ params }) {
  const pathname = usePathname();
    // const data = {
    //     id: 11
    // }
    // console.log(pathname, params)
    // const { 
    //     data, 
    //     isLoading, 
    //     isError
    //   } = useGetProject(params.projectId);
    
    //   if (isLoading || !data) {
    //     return (
    //       <div className="h-full flex flex-col items-center justify-center">
    //         <Loader className="size-6 animate-spin text-muted-foreground" />
    //       </div>
    //     );
    //   }

    //   console.log(data);
    
    return  <Editor />

}