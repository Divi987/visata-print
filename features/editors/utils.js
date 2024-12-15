import { uuid } from "uuidv4";
import { FabricImage } from "fabric";
import { RGBColor } from "react-color";

export function transformText(objects) {
  if (!objects) return;

  objects.forEach((item) => {
    if (item.objects) {
      transformText(item.objects);
    } else {
      item.type === "text" && (item.type === "textbox");
    }
  });
};

export function downloadFile(file, type) {
  const anchorElement = document.createElement("a");

  anchorElement.href = file;
  anchorElement.download = `${uuid()}.${type}`;
  document.body.appendChild(anchorElement);
  anchorElement.click();
  anchorElement.remove();
};

export function isTextType(type) {
  return type === "text" || type === "i-text" || type === "textbox";
};

export function rgbaObjectToString(rgba) {
  if (rgba === "transparent") {
    return `rgba(0,0,0,0)`;
  }

  const alpha = rgba.a === undefined ? 1 : rgba.a;

  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${alpha})`;
};

export const createFilter = (value) => {
  let effect;

  switch (value) {
    case "greyscale":
      effect = new FabricImage.filters.Grayscale();
      break;
    case "polaroid":
      // @ts-ignore
      effect = new FabricImage.filters.Polaroid();
      break;
    case "sepia":
      effect = new FabricImage.filters.Sepia();
      break;
    case "kodachrome":
      // @ts-ignore
      effect = new FabricImage.filters.Kodachrome();
      break;
    case "contrast":
      effect = new FabricImage.filters.Contrast({ contrast: 0.3 });
      break;
    case "brightness":
      effect = new FabricImage.filters.Brightness({ brightness: 0.8 });
      break;
    case "brownie":
      // @ts-ignore
      effect = new FabricImage.filters.Brownie();
      break;
    case "vintage":
      // @ts-ignore
      effect = new FabricImage.filters.Vintage();
      break;
    case "technicolor":
      // @ts-ignore
      effect = new FabricImage.filters.Technicolor();
      break;
    case "pixelate":
      effect = new FabricImage.filters.Pixelate();
      break;
    case "invert":
      effect = new FabricImage.filters.Invert();
      break;
    case "blur":
      effect = new FabricImage.filters.Blur();
      break;
    case "sharpen":
      effect = new FabricImage.filters.Convolute({
        matrix: [0, -1, 0, -1, 5, -1, 0, -1, 0],
      });
      break;
    case "emboss":
      effect = new FabricImage.filters.Convolute({
        matrix: [1, 1, 1, 1, 0.7, -1, -1, -1, -1],
      });
      break;
    case "removecolor":
      // @ts-ignore
      effect = new FabricImage.filters.RemoveColor({
        threshold: 0.2,
        distance: 0.5
      });
      break;
    case "blacknwhite":
      // @ts-ignore
      effect = new FabricImage.filters.BlackWhite();
      break;
    case "vibrance":
      // @ts-ignore
      effect = new FabricImage.filters.Vibrance({ 
        vibrance: 1,
      });
      break;
    case "blendcolor":
      effect = new FabricImage.filters.BlendColor({ 
        color: "#00ff00",
        mode: "multiply",
      });
      break;
    case "huerotate":
      effect = new FabricImage.filters.HueRotation({ 
        rotation: 0.5,
      });
      break;
    case "resize":
      effect = new FabricImage.filters.Resize();
      break;
    case "gamma":
      // @ts-ignore
      effect = new FabricImage.filters.Gamma({
        gamma: [1, 0.5, 2.1]
      });
    case "saturation":
      effect = new FabricImage.filters.Saturation({
        saturation: 0.7,
      });
      break;
    default:
      effect = null;
      return;
  };

  return effect;
};