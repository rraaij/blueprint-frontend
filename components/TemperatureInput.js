import { Input } from "@progress/kendo-react-inputs";
import { FieldWrapper } from "@progress/kendo-react-form";
import { Label } from "@progress/kendo-react-labels";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const TemperatureInput = (props) => {
  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  };

  return (
    <FieldWrapper>
      <Label>Enter temperature in {scaleNames[props.scale]}:</Label>
      <Input
        type={"number"}
        value={props.temperature}
        onChange={handleChange}
      />
    </FieldWrapper>
  );
};
export default TemperatureInput;
