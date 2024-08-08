import { ThemeProvider } from "@/components/theme-provider";
import { MainContents } from "@/components/main-contents";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <MainContents />
    </ThemeProvider>
  );
};

export default App;
