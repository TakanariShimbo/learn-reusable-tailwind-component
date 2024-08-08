import { ThemeToggle } from "@/components/theme-toggle";
import { NormalButton } from "@/components/myui/normal-button";
import { TwMergeButton } from "./myui/twmerge-button";
import { VariantsButton } from "./myui/variants-button";

export const MainContents = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-5">
      <p className="text-3xl font-bold text-primary">HELLO WORLD</p>
      <ThemeToggle />
      <NormalButton onClick={() => alert("Clicked!")}>Normal Button</NormalButton>
      <TwMergeButton className="bg-secondary text-secondary-foreground hover:bg-secondary/80" onClick={() => alert("Clicked!")}>
        TwMerge Button
      </TwMergeButton>
      <VariantsButton variant="destructive" size="default" onClick={() => alert("Clicked!")}>
        Variants Button
      </VariantsButton>
    </div>
  );
};
