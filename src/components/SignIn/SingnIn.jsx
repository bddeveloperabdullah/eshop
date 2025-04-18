import React from "react";
import { Link } from "react-router-dom";

const SingnIn = () => {
  return (
    <>
      <section>
        <div className="bg-[#eee] py-5 lg:py-10">
          <h2 className="text-lg lg:text-2xl text-center font-open font-bold">
            Customer Login
          </h2>
        </div>

        <div className="container mx-auto">
          <div className="lg:flex justify-center mt-2.5 lg:mt-10 p-5">
            <form>
              <div>
                <h3 className="w-full lg:w-md text-base lg:text-xl font-open font-semibold">
                  Registered Customers
                </h3>

                <h4 className="my-2.5 font-open text-xs text-[#777]">
                  If you have an account, sign in with your email address.
                </h4>

                <div className="mt-5.5 w-full lg:w-xl flex flex-col gap-1.5">
                  <label className="text-[#777] font-open">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="border border-[#eee] py-2 px-2.5 focus:outline-none"
                  />
                </div>

                <div className="mt-5 w-full lg:w-xl flex flex-col gap-1.5">
                  <label className="text-[#777] font-open">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    className="border border-[#eee] py-2 px-2.5 focus:outline-none"
                  />
                </div>

                <div className="mt-5">
                  <Link className="cursor-pointer font-open">
                    Forgot Your Password?
                  </Link>
                </div>
              </div>

              {/* Customer Account login Button  */}
              <div>
                <div className="mt-5 w-full lg:w-xl flex flex-col gap-1.5">
                  <button className="uppercase bg-black py-3.5 text-white font-open font-bold cursor-pointer">
                    sign in
                  </button>
                </div>
              </div>

              {/* Create Account Button  */}
              <div>
                <div className="mt-2.5 w-full lg:w-xl flex flex-col gap-1.5">
                  <Link
                    to="/signup"
                    className="uppercase bg-black py-3.5 text-white text-center font-open font-bold cursor-pointer"
                  >
                    create an account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingnIn;
