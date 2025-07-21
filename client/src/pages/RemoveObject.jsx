import React from 'react'
import { useState } from 'react'
import { Sparkles, Eraser, Scissors } from 'lucide-react'
function RemoveObject() {

  const [input, setInput] = useState("");
  const [object, setObject] = useState("");

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
          <h1 className="text-xl font-semibold">AI Object Remover</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Upload Image</p>
        <input
          type="file"
          onChange={(e) => setInput(e.target.files[0])}
          input="file"
          accept="image/*"
          className="w-full p-2 px-3 mt-2 outline-none text-sm 
        rounded-md border border-gray-300 focus:border-[#9e4aff] focus:ring-1 focus:ring-[#9e4aff]"
         required
        />
        <p className="mt-6 text-sm font-medium">Describe the object to remove</p>
        <textarea
          onChange={(e) => setObject(e.target.value)}
          value={object}
          rows={4}
          className="w-full p-2 px-3 mt-2 outline-none text-sm 
        rounded-md border border-gray-300 focus:border-[#9e4aff] focus:ring-1 focus:ring-[#9e4aff]"
          placeholder="Describe the object you want to remove, e.g., a person, a car"
          required
        />      

        <button
          className="w-full flex justify-center items-center gap-2 
        bg-gradient-to-r from-[#b04fc4] to-[#bd47f8] text-white py-2 px-4 rounded-lg mt-6 text-sm cursor-pointer"
        >
          <Scissors className="w-5" />
         Remove Object
        </button>
      </form>

      {/**right col */}
      <div
        className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border 
      border-gray-200 min-h-96 max-h-[600px]"
      >
        <div className="flex items-center gap-3 ">
          <Scissors className="w-5 h-5 text-[#9e4aff]" />
          <h1 className="text-xl font-semibold font-poppins">
            Processed Image
          </h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div
            className="text-sm flex flex-col items-center gap-5 
          text-gray-400"
          >
            <Scissors className="w-9 h-9 " />
            <p>Upload an image to remove the object from the image.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RemoveObject