import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const navigation = [
  "Início",
  "Corpo Clínico",
  "Sobre Nós",
  "Especialidades",
  "Clínica",
  "Antes & Depois",
  "Contactos",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#7b7167]">
      <header className="h-14 border-b border-[#e8e1d9] bg-[#fcfaf7]">
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex h-full max-w-[1440px] items-center justify-center gap-11 px-12 text-[17px] font-light tracking-[0.05em] text-[#91867d]"
        >
          {navigation.map((item) => (
            <a
              key={item}
              href="#"
              className="transition-colors duration-200 hover:text-[#756b63]"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="relative h-[calc(100vh-3.5rem)] min-h-[820px] overflow-hidden">
        <img
          src="/hero-lumera.png"
          alt="Retrato de beleza"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.88] saturate-[0.9]"
          style={{ objectPosition: "68% 38%" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(112,101,93,0.14)_0%,rgba(112,101,93,0.04)_32%,rgba(112,101,93,0.06)_55%,rgba(112,101,93,0.14)_78%,rgba(112,101,93,0.18)_100%)]" />
        <div className="absolute inset-y-0 right-0 w-[46%] bg-[linear-gradient(90deg,rgba(112,101,93,0)_0%,rgba(112,101,93,0.12)_28%,rgba(112,101,93,0.26)_74%,rgba(112,101,93,0.34)_100%)]" />

        <div className="absolute left-[112px] top-[94px] max-w-[320px] text-[#fffaf5]">
          <p
            className={`${display.className} text-[84px] font-light leading-[0.86] tracking-[0.03em] text-[#fffaf6]`}
            style={{ textShadow: "0 1px 12px rgba(84, 75, 68, 0.08)" }}
          >
            Luméra
          </p>
          <p className="mt-4 text-[17px] uppercase tracking-[0.56em] text-white/92">CLINIC</p>
          <p className="mt-8 text-[12px] uppercase tracking-[0.26em] text-white/76">
            CLÍNICA DE MEDICINA ESTÉTICA
          </p>
        </div>

        <div className="absolute right-[118px] top-[37.5%] w-[530px] -translate-y-1/2 text-[#fffaf6]">
          <p className="mb-5 text-[15px] font-light uppercase tracking-[0.32em] text-white/82">
            GARANTIMOS A MELHOR
          </p>

          <div>
            <h1
              className={`${display.className} whitespace-pre-line text-[92px] font-light leading-[0.86] tracking-[-0.03em] text-white`}
              style={{ textShadow: "0 1px 12px rgba(82, 73, 65, 0.1)" }}
            >
              {"Solução\nEstética"}
            </h1>

            <p
              className="mt-5 text-[15px] font-light tracking-[0.32em] text-white/82"
              style={{ textShadow: "0 1px 10px rgba(82, 73, 65, 0.08)" }}
            >
              PARA SI
            </p>
          </div>

          <div className="mt-9 flex w-[430px] flex-col gap-4">
            <a
              href="#"
              className="flex h-[56px] items-center justify-center rounded-[6px] border border-white/60 px-6 text-center text-[15px] font-light uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-white/8"
            >
              CONHEÇA OS NOSSOS TRATAMENTOS
            </a>
            <a
              href="#"
              className="flex h-[56px] items-center justify-center rounded-[6px] border border-white/52 px-6 text-center text-[15px] font-light uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-white/8"
            >
              MARQUE JÁ A SUA AVALIAÇÃO
            </a>
          </div>

          <div className="mt-7 w-[460px]">
            <p className="text-[14px] font-light uppercase tracking-[0.08em] text-white/78">
              HORÁRIO: SEG. A SEX. 10:30–13:00H | 14:00–19:30H
            </p>
            <span className="mt-3 inline-flex h-8 items-center rounded-[5px] border border-white/30 px-4 text-[12px] font-light uppercase tracking-[0.16em] text-white/78">
              REGISTO ERS E000000
            </span>
          </div>
        </div>

        <a
          href="#"
          aria-label="WhatsApp"
          className="absolute bottom-7 right-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_20px_rgba(37,211,102,0.24)] transition-colors duration-200 hover:bg-[#20bd5c]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.61 2 2.2 6.4 2.2 11.83c0 1.74.45 3.43 1.31 4.94L2 22l5.39-1.41a9.85 9.85 0 0 0 4.63 1.18h.01c5.42 0 9.82-4.4 9.82-9.82 0-2.62-1.02-5.1-2.8-7.04Zm-7.02 15.2h-.01a8.18 8.18 0 0 1-4.15-1.13l-.3-.18-3.2.84.85-3.12-.2-.31a8.15 8.15 0 0 1-1.25-4.36c0-4.51 3.67-8.18 8.18-8.18 2.18 0 4.24.86 5.78 2.4a8.14 8.14 0 0 1 2.39 5.78c0 4.51-3.67 8.18-8.17 8.18Zm4.49-6.13c-.24-.12-1.44-.71-1.66-.78-.22-.08-.38-.12-.54.12-.16.23-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.17-.71-.64-1.2-1.43-1.34-1.67-.14-.23-.01-.36.11-.48.11-.12.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.8-.19-.45-.39-.39-.54-.39h-.46c-.16 0-.42.06-.64.3-.22.23-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.59 4.11 3.62.57.24 1.01.39 1.36.5.57.18 1.08.15 1.49.09.46-.07 1.44-.58 1.64-1.15.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
          </svg>
        </a>
      </section>
    </main>
  );
}
