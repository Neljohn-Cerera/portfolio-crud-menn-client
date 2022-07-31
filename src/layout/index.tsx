import { ReactElement } from "react";
import Navbar from "../components/navbar";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="bg-gray-100 flex flex-col px-2">{children}</main>
      {/* <Footer /> */}
      <footer className="py-2 bg-green-500">
        <p className="text-center my-auto text-xs">Alrights Reserved 2022</p>
      </footer>
    </div>
  );
}
