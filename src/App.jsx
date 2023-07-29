import BestSellingChairs from "./components/BestsellersSection";
import FeaturesSection from "./components/FeaturesSection";
import Header from "./components/Header";

import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <div className="container">
      <Header />
      <FeaturesSection />
      <TestimonialsSection />
      <BestSellingChairs />
    </div>
  );
}

export default App;
