import React from "react";
import Button from "./Button";
import QuestionsBox from "./QuestionsBox";

const FinalTouch = (props) => {
  const { next } = props;
  return (
    <div className="px-20">
      <QuestionsBox que="What is your domain or URL of your website?" />
      <QuestionsBox que="What types of medication or products does MedInc sell?" />
      <QuestionsBox que="Will any data be collected from children 13 and under?" />
      <QuestionsBox que="Can users of the website post comments or reviews?" />

      <div className="flex justify-end w-full py-4 my-2">
        <Button
          text="Generate Document"
          className="bg-black text-white !rounded-md !px-4 !py-2 text-xl m-0 hover:!text-black border border-black"
          onClick={next}
        />
      </div>
    </div>
  );
};

export default FinalTouch;
