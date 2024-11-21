"use client";
import { useCallback, useState } from "react";
import { useEditor } from "../hooks/use-editor";
import { selectionDependentTools } from "../types";
import debounce from "lodash.debounce";
import { Navbar } from "./navbar";

export const Editor = ({ initialData }) => {
    const { mutate } = initialData.id//useUpdateProject(initialData.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = useCallback(
    debounce(
      (values) => {
        mutate(values);
    },
    500
  ), [mutate]);

    const [activeTool, setActiveTool] = useState("select");

    const onClearSelection = useCallback(() => {
        if (selectionDependentTools.includes(activeTool)) {
          setActiveTool("select");
        }
      }, [activeTool]);

    const { init, editor } = useEditor({
        defaultState: initialData.json,
        defaultWidth: initialData.width,
        defaultHeight: initialData.height,
        clearSelectionCallback: onClearSelection,
        saveCallback: debouncedSave,
      });

    const onChangeActiveTool = useCallback((tool) => {
        if (tool === "draw") {
          editor?.enableDrawingMode();
        }
    
        if (activeTool === "draw") {
          editor?.disableDrawingMode();
        }
    
        if (tool === activeTool) {
          return setActiveTool("select");
        }
        
        setActiveTool(tool);
      }, [activeTool, editor]);
    

  return (
    <div className="h-full flex flex-col">
        This is test
      <Navbar
        id={initialData.id}
        editor={editor}
        activeTool={activeTool}
        onChangeActiveTool={onChangeActiveTool}
      />
    </div>
  );
};
