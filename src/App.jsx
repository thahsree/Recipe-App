import { useState } from "react";
import Hero from "./sections/Hero";
import Loading from "./sections/Loading";
import Nav from "./sections/Nav";

export default function App() {

  const [isLoading , setIsLoading] = useState(false);

  if(isLoading){
    return(
      <Loading/>
    )
  }
  return (
    <main className="relative overflow-x-hidden">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
    </main>
  )
}