import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <section>
        <div className="bg-[#eee] py-5 lg:py-10">
          <h2 className="text-lg lg:text-2xl text-center font-open font-bold">
            Forgot Your Password?
          </h2>
        </div>

        <div className="container mx-auto">
          <div className="lg:flex justify-center mt-2.5 lg:mt-10 p-5">
            <form>
              <div>
                <h4 className="my-2.5 font-open text-sm text-[#777]">
                  Please enter your email address below to receive a password
                  reset link.
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
              </div>

              {/* Customer Account login Button  */}
              <div>
                <div className="mt-5 w-full lg:w-xl flex flex-col gap-1.5">
                  <button className="uppercase bg-black py-3.5 text-white font-open font-bold cursor-pointer">
                    reset my password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
