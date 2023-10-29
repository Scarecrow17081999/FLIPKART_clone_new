import React from "react";
import Details from "../components/prefooter/Details";
import { footer } from "../../data.json";
const PreFooter = () => {
  const { preFooter } = footer;
  return (
    <div className="mt-20 px-5 py-4 prefooter-color sm:hidden md:hidden lg:block">
      {preFooter.map((data, i) => (
        <Details key={i} heading={data.heading} content={data.content} />
      ))}
    </div>
  );
};

export default PreFooter;
