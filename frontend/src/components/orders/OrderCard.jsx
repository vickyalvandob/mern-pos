// src/components/orders/OrderCard.jsx
import React from "react";
import {
  FaCheckDouble,
  FaLongArrowAltRight,
  FaCircle,
} from "react-icons/fa";

const OrderCard = () => {
  // Data statis contoh
  const order = {
    id: "#101",
    customerName: "Amrit Raj",
    mode: "Dine in",
    tableNo: 1,
    orderDate: new Date(2025, 0, 18, 20, 32),
    itemsCount: 8,
    total: 250.0,
    status: "Ready",
  };

  // Format tanggal + waktu sederhana
  const formattedDate = order.orderDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Inisial nama untuk avatar
  const initials = order.customerName
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
   <div className="w-full bg-[#262626] p-4 rounded-lg mb-4">
      {/* Header */}
      <div className="flex items-center gap-5">
        <button className="bg-[#f6b100] p-3 text-white font-bold rounded-full">
          {initials}
        </button>
        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-[#f5f5f5] text-lg font-semibold">
              {order.customerName}
            </h1>
            <p className="text-[#ababab] text-sm">
              {order.id} / {order.mode}
            </p>
            <p className="text-[#ababab] text-sm">
              Table{" "}
              <FaLongArrowAltRight className="inline text-[#ababab] mx-1" />{" "}
              {order.tableNo}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg flex items-center">
              <FaCheckDouble className="mr-1" /> {order.status}
            </p>
            <p className="text-[#ababab] text-sm flex items-center">
              <FaCircle className="mr-1 text-green-600" /> Ready to serve
            </p>
          </div>
        </div>
      </div>

      {/* Tanggal & Jumlah Barang */}
      <div className="flex justify-between items-center mt-4 text-[#ababab]">
        <p>{formattedDate}</p>
        <p>{order.itemsCount} Items</p>
      </div>

      {/* Garis pemisah */}
      <hr className="w-full mt-4 border-t border-gray-500" />

      {/* Total */}
      <div className="flex items-center justify-between mt-4">
        <h2 className="text-[#f5f5f5] text-lg font-semibold">Total</h2>
        <p className="text-[#f5f5f5] text-lg font-semibold">
          ₹{order.total.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
