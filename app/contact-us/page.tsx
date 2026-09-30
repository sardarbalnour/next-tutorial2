"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import { IGetProduct } from "../about/page";

function ContactUs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:3008/products").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      {data.map((item: IGetProduct) => (
        <div key={item.id} className="m-3 bg-amber-800 p-2">
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default ContactUs;
