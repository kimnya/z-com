import { ReactNode } from "react";

type props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function layout({ children }: props) {
  return <div>비포 레이아웃{children}</div>;
}
