'use client'
import {Navbar} from "./components/navbar/Index";
import Image from 'next/image';
import iphoneBckgrnd from '../public/assets/iphoneBckgrnd.png';
export default function Home() {

  return (
    <main>
      <Navbar />
      <div className="w-screen bg-black" style={{height: "calc(100vh - 44px)"}}>
      <Image src={iphoneBckgrnd} alt="Back-ground_MG"/>
    </div>
    </main>
  );
}
