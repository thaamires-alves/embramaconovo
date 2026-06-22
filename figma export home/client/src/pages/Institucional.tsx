import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const topNavItems = [
  { label: "Home", to: "/" },
  { label: "Quem Somos", to: "/institucional", active: true },
  { label: "Produtos" },
  { label: "Nossas Marcas" },
  { label: "Simulador" },
  { label: "Conteúdos" },
  { label: "Contato" },
];

const heroIndicators = [true, false, false, false, false];

const numberCards = [
  {
    text: (
      <>
        Mais de <strong className="font-bold">50 anos</strong> de tradição. O
        lançamento da marca CEPAR, em maio de{" "}
        <strong className="font-bold">1974</strong>, representou o início do
        Grupo Embramaco.
      </>
    ),
  },
  {
    text: (
      <>
        Mais de <strong className="font-extrabold">1.300</strong> colaboradores
        fazem parte diretamente do Grupo Embramaco.
      </>
    ),
  },
  {
    text: (
      <>
        Com equipamentos de última geração e constante evolução, produzimos mais
        de <strong className="font-extrabold">6 milhões</strong> de m² de
        revestimentos cerâmicos e porcelanatos por mês.
      </>
    ),
  },
  {
    text: (
      <>
        Mais de 200 clientes ativos internacionalmente. Nossas exportações
        cresceram mais de 50% entre 2024 e 2025.
      </>
    ),
  },
];

const historyCards = [
  {
    title: "Início",
    description:
      "Na década de 1950 começava uma história de sucesso com a fábrica de telhas dos Irmãos Paraluppi, resultado da sociedade entre os irmãos João, Amadeu e José Paraluppi. Época de muito trabalho, estrutura enxuta e poucos recursos, mas muita dedicação e vontade de crescer.",
    image: "/figmaAssets/mask-group-7.png",
    accent: "/figmaAssets/group-515.png",
    reverse: false,
  },
  {
    title: "1974",
    description:
      "Em 1974, João Paraluppi decide sair da sociedade e investir em um novo negócio, desta vez com os filhos e, em 1º de maio do mesmo ano, nascia a CEPAR, primeira marca de revestimentos cerâmicos do Grupo – administrada por Antonio Carlos Rodrigues (Tute), como gostava de ser chamado - figura empreendedora, carismática e reconhecidamente estrategista pelo setor cerâmico.",
    image: "/figmaAssets/mask-group-6.png",
    reverse: true,
  },
];

const valuesCards = [
  {
    title: "Inovação",
    image: "/figmaAssets/image-63.png",
    text: "Uma das principais características do Grupo Embramaco ao longo de quase cinco décadas de atividades tem sido a inovação. Seja no design conectado às tendências mais recentes da arquitetura e decoração, no lançamento de peças em grandes formatos ou nos constantes investimentos na ampliação da nossa capacidade de produção, não medimos esforços para superar todas as expectativas.",
  },
  {
    title: "Excelência",
    image: "/figmaAssets/image-64.png",
    text: "Para garantir a excelência de nossos pisos e revestimentos, seguimos rigorosos padrões de produção, com modernos equipamentos e colaboradores qualificados. Esse compromisso com a satisfação e a segurança dos nossos clientes é atestado pelas certificações que recebemos dos principais organismos reguladores da indústria cerâmica.",
  },
  {
    title: "Credibilidade",
    image: "/figmaAssets/image-65.png",
    text: "A variedade e qualidade dos nossos produtos, bem como o respeito aos princípios éticos, cumprimento de prazos e valorização de práticas sustentáveis nos colocam em posição de destaque no quesito credibilidade. Esse talvez seja o maior patrimônio conquistado desde o plantio, em maio de 1974, da semente que germinou e se transformou no Grupo Embramaco.",
  },
];

