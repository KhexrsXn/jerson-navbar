'use client'
import { useState, useRef, useEffect } from 'react';
import { FaApple } from 'react-icons/fa';
import { IoSearch, IoBag } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";
import { BsBoxFill } from "react-icons/bs";
import { CgPentagonUp } from "react-icons/cg";
import { MdOutlineFlagCircle, MdAccountCircle } from "react-icons/md";

function Item({ name, onMouseEnter, onMouseLeave, onClick }) {
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const updateIsTabletOrMobile = () => {
      if (typeof window !== 'undefined') {
        setIsTabletOrMobile(window.innerWidth <= 768);
      }
    };
    if (typeof window !== 'undefined') {
      updateIsTabletOrMobile(); 
      window.addEventListener('resize', updateIsTabletOrMobile);
      return () => {
        window.removeEventListener('resize', updateIsTabletOrMobile);
      };
    }
  }, []);

  return (
    <div
      className={`px-1 text-white`}
      onMouseEnter={!isTabletOrMobile ? onMouseEnter : undefined}
      onMouseLeave={!isTabletOrMobile ? onMouseLeave : undefined}
      onClick={isTabletOrMobile ? onClick : undefined}
    >
      <div className={`flex items-center font-sans whitespace-nowrap cursor-pointer px-2 h-full ${isTabletOrMobile ? 'text-2xl' : 'text-xs'}`}>
        {name}
      </div>
    </div>
  );
}

