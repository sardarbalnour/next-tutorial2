"use client";

import axios from "axios";

function AddProduct() {
  const handleAddProduct = () => {
    axios({
      url: "http://localhost:3008/products",
      method: "POST",
      data: {
        id: (Math.random() * 1000).toFixed(),
        title: "Added post",
        views: 122,
      },
    });
  };

  return (
    <div>
      <button
        className="bg-emerald-500 w-fit p-2 m-3 rounded-sm cursor-pointer"
        onClick={handleAddProduct}
      >
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;

// to nosxe jadid json-server age id nafresti ham xodesh vasash id unique mizare