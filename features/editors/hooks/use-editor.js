'use client'

import { FabricImage, FabricObject } from "fabric";
import * as fabric from "fabric";
import { useCallback, useState, useMemo, useRef } from "react";
import { useAutoResize } from "./use-auto-resize";

import {
  // //   Editor,
  FILL_COLOR,
  STROKE_WIDTH,
  STROKE_COLOR,
  CIRCLE_OPTIONS,
  DIAMOND_OPTIONS,
  TRIANGLE_OPTIONS,
  //   BuildEditorProps,
  RECTANGLE_OPTIONS,
  //   EditorHookProps,
  STROKE_DASH_ARRAY,
  TEXT_OPTIONS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  JSON_KEYS,
  // addCircle,
} from "../types";
// import { useHistory } from "./use-history";
import {
  //   createFilter,
  //   downloadFile,
  isTextType,
  //   transformText
} from "../utils";
// import { useHotkeys } from "./use-hotkeys";
import { useCanvasEvents } from "./use-canvas-events";
import { useEffect } from "react";
// import { useAutoResize } from "./use-auto-resize";
// import { useClipboard } from "./use-clipboard";
// import { useWindowEvents } from "./use-windows";
// import { useLoadState } from "./use-load-state";

// const buildEditor = ({
//   save,
//   undo,
//   redo,
//   canRedo,
//   canUndo,
//   autoZoom,
//   copy,
//   paste,
//   canvas,
//   fillColor,
//   fontFamily,
//   setFontFamily,
//   setFillColor,
//   strokeColor,
//   setStrokeColor,
//   strokeWidth,
//   setStrokeWidth,
//   selectedObjects,
//   strokeDashArray,
//   setStrokeDashArray,
// }) => {
//   const generateSaveOptions = () => {
//     const { width, height, left, top } = getWorkspace();

//     return {
//       name: "Image",
//       format: "png",
//       quality: 1,
//       width,
//       height,
//       left,
//       top,
//     };
//   };

//   const savePng = () => {
//     const options = generateSaveOptions();

//     canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
//     const dataUrl = canvas.toDataURL(options);

//     downloadFile(dataUrl, "png");
//     autoZoom();
//   };

//   const saveSvg = () => {
//     const options = generateSaveOptions();

//     canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
//     const dataUrl = canvas.toDataURL(options);

//     downloadFile(dataUrl, "svg");
//     autoZoom();
//   };

//   const saveJpg = () => {
//     const options = generateSaveOptions();

//     canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
//     const dataUrl = canvas.toDataURL(options);

//     downloadFile(dataUrl, "jpg");
//     autoZoom();
//   };

//   const saveJson = async () => {
//     const dataUrl = canvas.toJSON(JSON_KEYS);

//     await transformText(dataUrl.objects);
//     const fileString = `data:text/json;charset=utf-8,${encodeURIComponent(
//       JSON.stringify(dataUrl, null, "\t"),
//     )}`;
//     downloadFile(fileString, "json");
//   };

//   const loadJson = (json) => {
//     const data = JSON.parse(json);

//     canvas.loadFromJSON(data, () => {
//       autoZoom();
//     });
//   };

//   const getWorkspace = () => {
//     return canvas
//     .getObjects()
//     .find((object) => object.name === "clip");
//   };

//   const center = (object) => {
//     const workspace = getWorkspace();
//     const center = workspace?.getCenterPoint();

//     if (!center) return;
//     canvas._centerObject(object, center);
//   };

//   const addToCanvas = (object) => {
//     center(object);
//     canvas.add(object);
//     canvas.setActiveObject(object);
//   };

//   return {
//     savePng,
//     saveJpg,
//     saveSvg,
//     saveJson,
//     loadJson,
//     canUndo,
//     canRedo,
//     autoZoom,
//     getWorkspace,
//     zoomIn: () => {
//       let zoomRatio = canvas.getZoom();
//       zoomRatio += 0.05;
//       const center = canvas.getCenter();
//       canvas.zoomToPoint(
//         new fabric.Point(center.left, center.top),
//         zoomRatio > 1 ? 1 : zoomRatio
//       );
//     },
//     zoomOut: () => {
//       let zoomRatio = canvas.getZoom();
//       zoomRatio -= 0.05;
//       const center = canvas.getCenter();
//       canvas.zoomToPoint(
//         new fabric.Point(center.left, center.top),
//         zoomRatio < 0.2 ? 0.2 : zoomRatio,
//       );
//     },
//     changeSize: (value) => {
//       const workspace = getWorkspace();

