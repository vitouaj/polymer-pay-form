import PolymerForm from "../components/polymerForm";
import BackGround from "../components/backGround";

export default function HomePage() {
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
