import Image from "next/image";
import logo from "../../public/photos/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  return (
    <div className="flex shadow-lg bg-white h-24 items-center justify-between px-8 md:px-32 fixed w-full">
      <div className="flex w-1/6">
        <Image
          src={logo}
          alt="Br7 - Futevôlei"
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
      <GiHamburgerMenu className="md:hidden flex " size={40} />
      <div className="hidden md:flex flex-row items-center justify-center gap-10  w-4/6">
        <p>Inicio</p>
        <p>Historia</p>
        <p>Aulas</p>
        <p>Localizacao</p>
        <p>Galeria</p>
        <p>Contato</p>
      </div>
      <button className="hidden md:flex bg-orange-600 font-bold px-6 py-2 rounded-sm text-white w-1/6">
        Aula Experimental
      </button>
    </div>
  );
}
