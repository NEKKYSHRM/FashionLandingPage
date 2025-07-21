import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-[#c81059] flex flex-col items-center justify-center">
      <section className="hero w-full px-6 pt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Hero Image */}
        <div className="w-[30vw] h-[400px] md:h-[480px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
          <Image src="/images/1.png" alt="Hero" fill className="object-cover" />
        </div>

        {/* Right: Content */}
        <div className="text-white space-y-6 text-center md:text-left">
          <h3 className="text-7xl font-heading text-[#FFF2F5]">
            Hi, I'm Jhanvi
          </h3>
          <p className="text-2xl text-[#FFF2F5]">
            I help girls glow with confidence
          </p>
          <button
            className="px-6 py-3 rounded-lg text-xl text-white font-normal hover:brightness-110 transition"
            style={{ backgroundColor: "#F4A300" }}
          >
            Work with Me
          </button>
        </div>
      </section>

      <section className="w-full px-40 pt-12 pb-6 grid grid-cols-[35%_65%] gap-10">
        <div className="w-full">
          <h3 className="text-5xl pb-12 font-heading text-[#FFF2F5]">
            Latest Looks
          </h3>
          <div className="w-[24vw] h-full flex justify-center items-start relative rounded-lg overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="rounded-lg shadow-lg w-full max-w-md"
            >
              <source src="/videos/1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="w-full grid grid-cols-2">
          <div className="w-full flex flex-col gap-10">
            <div className="w-[20vw] h-full md:h-[30vw] flex justify-center items-center relative rounded-lg overflow-hidden ">
              <Image
                src="/images/s3.png"
                alt="Hero"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-5xl pb-5 font-heading text-[#FFF2F5]">
                Skincare <br /> Tips
              </h3>
              <p className="text-white text-2xl cursor-pointer hover:underline">View More</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-[20vw] h-[20vh] md:h-[25vw] flex justify-center items-center relative rounded-lg overflow-hidden ">
              <Image
                src="/images/s2.png"
                alt="Hero"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-[20vw] h-full md:h-[24vw] flex justify-center items-center relative rounded-lg overflow-hidden ">
              <Image
                src="/images/s1.png"
                alt="Hero"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col px-40 py-10">
        <h3 className="text-5xl pb-12 font-heading text-[#FFF2F5]">
            Brands I've Worked With
          </h3>
      </section>
    </div>
  );
}
