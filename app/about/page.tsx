import Counter from "./components/counter";
import ServerComponent from "./components/serverComponent";

function About() {
  return (
    <>
      <div>About</div>
      <Counter>
        <ServerComponent />
      </Counter>
    </>
  );
}

export default About;
