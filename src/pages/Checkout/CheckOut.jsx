import React from "react";
import OrderSummary from "../../components/Checkout/OrderSummary";
import ShipingAddress from "../../components/Checkout/ShipingAddress";
import OrderPaymentCard from "../../components/Checkout/OrderPaymentCard";

const CheckOut = () => {
  return (
    <>
      <section>
        <div className="bg-[#eee] py-5 lg:py-10">
          <h2 className="text-lg lg:text-2xl text-center font-open font-bold">
            Checkout
          </h2>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center gap-20 mt-2.5 lg:mt-10 p-5">
            {/* Shiping Address  */}
            <div>
              <ShipingAddress />
            </div>

            {/* Order Summary  */}
            <div className="mt-10">
              <OrderSummary />

              <OrderPaymentCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
