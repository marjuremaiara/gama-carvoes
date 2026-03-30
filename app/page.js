export default function GamaCarvoesSite() {
  const whatsappNumber = '5511992709773';
  const whatsappMessage = encodeURIComponent('Olá! Vim pelo site da GAMA Carvões e quero um orçamento.');

  const products = [
    {
      title: 'Linha Premium para Churrasco',
      description:
        'Carvão selecionado para quem valoriza desempenho superior, acendimento eficiente e brasa estável.',
      highlight: 'Seleção superior',
    },
    {
      title: 'Linha Profissional Gourmet',
      description:
        'Ideal para restaurantes, parrillas e operações que exigem constância e performance.',
      highlight: 'Padrão profissional',
    },
    {
      title: 'Fornecimento em Volume',
      description:
        'Atendemos revendedores, mercados e distribuidores com condições especiais.',
      highlight: 'Atacado premium',
    },
  ];

  const benefits = [
    'Mais rendimento: usa menos carvão',
    'Brasa forte e constante',
    'Menos fumaça',
    'Entrega confiável',
  ];

  return (
    <div style={{ background: '#0b0b0b', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      
      {/* HERO */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: 'bold' }}>
          Carvão premium com alto rendimento e brasa mais forte
        </h1>
        <p style={{ marginTop: '20px', color: '#ccc', fontSize: '18px' }}>
          Atendemos residências, restaurantes e revendedores.
        </p>

        <a
          href=href="https://wa.me/5511992709773?text=Olá, quero comprar carvão premium GAMA"
          style={{
            display: 'inline-block',
            marginTop: '30px',
            background: '#d4af37',
            color: '#000',
            padding: '15px 30px',
            borderRadius: '10px',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          CLIQUE PARA ORÇAMENTO RAPIDO
        </a>
      </section>

      {/* PRODUTOS */}
      <section style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px' }}>Nossos Produtos</h2>

        <div style={{ display: 'flex', gap: '20px', marginTop: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {products.map((item) => (
            <div key={item.title} style={{ background: '#111', padding: '20px', borderRadius: '10px', width: '300px' }}>
              <h3>{item.title}</h3>
              <p style={{ color: '#aaa' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section style={{ padding: '60px 20px', background: '#111' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px' }}>Por que escolher a GAMA?</h2>

        <ul style={{ maxWidth: '600px', margin: '30px auto', lineHeight: '2' }}>
          {benefits.map((b) => (
            <li key={b}>✔ {b}</li>
          ))}
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px' }}>Fale conosco agora</h2>
        <p style={{ color: '#ccc', marginTop: '10px' }}>
          Receba seu orçamento rápido no WhatsApp
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          style={{
            display: 'inline-block',
            marginTop: '20px',
            background: '#d4af37',
            color: '#000',
            padding: '15px 30px',
            borderRadius: '10px',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          CHAMAR NO WHATSAPP
        </a>
      </section>

    </div>
  );
}
