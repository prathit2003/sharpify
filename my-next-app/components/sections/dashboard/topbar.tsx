import { Button } from "@/components/ui/button";

const Topbar = () => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };
  return (
    <div className="flex items-center justify-between fixed top-0 left-0 w-full  bg-header py-4 px-10 ">
      <div className="flex items-center justify-center">
        <img
          src="/icons/logo.svg"
          alt="Icon"
          className="h-4 w-15 md:h-10 md:w-30"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Button
          className="bg-gradient-purple rounded-2xl text-white text-lg pb-2 transition-all duration-300 hover:scale-105 mx-4"
          onClick={handleLogout}
        >
          logout
        </Button>
        <div
          className="h-8 w-8 rounded-full cursor-pointer border-1 border-white hover:scale-105 transition-all duration-300 bg-none flex items-center justify-center"
          onClick={handleLogout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 19.5a8.25 8.25 0 0115 0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
