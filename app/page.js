export default function GamaCarvoesSite() {
  const whatsappNumber = '5511999999999';
  const whatsappMessage = encodeURIComponent('Olá! Vim pelo site da Carvão GAMA e quero atendimento.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const faqItems = [
    {
      question: 'Vocês vendem para cliente final e para atacado?',
      answer:
        'Sim. Atendemos desde pedidos residenciais para churrasco até fornecimento para revendedores, comércios e operações maiores.',
    },
    {
      question: 'O carvão da GAMA tem alto rendimento?',
      answer:
        'Sim. Nosso posicionamento é oferecer um carvão de melhor desempenho, com brasa forte, boa durabilidade e excelente experiência de uso.',
    },
    {
      question: 'Vocês fazem entrega?',
      answer:
        'A disponibilidade de entrega pode variar conforme a região e o volume do pedido. Consulte nossa equipe pelo WhatsApp para confirmar.',
    },
    {
      question: 'É possível comprar em quantidade para revenda?',
      answer:
        'Sim. Temos atendimento para parceiros comerciais, revendedores e negócios que precisam de fornecimento recorrente.',
    },
    {
      question: 'Como solicitar orçamento?',
      answer:
        'Basta clicar no botão de WhatsApp do site e informar a quantidade desejada, sua cidade e se o pedido é para uso próprio ou revenda.',
    },
  ];

  const highlights = [
    'Brasa forte e estável',
    'Excelente rendimento',
    'Atendimento para varejo e atacado',
    'Posicionamento premium',
  ];

  const sections = [
    {
      title: 'Qualidade que aparece no fogo',
      text: 'A Carvão GAMA foi pensada para quem quer um produto com presença, desempenho e apresentação superior. Mais do que vender carvão, buscamos entregar uma experiência melhor no churrasco e no abastecimento comercial.',
    },
    {
      title: 'Atendimento para diferentes perfis',
      text: 'Atendemos clientes residenciais, restaurantes, revendedores e parceiros comerciais que buscam confiança, regularidade e uma imagem de produto valorizada.',
    },
    {
      title: 'Negociação direta e ágil',
      text: 'Facilitamos o contato e o orçamento pelo WhatsApp para acelerar a tomada de decisão e encurtar o caminho até a venda.',
    },
  ];

  return (
    <div
      className="min-h-screen text-zinc-900"
      style={{
        fontFamily: 'Poppins, sans-serif',
        background:
          'linear-gradient(90deg, rgba(255,122,0,0.08) 0%, rgba(255,255,255,1) 12%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 88%, rgba(255,122,0,0.08) 100%)',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-xl font-extrabold tracking-tight text-zinc-950">
            Carvão <span className="text-orange-600">GAMA</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-semibold text-zinc-700 transition hover:text-orange-600">
              Home
            </a>
            <a href="#quem-somos" className="text-sm font-semibold text-zinc-700 transition hover:text-orange-600">
              Quem somos
            </a>
            <a href="#contato" className="text-sm font-semibold text-zinc-700 transition hover:text-orange-600">
              Contato
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
                Carvão premium para churrasco, comércio e revenda
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Mais presença no fogo, mais valor no produto e mais força na sua venda.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
                A Carvão GAMA entrega um produto pensado para quem busca melhor desempenho, excelente apresentação e uma experiência superior no churrasco e no fornecimento comercial.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-zinc-950 px-7 py-4 text-center text-base font-semibold text-white transition hover:scale-[1.02]"
                >
                  Solicitar atendimento
                </a>
                <a
                  href="#quem-somos"
                  className="rounded-2xl border border-zinc-300 px-7 py-4 text-center text-base font-semibold text-zinc-800 transition hover:bg-zinc-50"
                >
                  Conhecer a marca
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-sm">
                    <p className="text-sm font-semibold text-zinc-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative h-[520px] w-full max-w-[560px] rounded-[2rem] border border-zinc-200 bg-[linear-gradient(180deg,#ffffff_0%,#fff6ef_100%)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                <div className="absolute inset-x-10 top-10 h-28 rounded-full bg-orange-100 blur-3xl" />

                <div className="relative flex h-full flex-col justify-center">
                  <div className="mx-auto w-full max-w-[440px]">
                    <div className="mx-auto mb-6 h-6 w-56 rounded-full bg-orange-100/80 blur-xl" />

                    <div className="relative mx-auto h-44 w-44 rounded-full border-[10px] border-zinc-800 bg-zinc-950 shadow-2xl">
                      <div className="absolute inset-4 rounded-full border border-zinc-700" />
                      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#ffcc66_0%,#ff8a00_35%,#ff4d00_58%,rgba(0,0,0,0)_75%)] blur-[1px]" />
                      <div className="absolute left-[24px] top-[68px] h-12 w-16 rotate-[-18deg] rounded-[18px] bg-zinc-800 shadow-[inset_0_-10px_18px_rgba(255,88,0,0.45)]" />
                      <div className="absolute right-[26px] top-[72px] h-12 w-16 rotate-[16deg] rounded-[18px] bg-zinc-800 shadow-[inset_0_-10px_18px_rgba(255,88,0,0.45)]" />
                      <div className="absolute left-[70px] top-[92px] h-10 w-14 rotate-[8deg] rounded-[18px] bg-zinc-700 shadow-[inset_0_-8px_16px_rgba(255,110,0,0.4)]" />
                    </div>

                    <div className="relative mx-auto mt-6 h-12 w-[360px] max-w-full rounded-full bg-zinc-900 shadow-lg">
                      <div className="absolute inset-x-5 top-4 h-[2px] bg-zinc-700" />
                      <div className="absolute inset-x-8 top-8 h-[2px] bg-zinc-800" />
                    </div>

                    <div className="mx-auto mt-8 max-w-md rounded-[1.75rem] border border-orange-100 bg-white p-6 shadow-sm">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
                        Ilustração conceitual
                      </p>
                      <h2 className="mt-3 text-2xl font-bold text-zinc-950">
                        Brasa acesa, presença visual forte e identidade premium.
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">
                        Uma apresentação mais refinada ajuda a valorizar sua marca, seu produto e a percepção do cliente logo no primeiro contato.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="quem-somos" className="border-y border-zinc-200 bg-white/80">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">Quem somos</p>
              <h2 className="mt-3 text-3xl font-extrabold text-zinc-950 sm:text-4xl">
                Uma marca criada para unir desempenho, imagem e força comercial.
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">
                A Carvão GAMA nasce com uma proposta clara: oferecer um carvão com posicionamento mais valorizado, atendimento mais direto e comunicação forte para conquistar clientes residenciais e comerciais.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {sections.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-bold text-zinc-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">Por que escolher a GAMA</p>
              <h2 className="mt-3 text-3xl font-extrabold text-zinc-950">
                Um site pensado para transmitir confiança e vender melhor.
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-600">
                Quando o cliente entra em contato com uma marca que demonstra clareza, posicionamento e valor percebido, a decisão de compra acontece com muito mais facilidade.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Comunicação mais profissional para fortalecer sua marca',
                  'Estrutura clara para atendimento e geração de orçamento',
                  'Visual limpo e premium para aumentar confiança',
                  'Base ideal para escalar vendas locais, atacado e revenda',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-orange-50 px-4 py-4">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                    <p className="text-sm font-medium leading-7 text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-[linear-gradient(180deg,#fff7f1_0%,#ffffff_100%)] p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">Atendimento</p>
              <h2 className="mt-3 text-3xl font-extrabold text-zinc-950">
                Fale com a equipe e receba atendimento direto pelo WhatsApp.
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-600">
                Entre em contato para consultar valores, disponibilidade, pedidos para uso próprio, revenda e fornecimento em maior volume.
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-zinc-200 bg-white p-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Empresa</p>
                    <p className="mt-2 text-lg font-semibold text-zinc-950">Carvão GAMA</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Segmento</p>
                    <p className="mt-2 text-lg font-semibold text-zinc-950">Carvão premium</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Perfil de atendimento</p>
                    <p className="mt-2 text-lg font-semibold text-zinc-950">Residencial, comercial e revenda</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Canal principal</p>
                    <p className="mt-2 text-lg font-semibold text-zinc-950">WhatsApp</p>
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex rounded-2xl bg-zinc-950 px-6 py-4 text-base font-semibold text-white transition hover:scale-[1.02]"
                >
                  Solicitar orçamento
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="border-t border-zinc-200 bg-white/85">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">Contato</p>
                <h2 className="mt-3 text-3xl font-extrabold text-zinc-950 sm:text-4xl">
                  Entre em contato e tire suas dúvidas.
                </h2>
                <p className="mt-5 text-base leading-8 text-zinc-600">
                  Estamos prontos para atender clientes que buscam carvão com mais valor percebido, melhor apresentação e negociação mais direta.
                </p>

                <div className="mt-8 rounded-[2rem] border border-zinc-200 bg-[linear-gradient(180deg,#fff7f2_0%,#ffffff_100%)] p-7 shadow-sm">
                  <h3 className="text-xl font-bold text-zinc-950">Fale agora com a GAMA</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    Clique no botão abaixo e envie sua mensagem. Informe a quantidade desejada e a sua cidade para agilizar o atendimento.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-2xl bg-zinc-950 px-6 py-4 text-base font-semibold text-white transition hover:scale-[1.02]"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">Perguntas frequentes</p>
                <div className="mt-5 space-y-4">
                  {faqItems.map((item) => (
                    <div key={item.question} className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm">
                      <h3 className="text-lg font-bold text-zinc-950">{item.question}</h3>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white px-6 py-8 text-center text-sm font-medium text-zinc-500">
        Carvão GAMA. Todos os direitos reservados.
      </footer>
    </div>
  );
}