//       workspace?.set(value);
//       autoZoom();
//       save();
//     },
//     changeBackground: (value) => {
//       const workspace = getWorkspace();
//       workspace?.set({ fill: value });
//       canvas.renderAll();
//       save();
//     },
//     enableDrawingMode: () => {
//       canvas.discardActiveObject();
//       canvas.renderAll();
//       canvas.isDrawingMode = true;
//       canvas.freeDrawingBrush.width = "400"; //strokeWidth;
//       canvas.freeDrawingBrush.color = "500" //strokeColor;
//     },
//     disableDrawingMode: () => {
//       canvas.isDrawingMode = false;
//     },
//     onUndo: () => undo(),
//     onRedo: () => redo(),
//     onCopy: () => copy(),
//     onPaste: () => paste(),
//     changeImageFilter: (value) => {
//       const objects = canvas.getActiveObjects();
//       objects.forEach((object) => {
//         if (object.type === "image") {
//           const imageObject = object;

//           const effect = createFilter(value);

//           imageObject.filters = effect ? [effect] : [];
//           imageObject.applyFilters();
//           canvas.renderAll();
//         }
//       });
//     },
//     addImage: (value) => {
//       FabricImage.fromURL(
//         value,
//         (image) => {
//           const workspace = getWorkspace();

//           image.scaleToWidth(workspace?.width || 0);
//           image.scaleToHeight(workspace?.height || 0);

//           addToCanvas(image);
//         },
//         {
//           crossOrigin: "anonymous",
//         },
//       );
//     },
//     delete: () => {
//       canvas.getActiveObjects().forEach((object) => canvas.remove(object));
//       canvas.discardActiveObject();
//       canvas.renderAll();
//     },
//     addText: (value, options) => {
//       const object = new fabric.Textbox(value, {
//         ...TEXT_OPTIONS,
//         fill: fillColor,
//         ...options,
//       });

//       addToCanvas(object);
//     },
//     getActiveOpacity: () => {
//       const selectedObject = selectedObjects[0];

//       if (!selectedObject) {
//         return 1;
//       }

//       const value = selectedObject.get("opacity") || 1;

//       return value;
//     },
//     changeFontSize: (value) => {
//       canvas.getActiveObjects().forEach((object) => {
//         if (isTextType(object.type)) {
//           // @ts-ignore
//           // Faulty TS library, fontSize exists.
//           object.set({ fontSize: value });
//         }
//       });
//       canvas.renderAll();
//     },
//     getActiveFontSize: () => {
//       const selectedObject = selectedObjects[0];

//       if (!selectedObject) {
//         return FONT_SIZE;
//       }

//       // @ts-ignore
//       // Faulty TS library, fontSize exists.
//       const value = selectedObject.get("fontSize") || FONT_SIZE;

//       return value;
//     },
//     changeTextAlign: (value ) => {
//       canvas.getActiveObjects().forEach((object) => {
//         if (isTextType(object.type)) {
//           // @ts-ignore
//           // Faulty TS library, textAlign exists.
//           object.set({ textAlign: value });
//         }
//       });
//       canvas.renderAll();
//     },
//     getActiveTextAlign: () => {
//       const selectedObject = selectedObjects[0];

//       if (!selectedObject) {
//         return "left";
//       }

//       // @ts-ignore
//       // Faulty TS library, textAlign exists.
//       const value = selectedObject.get("textAlign") || "left";

//       return value;
//     },
//     changeFontUnderline: (value) => {
//       canvas.getActiveObjects().forEach((object) => {
//         if (isTextType(object.type)) {
//           // @ts-ignore
//           // Faulty TS library, underline exists.
//           object.set({ underline: value });
//         }
//       });
//       canvas.renderAll();
//     },
//     getActiveFontUnderline: () => {
//       const selectedObject = selectedObjects[0];

//       if (!selectedObject) {
//         return false;
//       }

//       // @ts-ignore
//       // Faulty TS library, underline exists.
//       const value = selectedObject.get("underline") || false;

