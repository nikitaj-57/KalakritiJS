"use client";
import Board from "@/components/Board";
import Menu from "@/components/Menu";
import Toolbox from "@/components/Toolbox";
import { store } from "@/store";
import { Provider } from "react-redux";
export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Menu />
        <Toolbox />
        <Board />
      </Provider>
    </>
  );
}
