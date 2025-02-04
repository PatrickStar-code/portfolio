import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";

export function TerminalDemo() {
  return (
    <Terminal className="w-full">
      <TypingAnimation>&gt; pnpm dlx Conhecimentos init</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ TypeScript</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ React</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Next.js</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Tailwind CSS</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ PHP</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ MySQL</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ Python</span>
      </AnimatedSpan>

      <TypingAnimation delay={5000} className="text-muted-foreground">
        Success! Conhecimentos técnicos carregados com sucesso.
      </TypingAnimation>

      <TypingAnimation delay={5500} className="text-muted-foreground">
        Você pode agora explorar mais sobre minhas habilidades.
      </TypingAnimation>
    </Terminal>
  );
}
