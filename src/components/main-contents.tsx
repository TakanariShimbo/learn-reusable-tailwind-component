import { ThemeToggle } from "@/components/theme-toggle";
import { NormalButton } from "@/components/myui/normal-button";
import { TwMergeButton } from "@/components/myui/twmerge-button";
import { VariantsButton } from "@/components/myui/variants-button";
import { CnVariantsButton } from "@/components/myui/cn-variants-button";

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
      <CnVariantsButton pending={true} onClick={() => alert("Clicked!")}>
        Cn Variants Button
      </CnVariantsButton>
    </div>
  );
};
