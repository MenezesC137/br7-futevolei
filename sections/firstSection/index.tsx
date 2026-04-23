import Image from "next/image";
import celebration from "@/public/photos/celebration.png";
import playing from "@/public/photos/playing.png";

export default function FirstSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full gap-10 items-center md:items-start">
        <Image
          src={celebration}
          alt="Celebration"
          className="-mt-40 md:flex hidden "
        />
        <Image
          src={playing}
          alt="playing"
          className="flex md:hidden h-screen object-cover -mt-20"
        />
        <div
          style={{
            backgroundImage: "linear-gradient(to top, black, transparent)",
          }}
          className="absolute bottom-0 left-0 w-full h-60 text-white md:px-32 px-4 gap-4 flex flex-col "
        >
          <p className="md:text-8xl text-4xl font-bold ">
            Onde o jogo acontece!
          </p>
          <p className="text-xl text-justify">
            Futevôlei é inclusão social, é vida, é saúde, é felicidade. Desde
            2018 na BR7.
          </p>
        </div>
      </div>
    </div>
  );
}