const diferencialCards = [
  {
    title: "Cerâmica 100% impermeável",
    text: "Desde outubro de 2006, utilizamos uma aplicação em nossas peças que proporciona segurança e qualidade superior no aspecto de impermeabilidade. Por isso, somos a primeira e única empresa a garantir que nossos revestimentos cerâmicos são 100% impermeáveis, desde que sejam seguidas as normas de assentamento.",
  },
  {
    title: "A maior prensa da América Latina",
    text: "Com capacidade de produção de 1 milhão de metros mensais, contamos com a maior prensa da América Latina. Por ser altamente tecnológica, automatizada e contínua, ela nos permite produzir peças com melhor acabamento e uniformidade. Além disso, elas apresentam menor espessura e maior resistência mecânica, o que reflete no resultado final do produto e atende às demandas do mercado com excelência.",
  },
  {
    title: "Export",
    text: "Há mais de 20 anos levamos qualidade em porcelanatos e revestimentos cerâmicos para o mundo. Hoje, exportamos para toda América Latina, Central e Norte, e contamos com mais de 200 clientes ativos em todo o mundo, afirmando nosso compromisso com a confiança nos principais mercados internacionais.",
  },
];

const footerColumns = [
  {
    title: "FALE CONOSCO",
    content: [
      "SAC – 0800 010 8550",
      "Matriz – (19) 3545-8500",
      "ATENDIMENTO SEGUNDA À SEXTA: 07H30 ÀS 17H30 SÁBADO: 8H ÀS 11H",
      "Av. Conde Guilherme Prates, 382 – Santa Catarina, Santa Gertrudes/SP – 13510-000",
    ],
  },
  {
    title: "INÍCIO",
    content: ["Quem Somos", "Sustentabilidade", "Conteúdos"],
  },
  {
    title: "MARCAS",
    content: ["Embramaco", "Castelli", "Decore"],
  },
];

const footerLinks = [
  {
    label: "FAQ",
  },
  {
    label: "Representantes",
  },
  {
    label: "Fornecedores",
  },
  {
    label: "Trabalhe conosco",
  },
  {
    label: "Política de Privacidade",
    href: "https://www.embramaco.com.br/politica",
  },
  {
    label: "Política de Qualidade e Ambiental",
    href: "https://www.embramaco.com.br/public/images/PoliticadaQualidadeeAmbiental.pdf",
  },
  {
    label: "Relatório de Transparência Salarial",
    href: "https://www.embramaco.com.br/public/docs/relatorio-igualdade-salarial-lote-2025-2.pdf",
  },
];

