import Image from "next/image";
import logo from "../../public/photos/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  const message = `Olá! Vim pelo site e quero agendar uma aula experimental. Pode me passar mais informações sobre horários?`;
  const phone = "5513992116104";
  return (
    <div className="flex shadow-lg bg-white h-20 md:h-24 items-center justify-between px-4 md:px-32 fixed w-full z-10">
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
        <p>Localização</p>
        <p>Galeria</p>
        <p>Contato</p>
      </div>
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
        target="_blank"
        className="hidden md:flex bg-orange-600 font-bold justify-center py-2 rounded-sm text-white w-1/6 "
      >
        Aula Experimental
      </a>
    </div>
  );
}
