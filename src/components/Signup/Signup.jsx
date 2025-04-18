import React from "react";

const Signup = () => {
  return (
    <>
      <section>
        <div className="bg-[#eee] py-5 lg:py-10">
          <h2 className="text-lg lg:text-4xl text-center font-open font-semibold">
            Create New Customer Account
          </h2>
        </div>

        <div className="container mx-auto">
          <div className="mt-2.5 lg:mt-10 p-5">
            <form>
              <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-10">
                {/* Personal Information  */}
                <div>
                  <h3 className="mb-4 lg:mb-7 text-base lg:text-2xl font-open font-semibold">
                    Personal Information
                  </h3>

                  <div className="mt-2 w-full lg:w-md flex flex-col gap-1.5">
                    <label className="text-[#777] font-open">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="border border-[#eee] py-2 px-2.5 focus:outline-none"
                    />
                  </div>

                  <div className="mt-5 w-full lg:w-md flex flex-col gap-1.5">
                    <label className="text-[#777] font-open">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="border border-[#eee] py-2 px-2.5 focus:outline-none"
                    />
                  </div>

                  <div className="mt-5 flex flex-col gap-1.5">
                    <div>
                      <label htmlFor="check">
                        <input type="checkbox" name="" id="check" />{" "}
                        <span className="font-open text-[#666] ml-1.5">
                          Sign Up for Newsletter
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="mt-20 w-full lg:w-md hidden lg:flex flex-col gap-1.5">
                    <button className="uppercase bg-black py-3.5 text-white font-open font-semibold cursor-pointer">
                      create an account
                    </button>
                  </div>
                </div>

                {/* Sign-in Information  */}
                <div>
                  <h3 className="mb-4 lg:mb-7 w-full lg:w-md text-base lg:text-2xl font-open font-semibold">
                    Sign-in Information
                  </h3>
                  <div className="mt-2 w-full lg:w-md flex flex-col gap-1.5">
                    <label className="text-[#777] font-open">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="border border-[#eee] py-2 px-2.5 focus:outline-none"
                    />
                  </div>

                  <div className="mt-5 w-full lg:w-md flex flex-col gap-1.5">
                    <label className="text-[#777] font-open">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      className="border border-[#eee] py-2 px-2.5 focus:outline-none"
                    />
                    <span className="font-open text-[#777] text-sm">
                      Password Strength: No Password{" "}
                    </span>
                  </div>

                  <div className="mt-5 w-full lg:w-md flex flex-col gap-1.5">
                    <label className="text-[#777] font-open">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      className="border border-[#eee] py-2 px-2.5 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button  */}
              <div className="">
                <div className="mt-5 lg:hidden w-full lg:w-md flex flex-col gap-1.5">
                  <button className="uppercase bg-black py-3.5 text-white font-open font-semibold cursor-pointer">
                    create an account
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

export default Signup;
