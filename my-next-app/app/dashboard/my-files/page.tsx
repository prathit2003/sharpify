"use client";

import useImageStore from "@/app/store/fileupload";
import { Button } from "@/components/ui/button";
import { CldUploadWidget } from "next-cloudinary";

const Myfiles = () => {
  const { setUploadedUrl, uploadedUrl } = useImageStore();
  return (
    <div className="h-full w-full bg-header border-1 rounded-2xl px-4 py-8 min-md:px-2 min-md:py-4">
      <div className="flex flex-col h-auto w-full items-center justify-start gap-4">
        <div className="h-full w-full px-4 py-8 min-md:px-2 min-md:py-4">
          {/* Header Row */}
          <div className="flex items-center justify-between px-4 mb-6">
            <h2 className="text-xl font-semibold text-white">Files</h2>
            <button className="flex items-center gap-1 bg-gradient-purple text-white px-4 py-2 rounded-lg hover:scale-105 transition-all">
              {/* Plus Icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              New
            </button>
          </div>

          {/* Files Grid - Multiple Folders */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Documents" },
              { name: "Images" },
              { name: "Projects" },
              { name: "Videos" },
            ].map((folder) => (
              <div
                key={folder.name}
                className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 hover:scale-105 transition-all cursor-pointer"
              >
                {/* Folder Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-yellow-400 mb-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 4a2 2 0 012-2h4l2 2h6a2 2 0 012 2v1H2V4z" />
                  <path d="M2 7h16v7a2 2 0 01-2 2H4a2 2 0 01-2-2V7z" />
                </svg>
                <span className="text-sm text-white">{folder.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-full p-8 text-center bg-none  ">
          <div>
            <h1 className="text-4xl font-semibold text-white">
              upload file to cloud storage
            </h1>
            <p className="text-lg font-medium text-grey-400">
              Enjoy free clooud storage upto 200 MB and 20GB more with pro plan.
            </p>
          </div>
          <CldUploadWidget
            uploadPreset="prathit_web_images"
            onSuccess={(result) => {
              if (
                result?.info &&
                typeof result.info === "object" &&
                "secure_url" in result.info
              ) {
                console.log(result.info.secure_url);
                setUploadedUrl(result.info.secure_url);
              }
            }}
            onQueuesEnd={(result, { widget }) => {
              widget.close();
            }}
          >
            {({ open }) => {
              function handleOnClick() {
                open();
              }
              return (
                <Button
                  variant={"outline"}
                  className="group relative items-center rounded-4xl gap-2 bg-gradient-purple transition-all hover:scale-105  active:scale-95 text-white"
                  size={"lg"}
                  onClick={handleOnClick}
                >
                  Upload file
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 transition-transform group-hover:scale-110"
                  >
                    <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12v-9" />
                  </svg>
                  <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-card-foreground/10 opacity-0 transition-opacity group-hover:opacity-100"></span>
                </Button>
              );
            }}
          </CldUploadWidget>
        </div>
      </div>
    </div>
  );
};
export default Myfiles;
