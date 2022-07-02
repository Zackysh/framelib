import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import Unauthorized from "../components/401";

export type CustomNextPage = NextPage & {
  /**  */
  getLayout?: (page: ReactElement) => ReactNode;
  /** If true, authentication status will be checked before accessing this page. */
  authRequired?: boolean;
};

type CustomProps = AppProps & {
  Component: CustomNextPage;
};

export default function MyApp({ Component, pageProps }: CustomProps) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  // Protect routes when required
  if (Component.authRequired === true) {
    return <Unauthorized></Unauthorized>;
  }

  return getLayout(<Component {...pageProps} />);
}
