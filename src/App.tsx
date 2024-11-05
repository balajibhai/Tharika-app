import BigWhiteCard from "./Atoms/BigWhiteCard";
import Footer from "./Molecules/Footer";
import Header from "./Molecules/Header";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <div
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}
      >
        <Header />
      </div>
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          marginTop: "60px",
          marginBottom: "50px",
        }}
      >
        {/* Adjust marginTop and marginBottom based on header and footer height */}
        <BigWhiteCard />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