export const Institucional = (): JSX.Element => {
  return (
    <main className="w-full bg-white">
      <section className="relative isolate overflow-hidden bg-black">
        <img
          className="h-[760px] w-full object-cover object-center"
          alt="Whatsapp image"
          src="/figmaAssets/whatsapp-image-2025-10-30-at-12-40-11--1--1.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,42,42,0.1)_0%,rgba(42,42,42,0.82)_85%)]" />
        <header className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-8">
            <img
              className="h-[37px] w-[183px]"
              alt="Camada"
              src="/figmaAssets/camada-1.svg"
            />
            <nav aria-label="Principal" className="hidden xl:block">
              <ul className="flex items-center gap-7">
                {topNavItems.map((item) => (
                  <li key={item.label}>
                    {item.to ? (
                      <Link
                        className={`[font-family:'Poppins',Helvetica] text-[15px] font-bold leading-normal text-white transition-opacity hover:opacity-80 ${
                          item.active ? "underline underline-offset-4" : ""
                        }`}
                        href={item.to}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="[font-family:'Poppins',Helvetica] text-[15px] font-bold leading-normal text-white transition-opacity hover:opacity-80"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-3">
              <img
                className="h-6 w-6"
                alt="Group"
                src="/figmaAssets/group-559.png"
              />
              <div className="flex items-center gap-3">
                <img
                  className="h-[17.51px] w-20"
                  alt="Group"
                  src="/figmaAssets/group-477.png"
                />
                <button
                  type="button"
                  className="flex items-center justify-center [font-family:'Poppins',Helvetica] text-[15px] font-light leading-normal text-white"
                >
                  PT I&nbsp;&nbsp;EN&nbsp;&nbsp;I&nbsp;&nbsp;ES
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="absolute inset-x-0 top-[36%] z-10 mx-auto flex max-w-[1200px] flex-col items-center px-6 text-center">
          <h1 className="[font-family:'Poppins',Helvetica] max-w-[760px] text-4xl font-light tracking-[-2.88px] text-white md:text-5xl">
            A vida acontece sobre um piso Embramaco
          </h1>
          <Button
            variant="outline"
            className="mt-8 h-auto rounded-none border-white bg-[#003e6b80] px-8 py-4 [font-family:'Poppins',Helvetica] text-[24.3px] font-normal tracking-[-0.24px] text-white hover:bg-[#003e6b] hover:text-white"
          >
            Conheça o Grupo
          </Button>
          <div className="mt-56 flex items-center gap-6">
            {heroIndicators.map((active, index) => (
              <span
                key={`hero-indicator-${index}`}
                className={`block h-1 w-16 ${
                  active ? "bg-white" : "bg-[#f0f0f07d]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative overflow-hidden bg-[#003e6b] py-16"
        aria-labelledby="numeros-title"
      >
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          alt="Mask group"
          src="/figmaAssets/mask-group-1.png"
        />
        <div className="relative mx-auto max-w-[1200px] px-6">
          <h2
            id="numeros-title"
            className="[font-family:'Poppins',Helvetica] text-center text-4xl font-medium tracking-[4.68px] text-white"
          >
            O Grupo Embramaco em números
          </h2>
          <div className="mx-auto mt-10 grid max-w-[980px] gap-5">
            {numberCards.map((card, index) => (
              <div
                key={`number-card-${index}`}
                className="relative rounded-[27.83px] bg-[#00223c]/65 px-7 py-5 pl-24"
              >
                {index === 0 && (
                  <img
                    className="absolute left-6 top-5 h-[46px] w-[46px]"
                    alt="Objects"
                    src="/figmaAssets/objects.svg"
                  />
                )}
                {index === 1 && (
                  <img
                    className="absolute left-7 top-5 h-[29px] w-[29px]"
                    alt="Vector"
                    src="/figmaAssets/vector-9.svg"
                  />
                )}
                {index === 2 && (
                  <img
                    className="absolute left-7 top-5 h-[29px] w-[29px]"
                    alt="Vector"
                    src="/figmaAssets/vector-1.svg"
                  />
                )}
                {index === 3 && (
                  <img
                    className="absolute left-7 top-5 h-[29px] w-[29px]"
                    alt="Vector"
                    src="/figmaAssets/vector-9.svg"
                  />
                )}
                <p className="[font-family:'Poppins',Helvetica] text-[27.8px] leading-[32.5px] tracking-[-1.67px] text-white">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20" aria-labelledby="historia-title">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 flex items-center justify-center gap-3">
            <img
              className="h-[21px] w-[79px]"
              alt="Image"
              src="/figmaAssets/image-58.png"
            />
            <h2
              id="historia-title"
              className="[font-family:'Poppins',Helvetica] text-center text-4xl font-medium tracking-[4.68px] text-[#003e6b]"
            >
              Nossa História
            </h2>
          </div>
          <div className="space-y-10">
            {historyCards.map((card, index) => (
              <div
                key={`history-card-${index}`}
                className={`grid items-stretch gap-0 lg:grid-cols-[390px_383px_1fr] ${
                  card.reverse ? "lg:grid-cols-[1fr_378px_431px]" : ""
                }`}
              >
                {!card.reverse ? (
                  <>
                    <Card className="rounded-none border-0 bg-[#003e6b] shadow-none">
                      <CardContent className="p-7">
                        <h3 className="[font-family:'Poppins',Helvetica] text-5xl font-semibold leading-[57.3px] tracking-[0.96px] text-white">
                          {card.title}
                        </h3>
                        <p className="[font-family:'Poppins',Helvetica] mt-8 text-[15px] font-light leading-[17.9px] tracking-[0.30px] text-white">
                          {card.description}
                        </p>
                      </CardContent>
                    </Card>
                    <div className="relative min-h-[250px]">
                      {card.accent && (
                        <img
                          className="absolute left-1.5 top-1.5 z-10 h-[25px] w-[43px]"
                          alt="Group"
                          src={card.accent}
                        />
                      )}
                      <img
                        className="h-full w-full object-cover"
                        alt="Mask group"
                        src={card.image}
                      />
                    </div>
                    <div className="relative hidden bg-[#c1c1c1] lg:block">
                      <img
                        className="absolute left-8 top-1/2 h-[95px] w-[52px] -translate-y-1/2"
                        alt="Vector"
                        src="/figmaAssets/vector-7.svg"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative hidden bg-[#c1c1c1] lg:block">
                      <img
                        className="absolute right-8 top-1/2 h-[95px] w-[52px] -translate-y-1/2"
                        alt="Vector"
                        src="/figmaAssets/vector-8-1.svg"
                      />
                    </div>
                    <Card className="rounded-none border-0 bg-[#003e6b] shadow-none">
                      <CardContent className="p-7">
                        <h3 className="[font-family:'Poppins',Helvetica] text-5xl font-semibold leading-[57.3px] tracking-[0.96px] text-white">
                          {card.title}
                        </h3>
                        <p className="[font-family:'Poppins',Helvetica] mt-8 text-[15px] font-light leading-[17.9px] tracking-[0.30px] text-white">
                          {card.description}
                        </p>
                      </CardContent>
                    </Card>
                    <div className="min-h-[381px]">
                      <img
                        className="h-full w-full object-cover"
                        alt="Mask group"
                        src={card.image}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-6 lg:grid-cols-[520px_1fr]">
          <div className="grid gap-6">
            <h2 className="[font-family:'Poppins',Helvetica] max-w-[320px] text-[64.2px] font-medium leading-[75.8px] tracking-[-3.85px] text-[#003e6b]">
              A vida <br />
              acontece <br />
              sobre um <br />
              piso Embramaco.
            </h2>
            <img
              className="w-full max-w-[520px]"
              alt="Mask group"
              src="/figmaAssets/mask-group-4.png"
            />
          </div>
          <div className="grid gap-8">
            <img
              className="w-full"
              alt="Mask group"
              src="/figmaAssets/mask-group-3.png"
            />
            <p className="[font-family:'Poppins',Helvetica] max-w-[680px] text-[23px] font-normal leading-[40px] tracking-[0.46px] text-black">
              <span className="font-light">
                Entre passos e pausas, entre o café da manhã apressado e o
                abraço demorado, a vida se desenrola, simples, intensa,
                verdadeira.  Sobre um piso Embramaco, histórias ganham cenário{" "}
                <br />e significado. É ali que os primeiros passos acontecem,
                que os sonhos ganham forma e que cada dia, por mais simples que
                pareça, se transforma em memória.  Porque a vida, em toda sua
                beleza e imperfeição,{" "}
              </span>
              <span className="font-medium">
                acontece sobre um piso Embramaco.
              </span>
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-[1200px] overflow-hidden">
          <div className="flex items-center justify-center bg-[#003e6b] px-6 py-3">
            <div className="flex items-center gap-8">
              <button
                type="button"
                className="[font-family:'Poppins',Helvetica] text-4xl font-medium tracking-[4.68px] text-white"
              >
                MISSÃO
              </button>
              <img
                className="h-[51.55px] w-[1.22px]"
                alt="Line"
                src="/figmaAssets/line-72.svg"
              />
              <button
                type="button"
                className="[font-family:'Poppins',Helvetica] text-4xl font-medium tracking-[4.68px] text-white"
              >
                VISÃO
              </button>
              <img
                className="h-[51.55px] w-[1.22px]"
                alt="Line"
                src="/figmaAssets/line-73.svg"
              />
              <button
                type="button"
                className="[font-family:'Poppins',Helvetica] text-4xl font-medium tracking-[4.68px] text-white"
              >
                VALORES
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-auto w-full"
              alt="Mask group"
              src="/figmaAssets/mask-group.png"
            />
            <img
              className="absolute inset-y-0 right-0 h-full w-[53%]"
              alt="Rectangle"
              src="/figmaAssets/rectangle-905.svg"
            />
            <div className="absolute right-[7%] top-1/2 flex max-w-[640px] -translate-y-1/2 items-start gap-6 px-4">
              <img
                className="mt-2 h-[78px] w-[78px]"
                alt="Group"
                src="/figmaAssets/group-508.png"
              />
              <p className="[font-family:'Poppins',Helvetica] text-xl font-normal leading-[27px] tracking-[2px] text-white">
                Oferecer soluções em revestimentos cerâmicos que agreguem valor
                às pessoas, trabalhando em parcerias com fornecedores e
                colaboradores, com relações baseadas em ética, respeito e
                sucesso mútuo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white py-16">
        <img
          className="absolute inset-x-0 top-0 h-[527px] w-full object-cover"
          alt="Mask group"
          src="/figmaAssets/mask-group-2.png"
        />
        <div className="relative mx-auto max-w-[1200px] px-6 pt-24">
          <div className="grid gap-8 md:grid-cols-3">
            {valuesCards.map((card) => (
              <Card
                key={card.title}
                className="rounded-none border-0 bg-[#003e6b] shadow-none"
              >
                <CardContent className="relative px-10 pb-10 pt-20 text-center">
                  <div className="absolute left-1/2 top-0 flex h-[98px] w-[98px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                    <img
                      className="max-h-[66px] max-w-[62px] object-contain"
                      alt={card.title}
                      src={card.image}
                    />
                  </div>
                  <div className="mx-auto mb-6 bg-[#4f8fbe] px-4 py-3">
                    <h3 className="[font-family:'Poppins',Helvetica] text-[37px] font-bold leading-[48.5px] tracking-[-2.22px] text-white">
                      {card.title}
                    </h3>
                  </div>
                  <p className="[font-family:'Poppins',Helvetica] text-center text-lg font-light leading-[21.5px] tracking-[0.36px] text-white">
                    {card.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#c1c1c1] py-12">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-0 h-[69px] w-full bg-[#4f8fbe]" />
          <div className="grid gap-8 pt-0 md:grid-cols-3">
            {diferencialCards.map((card) => (
              <Card
                key={card.title}
                className="rounded-none border-0 bg-transparent shadow-none"
              >
                <CardContent className="h-full bg-[url('/figmaAssets/rectangle-1257.svg')] bg-cover bg-center px-6 py-8">
                  <h3 className="[font-family:'Poppins',Helvetica] text-[25px] font-bold leading-[36.2px] text-white">
                    {card.title}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] mt-6 text-2xl font-normal leading-[34.8px] text-white">
                    {card.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#d3d3d3] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Card className="rounded-none border-0 bg-[#003e6b] shadow-none">
            <CardContent className="relative px-8 py-0">
              <div className="absolute inset-x-0 top-0 h-[67px] bg-[#4f8fbe]" />
              <div className="relative grid min-h-[284px] gap-8 pt-16 md:grid-cols-[171px_1fr]">
                <div className="flex flex-col items-start gap-4">
                  <img
                    className="h-[23px] w-[464px] max-w-full"
                    alt="Ccb centro cermico"
                    src="/figmaAssets/ccb---centro-cer-mico-do-brasil.png"
                  />
                  <img
                    className="h-[173px] w-[171px]"
                    alt="Mask group"
                    src="/figmaAssets/mask-group-5.png"
                  />
                </div>
                <p className="[font-family:'Poppins',Helvetica] max-w-[940px] text-[25px] font-normal leading-[36.2px] text-white">
                  O Grupo Embramaco possui o{" "}
                  <strong className="font-bold">
                    Sistema de Gestão da Qualidade
                  </strong>{" "}
                  (norma ABNT NBR ISO 9001), e o{" "}
                  <strong className="font-bold">
                    Sistema de Gestão Ambiental
                  </strong>{" "}
                  (norma ABNT NBR ISO 14001), certificados através do CCB –
                  Centro Cerâmico do Brasil, um organismo acreditado pela
                  Coordenação Geral de Acreditação do Inmetro, afirmando nosso
                  compromisso com a sustentabilidade e a qualidade de cada
                  produto.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <footer className="bg-[#003e6b] pt-2">
        <div className="h-[7px] w-full bg-[#e4e4e4]" />
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1.7fr_0.7fr_0.7fr_1fr]">
            <div className="relative pl-12">
              <img
                className="absolute left-0 top-0 h-[204px] w-7"
                alt="Group"
                src="/figmaAssets/group-556.png"
              />
              <h3 className="[font-family:'Poppins',Helvetica] text-xl font-semibold leading-[0.1px] text-white">
                {footerColumns[0].title}
              </h3>
              <div className="mt-8 space-y-4 [font-family:'Poppins',Helvetica] text-base font-semibold text-white">
                {footerColumns[0].content.map((item, index) => (
                  <p key={`contact-${index}`} className="whitespace-pre-line">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="[font-family:'Poppins',Helvetica] text-xl font-semibold leading-[0.1px] text-white">
                {footerColumns[1].title}
              </h3>
              <div className="mt-8 space-y-4 [font-family:'Poppins',Helvetica] text-base font-semibold text-white">
                {footerColumns[1].content.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="[font-family:'Poppins',Helvetica] text-xl font-semibold leading-[0.1px] text-white">
                {footerColumns[2].title}
              </h3>
              <div className="mt-8 space-y-4 [font-family:'Poppins',Helvetica] text-base font-semibold text-white">
                {footerColumns[2].content.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="[font-family:'Poppins',Helvetica] text-xl font-semibold leading-[0.1px] text-white">
                ATENDIMENTO
              </h3>
              <div className="mt-8 space-y-4 [font-family:'Poppins',Helvetica] text-[15px] font-semibold text-white">
                {footerLinks.map((item) =>
                  item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="block"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      key={item.label}
                      type="button"
                      className="block text-left"
                    >
                      {item.label}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center gap-5">
            <button
              type="button"
              className="[font-family:'Poppins',Helvetica] text-[15.9px] font-medium leading-normal text-[#4f8fbe] underline"
            >
              Voltar ao topo
            </button>
            <img
              className="h-[239px] w-[338px] object-cover"
              alt="Prancheta"
              src="/figmaAssets/prancheta-1-8-1.png"
            />
          </div>
        </div>
        <div className="bg-[#e0e0e0]">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
            <div className="order-2 flex items-center gap-3 md:order-1">
              <img
                className="h-[21px] w-[97px]"
                alt="Group"
                src="/figmaAssets/group-717.png"
              />
              <button
                type="button"
                className="[font-family:'Poppins',Helvetica] text-[15px] font-medium leading-normal text-black"
              >
                PT I&nbsp;&nbsp;EN&nbsp;&nbsp;I&nbsp;&nbsp;ES
              </button>
            </div>
            <p className="order-3 max-w-[783px] text-center [font-family:'Poppins',Helvetica] text-[13.5px] font-light leading-normal text-black md:order-2">
              © Grupo Embramaco l Todos os direitos reservados l Política de
              Privacidade l Desenvolvido por Postali e LR Marketing.
            </p>
            <div className="order-1 md:order-3">
              <img
                className="h-px w-[21px]"
                alt="Vector"
                src="/figmaAssets/vector-5.svg"
              />
            </div>
          </div>
        </div>
      </footer>
      <Separator className="hidden" />
    </main>
  );
};
