import React from "react";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";

const Home: React.FC = () => {
  return (
    <div
      className="relative h-screen"
      style={{
        background: `linear-gradient(125deg, #ECFCFF 0%, #ECFCFF 40%, #B2FCFF calc(40% + 1px), #B2FCFF 60%, #5EDFFF calc(60% + 1px), #5EDFFF 72%, #0284C7 calc(72% + 1px), #0284C7 100%)`,
      }}
    >
      <Header />
      <main className="flex flex-col justify-center items-center mt-5">
        <IntroSection />
      </main>
    </div>
  );
};

export default Home;
