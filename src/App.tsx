import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FiLock, FiShield, FiAlertTriangle, FiRefreshCw, FiWifi, FiAlertCircle, FiSave, FiMail, FiEye, FiStar, FiArrowRight } from 'react-icons/fi';
import Timer from './components/Timer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import user1 from './assets/images/user1.jpg';
import user2 from './assets/images/user2.jpg';
import user3 from './assets/images/user3.jpg';
import user4 from './assets/images/user4.jpg';
import user5 from './assets/images/user5.jpg';
import user6 from './assets/images/user6.jpg';
import user7 from './assets/images/user7.jpg';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const securitySteps = [
    { icon: FiLock, title: 'Senhas à Prova de Hackers', desc: 'Misture letras, números e símbolos, nada de repetir!' },
    { icon: FiShield, title: 'Ative o 2FA Já', desc: 'Coloque no WhatsApp, e-mail e banco agora!' },
    { icon: FiAlertTriangle, title: 'Cuidado com Links', desc: 'Cheque o remetente antes de clicar!' },
    { icon: FiRefreshCw, title: 'Atualize Tudo Sempre', desc: 'Apps e sistemas desatualizados são portas abertas!' },
    { icon: FiWifi, title: 'WiFi Público? Nem Pensar', desc: 'Evite ou use VPN pra se proteger!' },
    { icon: FiShield, title: 'Antivírus é Essencial', desc: 'Instale um bom e fique tranquilo!' },
    { icon: FiAlertCircle, title: 'Desconfie de Promoções', desc: 'Ofertas boas demais são cilada!' },
    { icon: FiSave, title: 'Backup na Rotina', desc: 'Salve seus arquivos pra não perder nada!' },
    { icon: FiMail, title: 'E-mails Falsos? Delete!', desc: 'Não clique em anexos estranhos!' },
    { icon: FiEye, title: 'Monitore Suas Contas', desc: 'Cheque atividades suspeitas todo mês!' }
  ];

  const testimonials = [
    { text: 'Evitei um golpe no WhatsApp graças ao guia!', name: 'Carla M.', age: 34, stars: 5, gender: 'female' },
    { text: 'As aulas me ensinaram a proteger meu Pix em 5 minutos!', name: 'Pedro R.', age: 29, stars: 4, gender: 'male' },
    { text: 'Finalmente entendi como me defender online!', name: 'Juliana T.', age: 42, stars: 5, gender: 'female' },
    { text: 'Salvou meu Pix de um golpe, recomendo!', name: 'Léo', age: 27, stars: 4, gender: 'male' },
    { text: 'As aulas são top, aprendi rapidinho!', name: 'Bia', age: 31, stars: 5, gender: 'female' },
    { text: 'Não vivo mais com senha fraca, valeu!', name: 'Thiago', age: 25, stars: 4, gender: 'male' },
    { text: 'Fácil de entender, mudou minha vida online!', name: 'Gabi', age: 38, stars: 5, gender: 'female' },
    { text: 'Evitei um rombo no cartão, incrível!', name: 'Rafa', age: 33, stars: 4, gender: 'male' },
    { text: 'Muito prático, até minha mãe usou!', name: 'Ju', age: 29, stars: 5, gender: 'female' },
    { text: 'Achei que era difícil, mas é moleza!', name: 'Paulo', age: 40, stars: 4, gender: 'male' },
    { text: 'Meu WhatsApp tá blindado agora!', name: 'Carol', age: 26, stars: 5, gender: 'female' },
    { text: 'Dicas que eu não achava em lugar nenhum!', name: 'Diego', age: 35, stars: 4, gender: 'male' },
    { text: 'Por esse preço, é um achado!', name: 'Manu', age: 30, stars: 5, gender: 'female' }
  ];

  const faqItems = [
    { question: 'Como recebo o material?', answer: 'Tudo chega no seu e-mail em minutos após a compra!' },
    { question: 'Preciso saber tecnologia?', answer: 'Não, nosso guia é simples e direto, perfeito até para iniciantes!' },
    { question: 'Funciona no meu celular?', answer: 'Sim, o PDF e as aulas rodam em qualquer dispositivo!' },
    { question: 'E se eu não gostar?', answer: 'Devolvemos seu dinheiro em até 7 dias, sem complicação!' }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex justify-center gap-1">
        {[...Array(5)].map((_, index) => (
          <FiStar
            key={index}
            className={`${index < rating ? 'text-[#FFD700] fill-[#FFD700]' : 'text-[#FFD700]'}`}
            size={20}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4 mx-auto max-w-lg">
          <span className="highlight">Evite Golpes</span> Online Hoje: <span className="highlight">10 Passos</span> Simples!
        </h1>
        <p className="mb-6 mx-auto max-w-md">Proteja seus dados em minutos, sem enrolação!</p>
        <div className="flex justify-center">
          <a href="#video" className="bg-[#00aaff] text-white px-6 py-3 rounded-lg inline-block">
            Quero Me Proteger Já!
          </a>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="container mx-auto px-4 py-12 bg-[#2a2a2a]">
        <h2 className="text-2xl font-bold mb-4 text-center mx-auto max-w-lg">
          Veja Como <span className="highlight">Se Proteger</span> em Menos de <span className="highlight">2 Minutos</span>
        </h2>
        <p className="text-center mb-6 mx-auto max-w-md">
          Em apenas 2 minutos, você vai aprender a se proteger de vez!
        </p>
        <div className="aspect-video mb-6 mx-auto max-w-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/QFdkggG34wo"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex justify-center">
          <a href="#passos" className="bg-[#00aaff] text-white px-6 py-3 rounded-lg inline-block">
            Saiba Mais
          </a>
        </div>
      </section>

      {/* Security Steps */}
      <section id="passos" className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center mx-auto max-w-lg">
          Seus <span className="highlight">10 Passos</span> para Uma Vida Digital <span className="highlight">Segura</span>
        </h2>
        <div className="grid gap-6 max-w-md mx-auto">
          {securitySteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 bg-[#2a2a2a] p-4 rounded-lg">
              <step.icon className="text-[#00aaff] text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real Stories */}
      <section className="py-12 bg-[#2a2a2a]">
        <h2 className="text-2xl font-bold mb-4 text-center mx-auto max-w-lg">
          <span className="highlight">Histórias</span> Reais
        </h2>
        <p className="text-center mb-8 mx-auto max-w-md">
          Veja como pessoas comuns quase perderam tudo!
        </p>
        <div className="max-w-xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            className="w-full"
          >
            {[
              user1,
              user2,
              user3,
              user4,
              user5,
              user6,
              user7
            ].map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full bg-[#1a1a1a] flex items-center justify-center p-4">
                  <img
                    src={image}
                    alt={`História ${index + 1}`}
                    className="w-full max-h-[80vh] object-contain"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gradient-to-b from-[#1a1a1a] to-[#005588]">
        <h2 className="text-2xl font-bold mb-4 text-center mx-auto max-w-lg">
          O Que <span className="highlight">Dizem</span> Nossos Usuários
        </h2>
        <p className="text-center mb-8 mx-auto max-w-md">
          Mais de 5 mil pessoas já se protegeram com nosso guia!
        </p>
        <div className="max-w-md mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            className="w-full aspect-[1080/1080]"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center h-full p-6">
                  <div className="bg-[#2a2a2a] rounded-lg p-6 w-full flex flex-col items-center">
                    <img
                      src={`https://randomuser.me/api/portraits/${testimonial.gender === 'male' ? 'men' : 'women'}/${index}.jpg`}
                      alt={`User ${index + 1}`}
                      className="w-[100px] h-[100px] rounded-full mb-4 object-cover border-2 border-white"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/100x100';
                      }}
                    />
                    <p className="text-lg font-medium mb-2">
                      {testimonial.name}, {testimonial.age} anos
                    </p>
                    <p className="text-center mb-4">{testimonial.text}</p>
                    <StarRating rating={testimonial.stars} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center mx-auto max-w-lg">
          Escolha Sua <span className="highlight">Proteção</span>
        </h2>
        <div className="text-center mb-6">
          <p className="text-xl mb-2">Oferta válida por</p>
          <Timer />
          <p className="text-red-500 mt-2">Oferta por tempo limitado – garanta antes que acabe!</p>
        </div>

        {/* Basic Plan */}
        <div className="bg-[#2a2a2a] rounded-lg p-6 mb-8 max-w-md mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Guia Completo em PDF</h3>
            <p className="text-2xl font-bold text-[#00aaff] mb-4">R$ 19,90</p>
            <p className="mb-2">Receba no seu e-mail:</p>
            <ul className="mb-4 text-left">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Guia em PDF com os 10 passos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Dicas rápidas contra golpes
              </li>
            </ul>
          </div>
          <a
            href="https://pay.cakto.com.br/bj7wigk_311865"
            className="bg-[#00aaff] text-white px-6 py-3 rounded-lg block text-center"
          >
            Quero o PDF Já!
          </a>
        </div>

        {/* Premium Plan */}
        <div className="bg-[#2a2a2a] rounded-lg p-6 max-w-md mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Guia Completo + Aulas Gravadas</h3>
            <p className="text-2xl font-bold text-[#00aaff] mb-2">R$ 59,90</p>
            <p className="text-sm mb-4">
              De <s className="text-gray-400">R$ 97,00</s> <FiArrowRight className="inline text-gray-400" /> R$ 59,90
            </p>
            <p className="mb-2">Receba no seu e-mail:</p>
            <ul className="mb-4 text-left">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Guia em PDF com os 10 passos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Aulas gravadas com tutoriais práticos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Suporte básico por e-mail
              </li>
            </ul>
            <p className="font-bold mb-2 text-left">
              <span className="highlight">Bônus</span> Inclusos:
            </p>
            <ul className="mb-4 text-left">
              {['Checklist de Segurança Digital (PDF)', 'Vídeo extra: 5 erros comuns a evitar', 'Atualizações grátis'].map((bonus, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FiStar className="text-[#FFD700]" />
                  {bonus}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://pay.cakto.com.br/95tgwxb_311869"
            className="bg-green-500 text-white px-6 py-3 rounded-lg block text-center"
          >
            Quero Tudo Agora!
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12 bg-[#2a2a2a]">
        <h2 className="text-2xl font-bold mb-4 text-center mx-auto max-w-lg">
          Perguntas <span className="highlight">Frequentes</span>
        </h2>
        <p className="text-center mb-8 mx-auto max-w-md">
          Tire suas dúvidas – é mais fácil do que você imagina!
        </p>
        <div className="space-y-4 max-w-md mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {item.question}
                <span>{openFaq === index ? '−' : '+'}</span>
              </div>
              {openFaq === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4 text-center mx-auto max-w-lg">
          <span className="highlight">Compare</span> os Planos
        </h2>
        <p className="text-center mb-8 mx-auto max-w-md">
          Escolha o plano ideal e economize enquanto se protege!
        </p>
        <div className="overflow-x-auto max-w-md mx-auto">
          <table className="w-full mb-8">
            <thead>
              <tr>
                <th className="table-cell">Benefícios</th>
                <th className="table-cell">Guia Completo<br />R$ 19,90</th>
                <th className="table-cell">
                  Guia Completo + Aulas<br />
                  <div className="flex items-center justify-center gap-1">
                    <s className="text-gray-400">R$ 97,00</s>
                    <FiArrowRight className="text-gray-400" />
                    <span>R$ 59,90</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Guia em PDF com os 10 passos', basic: true, premium: true },
                { feature: 'Dicas rápidas contra golpes', basic: true, premium: true },
                { feature: 'Aulas gravadas com tutoriais práticos', basic: false, premium: true },
                { feature: 'Suporte básico por e-mail', basic: false, premium: true },
                { feature: 'Checklist de Segurança Digital (PDF)', basic: false, premium: true },
                { feature: 'Vídeo extra: 5 erros comuns a evitar', basic: false, premium: true },
                { feature: 'Atualizações grátis', basic: false, premium: true }
              ].map((row, index) => (
                <tr key={index}>
                  <td className="table-cell">{row.feature}</td>
                  <td className="table-cell">
                    {row.basic ? <span className="check">✓</span> : <span className="cross">✗</span>}
                  </td>
                  <td className="table-cell">
                    {row.premium ? <span className="check">✓</span> : <span className="cross">✗</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <a
            href="https://pay.cakto.com.br/bj7wigk_311865"
            className="bg-[#00aaff] text-white px-6 py-3 rounded-lg text-center"
          >
            Quero o Guia por R$ 19,90
          </a>
          <a
            href="https://pay.cakto.com.br/95tgwxb_311869"
            className="bg-green-500 text-white px-6 py-3 rounded-lg text-center"
          >
            Quero o Plano Completo por R$ 59,90
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center bg-[#2a2a2a]">
        <p className="mb-2">© 2025 Segurança Digital. Todos os direitos reservados.</p>
        <p className="mb-2">Contato: suporte@segurancadigital.com</p>
        <p className="text-green-400">Produto 100% seguro – sua compra protegida!</p>
      </footer>
    </div>
  );
}

export default App;