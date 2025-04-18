import React from "react";

const ShipingAddress = () => {
  return (
    <>
      <section>
        <form>
          <div>
            <div className="mt-5.5 w-full lg:w-xl flex flex-col gap-1.5">
              <label className="text-[#777] font-open">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border border-[#eee] py-2 px-2.5 focus:outline-none"
              />
            </div>

            <div className="mt-3 w-full lg:w-xl flex flex-col gap-1.5">
              <label className="text-[#777] font-open">
                Stert Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border border-[#eee] py-2 px-2.5 focus:outline-none"
              />
            </div>

            <div className="mt-3 w-full lg:w-xl flex flex-col gap-1.5">
              <label className="text-[#777] font-open">
                Country <span className="text-red-500">*</span>
              </label>
              <select className="border border-[#eee] py-2.5 px-2.5 text-[#777] focus:outline-none">
                <option value="Bangladesh">Bangladesh</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <div className="mt-3 w-full lg:w-xl flex flex-col gap-1.5">
              <label className="text-[#777] font-open">
                Statet / Province <span className="text-red-500">*</span>
              </label>
              <select className="border border-[#eee] py-2.5 px-2.5 text-[#777] focus:outline-none">
                <option value="Dhaka">Dhaka</option>
                <option value="LosAngel">LosAngel</option>
                <option value="England">England</option>
                <option value="torento">Torento</option>
              </select>
            </div>

            <div className="mt-3 w-full lg:w-xl flex flex-col gap-1.5">
              <label className="text-[#777] font-open">
                Zip / Postal Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border border-[#eee] py-2 px-2.5 focus:outline-none"
              />
            </div>

            <div className="mt-3 w-full lg:w-xl flex flex-col gap-1.5">
              <label className="text-[#777] font-open">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border border-[#eee] py-2 px-2.5 focus:outline-none"
              />
            </div>
          </div>

          {/* Customer Account login Button  */}
          <div>
            <div className="mt-5 w-full lg:w-xl flex flex-col gap-1.5">
              <button className="uppercase bg-black py-3.5 text-white font-open font-bold cursor-pointer">
                payment
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ShipingAddress;
