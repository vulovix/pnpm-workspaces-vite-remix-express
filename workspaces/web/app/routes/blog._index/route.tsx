import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Suspense, lazy } from "react";
const posts = import.meta.glob("../blog/*.mdx");

const Test = lazy(() => import("~/components/Test"));

export const meta: MetaFunction = () => {
  return [
    { title: "Articles" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Articles() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <h1>Articles</h1>
      {Object.keys(posts).map((key) => {
        const Comp = posts[key];
        return (
          <div>
            <Link to={key.slice(0, -4)}>{key}</Link>
          </div>
        );
      })}
      <Test />
    </Suspense>
  );
}
