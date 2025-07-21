import React from "react";
import { useState } from "react";
import { Sparkles, Hash, Image } from "lucide-react";
function GenerateImages() {
  const ImageStyle = [
    "Realistic",
    "Cartoon",
    "Ghibli",
    "Anime",
    "3D Style",
    "Pixel Art",
    "Abstract",
    "Minimalist",
    "Surreal",
    "Vintage",
    "Cyberpunk",
    "Fantasy",
    "Sci-Fi",
    "Nature",
    "Portrait",
    "Landscape",
    "Urban",
  ];

  const [selectedCategory, setSelectedCategory] = useState(ImageStyle[0]);
  const [input, setInput] = useState("");

  const [publish, setPublish] = useState(false);

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
          <h1 className="text-xl font-semibold">AI Image Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Describe Your Image</p>
        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          rows={4}
          className="w-full p-2 px-3 mt-2 outline-none text-sm 
        rounded-md border border-gray-300 focus:border-[#9e4aff] focus:ring-1 focus:ring-[#9e4aff]"
          placeholder="Describe the image you want to generate, e.g., a futuristic cityscape"
          required
        />
        <p className="mt-4 text-sm font-medium">Choose Your Style</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {ImageStyle.map((item) => (
            <span
              onClick={() => setSelectedCategory(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                selectedCategory === item
                  ? "border-purple-500 bg-purple-100"
                  : "border-gray-300"
              }`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="my-6 flex items-center gap-2">
          <label className="relative cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => setPublish(e.target.checked)}
              checked={publish}
              className="sr-only peer"
            />
            <span
              className='block w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-purple-500 
      relative after:content-[""] after:absolute after:top-0.5 after:left-0.5 
      after:w-4 after:h-4 after:bg-white after:rounded-full 
      after:transition-transform after:duration-200 after:transform 
      peer-checked:after:translate-x-5'
            ></span>
          </label>
          <p className="text-sm">Make This Image Public</p>
        </div>

        <button
          className="w-full flex justify-center items-center gap-2 
        bg-gradient-to-r from-[#b04fc4] to-[#bd47f8] text-white py-2 px-4 rounded-lg mt-6 text-sm cursor-pointer"
        >
          <Image className="w-5" />
          Generate Image
        </button>
      </form>

      {/**right col */}
      <div
        className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border 
      border-gray-200 min-h-96 max-h-[600px]"
      >
        <div className="flex items-center gap-3 ">
          <Image className="w-5 h-5 text-[#9e4aff]" />
          <h1 className="text-xl font-semibold font-poppins">
            Generated Image
          </h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div
            className="text-sm flex flex-col items-center gap-5 
          text-gray-400"
          >
            <Image className="w-9 h-9 " />
            <p>Enter a prompt and click "Generate Image" to get started.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerateImages;
