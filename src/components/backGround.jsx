import invoice from "../assets/invoice.jpg";

export default function backGround() {
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 sm:w-3/6 sm:gap-6 sm:float-right sm:rotate-[25deg] sm:mr-20 hidden">
        <div className="grid grid-cols-1 gap-6 ">
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
    </>
  );
}
