// import axios from "axios";

import Counter from "./components/counter";
import ServerComponent from "./components/serverComponent";

import AddProduct from "./addProduct/AddProduct";
import { sensitiveFunc } from "../utils/serverFunc";

export interface IGetProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
// json to typescript converter copy the obj from log and paste it in this site

async function About() {
  // const { data } = await axios("https://fakestoreapi.com/products");
  // console.log(data);

  const res = await fetch("http://localhost:3008/products", {
    next: { revalidate: 10 },
  });
  const data = await res.json();

  //   const res = await fetch("http://localhost:3008/products", {
  //   cache: "force-cache",
  // });
  // cache , 'force-catch' 'no-store' ...
  // it is no store by default

  sensitiveFunc();

  return (
    <>
      <div>About</div>
      <Counter>
        <ServerComponent />
      </Counter>
      <hr />
      <AddProduct />
      {data.map((item: IGetProduct) => (
        <div key={item.id} className="m-3 bg-cyan-950 p-2">
          <h3>{item.title}</h3>
        </div>
      ))}
    </>
  );
}

export default About;

// revalidate: 10 means it will revalidate the data every 10 seconds.
// It will not fetch the data from the server every time.
// It will fetch the data from the server only if the data is older than 10 seconds.
// If the data is newer than 10 seconds, it will return the cached data.
// refresh in browser will fetch the data from the server and update the cache.