//       return value;
//     },
//     changeFontLinethrough: (value) => {
//       canvas.getActiveObjects().forEach((object) => {
//         if (isTextType(object.type)) {
//           // @ts-ignore
//           // Faulty TS library, linethrough exists.
//           object.set({ linethrough: value });
//         }
//       });
//       canvas.renderAll();
//     },
//     getActiveFontLinethrough: () => {
//       const selectedObject = selectedObjects[0];

//       if (!selectedObject) {
//         return false;
//       }

//       // @ts-ignore
//       // Faulty TS library, linethrough exists.
//       const value = selectedObject.get("linethrough") || false;

//       return value;
//     },
//     changeFontStyle: (value ) => {
//       canvas.getActiveObjects().forEach((object) => {
//         if (isTextType(object.type)) {
//           // @ts-ignore
//           // Faulty TS library, fontStyle exists.
//           object.set({ fontStyle: value });
//         }
//       });
//       canvas.renderAll();
//     },
//     getActiveFontStyle: () => {
//       const selectedObject = selectedObjects[0];

//       if (!selectedObject) {
//         return "normal";
//       }

//       // @ts-ignore
//       // Faulty TS library, fontStyle exists.
//       const value = selectedObject.get("fontStyle") || "normal";

//       return value;
//     },
//     changeFontWeight: (value ) => {
//       canvas.getActiveObjects().forEach((object) => {
//         if (isTextType(object.type)) {
//           // @ts-ignore
//           // Faulty TS library, fontWeight exists.
//           object.set({ fontWeight: value });
//         }
//       });
//       canvas.renderAll();
//     },
//     changeOpacity: (value ) => {
//       canvas.getActiveObjects().forEach((object) => {
//         object.set({ opacity: value });
//       });
//       canvas.renderAll();
//     },
//     bringForward: () => {
//       canvas.getActiveObjects().forEach((object) => {
//         canvas.bringForward(object);
//       });

//       canvas.renderAll();

//       const workspace = getWorkspace();
//       workspace?.sendToBack();
//     },
//     sendBackwards: () => {
//       canvas.getActiveObjects().forEach((object) => {
//         canvas.sendBackwards(object);
//       });

//       canvas.renderAll();
//       const workspace = getWorkspace();
//       workspace?.sendToBack();
//     },
//     changeFontFamily: (value) => {
//       setFontFamily(value);
//       canvas.getActiveObjects().forEach((object) => {
//         if (isTextType(object.type)) {
//           // @ts-ignore
//           // Faulty TS library, fontFamily exists.
//           object.set({ fontFamily: value });
//         }
//       });
//       canvas.renderAll();
//     },
//     changeFillColor: (value ) => {
//       setFillColor(value);
//       canvas.getActiveObjects().forEach((object) => {
//         object.set({ fill: value });
//       });
//       canvas.renderAll();
//     },
//     changeStrokeColor: (value ) => {
//       setStrokeColor(value);
//       canvas.getActiveObjects().forEach((object) => {
//         // Text types don't have stroke
//         if (isTextType(object.type)) {
//           object.set({ fill: value });
//           return;
//         }

//         object.set({ stroke: value });
//       });
//       canvas.freeDrawingBrush.color = value;
//       canvas.renderAll();
//     },
//     changeStrokeWidth: (value ) => {
//       setStrokeWidth(value);
//       canvas.getActiveObjects().forEach((object) => {
//         object.set({ strokeWidth: value });
//       });
//       canvas.freeDrawingBrush.width = value;
//       canvas.renderAll();
//     },
//     changeStrokeDashArray: (value) => {
//       setStrokeDashArray(value);
//       canvas.getActiveObjects().forEach((object) => {
//         object.set({ strokeDashArray: value });
//       });
//       canvas.renderAll();
//     },
//     addCircle: () => {
//       const object = new fabric.Circle({
//         ...CIRCLE_OPTIONS,
//         fill: fillColor,
//         stroke: strokeColor,
//         strokeWidth: strokeWidth,
//         strokeDashArray: strokeDashArray,
//       });

//       addToCanvas(object);
//     },
//     addSoftRectangle: () => {
//       const object = new fabric.Rect({
//         ...RECTANGLE_OPTIONS,
//         rx: 50,
//         ry: 50,
//         fill: fillColor,
//         stroke: strokeColor,
//         strokeWidth: strokeWidth,
//         strokeDashArray: strokeDashArray,
//       });

