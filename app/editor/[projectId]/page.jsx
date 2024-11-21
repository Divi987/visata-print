import { Editor } from "@/features/editors/components/editor";
import { useGetProject } from "@/features/projects/api/use-get-project";
import { Loader } from "lucide-react";

export default function EditorProjectIdPage ({ params }) {
    const data = {
        id: 11
    }
    // const { 
    //     data, 
    //     isLoading, 
    //     isError
    //   } = useGetProject(params);
    
    //   if (isLoading || !data) {
    //     return (
    //       <div className="h-full flex flex-col items-center justify-center">
    //         <Loader className="size-6 animate-spin text-muted-foreground" />
    //       </div>
    //     );
    //   }
    
    return <Editor initialData={data} />
}