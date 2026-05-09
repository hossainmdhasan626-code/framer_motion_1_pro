import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/HeroSection";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="h-screen w-full">
      {/* Header */}
      <div className="h-[5%]">
        <Header />
      </div>

      {/* HeroSeciton */}
      <div className="h-[45%]">
        <HeroSection />
      </div>

      {/* Main */}
      <div className="h-[50%]">
        <Main />
      </div>
    </div>
  );
}

export default App;