//       addToCanvas(object);
//     },
//     addRectangle: () => {
//       const object = new fabric.Rect({
//         ...RECTANGLE_OPTIONS,
//         fill: fillColor,
//         stroke: strokeColor,
//         strokeWidth: strokeWidth,
//         strokeDashArray: strokeDashArray,
//       });

//       addToCanvas(object);
//     },
//     addTriangle: () => {
//       const object = new fabric.Triangle({
//         ...TRIANGLE_OPTIONS,
//         fill: fillColor,
//         stroke: strokeColor,
//         strokeWidth: strokeWidth,
//         strokeDashArray: strokeDashArray,
//       });

//       addToCanvas(object);
//     },
//     addInverseTriangle: () => {
//       const HEIGHT = TRIANGLE_OPTIONS.height;
//       const WIDTH = TRIANGLE_OPTIONS.width;

//       const object = new fabric.Polygon(
//         [
//           { x: 0, y: 0 },
//           { x: WIDTH, y: 0 },
//           { x: WIDTH / 2, y: HEIGHT },
//         ],
//         {
//           ...TRIANGLE_OPTIONS,
//           fill: fillColor,
//           stroke: strokeColor,
//           strokeWidth: strokeWidth,
//           strokeDashArray: strokeDashArray,
//         }
//       );

//       addToCanvas(object);
//     },
//     addDiamond: () => {
//       const HEIGHT = DIAMOND_OPTIONS.height;
//       const WIDTH = DIAMOND_OPTIONS.width;

//       const object = new fabric.Polygon(
//         [
//           { x: WIDTH / 2, y: 0 },
//           { x: WIDTH, y: HEIGHT / 2 },
//           { x: WIDTH / 2, y: HEIGHT },
//           { x: 0, y: HEIGHT / 2 },
//         ],
//         {
//           ...DIAMOND_OPTIONS,
//           fill: fillColor,
//           stroke: strokeColor,
//           strokeWidth: strokeWidth,
//           strokeDashArray: strokeDashArray,
//         }
//       );
//       addToCanvas(object);
//     },
//     canvas,
//     getActiveFontWeight: () => {
//       const selectedObject = selectedObjects[0];

//       if (!selectedObject) {
//         return FONT_WEIGHT;
//       }

//       // @ts-ignore
//       // Faulty TS library, fontWeight exists.
//       const value = selectedObject.get("fontWeight") || FONT_WEIGHT;

//       return value;
//     },
//     getActiveFontFamily: () => {
//       const selectedObject = selectedObjects[0];

//       if (!selectedObject) {
//         return fontFamily;
//       }

//       // @ts-ignore
//       // Faulty TS library, fontFamily exists.
//       const value = selectedObject.get("fontFamily") || fontFamily;

//       return value;
//     },
//     getActiveFillColor: () => {
//       const selectedObject = selectedObjects[0];

//       if (!selectedObject) {
//         return fillColor;
//       }

//       const value = selectedObject.get("fill") || fillColor;

//       // Currently, gradients & patterns are not supported
//       return value;
//     },
//     getActiveStrokeColor: () => {
//       const selectedObject = selectedObjects[0];

//       if (!selectedObject) {
//         return strokeColor;
//       }

//       const value = selectedObject.get("stroke") || strokeColor;

//       return value;
//     },
//     getActiveStrokeWidth: () => {
//       const selectedObject = selectedObjects[0];

//       if (!selectedObject) {
//         return strokeWidth;
//       }

//       const value = selectedObject.get("strokeWidth") || strokeWidth;

//       return value;
//     },
//     getActiveStrokeDashArray: () => {
//       const selectedObject = selectedObjects[0];

//       if (!selectedObject) {
//         return strokeDashArray;
//       }

//       const value = selectedObject.get("strokeDashArray") || strokeDashArray;

//       return value;
//     },
//     selectedObjects,
//   };
// };

// export const useEditor = ({
//   defaultState,
//   defaultHeight,
//   defaultWidth,
//   clearSelectionCallback,
//   saveCallback,
// }) => {
//   const initialState = useRef(defaultState);
//   const initialWidth = useRef(defaultWidth);
//   const initialHeight = useRef(defaultHeight);

//   const [canvas, setCanvas] = useState(null);
//   const [container, setContainer] = useState(null);
//   const [selectedObjects, setSelectedObjects] = useState([]);

