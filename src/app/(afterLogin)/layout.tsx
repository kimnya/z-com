import { ReactNode } from "react";

type props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function layout({ children }: props) {
  return <div>{children}</div>;
}
