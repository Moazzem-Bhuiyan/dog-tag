"use client"
import { useState } from 'react';
import Image from 'next/image';
// import dogTagImage from '../public/dogtag.jpg'; // Adjust path as needed

export default function DogTagEditor() {
  const [inputTag1Text, setInputTag1Text] = useState(["", "", "", "", ""]);
  const [inputTag2Text, setInputTag2Text] = useState(["", "", "", "", ""]);
  const [previewTag1Text, setPreviewTag1Text] = useState(["", "", "", "", ""]);
  const [previewTag2Text, setPreviewTag2Text] = useState(["", "", "", "", ""]);

  const handleInputTag1Change = (index, value) => {
    setInputTag1Text((prev) => {
      const newText = [...prev];
      newText[index] = value;
      return newText;
    });
  };

  const handleInputTag2Change = (index, value) => {
    setInputTag2Text((prev) => {
      const newText = [...prev];
      newText[index] = value;
      return newText;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreviewTag1Text(inputTag1Text);
    setPreviewTag2Text(inputTag2Text);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-800 text-white p-6">
      {/* Preview Section */}
      <h2 className="text-center text-2xl font-semibold mb-4">My Dog Tag Preview</h2>
      <div className="flex justify-center gap-8 mb-6">
        <div className="relative">
          {/* <Image src={dogTagImage} alt="Dog Tag 1" width={200} height={100} className="rounded" /> */}
          {previewTag1Text.map((line, index) => (
            <div
              key={index}
              className="absolute text-black font-bold"
              style={{
                top: `${20 + index * 20}px`,
                left: '50px',
              }}
            >
              {line}
            </div>
          ))}
        </div>
        <div className="relative">
          {/* <Image src={dogTagImage} alt="Dog Tag 2" width={200} height={100} className="rounded" /> */}
          {previewTag2Text.map((line, index) => (
            <div
              key={index}
              className="absolute text-black font-bold"
              style={{
                top: `${20 + index * 20}px`,
                left: '50px',
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* Buy Now Button */}
      <button className="mb-6 px-6 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700">
        Buy Now 💸
      </button>

      {/* Text Modification Section */}
      <h2 className="text-center text-2xl font-semibold mb-4">Modify Custom Text</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex justify-center gap-10 mb-4">
          {/* Dog Tag 1 Input Fields */}
          <div>
            <h3 className="text-xl mb-2 text-center font-semibold">Dog Tag 1</h3>
            {inputTag1Text.map((line, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Line ${index + 1}`}
                value={line}
                onChange={(e) => handleInputTag1Change(index, e.target.value)}
                className="block my-10 w-20 h-20 px-3 py-2 text-black text-center rounded border border-gray-300"
              />
            ))}
          </div>

          {/* Dog Tag 2 Input Fields */}
          <div>
            <h3 className="text-xl mb-2 text-center font-semibold">Dog Tag 2</h3>
            {inputTag2Text.map((line, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Line ${index + 1}`}
                value={line}
                onChange={(e) => handleInputTag2Change(index, e.target.value)}
                className="block my-10 w-20 h-20 px-3 py-2 text-black text-center rounded border border-gray-300"
              />
            ))}
          </div>
        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="mt-4 px-8 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
        >
          Update Dog Tags
        </button>
      </form>
    </div>
  );
}
