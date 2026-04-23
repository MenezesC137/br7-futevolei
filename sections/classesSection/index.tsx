import Image from "next/image";
import celebration from "@/public/photos/celebration.png";

export default function ClassesSection() {
  const schedule = [
    {
      day: "Segunda-Feira",
      times: ["06h", "07h", "08h", "09h", "17h", "18h", "19h", "20h"],
    },
    {
      day: "Terça-Feira",
      times: ["06h", "07h", "08h", "09h", "17h", "18h", "19h", "20h"],
    },
    {
      day: "Quarta-Feira",
      times: ["06h", "07h", "08h", "09h", "17h", "18h", "19h", "20h"],
    },
    {
      day: "Quinta-Feira",
      times: ["06h", "07h", "08h", "09h", "17h", "18h", "19h", "20h"],
    },
    {
      day: "Sexta-Feira",
      times: ["06h", "07h", "08h", "09h", "17h", "18h", "19h", "20h"],
    },
    {
      day: "Sábado",
      times: ["08h", "09h"],
    },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-32 py-12 space-y-12 bg-black text-white">
      <div className="space-y-6">
        <div className="w-16 h-1 bg-orange-500" />
        <h2 className="text-3xl md:text-5xl font-bold">Nossas aulas</h2>
      </div>
      <div className="space-y-8 flex w-full flex-col ">
        <h3 className="text-2xl md:text-4xl font-semibold">Níveis</h3>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <Image
            src={celebration}
            alt="Aula iniciante"
            className="w-full  rounded-xl"
          />
          <div className="flex flex-col gap-3 text-justify ">
            <p className="text-xl md:text-2xl font-semibold">Iniciante</p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed ">
              Ideal para quem está começando no futevôlei. Você aprende os
              fundamentos, regras e primeiros movimentos com acompanhamento
              próximo dos instrutores, ganhando confiança desde o início.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-center ">
          <Image
            src={celebration}
            alt="Aula intermediária"
            className="w-full  rounded-xl"
          />
          <div className="flex flex-col gap-3 text-justify ">
            <p className="text-xl md:text-2xl font-semibold">Intermediário</p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed ">
              Para quem já tem base e quer evoluir. Trabalhamos técnicas mais
              refinadas, posicionamento em jogo e tomada de decisão com treinos
              mais dinâmicos e desafiadores.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <Image
            src={celebration}
            alt="Aula avançada"
            className="w-full  rounded-xl"
          />
          <div className="flex flex-col gap-3 text-justify ">
            <p className="text-xl md:text-2xl font-semibold">Avançado</p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed ">
              Voltado para atletas que buscam alta performance. Treinos
              intensos, foco em estratégia, leitura de jogo e preparação para
              competições.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <h3 className="text-2xl md:text-4xl font-semibold">
          Horários Disponíveis
        </h3>
        <section className="">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {schedule.map((item) => (
              <div
                key={item.day}
                className=" rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {item.day}
                </h3>
                <ul className="space-y-3">
                  {item.times.map((time, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
                      <span className=" text-base md:text-lg">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
