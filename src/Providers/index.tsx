import { ReactNode } from "react";
import { UsersProvider } from "./Users";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return <UsersProvider>{children}</UsersProvider>;
};
export default Providers;
