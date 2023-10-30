import React from "react";

interface inputFile {
  title: string;
  placeholder: string;
}

function InputCard(props: inputFile) {
  let {title, placeholder} = props;
  return (
    <div>
      <div className="text-base font-medium text-cyan-950 mb-2">{title}</div>
      <div>
        <input
          className="w-full p-3 border border-slate-300 rounded-md focus:outline-none"
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
