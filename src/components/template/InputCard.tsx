import React from "react";

interface inputFile {
  title: string;
  placeholder: string;
}

function InputCard(props: inputFile) {
  let {title, placeholder} = props;
  return (
    <div>
      <div className="md:text-base text-lg font-medium text-cyan-950 md:mb-2 mb-1.5">
        {title}
      </div>
      <div>
        <input
          className="w-full md:p-3 p-1.5 border border-slate-300 rounded-md focus:outline-none placeholder:text-lg md:placeholder:text-xl"
          type="text"
          name=""
          id=""
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default InputCard;
