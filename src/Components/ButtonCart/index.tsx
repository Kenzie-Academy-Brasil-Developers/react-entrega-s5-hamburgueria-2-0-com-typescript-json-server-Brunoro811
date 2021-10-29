import { Button, Total } from "./style";
import { useProduct } from "../../Providers/Products";
import { useState } from "react";

interface ButtonIconsProps {
  callback: (param?: string) => void;
  param?: any;
  icon: string;
}

function ButtonCart({ callback, param, icon }: ButtonIconsProps) {
  const { cartProducts } = useProduct();
  /*function reducer (previousValue:number, currentValue: number) : number { return previousValue + currentValue }*/
  return (
    <>
      <Button onClick={() => callback(param)} icon={icon}>
        <Total>{cartProducts.length}</Total>
        <img src={icon} alt="image" />
      </Button>
    </>
  );
}
export default ButtonCart;
