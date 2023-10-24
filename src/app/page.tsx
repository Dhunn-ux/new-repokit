// pages/index.js
import Navbar from "./Navbar";
import Contact from "./Contact";
import Training from "./traning";
import Portfolio from "./Portfolio";



const Home = () => {
  return (
    <div className="bg-white">
    <div>
      <Navbar />
      <Training />
      {/* Rest of your home page content */}
+    </div>
    </div>
  );
};

export default Home;
