import {
  faPalette,
  faAlignCenter,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
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
                <h1 className="text-white font-semibold text-5xl">Welcome</h1>
                <p className="mt-4 text-lg text-white">
                  This is a simple example of a Landing Page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-20 bg-slate-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-sm rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-sm rounded-full bg-blue-400">
                    <FontAwesomeIcon icon={faPalette} />
                  </div>
                  <h6 className="text-xl font-semibold">Lorem ipsum</h6>
                  <p className="mt-2 mb-4 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur repellendus, deleniti id et ducimus explicabo
                    necessitatibus perferendis minima aliquam qui quisquam ipsum
                    fugiat at saepe doloremque expedita laboriosam nihil beatae.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-sm rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-sm rounded-full bg-blue-400">
                    <FontAwesomeIcon icon={faAlignCenter} />
                  </div>
                  <h6 className="text-xl font-semibold">Lorem ipsum</h6>
                  <p className="mt-2 mb-4 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur repellendus, deleniti id et ducimus explicabo
                    necessitatibus perferendis minima aliquam qui quisquam ipsum
                    fugiat at saepe doloremque expedita laboriosam nihil beatae.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-sm rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-sm rounded-full bg-blue-400">
                    <FontAwesomeIcon icon={faBookBookmark} />
                  </div>
                  <h6 className="text-xl font-semibold">Lorem ipsum</h6>
                  <p className="mt-2 mb-4 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur repellendus, deleniti id et ducimus explicabo
                    necessitatibus perferendis minima aliquam qui quisquam ipsum
                    fugiat at saepe doloremque expedita laboriosam nihil beatae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative block bg-neutral-700">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-neutral-700 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:pt-20 lg:pb-32 py-4">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Lorem ipsum,
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                non iste facilis magnam, illum explicabo, voluptate reiciendis
                cumque consequuntur illo fuga ea veniam ratione voluptatem
                exercitationem vel aliquam. Quo, sapiente?
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-neutral-800 p-1 w-24 h-24 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <img
                  alt="..."
                  src="https://picsum.photos/200"
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">Lorem</h6>
              <p className="mt-2 mb-4 text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                vitae perspiciatis qui distinctio provident.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-neutral-800 p-1 w-24 h-24 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <img
                  alt="..."
                  src="https://picsum.photos/200"
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">Lorem</h6>
              <p className="mt-2 mb-4 text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                vitae perspiciatis qui distinctio provident.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-neutral-800 p-1 w-24 h-24 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <img
                  alt="..."
                  src="https://picsum.photos/200"
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">Lorem</h6>
              <p className="mt-2 mb-4 text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                vitae perspiciatis qui distinctio provident.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
