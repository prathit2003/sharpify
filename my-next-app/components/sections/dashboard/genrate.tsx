"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CreateIcon from "@mui/icons-material/Create";
import { useState } from "react";
const GenrateImage = () => {
  const handleinput = () => {
    console.log(value);
  };
  const [value, setValue] = useState("");
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 w-full h-full">
        <h1 className="text-main text-xl md:text-2xl lg:text-3xl">
          what do you want to create?
        </h1>
        <div className="bg-card flex items-center justify-around space-x-4 shadow-2xl rounded-full p-4 md:p-6 w-[50vw]">
          <Input
            type="text"
            value={value}
            onFocus={() => {
              if (value === "") setValue("");
            }}
            onChange={(e) => {
              setValue(e.target.value);
              handleinput();
            }}
            placeholder="type your idea here"
            className="bg-transparent text-sm md:text-base lg:text-lg text-gray-300 outline-none border-none ring-0 focus:outline-none focus:ring-0 focus:border-none"
          />
          <Button className="rounded-full p-2 bg-header text-main hover:scale-105 shadow-lg hover:shadow-xl">
            <CreateIcon fontSize="small" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default GenrateImage;
