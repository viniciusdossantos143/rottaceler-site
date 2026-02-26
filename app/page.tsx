export default function RottaCelerSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header profissional */}
      <header className="bg-white/95 backdrop-blur border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <img
            src="/rottaceler.png"
            alt="RottaCeler Agenciamento"
            className="h-24 w-auto object-contain"
          />

          <a
            href="https://wa.me/5581987547616"
            className="bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-green-700 transition shadow-md"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* HERO institucional */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />

        <div className="absolute -right-32 -top-32 w-96 h-96 bg-green-600/20 rounded-full blur-3xl" />
        <div className="absolute -left-32 bottom-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Agenciamento de Cargas com Agilidade e Transparência
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-xl">
              Conectamos transportadoras e motoristas qualificados com
              rapidez, comunicação direta e acompanhamento profissional até
              a efetivação do frete.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5581987547616"
                className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition shadow-lg"
              >
                Solicitar Agenciador
              </a>

              <a
                href="#como-funciona"
                className="border border-white/40 px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Como Funciona
              </a>
            </div>
          </div>

          {/* Card de confiança */}
          <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Por que escolher a RottaCeler?
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>✓ Resposta rápida às demandas</li>
              <li>✓ Motoristas previamente qualificados</li>
              <li>✓ Comunicação direta com a operação</li>
              <li>✓ Suporte até o carregamento</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROVA DE AUTORIDADE */}
      <section className="py-16 bg-white border-y">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            { n: "Atendimento", t: "Ágil" },
            { n: "Cobertura", t: "Nacional" },
            { n: "Foco", t: "Operacional" },
            { n: "Contato", t: "Direto" },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-2xl font-extrabold text-blue-900">
                {item.n}
              </div>
              <div className="text-gray-500 text-sm">{item.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-blue-950">
            Nossos Serviços
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Agenciamento de Cargas",
                desc: "Intermediação estratégica entre transportadoras e motoristas para operações spot e dedicadas.",
              },
              {
                title: "Captação de Motoristas",
                desc: "Busca ativa de veículos compatíveis com sua necessidade operacional.",
              },
              {
                title: "Acompanhamento Operacional",
                desc: "Monitoramento e comunicação até a efetivação do carregamento.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border"
              >
                <h4 className="font-bold text-lg mb-3 text-blue-900">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-blue-950">
            Como Funciona
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                t: "1. Envie sua demanda",
                d: "Recebemos as informações da carga ou necessidade de veículo.",
              },
              {
                t: "2. Match operacional",
                d: "Localizamos motoristas ou cargas compatíveis rapidamente.",
              },
              {
                t: "3. Acompanhamento",
                d: "Seguimos junto até a efetivação do carregamento.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <div className="text-xl font-bold text-blue-900 mb-2">
                  {item.t}
                </div>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Fale direto com a operação
          </h3>

          <p className="text-blue-100 mb-8">
            Atendimento rápido para transportadoras e motoristas.
          </p>

          <a
            href="https://wa.me/5581987547616"
            className="bg-green-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-green-700 transition shadow-lg"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          <img
            src="/rottaceler.png"
            alt="RottaCeler"
            className="h-14 mx-auto mb-4 object-contain"
          />
          <p className="mt-2">Agenciamento Profissional de Cargas</p>
          <p className="mt-4 text-xs opacity-70">
            © {new Date().getFullYear()} RottaCeler. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Botão WhatsApp flutuante */}
      <a
        href="https://wa.me/5581987547616"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl z-50"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
