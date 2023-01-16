import Logo from "../assets/polymer-logo-with-icon.png.png";
import TickMark from "../assets/icons8-check-mark-button-36.png";
import invoice from "../assets/invoice.jpg";

export default function PolymerForm() {
  const form = {
    title: "Done-For-You Tax Compliance Invoice Templates",
    description:
      "Start using tax compliance invoices to avoid headaches and penalties due to invoice audit failure.",
  };

  return (
    <div className="sm:w-1/2 sm:ml-20 sm:px-4 mx-6 text-sm">
      <div className="sm:w-56 w-32 mb-7">
        <img className="w-full" src={Logo}></img>
      </div>

      <div className="sm:bg-sky-200 sm:w-fit sm:px-6 sm:rounded-2xl sm:mt-14 sm:mb-2 grid justify-items-center">
        <p className="text-blue-500 bg-sky-200 px-4 rounded-2xl font-semibold">
          FREE DOWNLOAD
        </p>
      </div>

      <p className="mt-4 reletive mb-6">
        <img className="inline-block sm:align-top sm:m-0 w-6" src={TickMark} />
        <span className="sm:text-2xl  font-bold sm:mb-4 sm:ml-1 text-lg">
          {form.title}
        </span>
      </p>

      <div className="sm:hidden grid justify-items-center">
        <img
          className="max-w-[50%] drop-shadow-md drop-shadow-2xl"
          src={invoice}
        ></img>
      </div>

      <p className="text-lg text-gray-400 mt-4">{form.description}</p>

      <div className="grid colms-1 gap-2 mt-6">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="blue"
            class="w-6 h-6 absolute left-3 top-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <input
            className="w-full pl-11 border border-gray-300 rounded-sm py-2"
            type="text"
            placeholder="Enter Your Full Name"
          />
        </div>

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="blue"
            class="w-6 h-6 absolute left-3 top-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <input
            className="w-full pl-11 border border-gray-300 rounded-sm py-2"
            type="text"
            placeholder="Enter Your Full Name"
          />
        </div>
        <div className="relative mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-6 h-6 absolute left-4 top-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>

          <input
            className="w-full pl-11 rounded pr-4 cursor-pointer bg-blue-500 text-white border border-gray-300 rounded-sm py-2 hover:bg-sky-400"
            type="submit"
            value="I WANT THE FREE TEMPLATES"
          />
        </div>
      </div>
    </div>
  );
}
