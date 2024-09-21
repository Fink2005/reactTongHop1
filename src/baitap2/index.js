import Header from "./header";
import Navigation from "./navigation";
import Content from "./content";
import Footer from "./footer";

function Baitap2() {
  return (
    <div>
      <Header />
      <div className="main">
        <Navigation />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Baitap2;
