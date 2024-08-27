const Header = () => {
  return (
    <header className="w-full " id="home">
      <div className="h-[50dvh] w-[65%] lg:h-dvh lg:max-w-[81.5rem] flex flex-col mx-auto justify-center px-4">
        <p className="text-sm md:pb-0 md:text-md lg:text-lg text-left tracking-wide pl-1 lg:pl-16">
          James Freitag
        </p>
        <h1 className="leading-none w-full text-left lg:text-center text-sky-400 md:leading-[6rem] lg:leading-[5.5rem]">
          Front End Developer
        </h1>
      </div>
    </header>
  );
};

export default Header;
