import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "CodeMax" },
    { name: "description", content: "Welcome to CodeMax!" },
  ];
};

export default function Index() {
  return <div className=" w-screen h-screen bg-slate-600"></div>;
}
