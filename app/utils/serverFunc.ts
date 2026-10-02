import "server-only";

const sensitiveFunc = () => {
  console.log("sensitive content");
};

export { sensitiveFunc };

// server-only is a special directive that tells Next.js that this file
// should only be executed on the server side.
// It prevents the code from being bundled and sent to the client,
// ensuring that sensitive information remains secure.