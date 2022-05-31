const About = () => {
  return (
    <main>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://cdn.lorem.space/images/hotel/.cache/500x180/man-pan-KTSYy-3XVSo-unsplash.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">About</h1>
                <p className="mt-4 text-lg text-white">
                  This is a simple example of a About Page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
