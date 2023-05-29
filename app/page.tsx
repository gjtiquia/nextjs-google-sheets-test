"use client"

import { useState } from "react";

const testData = {
  stuff: "hi",
  stuff2: "hi2"
}

const testData2 = {
  stuff4: "hi2",
  stuff5: "hi3"
}

export default function Home() {
  const [outputData, setOutputData] = useState<any>(testData);

  const fetchData = () => {
    // TODO : fetch data from google sheets and set output data

    setOutputData(testData2);
  }

  return (
    <main>
      <h1>NextJS Google Sheets Test</h1>

      <div className="flex flex-col gap-4">
        <button
          className="bg-slate-500 px-4 py-2 rounded-lg w-fit"
          onClick={fetchData}
        >
          Fetch
        </button>

        <code>{JSON.stringify(outputData)}</code>
      </div>

    </main>
  )
}