export const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hoverTimeout = useRef(null);
  const firstInputRef = useRef();

  const handleItemHover = (itemName) => {
    setHoveredItem(itemName);
    setIsHovering(true);
    clearTimeout(hoverTimeout.current);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovering(false);
    }, 300); 
  };

  const handleCart = (itemName) => {
    if (hoveredItem === itemName && isHovering) {
      hoverTimeout.current = setTimeout(() => {
        setIsHovering(false);
      }, 300); 
    } else {
      setHoveredItem(itemName);
      setIsHovering(true);
      clearTimeout(hoverTimeout.current);
    }
  };

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isHovering]);

  return (
    <>
      <nav className="bg-navColor h-11 w-full flex items-center justify-center relative opacity-100">
        <div
          className={`backdrop-blur-sm bg-black/30 h-full w-full absolute top-11 z-0`}
          style={{ height: isHovering || menuOpen === true ? "calc(100vh - 44px)" : '0' }}>
        </div>
        <div className="h-full flex items-center container px-3 mx-auto z-10 justify-between opacity-100 bg-navColor">
          <div className="h-full flex items-center">
            <button onClick={()=> window.location.reload()}><FaApple className="text-white text-2xl" /></button>
          </div>
          <div className={`tablet-size absolute pl-5 pt-96 pb-5 transition-transform ease-out duration-300 left-0 w-full bg-navColor opacity-100 overflow-hidden ${menuOpen ? '-translate-y-0' : '-translate-y-full'} md:relative  md:pl-0 md:pt-0 md:pb-0 md:translate-y-0 md:flex md:h-full`}>
           <Item
              onMouseEnter={() => handleItemHover('Store')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemHover('Store')}
              name="Store"
            />
            <Item
              onMouseEnter={() => handleItemHover('Mac')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemHover('Mac')}
              name="Mac"
            />
            <Item
              onMouseEnter={() => handleItemHover('iPad')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemHover('iPad')}
              name="iPad"
            />
            <Item
              onMouseEnter={() => handleItemHover('iPhone')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemHover('iPhone')}
              name="iPhone"
            />
            <Item
              onMouseEnter={() => handleItemHover('Watch')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemHover('Watch')}
              name="Watch"
            />
            <Item
              onMouseEnter={() => handleItemHover('Vision')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemHover('Vision')}
              name="Vision"
            />
            <Item
              onMouseEnter={() => handleItemHover('AirPods')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemHover('AirPods')}
              name="AirPods"
            />
            <Item
              onMouseEnter={() => handleItemHover('TV & Home')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemHover('TV & Home')}
              name="TV & Home"
            />
            <Item
              onMouseEnter={() => handleItemHover('Entertainment')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemHover('Entertainment')}
              name="Entertainment"
            />
            <Item
              onMouseEnter={() => handleItemHover('Accessories')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemHover('Accessories')}
              name="Accessories"
            />
            <Item
              onMouseEnter={() => handleItemHover('Support')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemHover('Support')}
              name="Support"/>
          </div>
          <div>
           <div className='flex items-center'>
            <button className="flex h-full items-center px-2 text-base text-white" onClick={() => handleCart('Search')} onMouseLeave={handleMouseLeave}><IoSearch /></button>
            <button className="flex h-full items-center px-2 text-base text-white" onClick={() => handleCart('Cart')} onMouseLeave={handleMouseLeave}><IoBag /></button>
            <div className="md:hidden flex justify-between  items-center z-50">
              <button className="text-white text-xl" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
           </div>
          </div>
        </div>
        <div
          className={`absolute transition-transform ease-out duration-300 bg-navColor opacity-100 ${
            isHovering ? '-translate-y-0 z-10' : '-translate-y-full'
          } w-screen top-0 pt-10 md:pt-0 md:top-11 md:z-0 text-white`}
          onMouseEnter={() => clearTimeout(hoverTimeout.current)}
          onMouseLeave={handleMouseLeave}>
          <div className={` container mx-auto transition duration-700 ease-in-out pt-16 relative opacity-100 md:pt-0 h-screen md:h-full`}>
          <div className={`flex justify-between items-center absolute z-50 top-0 w-full`}>
            <button className={`md:hidden  ${isHovering ? 'block' : 'hidden'} ${hoveredItem === 'Cart' || hoveredItem === 'Search' ? 'hidden' : 'block'}`} onClick={() => setIsHovering(false)}><IoIosArrowBack className=' z-20 text-white text-xl' /></button>
            <button className={`text-white text-xl md:hidden ${hoveredItem === 'Cart' || hoveredItem === 'Search' ? 'hidden' : 'block'}`} onClick={() => {setMenuOpen(!menuOpen),setIsHovering(false) }}>
                  {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <button className={`md:hidden z-50 flex justify-end items-end w-full mr-10 ${hoveredItem === 'Cart' || hoveredItem === 'Search' ? 'block' : 'hidden'}`} onClick={() => setIsHovering(false)}><FaTimes className='text-2xl text-white' /></button>
          </div>
            <div className={`transition duration-700 ease-in-out ${hoveredItem === 'Store' ? 'opacity-100' : 'opacity-0'} `}>
              {hoveredItem === 'Store' && (
                <div className={`flex p-4 gap-10 transition flex-wrap ease-in-out ${hoveredItem === 'Store' ? 'opacity-100' : 'opacity-0'}`}>
                  <div>
                    <h6 className="text-sm font-sans text-slate-400">Store</h6>
                    <ul className="text-xl font-bold mt-2 flex flex-col gap-2">
                      <li>Shop the latest</li>
                      <li>Mac</li>
                      <li>iPad</li>
                      <li>iPhone</li>
                      <li>Apple Watch</li>
                      <li>Apple Version</li>
                      <li>Accessories</li>
                    </ul>
                  </div>
                  <div className="ml-5">
                    <h6 className="text-sm font-sans text-slate-400">Quick Links</h6>
                    <ul className="text-xs font-bold mt-3 flex flex-col gap-2">
                      <li>Find a Store</li>
                      <li>Order Status</li>
                      <li>Apple Trade In</li>
                      <li>Financing</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-sm font-sans text-slate-400">Shop Special Stores</h6>
                    <ul className="text-sm font-bold mt-3 flex flex-col gap-2">
                      <li className="text-xs">Certified Refurbished</li>
                      <li className="text-xs">Education</li>
                      <li className="text-xs">Business</li>
                      <li className="text-xs">Veterans and Military</li>
                      <li className="text-xs">Government</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className={`transition duration-700 ease-in-out ${hoveredItem === 'Mac' ? 'opacity-100' : 'opacity-0'}`}>
              {hoveredItem === 'Mac' && (
                <div className={`flex gap-10 p-4  flex-wrap transition ease-in-out`}>
                  <div>
                    <h6 className="text-sm font-sans text-slate-400">Explore Mac</h6>
                    <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                      <li>Explore All Mac</li>
                      <li>MacBook Air</li>
                      <li>MacBook Pro</li>
                      <li>iMac</li>
                      <li>Mac Mini</li>
                      <li>Mac Studio</li>
                      <li>Mac Pro</li>
                      <li>Displays</li>
                      <li>
                        <div className="flex flex-row mt-5">
                          <p className="text-xs">Compare Mac</p>
                          <p className="text-xs">Mac Does That</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-sm font-sans text-slate-400">Shop Mac</h6>
                    <ul className="text-sm font-bold mt-3 flex flex-col gap-2">
                      <li className="text-xs">Shop Mac</li>
                      <li className="text-xs">Mac Accessories</li>
                      <li className="text-xs">Apple Trade In</li>
                      <li className="text-xs">Financing</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-sm font-sans text-slate-400">More from Mac</h6>
                    <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                      <li className="text-xs">Mac Support</li>
                      <li className="text-xs">AppleCare+ for Mac</li>
                      <li className="text-xs">macOS Sonoma</li>
                      <li className="text-xs">Apps by Apple</li>
                      <li className="text-xs">iCloud+</li>
                      <li className="text-xs">Mac for Business</li>
                      <li className="text-xs">Education</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className={`transition duration-700 ease-in-out ${hoveredItem === 'iPad' ? 'opacity-100' : 'opacity-0'}`}>
              {hoveredItem === 'iPad' && (
                <div className='flex flex-wrap gap-10 p-4 transition ease-in-out'>
                <div>
                <h6 className="text-sm font-sans text-slate-400">Explor iPad</h6>
                <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                  <li>Explor All iPad</li>
                  <li>iPad Pro</li>
                  <li>iPad Air</li>
                  <li>iPad</li>
                  <li>iPad Mini</li>
                  <li>Apple Pencil</li>
                  <li>Keyboard</li>
                  <li>
                    <div className="flex flex-col mt-3">
                      <span className="text-sm">Compare iPad</span>
                      <span className="text-sm">Why iPad</span>
                    </div>
                  </li>
                </ul>
                </div>
              <div>
                <h6 className="text-sm font-sans text-slate-400">Shop iPad</h6>
                <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                  <li className="text-xs">Shop iPad</li>
                  <li className="text-xs">iPad Accessories</li>
                  <li className="text-xs">Apple Trade In</li>
                  <li className="text-xs">Financing</li>
                </ul>
              </div>
              <div>
                <h6 className="text-sm font-sans text-slate-400">More from iPad</h6>
                <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                  <li className="text-xs">iPad Support</li>
                  <li className="text-xs">AppleCare+ for iPad</li>
                  <li className="text-xs">iPadOS 17</li>
                  <li className="text-xs">Apps by Apple</li>
                  <li className="text-xs">iCloud+</li>
                  <li className="text-xs">Education</li>
                </ul>
              </div>
            </div>
              )}
            </div>
            <div className={`transition duration-700 ease-in-out ${hoveredItem === 'iPhone' ? 'opacity-100' : 'opacity-0'}`}>
              {hoveredItem === 'iPhone' && (
                <div className='flex flex-wrap gap-10 p-4 transition ease-in-out'>
                  <div>
                  <h6 className="text-sm font-sans text-slate-400">Explor iPhone</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li>Explor All iPhone</li>
                    <li>iPhone 15 Pro</li>
                    <li>iPhone 15</li>
                    <li>iPhone 14</li>
                    <li>iPhone 13</li>
                    <li>iPhone SE</li>
                    <li>
                      <div className="flex flex-col mt-3">
                        <span className="text-sm">Compare iPhone</span>
                        <span className="text-sm">Switch from Android</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-sm font-sans text-slate-400">Shop iPhone</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li className="text-xs">Shop iPhone</li>
                    <li className="text-xs">iPhone Accessories</li>
                    <li className="text-xs">Apple Trade In</li>
                    <li className="text-xs">Carrier Deals at Apple</li>
                    <li className="text-xs">Financing</li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-sm font-sans text-slate-400">More from iPhone</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li className="text-xs">iPhone Support</li>
                    <li className="text-xs">AppleCare+ for iPhone</li>
                    <li className="text-xs">iOS 17</li>
                    <li className="text-xs">Apps by Apple</li>
                    <li className="text-xs">iPhone Privacy</li>
                    <li className="text-xs">iCloud+</li>
                    <li className="text-xs">Wallet Pay, Card</li>
                    <li className="text-xs">Siri</li>
                  </ul>
                </div>
                </div>
              )}
            </div>
            <div className={`transition duration-700 ease-in-out ${hoveredItem === 'Watch' ? 'opacity-100' : 'opacity-0'}`}>
              {hoveredItem === 'Watch' && (
                <div className='flex flex-wrap gap-10 p-4 transition ease-in-out'>
                <div>
                  <h6 className="text-sm font-sans text-slate-400">Explore Watch</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li>Explore All Apple Watch</li>
                    <li>Apple Watch Series 9</li>
                    <li>Apple Watch Ultra 2</li>
                    <li>Apple Watch SE</li>
                    <li>Apple Watch Nike</li>
                    <li>Apple Watch Hermès</li>
                    <li>
                      <div className="flex flex-col mt-3">
                        <span className="text-sm">Compare Apple Watch</span>
                        <span className="text-sm">Why Apple Watch</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-sm font-sans text-slate-400">Shop Watch</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li className="text-xs">Shop Apple Watch</li>
                    <li className="text-xs">Apple Watch Studio</li>
                    <li className="text-xs">Apple Watch Bands</li>
                    <li className="text-xs">Apple Watch Accessories</li>
                    <li className="text-xs">Apple Trade In</li>
                    <li className="text-xs">Financing</li>
                  </ul>
                </div>
              <div>
                <h6 className="text-sm font-sans text-slate-400">More from Watch</h6>
                <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                  <li className="text-xs">Apple Watch Support</li>
                  <li className="text-xs">AppleCare+</li>
                  <li className="text-xs">WatchOS 10</li>
                  <li className="text-xs">Apps by Apple</li>
                  <li className="text-xs">Apple Fitness+</li>
                </ul>
              </div>
                </div>
              )}
            </div>
            <div className={`transition duration-700 ease-in-out ${hoveredItem === 'Vision' ? 'opacity-100' : 'opacity-0'}`}>
              {hoveredItem === 'Vision' && (
                <div className='flex flex-wrap gap-10 p-4 transition ease-in-out'>
                  <div>
                  <h6 className="text-sm font-sans text-slate-400">Explore Vision</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li>Explore Apple Vision Pro</li>
                    <li>
                      <div className="flex flex-col mt-3">
                        <span className="text-sm">Guided Tour</span>
                        <span className="text-sm">Tech Specs</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-sm font-sans text-slate-400">Shop Vision</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li className="text-xs">Shop Apple Vision Pro</li>
                    <li className="text-xs">Apple Vision Pro Accessories</li>
                    <li className="text-xs">Book a Demo</li>
                    <li className="text-xs">Financing</li>
                  </ul>
                </div>
              <div>
                <h6 className="text-sm font-sans text-slate-400">More from Vision</h6>
                <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                  <li className="text-xs">Apple Vision Pro Support</li>
                  <li className="text-xs">AppleCare+</li>
                </ul>
              </div>
                </div>
              )}
            </div>
            <div className={`transition duration-700 ease-in-out ${hoveredItem === 'AirPods' ? 'opacity-100' : 'opacity-0'}`}>
              {hoveredItem === 'AirPods' && (
                <div className='flex flex-wrap gap-10 p-4  transition ease-in-out'>
                  <div>
                  <h6 className="text-sm font-sans text-slate-400">Explor AirPods</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li>Explore All AirPods</li>
                    <li>AirPods Pro 2nd generation</li>
                    <li>AirPods Pro 3rd generation</li>
                    <li>AirPods Max</li>
                    <li>
                      <div className="mt-3">
                        <span className="text-sm">Compare AirPods</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div> 
                  <h6 className="text-sm font-sans text-slate-400">Shop AirPods</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li className="text-xs">Shop AirPods</li>
                    <li className="text-xs">AirPods Accessories</li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-sm font-sans text-slate-400">More from AirPods</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li className="text-xs">AirPods Support</li>
                    <li className="text-xs">AppleCare+ for Headphones</li>
                    <li className="text-xs">iOS 17</li>
                    <li className="text-xs">Apps Music</li>
                  </ul>
                </div>
                </div>
              )}
            </div>
            <div className={`transition duration-700 ease-in-out ${hoveredItem === 'TV & Home' ? 'opacity-100' : 'opacity-0'}`}>
              {hoveredItem === 'TV & Home' && (
                <div className='flex flex-wrap gap-10 p-4 transition ease-in-out'>
                <div>
                  <h6 className="text-sm font-sans text-slate-400">Explore TV & Home</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li>Explore TV & Home</li>
                    <li>Apple TV 4K</li>
                    <li>HomePod</li>
                    <li>HomePod mini</li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-sm font-sans text-slate-400">Shop TV & Home</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li className="text-xs">Shop Apple TV 4k</li>
                    <li className="text-xs">Shop HomePod</li>
                    <li className="text-xs">Shop HomePod mini</li>
                    <li className="text-xs">Shop Siri Remote</li>
                    <li className="text-xs">TV & Home Accessories</li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-sm font-sans text-slate-400">More from TV & Home</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li className="text-xs">Apple TV Support</li>
                    <li className="text-xs">Homepod Support</li>
                    <li className="text-xs">AppleCare+</li>
                    <li className="text-xs">Apps TV App</li>
                    <li className="text-xs">Apple TV+</li>
                    <li className="text-xs">Home App</li>
                    <li className="text-xs">Apple Music</li>
                    <li className="text-xs">Siri</li>
                    <li className="text-xs">AirPlay</li>
                  </ul>
                </div>

                </div>
              )}.
            </div>
            <div className={`transition duration-700 ease-in-out ${hoveredItem === 'Entertainment' ? 'opacity-100' : 'opacity-0'}`}>
              {hoveredItem === 'Entertainment' && (
                <div className='flex flex-wrap gap-10 p-4 transition ease-in-out'>
                  <div>
                  <h6 className="text-sm font-sans text-slate-400">Explore Entertainment</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li>Explore Entertainment</li>
                    <li>Apple One</li>
                    <li>Apple TV+</li>
                    <li>Apple Music</li>
                    <li>Apple Arcade</li>
                    <li>Apple Fitness+</li>
                    <li>Apple News+</li>
                    <li>Apple Podcasts</li>
                    <li>Apple Books</li>
                    <li>App Store</li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-sm font-sans text-slate-400">Support</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li className="text-xs">Apple TV+ Support</li>
                    <li className="text-xs">Apple Music Support</li>
                  </ul>
                </div>

                </div>
              )}
            </div>
            <div className={`transition duration-700 ease-in-out ${hoveredItem === 'Accessories' ? 'opacity-100' : 'opacity-0'}`}>
              {hoveredItem === 'Accessories' && (
                <div className='flex flex-wrap gap-10 p-4 transition ease-in-out'>
                  <div>
                  <h6 className="text-sm text-slate-400">Shop Accessories</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li>Shop All Accessories</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Apple Watch</li>
                    <li>Apple Vesion Pro</li>
                    <li>AirPods</li>
                    <li>TV & Home</li>
                  </ul>
                  </div>
                <div>
                  <h6 className="text-sm text-slate-400">Explore Accessories</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li className="text-sm">Made by Apple</li>
                    <li className="text-xs">Beats by Dr.Dre</li>
                    <li className="text-xs">AirTag</li>
                  </ul>
                </div>
                  </div>
              )}
            </div>
            <div className={`transition duration-700 ease-in-out ${hoveredItem === 'Support' ? 'opacity-100' : 'opacity-0'}`}>
              {hoveredItem === 'Support' && (
                <div className='flex flex-wrap gap-10 p-4 transition ease-in-out'>
                   <div>
                  <h6 className="text-sm font-sans text-slate-400">Explore Support</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li>iPhone</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>Watch</li>
                    <li>Apple Vision Pro</li>
                    <li>AirPods</li>
                    <li>Music</li>
                    <li>TV</li>
                    <li>
                       <span className="text-xs text-gray-200">
                         Explore Support
                       </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-sm font-sans text-slate-400">Get Help</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li className="text-xs">Community</li>
                    <li className="text-xs">Check Coverage</li>
                    <li className="text-xs">Repair</li>
                    <li className="text-xs">Contact Us</li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-sm font-sans text-slate-400">Helpful Topics</h6>
                  <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                    <li className="text-xs">Get AppleCare+</li>
                    <li className="text-xs">Apple ID & Password</li>
                    <li className="text-xs">Billing & Subscriotions</li>
                    <li className="text-xs">Find My</li>
                    <li className="text-xs">Accessibility</li>
                  </ul>
                </div>
                </div>
              )}
            </div>
            <div className={`transition duration-700 flex-wrap ease-in-out ${hoveredItem === 'Search' ? 'opacity-100' : 'opacity-0'}`}>
              {hoveredItem === 'Search' && (
                <div className={`flex flex-col gap-10 p-4 transition ease-in-out`}>
                  <div className="w-full">
                    <div className="flex items-center bg-navColor p-2 rounded-md">
                      <h6 className="text-2xl font-sans"><IoSearch /></h6>
                      <input
                        className="w-full p-2 bg-navColor outline-none"
                        type="text"
                        placeholder="Search apple.com"
                        ref={firstInputRef}
                      />
                    </div>
                  </div>
                  <div>
                    <h6 className="text-sm font-sans text-slate-400">Quick Links</h6>
                    <ul className="text-sm mt-3 flex flex-col">
                      <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 px-2 py-1 hover:text-white hover:bg-navColor"><FaArrowRightLong />Find a Store</li>
                      <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 px-2 py-1 hover:text-white hover:bg-navColor"><FaArrowRightLong />Apple Vision Pro</li>
                      <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 px-2 py-1 hover:text-white hover:bg-navColor"><FaArrowRightLong />AirPods</li>
                      <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 px-2 py-1 hover:text-white hover:bg-navColor"><FaArrowRightLong />AirTag</li>
                      <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 px-2 py-1 hover:text-white hover:bg-navColor"><FaArrowRightLong />Apple Trade In</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className={`transition duration-700 ease-in-out ${hoveredItem === 'Cart' ? 'opacity-100' : 'opacity-0'}`}>
              {hoveredItem === 'Cart' && (
                <div className={`flex flex-col gap-10 p-4 transition ease-in-out`}>
            <div>
                <h6 className="text-2xl font-bold text-white">Your Bag is Empty.</h6>
            </div>
            <div className="text-sm flex gap-1">
              <h6 className="text-blue-600 underline">Sign in</h6>
              <h6 className="font-bold text-gray-400">to see if you have any saved items</h6>
            </div>
            <div>
              <h6 className="text-sm font-sans text-gray-400">My Profile</h6>
              <ul className="text-sm mt-3 flex flex-col">
                <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 px-2 py-1 hover:text-white hover:bg-navColor "> <BsBoxFill />Order</li>
                <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 pr-2 py-1 hover:text-white hover:bg-navColor "> <CgPentagonUp className="text-2xl"/>Your Saves</li>
                <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 px-2 py-1 hover:text-white hover:bg-navColor "> <MdOutlineFlagCircle />Account</li>
                <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 px-2 py-1 hover:text-white hover:bg-navColor "> <MdAccountCircle />Sign in</li>
              </ul>
            </div>

                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