//   const [fontFamily, setFontFamily] = useState(FONT_FAMILY);
//   const [fillColor, setFillColor] = useState(FILL_COLOR);
//   const [strokeColor, setStrokeColor] = useState(STROKE_COLOR);
//   const [strokeWidth, setStrokeWidth] = useState(STROKE_WIDTH);
//   const [strokeDashArray, setStrokeDashArray] = useState(STROKE_DASH_ARRAY);

//   useWindowEvents();

//   const {
//     save,
//     canRedo,
//     canUndo,
//     undo,
//     redo,
//     canvasHistory,
//     setHistoryIndex,
//   } = useHistory({
//     canvas,
//     saveCallback
//   });

//   const { copy, paste } = useClipboard({ canvas });

//   const { autoZoom } = useAutoResize({
//     canvas,
//     container,
//   });

//   useCanvasEvents({
//     save,
//     canvas,
//     setSelectedObjects,
//     clearSelectionCallback,
//   });

//   useHotkeys({
//     undo,
//     redo,
//     copy,
//     paste,
//     save,
//     canvas,
//   });

//   useLoadState({
//     canvas,
//     autoZoom,
//     initialState,
//     canvasHistory,
//     setHistoryIndex,
//   });

//   const editor = useMemo(() => {
//     if (canvas) {
//       return buildEditor({
//         save,
//         undo,
//         redo,
//         canUndo,
//         canRedo,
//         autoZoom,
//         copy,
//         paste,
//         canvas,
//         fillColor,
//         strokeWidth,
//         strokeColor,
//         setFillColor,
//         setStrokeColor,
//         setStrokeWidth,
//         strokeDashArray,
//         selectedObjects,
//         setStrokeDashArray,
//         fontFamily,
//         setFontFamily,
//       });
//     }

//     return undefined;
//   },
//   [
//     canRedo,
//     canUndo,
//     undo,
//     redo,
//     save,
//     autoZoom,
//     copy,
//     paste,
//     canvas,
//     fillColor,
//     strokeWidth,
//     strokeColor,
//     selectedObjects,
//     strokeDashArray,
//     fontFamily,
//   ]);

//   const init = useCallback(
//     ({
//       initialCanvas,
//       initialContainer,
//     }) => {
//       FabricObject.prototype.set({
//         cornerColor: "#FFF",
//         cornerStyle: "circle",
//         borderColor: "#3b82f6",
//         borderScaleFactor: 1.5,
//         transparentCorners: false,
//         borderOpacityWhenMoving: 1,
//         cornerStrokeColor: "#3b82f6",
//       });

//       const initialWorkspace = new fabric.Rect({
//         width: initialWidth.current,
//         height: initialHeight.current,
//         name: "clip",
//         fill: "white",
//         selectable: false,
//         hasControls: false,
//         shadow: new fabric.Shadow({
//           color: "rgba(0,0,0,0.8)",
//           blur: 5,
//         }),
//       });

//       initialCanvas.setWidth(initialContainer.offsetWidth);
//       initialCanvas.setHeight(initialContainer.offsetHeight);

//       initialCanvas.add(initialWorkspace);
//       initialCanvas.centerObject(initialWorkspace);
//       initialCanvas.clipPath = initialWorkspace;

//       setCanvas(initialCanvas);
//       setContainer(initialContainer);

//       const currentState = JSON.stringify(
//         initialCanvas.toJSON(JSON_KEYS)
//       );
//       canvasHistory.current = [currentState];
//       setHistoryIndex(0);
//     },
//     [
//       canvasHistory, // No need, this is from useRef
//       setHistoryIndex, // No need, this is from useState
//     ]
//   );

//   return { init, editor };
// };

// Below Commented to try commit -> deb12f1

