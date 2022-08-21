import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import kendoka from "../assets/kendoka.svg";
import Image from "next/image";
import Calculator from "../components/Calculator";

export default function Home() {
  const handleClick = React.useCallback(() => {
    window.open("https://www.telerik.com/kendo-react-ui/components/", "_blank");
  }, []);

  return (
    <div className="container p-5 h-full">
      <div className="flex flex-col justify-center items-center space-y-2">
        <Image src={kendoka} className="App-logo" alt="kendoka" />
        <h1 className="shrink grow-0 self-center text-3xl font-bold underline pb-5">
          Edit <code>src/App.tsx</code> and save to reload.
        </h1>
        <Button themeColor={"primary"} size={"large"} onClick={handleClick}>
          Learn KendoReact
        </Button>
        <Calculator />
      </div>
    </div>
  );
}
