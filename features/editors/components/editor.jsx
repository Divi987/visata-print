"use client";

import * as fabric from 'fabric';
import { useCallback, useState, useRef , useEffect} from "react";
import { useEditor } from "../hooks/use-editor";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
// import { selectionDependentTools } from "../types";
// import debounce from "lodash.debounce";
// import { ShapeSidebar } from "./shape-sidebar";
// import { FillColorSidebar } from "./fill-color-sidebar";
// import { StrokeColorSidebar } from "./stroke-color-sidebar";
// import { StrokeWidthSidebar } from "./stroke-width-sidebar";
// import { OpacitySidebar } from "./opacity-sidebar";
// import { TextSidebar } from "./text-sidebar";
// import { FontSidebar } from "./font-sidebar";
// import { DrawSidebar } from "./draw-sidebar";
// import { SettingsSidebar } from "./settings-sidebar";
// import { TemplateSidebar } from "./template-sidebar";
// import { FilterSidebar } from "./filter-sidebar";
import { Toolbar } from "./toolbar";
import { Footer } from "./footer";

export const Editor = ({ initialData }) => {
  const { init } = useEditor();
//     console.log(initialData.slug);
//     // const { mutate } = initialData.id//useUpdateProject(initialData.id);

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   // const debouncedSave = useCallback(
//   //   debounce(
//   //     (values) => {
//   //       mutate(values);
//   //   },
//   //   500
//   // ), [mutate]);

//     const [activeTool, setActiveTool] = useState("select");

//     const onClearSelection = useCallback(() => {
//         if (selectionDependentTools.includes(activeTool)) {
//           setActiveTool("select");
//         }
//       }, [activeTool]);

//     const { init, editor } = useEditor({
//         defaultState: {"text": "This is Text"},//initialData.json,
//         defaultWidth: "300", //initialData.width,
//         defaultHeight: "550", //initialData.height,
//         clearSelectionCallback: onClearSelection,
//         // saveCallback: debouncedSave,
//       });

//     const onChangeActiveTool = useCallback((tool) => {
//         if (tool === "draw") {
//           editor?.enableDrawingMode();
//         }
    
//         if (activeTool === "draw") {
//           editor?.disableDrawingMode();
//         }
    
//         if (tool === activeTool) {
//           return setActiveTool("select");
//         }
        
//         setActiveTool(tool);
//       }, [activeTool, editor]);
    
      const canvasRef = useRef(null);
      const containerRef = useRef(null);
    
      useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current, {
          controlsAboveOverlay: true,
          preserveObjectStacking: true,
        });
    
        init({
          initialCanvas: canvas,
          initialContainer: containerRef.current,
        });
    
        return () => {
          canvas.dispose();
        };
      }, [init]);

  // return (
//     <div className="h-full flex flex-col relative">
//       <Navbar
//         id={initialData._id}
//         editor={editor}
//         activeTool={activeTool}
//         onChangeActiveTool={onChangeActiveTool}
//       />
//        <div className="absolute h-[calc(100%-68px)] w-full top-[80px]! flex">
//        <Sidebar
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         />
//          <ShapeSidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         />
//         <FillColorSidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         />
//           <StrokeColorSidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         />
//         <StrokeWidthSidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         />
//         <OpacitySidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         />
//         <TextSidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         />
//         <FontSidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         />
//         {/* <ImageSidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         /> */}
//         {/* <TemplateSidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         /> */}
//         <FilterSidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         />
//         {/* <AiSidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         /> */}
//         {/* <RemoveBgSidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         /> */}
//         <DrawSidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         />
//         <SettingsSidebar
//           editor={editor}
//           activeTool={activeTool}
//           onChangeActiveTool={onChangeActiveTool}
//         />
//        </div>
//        <main className="bg-muted flex-1 overflow-auto relative flex flex-col">
//           <Toolbar
//             editor={editor}
//             activeTool={activeTool}
//             onChangeActiveTool={onChangeActiveTool}
//             key={JSON.stringify(editor?.canvas.getActiveObject())}
//           />
//           <div className="flex-1 h-[calc(100%-124px)] bg-muted" ref={containerRef}>
//             <canvas ref={canvasRef} />
//           </div>
//           <Footer editor={editor} />
//         </main>
//     </div>
  // );

  return (
    // <div className="h-full flex flex-col">
    //   <Navbar />
    //   {/* <div className="flex-1 h-full bg-muted" ref={containerRef}>
    //     <canvas ref={canvasRef} />
    //   </div> */} -- updated from last commmit
    // </div>
    <div className="h-full flex flex-col">
      <Navbar />

      <div className="absolute h-[calc(100%_-_68px)] w-full top-[68px] flex">
        <Sidebar />

        <main className="bg-muted flex-1 overflow-auto relative flex flex-col">
          <Toolbar />

          <div className="flex-1 h-[calc(100%_-_124px)] bg-muted" ref={containerRef}>
            <canvas ref={canvasRef} />
          </div>

          <Footer />
        </main>
      </div>
    </div>
  )
};