const buildEditor = ({
  canvas,
  fillColor,
  setFillColor,
  strokeColor,
  setStrokeColor,
  strokeWidth,
  setStrokeWidth,
  strokeDashArray,
  setStrokeDashArray,
  fontFamily,
  setFontFamily,
  selectedObjects,
}) => {
  const addToCanvas = (object) => {
    center(object);
    canvas.add(object);
    canvas.setActiveObject(object);
  };

  const getWorkspace = () => {
    return canvas.getObjects().find((object) => object.name === "clip");
  };

  const center = (object) => {
    const workspace = getWorkspace();
    const centerPoint = workspace?.getCenterPoint();

    if (!centerPoint) return;

    // @ts-ignore _centerObject method types aren't added.
    // canvas._centerObject(object, centerPoint);
     // Center the object manually
  object.set({
    left: centerPoint.x - object.width / 2, // Adjust for object width
    top: centerPoint.y - object.height / 2, // Adjust for object height
    originX: "center",
    originY: "center",
  });

  // Ensure canvas reflects the changes
  canvas.requestRenderAll();
  };

  // Center an object on the canvas
const centerObjectOnCanvas = (canvas, object) => {
  if (canvas && object) {
    // Use the centerObject method to center the object
    canvas.centerObject(object);

    // Optionally re-render the canvas to apply changes
    canvas.requestRenderAll();
  } else {
    console.error("Canvas or object is not defined.");
  }
};

// Example usage:
// const canvas = new fabric.Canvas("canvas-id"); // Replace with your actual canvas ID
// const rect = new fabric.Rect({
//   width: 100,
//   height: 100,
//   fill: "red",
// });

// // Add the object to the canvas
// canvas.add(rect);

// Center the object on the canvas
// centerObjectOnCanvas(canvas, rect);


  // console.log(addImages('/images/logo-lg.png'))

  return {
    // addImage: (imageUrl) => {
    //   const object = new fabric.Image.fromURL({
    //    imageUrl,
    //   });

    //   addToCanvas(object);
    //   // fabric.Image.fromURL(
    //   //   imageUrl,
    //   //   (image) => {
    //   //     try {
    //   //       console.log(image)
    //   //       if (!image) {
    //   //         console.error("Failed to load image.");
    //   //         return;
    //   //       }
    //   //       image.set({
    //   //         left: 100, // Example position, adjust as needed
    //   //         top: 100,
    //   //         selectable: true, // Allow interaction
    //   //       });
    //   //         // Optionally center the image on the canvas
    //   // canvas.centerObject(image);

    //   // // Add the image to the canvas
    //   // canvas.add(image);
    //   //       // const workspace = getWorkspace();
    //   //       console.log("workspace");
    //   //       // image.scaleToWidth(workspace?.width || 0);
    //   //       // image.scaleToHeight(workspace?.height || 0);
    //   //       // addToCanvas(image);
    //   //       const workspace = getWorkspace(); // Get the workspace object if it exists

    //   //       if (workspace) {
    //   //         // Scale the image to match the workspace size, if applicable
    //   //         image.scaleToWidth(workspace.width || 0);
    //   //         image.scaleToHeight(workspace.height || 0);
    //   //       }
      
    //   //       // Add the image to the canvas
    //   //       addToCanvas(image);
      
    //   //       // Ensure the canvas is re-rendered
    //   //       canvas.requestRenderAll();
    //   //     } catch(error) {
    //   //       console.error("Error adding image:", error);
    //   //     }
    //   //   },
    //   //   {
    //   //     crossOrigin: 'anonymous',
    //   //   },
    //   // );
    //   // console.log(object);
    //   // addToCanvas(object);
    // },
    addImage: (value) => {
        // fabric.Image.fromURL(
        //   'https://placehold.co/300x300',
        //       (image) => {
        //         console.log(image)
        //         const workspace = getWorkspace();
      
        //         image.scaleToWidth(workspace?.width || 0);
        //         image.scaleToHeight(workspace?.height || 0);
        //         var img1 = myImg.set({ left: 0, top: 0 ,width:150,height:150});
        //         canvas.add(img1); 
      
        //         addToCanvas(image);
        //       },
        //       {
        //         crossOrigin: "anonymous",
        //       },
        //     )
        //   },
        var canvas = new fabric.Canvas('c');
        canvas.backgroundColor = 'yellow';
        console.log(canvas)
          fabric.Image.fromURL('https://placehold.co/300x300', (myImg) => {
            addToCanvas(myImg);
          canvas.add(myImg);
}, {
   crossOrigin: 'anonymous',
})},
    delete: () => {
      canvas.getActiveObjects().forEach((object) => canvas.remove(object));
      canvas.discardActiveObject();
      canvas.renderAll();
    },
    changeOpacity: (opacity) => {
      canvas.getActiveObjects().forEach((object) => {
        object.set({ opacity });
      });
      canvas.renderAll();
    },
    bringForward: () => {
      canvas.getActiveObjects().forEach((object) => {
        canvas.bringObjectForward(object);
      });
      canvas.renderAll();
      const workspace = getWorkspace();
      workspace?.sendObjectToBack();
    },
    sendBackwards: () => {
      canvas.getActiveObjects().forEach((object) => {
        canvas.sendObjectBackwards(object);
      });
      canvas.renderAll();
      const workspace = getWorkspace();
      workspace?.sendObjectToBack ();
    },
    changeFontFamily: (fontFamily) => {
      setFontFamily(fontFamily);
      canvas.getActiveObjects().forEach((object) => {
        if (isTextType(object.type)) object._set('fontFamily', fontFamily);
      });
      canvas.renderAll();
    },
    changeFillColor: (color) => {
      setFillColor(color);
      canvas
        .getActiveObjects()
        .forEach((object) => object.set({ fill: color }));
      canvas.renderAll();
    },
    changeStrokeColor: (color) => {
      setStrokeColor(color);
      canvas.getActiveObjects().forEach((object) => {
        // Text types don't have strokes
        if (isTextType(object.type)) {
          object.set({ fill: color });
          return;
        }
        object.set({ stroke: color });
      });

      canvas.renderAll();
    },
    changeStrokeWidth: (width) => {
      setStrokeWidth(width);
      canvas
        .getActiveObjects()
        .forEach((object) => object.set({ strokeWidth: width }));
      canvas.renderAll();
    },

    changeStrokeDashArray: (strokeDashArray) => {
      setStrokeDashArray(strokeDashArray);
      canvas
        .getActiveObjects()
        .forEach((object) => object.set({ strokeDashArray }));
      canvas.renderAll();
    },
    addText: (value, options) => {
      const object = new fabric.Textbox(value, {
        ...TEXT_OPTIONS,
        fill: fillColor,
        ...options,
      });
      addToCanvas(object);
    },
    addCircle: () => {
      const object = new fabric.Circle({
        ...CIRCLE_OPTIONS,
        fill: fillColor,
        stroke: strokeColor,
        // strokeWidth: strokeWidth,
        strokeWidth,
        strokeDashArray,
      });

      addToCanvas(object);
    },
    addSoftRectangle: () => {
      const object = new fabric.Rect({
        ...RECTANGLE_OPTIONS,
        rx: 50,
        ry: 50,
        fill: fillColor,
        stroke: strokeColor,
        strokeWidth,
        strokeDashArray,
      });

      addToCanvas(object);
    },
    addRectangle: () => {
      const object = new fabric.Rect({
        ...RECTANGLE_OPTIONS,
        fill: fillColor,
        stroke: strokeColor,
        // strokeWidth: strokeWidth,
        strokeWidth,
        strokeDashArray,
      });

      addToCanvas(object);
    },
    addTriangle: () => {
      const object = new fabric.Triangle({
        ...TRIANGLE_OPTIONS,
        fill: fillColor,
        stroke: strokeColor,
        // strokeWidth: strokeWidth,
        strokeWidth,
        strokeDashArray,
      });

      addToCanvas(object);
    },
    addInverseTriangle: () => {
      const HEIGHT = TRIANGLE_OPTIONS.height;
      const WIDTH = TRIANGLE_OPTIONS.width;

      const object = new fabric.Polygon(
        [
          {
            x: 0,
            y: 0,
          },
          {
            x: WIDTH,
            y: 0,
          },
          {
            x: WIDTH / 2,
            y: HEIGHT,
          },
        ],
        {
          ...TRIANGLE_OPTIONS,
          fill: fillColor,
          stroke: strokeColor,
          // strokeWidth: strokeWidth,
          strokeWidth,
          strokeDashArray,
        }
      );

      addToCanvas(object);
    },
    addDiamond: () => {
      const HEIGHT = DIAMOND_OPTIONS.height;
      const WIDTH = DIAMOND_OPTIONS.width;

      const object = new fabric.Polygon(
        [
          {
            x: WIDTH / 2,
            y: 0,
          },
          {
            x: WIDTH,
            y: HEIGHT / 2,
          },
          {
            x: WIDTH / 2,
            y: HEIGHT,
          },
          {
            x: 0,
            y: HEIGHT / 2,
          },
        ],
        {
          ...DIAMOND_OPTIONS,
          fill: fillColor,
          stroke: strokeColor,
          // strokeWidth: strokeWidth,
          strokeWidth,
          strokeDashArray,
        }
      );

      addToCanvas(object);
    },
    getActiveFillColor: () => {
      const selectedObject = selectedObjects[0];

      if (!selectedObject) return fillColor;

      const value = selectedObject.get("fill") || fillColor;

      // Gradients and patterns are not passed.
      return value;
    },
    getActiveStrokeColor: () => {
      const selectedObject = selectedObjects[0];
      if (!selectedObject) return strokeColor;
      const value = selectedObject.get("stroke") || strokeColor;
      // Gradients and patterns are not passed.
      return value;
    },
    getActiveStrokeWidth: () => {
      const selectedObject = selectedObjects[0];
      if (!selectedObject) return strokeWidth;
      const value = selectedObject.get("strokeWidth") || strokeWidth;
      // Gradients and patterns are not passed.
      return value;
    },
    getActiveStrokeDashArray: () => {
      const selectedObject = selectedObjects[0];
      if (!selectedObject) return strokeDashArray;
      const value = selectedObject.get("strokeDashArray") || strokeDashArray;
      // Gradients and patterns are not passed.
      return value;
    },
     getActiveFontFamily: () => {
      const selectedObject = selectedObjects[0];
      if (!selectedObject) return fontFamily;
      // @ts-ignore fontFamilty attribute types aren't added.
      const value = selectedObject.get('fontFamily') || fontFamily;
      return value;
    },
      getActiveOpacity: () => {
      const selectedObject = selectedObjects[0];
      if (!selectedObject) return 1;
      const value = selectedObject.get('opacity') || 1;
      // Gradients and patterns are not passed.
      return value;
    },

    canvas,
    // fillColor,
    // strokeColor,
    // strokeWidth,
    selectedObjects,
  };
};

