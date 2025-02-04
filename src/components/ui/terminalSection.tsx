import { TerminalDemo } from "../terminal";

export default function TerminalSection() {
  return (
    <section
      className="w-full h-screen flex items-center justify-center dark:bg-gray-800 p-8"
      id="conhecimentos"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Conhecimentos Técnicos
        </h2>
        <div className="rounded-lg overflow-hidden shadow-2xl h-[400px]">
          <TerminalDemo />
        </div>
      </div>
    </section>
  );
}
