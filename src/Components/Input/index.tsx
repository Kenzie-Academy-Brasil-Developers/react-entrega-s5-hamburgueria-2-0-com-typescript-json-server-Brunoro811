import { TextField } from "@material-ui/core";
import { ContainerInput } from "./style";
interface InputProps {
  label: string;
  type?: string;
  value: string;
  errors?: any | undefined;
  register: (param: string) => void;
  registerParam: string;

  setValue: (param: string) => void;
}

function Input({
  label = "",
  type = "text",
  value,
  setValue,
  errors,
  register,
  registerParam,
  ...rest
}: InputProps) {
  return (
    <ContainerInput>
      <TextField
        {...rest}
        {...register(registerParam)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        id="outlined-basic"
        label={label}
        variant="outlined"
      />
      {errors && <span className="AlertDanger">{errors.message}</span>}
    </ContainerInput>
  );
}
export default Input;
