"use client";

import { useState } from "react";
// import ServerComponent from "./serverComponent";

function Counter({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      Counter
      <br />
      <button
        className="bg-amber-50 text-cyan-900 text-2xl p-1 m-3 cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      {count}
      {/* <ServerComponent /> client component mishe injuri chon parenti ke dare renderesh mikone inja clinet componente */}
      {children}
      {/* aln chon inja be onvane children az about omade dige server component hesab mishe bazam
      chon to About render shode ke server component hast xodesh va taqiresh nemide */}
    </div>
  );
}

export default Counter;
