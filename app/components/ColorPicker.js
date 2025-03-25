import ColorPicker from "@rc-component/color-picker";
import "@rc-component/color-picker/assets/index.css";

export default function ColorPickerComponent({ color, onChange }) {
  return (
    <ColorPicker
      value={color}
      onChange={(newColor) => onChange(newColor.toHexString())}
    />
  );
}
