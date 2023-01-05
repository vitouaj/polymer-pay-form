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

  const partnerLogo = [camtech, ideathon, nicc, techStartup, twd];
  return (
    <div className="grid justify-items-center">
      <div>
        <img className="w-56" src={PolymerImage}></img>
      </div>

      <p className="bg-sky-200 w-fit px-6 rounded-2xl mt-14 mb-4">
        <img className="inline-block w-4 align-top mt-1" src={TickMark} />
        <span className="text-blue-500 font-semibold">
          {text.toUpperCase()}
        </span>
      </p>

      <h1 className="text-3xl font-bold">"{title.toUpperCase()}"</h1>

      <div className="mt-6 mb-4">
        <video className="w-full" controls src=""></video>
      </div>

      <button className="mb-2 w-full pl-11 rounded pr-4 cursor-pointer bg-blue-500 text-white border border-gray-300 rounded-sm py-2 hover:bg-sky-400">
        CLAIM YOUR FREE TRAIL TODAY
      </button>

      <div className="flex bg-gray-400">
        {partnerLogo.map((logo) => {
          return (
            <div className="w-1/2 mx-2">
              <img src={logo} alt="partnerlogo" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
