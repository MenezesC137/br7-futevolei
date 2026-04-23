export default function FreeTrialSection() {
  const message = `Olá! Vim pelo site e quero agendar uma aula experimental. Pode me passar mais informações sobre horários?`;
  const phone = "5513992116104";

  return (
    <section className="max-w-6xl px-4 md:px-32 py-10 space-y-6 ">
      <div className="w-20 h-1 bg-orange-500 " />
      <h2 className="text-4xl md:text-5xl font-bold">
        Aula experimental gratuita
      </h2>
      <div className="bg-orange-600 text-white rounded-2xl p-6 md:p-12 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para começar?
          </h2>
          <p className="text-base md:text-xl text-orange-100 leading-relaxed max-w-3xl">
            Marque sua aula experimental agora mesmo! Não precisa de experiência
            prévia. Venha como está, leve roupa de praia e prepare-se para se
            divertir!
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white text-xl">
              ✓
            </div>
            <div>
              <p className="text-lg md:text-xl font-semibold">100% Gratuito</p>
              <p className="text-orange-100">
                Sua primeira aula não custa nada
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white text-xl">
              ✓
            </div>
            <div>
              <p className="text-lg md:text-xl font-semibold">Para Todos</p>
              <p className="text-orange-100">
                Iniciantes, crianças e experientes
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white text-xl">
              ✓
            </div>
            <div>
              <p className="text-lg md:text-xl font-semibold">
                Ambiente Seguro
              </p>
              <p className="text-orange-100">
                Instrutores experientes e dedicados
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            className="block w-full bg-white text-orange-600 text-center font-semibold py-4 rounded text-lg hover:bg-gray-100 transition"
          >
            Agendar Aula Experimental
          </a>
        </div>
        <p className="text-center text-orange-100 text-sm md:text-base">
          Dúvidas? Entre em contato via
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            className="text-white underline px-2"
          >
            WhatsApp
          </a>
          ou
          <a
            href="https://www.instagram.com/br7futevolei"
            target="_blank"
            className="text-white underline pl-2"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </section>
  );
}
