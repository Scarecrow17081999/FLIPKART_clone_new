import React from "react";
import Details from "../components/prefooter/Details";
import { footer } from "../../data.json";
const PreFooter = () => {
  const { productPreFooter } = footer;
  return (
    <div className="mt-8 px-5 py-4 prefooter-color sm:hidden md:hidden lg:block">
      {productPreFooter.map((data, i) => (
        <Details key={i} heading={data.heading} content={data.content} />
      ))}
    </div>
  );
};

export default PreFooter;
