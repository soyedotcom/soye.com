const ProjectFolder = ({ bg, folderName }) => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="relative h-45 w-55 hover:cursor-pointer hover:-translate-y-5 hover:scale-110 transition delay-150 duration-300 ease-in-out">
          <div
            className={`bg-${bg}-400 absolute rounded-lg inset-0 w-[50%]`}
          ></div>
          <div
            className={`bg-${bg}-400 absolute rounded-lg bottom-0 left-0 right-0 h-[90%] flex justify-center items-center`}
          >
            <p className="font-bold text-2xl text-[#ffffff] text-center">
              {folderName}
            </p>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div>
          <p className="font-bold text-xl underline">{folderName}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectFolder;