export const useEditor = ({ clearSelectionCallback }) => {
  const [canvas, setCanvas] = useState(null);
  const [container, setContainer] = useState(null);
  const [selectedObjects, setSelectedObjects] = useState([]);

  const [fontFamily, setFontFamily] = useState(FONT_FAMILY);
  const [fillColor, setFillColor] = useState(FILL_COLOR);
  const [strokeColor, setStrokeColor] = useState(STROKE_COLOR);
  const [strokeWidth, setStrokeWidth] = useState(STROKE_WIDTH);
  const [strokeDashArray, setStrokeDashArray] = useState(STROKE_DASH_ARRAY);

  useAutoResize({
    canvas,
    container,
  });

  useCanvasEvents({
    canvas,
    setSelectedObjects,
    clearSelectionCallback,
  });

  fabric.Object.prototype.set({
    cornerColor: "#fff",
    cornerStyle: "circle",
    borderColor: "#3b82f6",
    borderScaleFactor: 1.5,
    transparentCorners: false,
    borderOpacityWhenMoving: 1,
    cornerStrokeColor: "#3b82f6",
  });

  const editor = useMemo(() => {
    if (canvas)
      return buildEditor({
        canvas,
        fillColor,
        setFillColor,
        strokeColor,
        setStrokeColor,
        strokeWidth,
        setStrokeWidth,
        strokeDashArray,
        setStrokeDashArray,
         fontFamily,
        setFontFamily,
        selectedObjects,
      });

    return undefined;
  }, [
    canvas,
    fillColor,
    strokeColor,
    strokeWidth,
    strokeDashArray, 
    fontFamily,
    selectedObjects,
  ]);

  const init = useCallback(({ initialCanvas, initialContainer }) => {
    const initialWorkspace = new fabric.Rect({
      width: 900,
      height: 1200,
      name: "clip",
      fill: "white",
      selectable: false,
      hasControls: false,
      shadow: new fabric.Shadow({
        color: "rgba(0, 0, 0, 0.8)",
        blur: 5,
      }),
    });
    initialCanvas.setWidth(initialContainer.offsetWidth);
    initialCanvas.setHeight(initialContainer.offsetHeight);
    initialCanvas.add(initialWorkspace);
    initialCanvas.centerObject(initialWorkspace);
    initialCanvas.clipPath = initialWorkspace;

    setCanvas(initialCanvas);
    setContainer(initialContainer);
  }, []);
  return { init, editor };
};