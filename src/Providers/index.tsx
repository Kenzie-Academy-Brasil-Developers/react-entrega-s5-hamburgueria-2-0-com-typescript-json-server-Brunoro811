import { ReactNode } from "react";
import { ProductProvider } from "./Products";
import { UsersProvider } from "./Users";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <UsersProvider>
      <ProductProvider>{children}</ProductProvider>
    </UsersProvider>
  );
};
export default Providers;
