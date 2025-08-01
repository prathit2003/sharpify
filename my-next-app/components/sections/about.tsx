import DashboardIcon from "@mui/icons-material/Dashboard";
const AbouT = () => {
  return (
    <>
      <div className="flex items-center bg-card rounded-2xl justify-between pl-8 py-8 my-16 mx-8 h-[80vh] overflow-hidden">
        {/* Left Content (1/3) */}
        <div className="w-1/3 flex flex-col justify-between h-full pr-6">
          <div className="flex items-center mt-4">
            <DashboardIcon
              sx={{
                fontSize: { xs: 12, md: 24 },
                color: "#f9e8c0",
              }}
            />
            <h1 className="ml-2 text-main font-semibold text-md md:text-xl lg:text-3xl text-left">
              About
            </h1>
          </div>
          <div className="space-y-4 mb-4">
            <h3 className="text-main text-md md:text-xl lg:text-3xl">
              Empowering Creativity Through AI-Driven Image Enhancement
            </h3>
            <p className="text-gray-400 text-xs md:text-md lg:text-lg">
              At Refyned, we're redefining the way creators, developers, and
              everyday users improve their visuals. Whether you're touching up a
              photo, removing noise, fixing resolution, or transforming old
              visuals into stunning high-quality assets, Refyned gets it done
              instantly and beautifully.
            </p>
          </div>
        </div>

        {/* Right Image (2/3) */}
        <div className="w-2/3 h-full rounded-l-xl overflow-hidden">
          <img
            src="images/about.png"
            alt="about section image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default AbouT;
