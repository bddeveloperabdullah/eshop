import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const OrderSummary = () => {
  return (
    <>
      <section>
        <div className="w-md p-5 border border-gray-300">
          {/* Item in Cart  */}
          <div>
            <div className="flex justify-between items-center border-b border-gray-200 cursor-pointer pb-1.5">
              <p className="font-open text-sm text-gray-400 font-light">
                1 Item in cart
              </p>
              <div>
                <IoIosArrowDown className="text-gray-400" />
              </div>
            </div>

            {/* Order Content  */}
            <div className="mt-2.5">
              <div className="mt-1.5 flex gap-2.5">
                {/* Content Photo  */}
                <div>
                  <img src="/product-1.jpeg" alt="" className="w-[50px]" />
                </div>

                {/* Content Details  */}
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-open font-bold">Tshirt</h4>
                    <p className="text-sm font-open font-light text-gray-500">
                      $100
                    </p>
                  </div>

                  {/* quntatiy */}
                  <p className="text-sm font-open font-light">
                    Qty: <span className="font-semibold">1</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary title  */}
          <h3 className="mt-5 uppercase text-sm font-open font-semibold border-b border-gray-200 pb-2">
            Order Summary
          </h3>
          <div className="mt-2.5">
            <div className="mt-2.5 flex justify-between items-center">
              <h4 className="font-open font-sm font-light text-gray-400">
                subtotal
              </h4>
              <h4 className="font-open font-sm font-light">$1000</h4>
            </div>

            <div className="mt-2.5 flex justify-between items-center">
              <h4 className="font-open font-sm font-light text-gray-400">
                Shipping
              </h4>
              <h4 className="font-open font-sm font-light">$0.0</h4>
            </div>

            <div className="mt-2.5 flex justify-between items-center border-t border-gray-200 pt-1">
              <h4 className="font-open font-sm font-light text-gray-400">
                Order Total
              </h4>
              <h4 className="font-open font-sm font-semibold">$1000</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderSummary;
