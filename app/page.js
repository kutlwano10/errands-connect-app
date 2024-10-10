"use client";
import { useState } from "react";
import Search from "./components/home/Search";
import { SourceContext } from "./context/SourceContext";
import { DestinationContext } from "./context/DestinationContext";
import GoogleMapSection from "./components/home/GoogleMapSection";
import { LoadScript } from "@react-google-maps/api";
import Header from "./components/Header";

export default function Home() {
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);
  return (
    <SourceContext.Provider value={{ source, setSource }}>
      <DestinationContext.Provider value={{ destination, setDestination }}>
      <Header />
        <LoadScript libraries={['places']} googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <div className="w-[330px] sm:w-[100%] ">
            <Search />
          </div>
          <div className="col-span-2">
            <GoogleMapSection />
          </div>
        </div>
        </LoadScript>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}
