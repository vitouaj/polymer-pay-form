import invoice from "../assets/invoice.jpg";

export default function backGround() {
  return (
    <div className="grid grid-cols-2 w-3/6 gap-6 float-right rotate-[25deg] mr-20">
      <div className="grid grid-cols-1 gap-6">
        <img className="drop-shadow-md drop-shadow-2xl" src={invoice}></img>
        <img className="drop-shadow-md drop-shadow-2xl" src={invoice}></img>
      </div>
      <div className="w-full">
        <img
          className="w-2/4 absolute top-44 drop-shadow-2xl"
          src={invoice}
        ></img>
      </div>
    </div>
  );
}
