import React from "react";
import { FaCheckDouble, FaLongArrowAltRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const OrderList = ({ key, order }) => {
  return (
    <div className="flex items-center gap-5 mb-3">
      <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
      AM
      </button>
      <div className="flex items-center justify-between w-[100%]">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            User Name
          </h1>
          <p className="text-[#ababab] text-sm">8 Items</p>
        </div>

        <h1 className="text-[#f6b100] font-semibold border border-[#f6b100] rounded-lg p-1">
          Table 1
        </h1>

        <div className="flex flex-col items-end gap-2">
          <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg">
                <FaCheckDouble className="inline mr-2" />Ready
              </p>
              <p className="text-[#ababab] text-sm">Ready to serve</p>
        </div>
      </div>
    </div>
  );
};

export default OrderList;