"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, CheckSquare, Bell, KanbanSquare, Target, FileText, Check, Quote, ChevronDown, ListTodo } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

function YouTubeEmbedJarvis() {
  const videoId = "YxtW3eC76KE";
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&controls=1&rel=0&modestbranding=1`;

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
      {/* fallback de proporção 16:9 confiável, independente do Tailwind */}
      <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={src}
          title="Jarvis — Demo Oficial"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Animações para seções fullpage
  const fadeUpSection = {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18, duration: .55 } }
  };
  const fadeUpStrong = {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 130, damping: 18, duration: .55 } }
  };
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } };

  const faqItems = [
    {
      question: "O Jarvis já está pronto?",
      answer: "Estamos em demo funcional e expandindo recursos continuamente."
    },
    {
      question: "Preciso criar conta para usar?",
      answer: "Por enquanto, não. Foque em explorar a experiência."
    },
    {
      question: "Vai integrar com Notion/Telegram?",
      answer: "Sim, está no roadmap."
    },
    {
      question: "Funciona no celular?",
      answer: "A landing é responsiva; o app terá layout dedicado."
    },
    {
      question: "Como envio feedback?",
      answer: "Use o formulário no final da página ou e-mail."
    },
    {
      question: "Quando será lançado?",
      answer: "Em breve. Deixe seu e-mail para ser avisado."
    }
  ];

  // Performance optimized section focus observer
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.section[data-observe], .section-hero[data-observe]');
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          target.setAttribute('data-active', entry.isIntersecting ? 'true' : 'false');

          // Legacy support for existing classes
          if (entry.isIntersecting) {
            target.classList.add('is-active');
            target.classList.remove('is-dim');
          } else {
            target.classList.remove('is-active');
            target.classList.add('is-dim');
          }
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -20% 0px', /* ativa antes da seção sair totalmente */
        threshold: 0.25
      }
    );

    sections.forEach(s => {
      io.observe(s);
      // Set initial state
      s.setAttribute('data-active', 'false');
    });

    // Set hero as initially active
    const hero = document.querySelector<HTMLElement>('.section-hero[data-observe]');
    if (hero) {
      hero.setAttribute('data-active', 'true');
      hero.classList.add('is-active');
    }

    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="header header-surface fixed top-0 inset-x-0 z-50" style={{ height: "var(--header-h)" }}>
        {/* full-bleed; sem padding à esquerda */}
        <div className="w-full h-full pl-0 pr-4 md:pl-0 md:pr-6 flex items-center justify-between">
          {/* ESQUERDA: marca puxada para a esquerda */}
          <Link href="#inicio" className="-ml-[6px] md:-ml-[10px] flex items-center gap-3 md:gap-4 group shrink-0" aria-label="Ir para o início">
            <div
              className="relative shrink-0"
              style={{ transform: "scale(1.2) translateX(var(--logo-nudge-x))", transformOrigin: "left center", willChange: "transform" }}
            >
              <Image
                src="/logo.png"
                alt="Jarvis"
                width={700}
                height={240}
                priority
                sizes="(max-width: 768px) 180px, (max-width: 1280px) 260px, 320px"
                className="w-auto select-none"
                style={{ height: "clamp(48px, 6.2vw, 82px)" }}
              />
            </div>

            {/* levemente mais para a direita (só o nome) */}
            <span
              className="leading-none font-semibold tracking-tight text-white/95 group-hover:text-white transition whitespace-nowrap ml-[18px] md:ml-5"
              style={{ fontSize: "clamp(1.15rem, 2.1vw, 1.85rem)", lineHeight: 1 }}
            >
              Jarvis
            </span>
          </Link>

          {/* DIREITA: navegação + CTA */}
          <nav className="hidden md:flex items-center gap-6 md:gap-8 text-sm md:text-base text-gray-200">
            <a href="#inicio" className="hover:text-white transition">Início</a>
            <a href="#recursos" className="hover:text-white transition">Recursos</a>
            <a href="#demo" className="hover:text-white transition">Demo</a>
            <a href="#notion" className="hover:text-white transition">Notion</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#contato" className="hover:text-white transition">Contato</a>
          </nav>
          <a href="#demo" className="btn-primary">Ver Demo</a>
        </div>
      </header>

      <main className="snap-container">
        {/* HERO — descolado do header + pílulas orbitais */}
        <section id="inicio" className="section-hero" data-observe>
          {/* ENVOLVE o herói neste wrapper para habilitar overlay ao redor */}
          <div className="hero-core">
            {/* Bloco de texto/botões acima das pílulas */}
            <div className="hero-stack text-center mx-auto max-w-4xl">
              <h1 className="font-extrabold" style={{ fontSize: "clamp(3.4rem, 6vw, 5.6rem)" }}>
                Jarvis — claro e <br className="hidden md:block" /> rápido.
              </h1>

              <p className="text-gray-200 mx-auto max-w-3xl mt-8 md:mt-9" style={{ fontSize: "clamp(1.15rem,1.6vw,1.35rem)" }}>
                Chat inteligente para criar tarefas, organizar o dia e lembrar do que importa.
              </p>

              <div className="mt-8 md:mt-10 flex gap-4 justify-center">
                <motion.a
                  href="#demo"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver Demo
                </motion.a>
                <motion.a
                  href="#contato"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Receber novidades
                </motion.a>
              </div>
            </div>

            {/* PÍLULAS SOBREPOSTAS AO REDOR do hero */}
            <div className="pills orbit" aria-hidden="true">
              <span className="pill pill-a">💬 Crie por chat</span>
              <span className="pill pill-b">✅ Organize fácil</span>
              <span className="pill pill-c">🔔 Lembre no tempo certo</span>
              <span className="pill pill-d">📁 Notas & Arquivos</span>
              <span className="pill pill-e">📊 Metas conectadas</span>
              <span className="pill pill-f">🇧🇷 Em português</span>
            </div>
          </div>
        </section>

        {/* RECURSOS — 6 CARDS COM GLASS E ANIMAÇÕES FORTES */}
        <section id="recursos" className="section" data-observe>
          <div className="section-inner">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUpSection}
            >
              <motion.h2 className="h2 text-center mb-12" variants={fadeUpSection}>
                Recursos principais
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={stagger}
              >
                <motion.div variants={fadeUpStrong} className="glass p-8">
                  <MessageSquare className="icon mb-5" size={56} />
                  <h3 className="text-2xl md:text-[1.7rem] font-semibold mb-3">Chat inteligente</h3>
                  <p className="text-lg text-gray-300">
                    Fale em português. O Jarvis entende, gera ações e registra o que importa.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpStrong} className="glass p-8">
                  <CheckSquare className="icon mb-5" size={56} />
                  <h3 className="text-2xl md:text-[1.7rem] font-semibold mb-3">Tarefas</h3>
                  <p className="text-lg text-gray-300">
                    Crie, priorize e conclua. Filtros claros para Hoje, Semana e Projetos.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpStrong} className="glass p-8">
                  <Bell className="icon mb-5" size={56} />
                  <h3 className="text-2xl md:text-[1.7rem] font-semibold mb-3">Notificações</h3>
                  <p className="text-lg text-gray-300">
                    Lembretes pontuais, sem ruído. Só no momento certo.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpStrong} className="glass p-8">
                  <KanbanSquare className="icon mb-5" size={56} />
                  <h3 className="text-2xl md:text-[1.7rem] font-semibold mb-3">Projetos</h3>
                  <p className="text-lg text-gray-300">
                    Visão lista e Kanban. Status claros, progresso visível e foco por sprint.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpStrong} className="glass p-8">
                  <Target className="icon mb-5" size={56} />
                  <h3 className="text-2xl md:text-[1.7rem] font-semibold mb-3">Metas</h3>
                  <p className="text-lg text-gray-300">
                    Objetivos trimestrais conectados a ações semanais e tarefas diárias.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpStrong} className="glass p-8">
                  <FileText className="icon mb-5" size={56} />
                  <h3 className="text-2xl md:text-[1.7rem] font-semibold mb-3">Notas & Arquivos</h3>
                  <p className="text-lg text-gray-300">
                    Contexto sempre à mão: decisões, referências e anexos organizados.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DEMO — PLAYER COM GLASS */}
        <section id="demo" className="section" data-observe>
          <div className="section-inner">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUpSection}
            >
              <motion.h2 className="h2 text-center mb-3" variants={fadeUpSection}>
                Veja o Jarvis em ação
              </motion.h2>
              <motion.p className="text-center text-gray-300 mb-8" variants={fadeUpSection}>
                Demo curta mostrando o fluxo principal.
              </motion.p>

              <motion.div variants={fadeUpSection}>
                <YouTubeEmbedJarvis />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* NOTION — FAIXA SEM CARD */}
        <section id="notion" className="section section-notion" data-observe>
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1.05fr,1fr] gap-12 lg:gap-16 items-center">
            {/* Texto – força ficar à esquerda e acima das imagens */}
            <div className="order-1 lg:order-1 z-20 self-start lg:self-center text-left notion-copy">
              <h2 className="font-extrabold" style={{ fontSize: "clamp(2.8rem, 4.4vw, 3.8rem)" }}>
                Jarvis for Notion
              </h2>

              <p className="text-gray-200 max-w-[52ch]" style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.45rem)" }}>
                Leve sua organização para o Notion com nosso template especializado.
              </p>

              <ul className="space-y-2.5 text-gray-300" style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)" }}>
                <li>• Cartões grandes e visuais</li>
                <li>• Progresso por páginas</li>
                <li>• Categorias dobráveis</li>
              </ul>

              <div className="cta">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-2xl px-7 py-4 text-base md:text-lg bg-violet-600 hover:bg-violet-500 transition"
                >
                  Saiba mais
                </a>
              </div>
            </div>

            {/* Coluna das imagens — à direita */}
            <div className="order-2 lg:order-2 relative z-10 lg:pl-2 justify-self-end notion-shots">
              {/* Traseira (um pouco menor, deslocada p/ cima-esquerda) */}
              <div className="shot shot-back">
                <Image
                  src="/notion1.png"
                  alt="Template Notion — cartões organizados"
                  width={1800}
                  height={1100}
                  loading="lazy"
                  sizes="(max-width: 1024px) 72vw, 640px"
                  className="w-full h-auto select-none"
                />
              </div>

              {/* Frente (um pouco maior, deslocada p/ baixo-direita) */}
              <div className="shot shot-front">
                <Image
                  src="/notion2.png"
                  alt="Template Notion — progresso por páginas"
                  width={1800}
                  height={1100}
                  loading="lazy"
                  sizes="(max-width: 1024px) 78vw, 700px"
                  className="w-full h-auto select-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — ACCORDION COM GLASS */}
        <section id="faq" className="section" data-observe>
          <div className="text-center mb-6" style={{ maxWidth: "min(96vw, 1040px)", marginInline: "auto" }}>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(2rem, 3.2vw, 2.7rem)" }}>
              Alguma dúvida? Aqui está a resposta
            </h2>
            <p className="text-gray-400 mt-2">
              Ainda ficou com alguma dúvida? Envie um e-mail para <a className="underline" href="mailto:jarvisagent@arche.com">jarvisagent@arche.com</a>.
            </p>
          </div>

          <div className="accordion-wrap space-y-3">
            {faqItems.map((item, index) => (
              <div key={index} className="accordion-item">
                <button
                  className="accordion-trigger w-full text-left text-white font-semibold flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="accordion-panel">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CONTATO — CARD COM GLASS */}
        <section id="contato" className="section" data-observe>
          <div className="section-inner">
            <motion.div
              className="glass px-10 py-12 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUpSection}
            >
              <h2 className="h2 text-center mb-2">Quer testar primeiro?</h2>
              <p className="lead text-center mb-10">
                Deixe seus dados e enviaremos o acesso ao beta.
              </p>
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = Object.fromEntries(new FormData(e.currentTarget as HTMLFormElement));
                  console.log(data);
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input required name="name" placeholder="Seu nome" className="glass w-full px-4 py-3 rounded-xl bg-transparent border-0" />
                  <input required type="email" name="email" placeholder="Seu melhor e-mail" className="glass w-full px-4 py-3 rounded-xl bg-transparent border-0" />
                  <input name="company" placeholder="Empresa" className="glass w-full px-4 py-3 rounded-xl bg-transparent border-0" />
                  <input name="role" placeholder="Cargo" className="glass w-full px-4 py-3 rounded-xl bg-transparent border-0" />
                  <select name="team_size" className="glass w-full px-4 py-3 rounded-xl bg-transparent border-0 text-white">
                    <option value="" className="bg-gray-800">Tamanho da equipe</option>
                    <option className="bg-gray-800">1–5</option>
                    <option className="bg-gray-800">6–20</option>
                    <option className="bg-gray-800">21–50</option>
                    <option className="bg-gray-800">51–200</option>
                    <option className="bg-gray-800">200+</option>
                  </select>
                  <input type="tel" name="phone" placeholder="Telefone (opcional)" className="glass w-full px-4 py-3 rounded-xl bg-transparent border-0" />
                  <select name="ref" className="glass w-full px-4 py-3 rounded-xl bg-transparent border-0 text-white md:col-span-2">
                    <option value="" className="bg-gray-800">Como conheceu o Jarvis?</option>
                    <option className="bg-gray-800">Indicação</option>
                    <option className="bg-gray-800">Redes sociais</option>
                    <option className="bg-gray-800">Busca</option>
                    <option className="bg-gray-800">Evento</option>
                    <option className="bg-gray-800">Outro</option>
                  </select>
                  <textarea name="goal" rows={4} placeholder="Objetivo principal com o Jarvis" className="glass w-full px-4 py-3 rounded-xl bg-transparent border-0 md:col-span-2 resize-none"></textarea>
                </div>

                <label className="flex items-start gap-2 text-sm text-gray-300">
                  <input type="checkbox" className="mt-1 accent-violet-600" required />
                  Aceito receber comunicações sobre o Jarvis e concordo com os termos de privacidade.
                </label>

                <motion.button
                  type="submit"
                  className="w-full md:w-auto rounded-2xl bg-violet-600 hover:bg-violet-500 px-6 py-3 font-medium transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Quero participar
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer border-t border-white/5 text-sm text-gray-400">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>Jarvis Agent por Agência Arche</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-300 transition">Termos</a>
            <a href="#" className="hover:text-gray-300 transition">Privacidade</a>
            <a href="mailto:contato@exemplo.com" className="hover:text-gray-300 transition">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}