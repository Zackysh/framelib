import { PropsWithChildren, ReactElement } from "react";

export default function HomeLayout({
  children,
}: PropsWithChildren): ReactElement {
  return (
    <>
      <div className="h-14 bg-red-200"></div>
      <main>{children}</main>
      <div className="h-14 bg-amber-200"></div>
    </>
  );
}
