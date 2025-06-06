import Header from "./components/Header";
import Profile from "./components/Profile";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-container" aria-label="Main Container">
      <Header />
      <main className="bg-[#fcf5e5]" aria-label="Hero Section">
        <Profile />
        {/* New Post button and modals will go here in the future */}
      </main>
      <hr className="hz__line" />
      <Cards />
      <hr className="hz__line" />
      <Footer />
    </div>
  );
}

export default App;
