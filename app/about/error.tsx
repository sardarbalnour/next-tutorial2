"use client";

function ErrorAbout({ error }: { error: Error }) {
  console.log(error);
  return <div>ErrorAbout</div>;
}

export default ErrorAbout;
