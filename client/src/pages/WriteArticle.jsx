import React, { useState } from "react";
import { Edit, Sparkles } from "lucide-react";
function WriteArticle() {
  const articleLength = [
    { length: 700, text: "Short (500-800 words)" },
    { length: 1200, text: "Medium (1000-1500 words)" },
    { length: 2600, text: "Long (1500+ words)" },
  ];

  const [selectedLength, setSelectedLength] = useState(articleLength[0]);
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="h-full overflow-y-scroll p-6 flex items-start flex-wrap 
    gap-6"
    >
      {/**left col */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg 
      border border-gray-200 "
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#9e4aff]" />
          <h1 className="text-xl font-semibold">Article Configuration</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Article Topic</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm 
        rounded-md border border-gray-300 focus:border-[#9e4aff] focus:ring-1 focus:ring-[#9e4aff]"
          placeholder="The future of EVs"
        />
        <p className="mt-4 text-sm font-medium">Article Length</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {articleLength.map((item, index) => (
            <span
              onClick={() => setSelectedLength(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                selectedLength.text === item.text
                  ? "border-purple-500 bg-purple-100"
                  : "border-gray-300"
              }`}
              key={index}
            >
              {item.text}
            </span>
          ))}
        </div>
        <br></br>
        <button
          className="w-full flex justify-center items-center gap-2 
        bg-gradient-to-r from-[#b04fc4] to-[#bd47f8] text-white py-2 px-4 rounded-lg mt-6 text-sm cursor-pointer"
        >
          <Edit className="w-5" />
          Generate Article
        </button>
      </form>





      {/**right col */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border 
      border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3 ">
          <Edit className="w-5 h-5 text-[#9e4aff]" />
          <h1 className="text-xl font-semibold font-poppins">Article View</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 
          text-gray-400">
            <Edit className="w-9 h-9 " />
            <p>Enter a topic and click "Generate Article" to get strarted.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteArticle;
