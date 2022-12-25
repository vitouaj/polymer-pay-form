import "./App.css";
import PolymerForm from "./components/polymerForm";
import BackGround from "./components/backGround";

function App() {
  return (
    <div className="reletive w-full">
      <div className="absolute top-28 right-20">
        <BackGround />
      </div>
      <div className="absolute top-24">
        <PolymerForm />
      </div>
    </div>
  );
}

export default App;
