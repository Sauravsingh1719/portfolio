import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["A Full Stack Developer", "An Athelete", "A Writer"];

  return (
    <div className="h-full flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
