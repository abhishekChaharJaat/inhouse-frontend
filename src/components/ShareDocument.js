import React from "react";
import Button from "./Button";

const ShareDocument = (props) => {
  const { next } = props;
  return (
    <div className="px-20">
      {/* Step 1 */}
      <div className="my-4 ">
        <p className="pb-2 text-md font-semibold">Document</p>
        <div class="flex items-center shadow-sm   justify-between rounded-md bg-white">
          <input
            type="file"
            class="px-4 m-0 py-2 text-gray-700 focus:outline-none w-full rounded-md bg-transparent "
          />
          <button className="border border-black px-2 rounded-md mx-2 bg-transparent">
            Upload
          </button>
        </div>
      </div>
      <div className="my-4 ">
        <p className="pb-2 text-md font-semibold">
          Describe what you are looking for
        </p>
        <div class="flex items-center  justify-between border border-gray-300 rounded-md bg-white">
          <textarea
            rows="3"
            type="text"
            placeholder="Give us more details of the document you want to generate. This helps our AI to personalise the document to cater to your needs."
            class="px-4 m-0 py-2 text-gray-700 focus:outline-none w-full rounded-md bg-transparent shadow-sm"
          />
        </div>
        <div className="flex justify-end w-full py-4 my-2">
          <Button
            text="Continue"
            className="bg-black text-white !rounded-md !px-4 !py-2 text-xl m-0 hover:!text-black border border-black"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
};

export default ShareDocument;
