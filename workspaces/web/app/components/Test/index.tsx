import { theClientAnswer } from "~/components/Test/answer.client";

import { useEffect, useState } from "react";

export default function Test(): JSX.Element {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted ? <div>Test {theClientAnswer}</div> : <></>;
}

// export default function Test(): JSX.Element {
//   if (typeof window === "undefined") {
//     throw Error("This is client only component.");
//   }
//   return <div>Test {theClientAnswer}</div>;
// }

// export default function Test(): JSX.Element {
//   return <div suppressHydrationWarning={true}>Test {theClientAnswer}</div>;
// }
