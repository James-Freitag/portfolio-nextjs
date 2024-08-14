const Header = () => {
  return (
    <header id="home">
      <div className="h-dvh w-auto lg:w-[81.5rem] flex flex-col justify-center px-4">
        <p className="text-sm md:text-md lg:text-lg text-center lg:text-left tracking-wide pl-1">
          James Freitag
        </p>
        <h1 className=" text-5xl md:text-7xl lg:text-[8rem] w-full text-center lg:text-left text-sky-400 whitespace-nowrap leading-[5.5rem]">
          Front End Developer
        </h1>
      </div>
    </header>
  );
};

export default Header;
