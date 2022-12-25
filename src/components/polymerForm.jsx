import Logo from "../assets/polymer-logo-with-icon.png.png";

export default function PolymerForm() {
  const form = {
    title: "Done-For-You Tax Compliance Invoice Templates",
    description:
      "Start using tax compliance invoices to avoid headaches and penalties due to invoice audit failure.",
  };

  return (
    <div className="w-2/6 ml-20">
      <div className="w-56">
        <img className="w-full" src={Logo}></img>
      </div>

      <div className="bg-sky-200 w-fit px-6 rounded-2xl mt-14 mb-2">
        <p className="text-blue-500 font-semibold">FREE DOWNLOAD</p>
      </div>

      <div className="reletive mt-4">
        <img
          className="absolute w-9"
          src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"
        />
        <h1 className="text-3xl font-bold mb-4 ml-10">{form.title}</h1>
      </div>

      <p className="text-lg text-gray-400">{form.description}</p>

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
            class="w-6 h-6 absolute left-32 top-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>

          <input
            className="w-full pl-11 rounded pr-4 cursor-pointer bg-blue-500 text-white border border-gray-300 rounded-sm py-2"
            type="submit"
            value="I WANT THE FREE TEMPLATES"
          />
        </div>
      </div>
    </div>
  );
}