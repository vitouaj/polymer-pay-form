import PolymerImage from "../assets/polymer-logo-with-icon.png.png";
import TickMark from "../assets/icons8-check-mark-button-36.png";

//import logos
import camtech from "../assets/partnerlogo/camtech.jpg";
import ideathon from "../assets/partnerlogo/ideathon.jpg";
import nicc from "../assets/partnerlogo/NICC.jpg";
import techStartup from "../assets/partnerlogo/techostartup.png";
import twd from "../assets/partnerlogo/twd.png";

export default function VideoPage(props) {
  const text =
    "success! your free report will arrive in 10 mins! while you wait watch this...";
  const title = "Discover how e-invoicing work";

  const partnerLogo = [camtech, techStartup, nicc, twd, ideathon];
  return (
    <div className="grid justify-items-center sm:mx-20 mt-4 mx-4">
      <div className="mt-4">
        <img className="sm:w-56 w-32" src={PolymerImage}></img>
      </div>

      <p className="bg-sky-200 w-fit py-1 px-10 rounded-3xl mt-9 mb-4">
        <img className="inline-block w-4 align-top mt-1" src={TickMark} />
        <span className="text-blue-500 sm:text-sm text-[12px] font-semibold">
          {text.toUpperCase()}
        </span>
      </p>

      <h1 className="sm:text-3xl font-bold text-center text-2xl">
        "{title.toUpperCase()}"
      </h1>

      <div className="mt-6 sm:w-3/4 w-full mb-4">
        <video className="w-full" controls src=""></video>
      </div>

      <button className="sm:w-1/2 mb-10 w-full rounded pr-4 cursor-pointer bg-blue-500 text-white border border-gray-300 rounded-sm py-2 hover:bg-sky-400">
        CLAIM YOUR FREE TRAIL TODAY
      </button>

      <div className="grid grid-cols-3 items-center w-full">
        <div>
          <img className="mx-auto w-2/3" src={camtech} alt="" />
        </div>
        <div>
          <img className="mx-auto w-1/4" src={techStartup} alt="" />
        </div>
        <div>
          <img className="mx-auto w-1/2" src={nicc} alt="" />
        </div>
        <div>
          <img className="mx-auto w-1/2" src={twd} alt="" />
        </div>
        <div>
          <img className="mx-auto w-1/2" src={ideathon} alt="" />
        </div>
      </div>
    </div>
  );
}
