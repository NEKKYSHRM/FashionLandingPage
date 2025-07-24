import { Link } from "lucide-react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  
  return (
    <div className="w-full meme flex flex-col items-center justify-center">
      <section className="hero w-full pb-7 rounded-b-2xl md:pb-0 md:px-6 pt-16 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 items-center">
        {/* Left: Hero Image */}
        <div className="w-[72vw] md:w-[30vw] h-[72vw] md:h-[480px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
          <Image src="/images/1.png" alt="Hero" fill className="object-cover" />
        </div>

        {/* Right: Content */}
        <div className="text-white space-y-3 md:space-y-6 text-center md:text-left">
          <h3 className="text-5xl md:text-7xl font-heading text-[#FFF2F5]">
            Hi, I'm Jhanvi
          </h3>
          <p className="text-xl md:text-2xl text-[#FFF2F5]">
            I help girls glow with confidence
          </p>
          <button
            className="px-4 py-2 md:px-6 md:py-3 rounded-sm md:rounded-lg text-sm md:text-xl text-white font-normal hover:brightness-110 transition"
            style={{ backgroundColor: "#F4A300" }}
          >
            Work with Me
          </button>
        </div>
      </section>

      <section className="w-full px-6 md:px-40 pt-8 md:pt-12 pb-6 grid grid-cols-[35%_65%] md:gap-10 place-content-center">
        <div className="w-full">
          <h3 className="text-xl md:text-5xl pb-5 md:pb-12 font-heading text-[#FFF2F5]">
            Latest Looks
          </h3>
          <div className="w-[28vw] md:w-[24vw] h-full flex justify-center items-start relative rounded-lg overflow-hidden">
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
        <div className="w-full grid grid-cols-2 place-content-center justify-center">
          <div className="w-full flex flex-col gap-5 md:gap-10 justify-center">
            <div className="w-[20vw] md:w-[20vw] h-[40vw] md:h-[30vw] flex justify-center items-center relative rounded-lg overflow-hidden ">
              <Image
                src="/images/s3.png"
                alt="Hero"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg md:text-5xl pb-2 md:pb-5 font-heading text-[#FFF2F5]">
                Skincare <br /> Tips
              </h3>
              <p className="text-white text-[9px] md:text-xl cursor-pointer underline">
                View More
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 justify-center">
            <div className="w-[20vw] h-[20vh] md:h-[25vw] flex justify-center items-center relative rounded-lg overflow-hidden">
              <Image
                src="/images/s2.png"
                alt="Hero"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-[20vw] h-full md:h-[24vw] flex justify-center items-center relative rounded-lg overflow-hidden">
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

      <section className="w-full flex flex-col px-6 md:px-40 py-3 md:py-10">
        <h3 className="text-xl md:text-5xl pb-3 md:pb-8 font-heading text-[#FFF2F5]">
          Brands I've Worked With
        </h3>
        {/* Upper */}
        <div className="overflow-hidden w-full md:py-1">
          <div className="relative w-[200%] flex animate-slide-horizontal">
            {/* Image Set 1 */}
            <div className="flex gap-8 w-1/2 justify-around">
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l1.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l3.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l1.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l3.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Image Set 2 (duplicate for seamless loop) */}
            <div className="flex gap-8 w-1/2 justify-around">
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l1.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l3.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l1.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l3.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Lower */}
        <div className="overflow-hidden w-full md:py-1">
          <div className="relative w-[200%] flex animate-slide-horizontal-reverse">
            {/* Image Set 1 */}
            <div className="flex gap-8 w-1/2 justify-around">
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l1.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l3.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l1.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l3.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Image Set 2 (duplicate for seamless loop) */}
            <div className="flex gap-8 w-1/2 justify-around">
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l1.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l3.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l1.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[10vw] h-[20px] md:h-[60px] flex justify-center items-center relative rounded-lg overflow-hidden mx-auto">
                <Image
                  src="/images/l3.png"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col gap-28 md:gap-60 items-center px-6 md:px-40 py-10 md:py-20 md:pt-28">
        {/* SLIDE 1 */}
        <div className="w-full blockbox flex items-center bg-[#f9dee4] px-5 py-3 md:px-20 md:py-10 relative rounded-lg">
          <div className="flex flex-col">
            <p className="text-xl md:text-7xl font-heading hblack">
              Outfit Links <br /> For You
            </p>
            <p className="text-black pt-2 md:pt-6 text-xs md:text-2xl hover:underline cursor-pointer hover:text-[#C81059]">
              Shop my favorite looks with <br /> all the latest outfit links.
            </p>
            {/* <p className="text-sm underline">view more</p> */}
          </div>
          <div className="w-[35vw] md:w-[30vw] h-[35vw] md:h-[30vw] flex justify-center items-center absolute top-1/2 right-6 md:right-28 -translate-y-1/2 rounded-lg overflow-hidden">
            <Image
              src="/images/s4.png"
              alt="Hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* SLIDE 2 */}
        <div className="w-full blockbox flex items-center bg-[#f9dee4] px-5 py-3 md:px-20 md:py-10 relative rounded-lg">
          <div className="flex flex-col">
            <p className="text-xl md:text-7xl font-heading hblack">Amazon Page</p>
            <p className="text-black pt-2 md:pt-6 text-xs md:text-2xl hover:underline cursor-pointer hover:text-[#C81059]">
              Browse my top picks in <br /> fashion, beauty and more.
            </p>
          </div>
          <div className="w-[35vw] md:w-[30vw] h-[35vw] md:h-[30vw] flex justify-center items-center absolute top-1/2 right-6 md:right-28 -translate-y-1/2 rounded-lg overflow-hidden">
            <Image
              src="/images/s5.png"
              alt="Hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* SLIDE 3 */}
        <div className="w-full blockbox flex items-center bg-[#f9dee4] px-5 py-3 md:px-20 md:py-10 relative rounded-lg">
          <div className="flex flex-col">
            <p className="text-xl md:text-7xl font-heading hblack">
              Be My Muse <br /> Magzine
            </p>
            <div className="flex items-end w-full">
              <p className="text-black pt-2 md:pt-6 text-xs md:text-2xl hover:underline cursor-pointer hover:text-[#C81059]">
                Checkout feautres and editorial work in <br /> digital magazines
                all the latest outfit links.
              </p>
              {/* <FaExternalLinkAlt className="text-2xl"/> */}
            </div>
          </div>
          <div className="w-[35vw] md:w-[30vw] h-[35vw] md:h-[30vw] flex justify-center items-center absolute top-1/2 right-6 md:right-28 -translate-y-1/2 rounded-lg overflow-hidden">
            <Image
              src="/images/muse.png"
              alt="Hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-between px-6 md:px-40 py-3 md:py-10">
        <h3 className="text-xl md:text-5xl font-heading text-[#FFF2F5]">Testimonials</h3>
        <p className="text-white text-justify w-3/5 pt-2 md:pt-[10px] text-xs md:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section>

      <section className="w-full flex flex-col px-6 md:px-40 py-3 md:py-10">
        <h3 className="text-xl md:text-5xl font-heading text-center text-[#FFF2F5]">
          Follow Me
        </h3>
        <p className="text-white text-center pt-1 md:pt-3 text-[9px] md:text-lg">
          Stay connected through my social media channels.
        </p>
        <div className="flex justify-center items-center gap-4 md:gap-12 pt-2 md:pt-6">
          <FaInstagramSquare className="text-xl md:text-4xl text-center text-white cursor-pointer hover:text-amber-200" />
          <FaYoutube className="text-xl md:text-4xl text-center text-white cursor-pointer hover:text-amber-200" />
          <FaTwitter className="text-xl md:text-4xl text-center text-white cursor-pointer hover:text-amber-200" />
          <FaLinkedin className="text-xl md:text-4xl text-center text-white cursor-pointer hover:text-amber-200"/>
        </div>
      </section>

      <p className="text-white text-center pb-5 text-[8px] md:text-lg cursor-pointer hover:text-blue-200">
          &copy; 2025 Soft Sculptures
        </p>
    </div>
  );
}
