import React, { useEffect, useState } from "react";
import axios from "axios";
import { product } from "../../const/const";

const ProductTable = (props) => {
  const [k, setK] = useState([]);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 9 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/Prasadlokhande-880/Json/main/temp.js"
        );
        setK(response.data);

        console.log(k);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const showNextRows = () => {
    setVisibleRange((prevRange) => ({
      start: prevRange.start + 10,
      end: prevRange.end + 10,
    }));
  };

  const showPreviousRows = () => {
    setVisibleRange((prevRange) => ({
      start: prevRange.start - 10,
      end: prevRange.end - 10,
    }));
  };

  const changepage = (id) => {
    console.log(id);
    props.changeCount(1);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-1 sm:m-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-200 bg-gray-800 ">
          <thead className="text-[16px] uppercase bg-gray-700 text-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Problem State
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {product
              .slice(visibleRange.start, visibleRange.end + 1)
              .map((product, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "even:bg-gray-800" : "odd:bg-gray-900"
                  } border-b border-gray-700`}
                >
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-white text-[14px]">
                    {product.productName}
                  </td>
                  <td
                    className="px-6 py-4"
                    onClick={() => changepage(product.id)}
                  >
                    {product.color}
                  </td>
                  <td className="px-6 py-4">{product.category}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end m-8">
        <button
          onClick={showPreviousRows}
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          disabled={visibleRange.start === 0} // Disable button if already at the first page
        >
          Previous
        </button>
        <button
          onClick={showNextRows}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          disabled={visibleRange.end >= product.length - 1} // Disable button if already at the last page
        >
          Next
        </button>
        <p className="ml-2 text-gray-500">
          Showing {visibleRange.start + 1} to{" "}
          {Math.min(visibleRange.end + 1, product.length)} of {product.length}{" "}
          rows
        </p>
      </div>
    </>
  );
};

export default ProductTable;
