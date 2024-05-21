'use client'
import Image from 'next/image';
import iphoneBckgrnd from '../public/assets/iphoneBckgrnd.png';
import {Navbar} from "./components/navbar/Index";
export default function Home() {

  

  return (
    <main>
      <Navbar />
      <div className=" bg-black" style={{height: "calc(100vh - 44px)"}}>
        <Image src={iphoneBckgrnd} alt="Back-ground_MG" width={'100%'} height={'100%'} className='object-fill' priority/>
    </div>
    </main>
  );
}
