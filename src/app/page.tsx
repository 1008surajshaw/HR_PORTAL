import Image from "next/image";
import { heading } from "./font";

export default function Home() {
  return (
      <div>
           <h1 className={`${heading} text-4xl` }>Hello world</h1>
           <h1 className="text-4xl">Hello world</h1>
      </div>
  );
}
