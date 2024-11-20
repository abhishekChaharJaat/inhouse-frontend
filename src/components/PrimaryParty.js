import React from "react";
import Button from "./Button";
import QuestionsBox from "./QuestionsBox";

const PrimaryParty = (props) => {
  const { next } = props;
  return (
    <div className="px-20">
      <QuestionsBox
        que="Who’s on the receiving end of the document?"
        isExpend={true}
      />
      <div className="flex justify-end w-full  py-4 my-2 px-6">
        <Button
          text="Continue"
          className="bg-black text-white !rounded-md !px-4 !py-2 text-xl m-0 hover:!text-black border border-black"
          onClick={next}
        />
      </div>
    </div>
  );
};

export default PrimaryParty;
