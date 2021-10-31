import { Button } from "./style";

interface ButtonIconsProps {
  callback: (param?: string) => void;
  param?: any;
  icon: string;
}

function ButtonIcon({ callback, param, icon }: ButtonIconsProps) {
  return (
    <>
      <Button onClick={() => callback(param)} icon={icon}>
        <img src={icon} alt={icon} />
      </Button>
    </>
  );
}
export default ButtonIcon;
