import Pp from "../assets/pp.png";
import CV from "../assets/cv.pdf";

const Hero = () => {
  return (
    <section id="hero" className="md:h-screen">
      <div className="container h-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full pt-16 gap-16">
          <div className="grid md:justify-end gap-4 text-center order-3 md:order-1">
            <h1 className="text-5xl">
              Furkan
              <br />
              Kayikci
            </h1>

            <h2 className="font-semibold text-2xl">Frontend Developer</h2>

            <span className="flex justify-center gap-4">
              <a href="https://github.com/mfurkankayikci" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/furkankayikci/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </span>

            <p className="max-w-[40ch] mx-auto">
              Frontend Web Developer with nearly 6 years of experience.
            </p>

            <a href={CV} target="_blank">
              <span className="fold-bold relative inline-block h-fit w-fit rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                Resume
              </span>
            </a>
          </div>

          <div className="grid relative justify-center order-2">
            <img
              src={Pp}
              alt="Profile picture of Furkan Kayikci"
              className="h-[352px] w-[352px] object-cover z-10 rounded-full bg-white"
            />

            <span className="absolute top-0 right-0 z-0 w-full h-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <path
                  fill="#FACC15"
                  d="M159.8 79.5c7.9 25.4-2.3 55.6-20.4 67-18.2 11.3-44.4 3.8-66.6-11.7-22.2-15.5-40.5-39.1-35.3-60.9 5.1-21.7 33.8-41.5 61.1-41.1 27.3.5 53.3 21.2 61.2 46.7z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
