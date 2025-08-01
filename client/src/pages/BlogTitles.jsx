import React from 'react'
import { useState } from 'react';
import { Sparkles, Edit, Hash } from 'lucide-react';
function BlogTitles() {
   const blogCategories= [
   'General', 'Technology', 'Health', 'Lifestyle', 'Travel', 'Finance',
   'Education', 'Entertainment', 'Food', 'Sports', 'Fashion', 'Business',
   'Science', 'Politics', 'Environment', 'Art', 'History', 'Culture',
   'Gaming', 'Parenting', 'Self-Improvement', 'Relationships', 'News',
   'Real Estate', 'Automotive', 'Pets', 'DIY', 'Home Improvement',
  ];

  const [selectedCategory, setSelectedCategory] = useState(blogCategories[0]);
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
          <h1 className="text-xl font-semibold">AI Blog Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Keyword</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm 
        rounded-md border border-gray-300 focus:border-[#9e4aff] focus:ring-1 focus:ring-[#9e4aff]"
          placeholder="The different types of cultures around the world"
        />
        <p className="mt-4 text-sm font-medium">Category</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {blogCategories.map((item) => (
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
        <br></br>
        <button
          className="w-full flex justify-center items-center gap-2 
        bg-gradient-to-r from-[#b04fc4] to-[#bd47f8] text-white py-2 px-4 rounded-lg mt-6 text-sm cursor-pointer"
        >
          <Hash className="w-5" />
          Generate Blog
        </button>
      </form>





      {/**right col */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border 
      border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3 ">
          <Hash className="w-5 h-5 text-[#9e4aff]" />
          <h1 className="text-xl font-semibold font-poppins">Generated Blog</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 
          text-gray-400">
            <Hash className="w-9 h-9 " />
            <p>Enter a topic and click "Generate Blog" to get started.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogTitles