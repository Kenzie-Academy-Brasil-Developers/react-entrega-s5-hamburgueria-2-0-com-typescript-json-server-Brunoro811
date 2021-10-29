import { ButtonComponent } from "./style";
interface ButtonProps {
  value: string;
  callback?: (param: string | undefined) => void | undefined;
  param?: string | undefined;
  primary?: boolean | undefined;
  type?: string | boolean;
  disabled?: boolean | undefined;
}
function Button({
  value = "button",
  callback = () => undefined,
  param,
  type = false,
  ...rest
}: ButtonProps) {
  return (
    <>
      {type && <ButtonComponent {...rest}>{value}</ButtonComponent>}
      {!type && (
        <ButtonComponent {...rest} onClick={() => callback(param)}>
          {value}
        </ButtonComponent>
      )}
    </>
  );
}
export default Button;
