import type { MetaFunction } from "@remix-run/node";
import Login from "./Login";
import Nav from "./nav";

export const meta: MetaFunction = () => {
  return [
    { title: "CodeMax" },
    { name: "description", content: "Welcome to CodeMax!" },
  ];
};

export default function Index() {
  return (
    <div className=" w-screen h-screen bg-[#1B1F26]">
      {/* <Nav></Nav> */}
      <Login></Login>
    </div>
  );
}
