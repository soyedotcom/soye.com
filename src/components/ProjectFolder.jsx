const colours = {
  red: "bg-red-400",
  blue: "bg-blue-400",
  green: "bg-green-400",
};

const ProjectFolder = ({ bg, folderName }) => {
  const colour = colours[bg];
  return (
    <>
      <div className="hidden md:block">
        <div className="relative h-45 w-55 hover:cursor-pointer hover:-translate-y-5 hover:scale-110 transition delay-150 duration-300 ease-in-out">
          <div
            className={`${colour} absolute rounded-lg inset-0 w-[50%]`}
          ></div>
          <div
            className={`${colour} absolute rounded-lg bottom-0 left-0 right-0 h-[90%] flex justify-center items-center`}
          >
            <p className="font-bold text-2xl text-[#ffffff] text-center">
              {folderName}
            </p>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div>
          <p className="font-bold text-xl underline">{folderName}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectFolder;
