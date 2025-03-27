import type { MetaFunction } from "@remix-run/node";
import { Button, Badge, Alert } from "react-bootstrap";

export const meta: MetaFunction = () => {
  return [
    { title: "CodeMax" },
    { name: "description", content: "Welcome to CodeMax!" },
  ];
};

export default function Index() {
  return (
    <div className=" w-screen h-screen bg-slate-600">
      <Alert variant="success">Bootstrap is working!</Alert>
      <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}
