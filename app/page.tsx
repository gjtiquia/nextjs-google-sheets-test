"use client"

import { useState, useTransition } from "react";
import { fetchData } from "./actions";
import { MyButton } from "@/components/MyButton";

const testData = {
  stuff: "hi",
  stuff2: "hi2"
}

const testData2 = {
  stuff4: "hi2",
  stuff5: "hi3"
}

export default function Home() {
  let [isPending, startTransition] = useTransition();
  const [outputData, setOutputData] = useState<any>(testData);

  const fetchButtonClick = () => {
    startTransition(async () => {
      console.log("server clicked!");

      // const response = await fetchData(); // TODO

      setOutputData(testData2);
    })
  }

  return (
    <main>
      <h1>NextJS Google Sheets Test</h1>

      <div className="flex flex-col gap-4">
        <MyButton onClick={fetchButtonClick} />
        <code>{JSON.stringify(outputData)}</code>
      </div>

    </main>
  )
}
