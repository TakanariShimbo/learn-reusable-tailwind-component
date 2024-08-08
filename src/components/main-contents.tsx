import { ThemeToggle } from "@/components/theme-toggle";

export const MainContents = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-5">
      <p className="text-3xl font-bold text-primary">HELLO WORLD</p>
      <ThemeToggle />
    </div>
  );
};
