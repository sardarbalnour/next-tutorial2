// import axios from "axios";
import Counter from "./components/counter";
import ServerComponent from "./components/serverComponent";

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

  const res = await fetch("http://localhost:3008/products");
  const data = await res.json();
  // cache , 'force-catch' 'no-store' ...

  return (
    <>
      <div>About</div>
      <Counter>
        <ServerComponent />
      </Counter>
      <hr />
      {data.map((item: IGetProduct) => (
        <div key={item.id} className="m-3 bg-cyan-950 p-2">
          <h3>{item.title}</h3>
        </div>
      ))}
    </>
  );
}

export default About;
