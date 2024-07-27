import "./App.css";
import Title from "./components/Title";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <main>
        <Title />
        <Main />
      </main>
      <Footer />
    </div>
  );
}
