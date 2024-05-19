'use client'
import { useState, useRef,  } from "react";
import { FaApple } from "react-icons/fa";
// import Image from 'next/image';
// import iphoneBckgrnd from '../../../public/assets/iphoneBckgrnd.png';
import { IoSearch, IoBag } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsBoxFill } from "react-icons/bs";
import { CgPentagonUp } from "react-icons/cg";
import { MdOutlineFlagCircle, MdAccountCircle } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Item({ name, children, onMouseEnter, onMouseLeave, onClick }) {
    return (
      <div
        className="w-full h-full container mx-3"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}>
        <div className="flex items-center font-sans text-xs whitespace-nowrap cursor-pointer px-2 h-full">{name}</div>
        {children}
      </div>
    );
  }

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); 
  const firstInputRef = useRef();

  const handleItemHover = (itemName) => {
    setHoveredItem(itemName); 
    setShowDropdown(itemName!== null);
  };

  const handleCart = (itemName) => {
    if (hoveredItem === itemName && showDropdown){
      setShowDropdown(false);
      setHoveredItem(null);
    } else {
      setShowDropdown(true);
      setHoveredItem(itemName);
    }
  };


  return (
    <main>
      <nav
        className={`w-full h-11 text-white
        ${showDropdown === true ? 'backdrop-blur-sm bg-black/30' : undefined}
        `}
        style={{backgroundColor: '#111112'}}
      >
        <ul className=" h-full flex justify-center container mx-auto items-center " onMouseDown={() => setShowDropdown(true)}>
          <li className="h-full"> {/*This is for Apple Logo*/} 
            <Item
              name={<FaApple onClick={() => window.location.reload()} className={`text-xl`} />}
            />
          </li>
          <li className="h-full"> {/*This is for Store menu*/} 
            <Item
              name="Store"
              onMouseEnter={() => handleItemHover("Store")}
              onMouseLeave={() => handleItemHover(null)}
            >
              <div
                className="absolute w-screen top-11 h-full left-0 z-50"
                style={{
                  height: showDropdown && hoveredItem === "Store" ? '360px' : '0',
                  overflow: 'hidden',
                  transition: ' 0.3s ease-in-out',
                  backgroundColor: '#111112'
                }}>
                  <div className="flex p-11 gap-10">
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
                        <li className="text-xs">Certified Refurshed</li>
                        <li className="text-xs">Education</li>
                        <li className="text-xs">Business</li>
                        <li className="text-xs">Veterance and Military</li>
                        <li className="text-xs">Government</li>
                      </ul>
                    </div>
                  </div>
              </div>
            </Item>
          </li>
          <li className="h-full"> {/*This is for Mac menu*/} 
            <Item 
              name='Mac'
              onMouseEnter={() => handleItemHover('Mac')}
              onMouseLeave={() => handleItemHover(null)}
            />
            <div
                className="absolute top-11 w-screen h-full left-0 z-50"
                style={{
                height: showDropdown && hoveredItem === 'Mac' ? '450px' : '0',
                overflow: 'hidden',
                transition: '0.3s ease-in-out',
                backgroundColor: '#111112'
              }}
            >
            <div className="flex gap-10 p-11 ">
              <div>
                <h6 className="text-sm font-sans text-slate-400">Explore Mac</h6>
                <ul className="text-xl font-bold mt-3 flex flex-col gap-2">
                  <li>Explor All Mac</li>
                  <li>MacBook Air</li>
                  <li>MacBook Pro</li>
                  <li>iMac</li>
                  <li>Mac Mini</li>
                  <li>Mac Studio</li>
                  <li>Mac Pro</li>
                  <li>Displays</li>
                  <li>
                    <div className="fkex flex-row mt-5">
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
                  <li className="text-xs">macOS Sonnoma</li>
                  <li className="text-xs">Apps by Apple</li>
                  <li className="text-xs">iCloud+</li>
                  <li className="text-xs">Mac for Business</li>
                  <li className="text-xs">Education</li>
                </ul>
              </div>
            </div>
            </div>
          </li>
          <li className="h-full"> {/*This is for iPad menu*/} 
            <Item 
              name='iPad'
              onMouseEnter={() => handleItemHover('iPad')}
              onMouseLeave={() => handleItemHover(null)}
            />
            <div
              className="absolute top-11 w-screen left-0 z-50"
              style={{
                height: showDropdown && hoveredItem === 'iPad' ? '425px' : '0',
                overflow: 'hidden',
                transition: '0.3s ease-in-out',
                backgroundColor: '#111112'
              }}
            >
            <div className="flex gap-10 p-11 m-auto">
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
            </div>
          </li>
          <li className="h-full"> {/*This is for iPhone menu*/}
              <Item 
               name='iPhone'
               onMouseEnter={() => handleItemHover('iPhone')}
               onMouseLeave={() => handleItemHover(null)}/>
                <div
              className="absolute top-11 w-screen left-0 z-50"
              style={{
                height: showDropdown && hoveredItem === 'iPhone' ? '400px' : '0',
                overflow: 'hidden',
                transition: '0.3s ease-in-out',
                backgroundColor: '#111112'
              }}
            >
              <div className="flex p-11 gap-10">
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
            </div>
          </li>
          <li className="h-full"> {/*This is for Watch menu*/}
            <Item
              name='Watch'
              onMouseEnter={() => handleItemHover('Watch')}
              onMouseLeave={() => handleItemHover(null)}
            />
            <div
              className="absolute top-11 w-screen left-0 z-50"
              style={{
                height: showDropdown && hoveredItem === 'Watch' ? '390px' : '0',
                overflow: 'hidden',
                transition: '0.3s ease-in-out',
                backgroundColor: '#111112'
              }}
            >
              <div className="flex gap-10 p-11">
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
            </div>
          </li>
          <li className="h-full"> {/*This is for AirPods menu*/}
            <Item 
              name='AirPods'
              onMouseEnter={() => handleItemHover('AirPods')}
              onMouseLeave={() => handleItemHover(null)}
            />
            <div
            className="absolute top-11 w-screen left-0 z-50"
            style={{
              height: showDropdown && hoveredItem === 'AirPods' ? '300px' : '0',
              overflow: 'hidden',
              transition: '0.3s ease-in-out',
              backgroundColor: '#111112'
            }}
            >
              <div className="flex gap-10 p-11">
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
            </div>
          </li>
          <li className="h-full"> {/*This is for TV & Home menu*/}
            <Item
              name='TV & Home'
              onMouseEnter={() => handleItemHover('TV & Home')}
              onMouseLeave={() => handleItemHover(null)}
            />
            <div 
              className="absolute top-11 w-screen left-0 z-50"
              style={{
                height: showDropdown && hoveredItem === 'TV & Home' ? '330px' : '0',
                overflow: 'hidden',
                transition: '0.3s ease-in-out',
                backgroundColor: '#111112'
              }}
            >
              <div className="flex gap-10 p-11">
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
            </div>
          </li>
          <li className="h-full"> {/*This is for Entertainment menu*/}
            <Item
              name='Entertainment'
              onMouseEnter={() => handleItemHover('Entertainment')}
              onMouseLeave={() => handleItemHover(null)}
            />
            <div
            className="absolute top-11 w-screen left-0 z-50"
            style={{
              height: showDropdown && hoveredItem === 'Entertainment' ? '470px' : '0',
              overflow: 'hidden',
              transition: '0.3s ease-in-out',
              backgroundColor: '#111112'
            }}>
              <div className="flex gap-10 p-11">
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

            </div>
          </li>
          <li className="h-full"> {/*This is for Accesories menu*/}
            <Item 
              name='Accessories'
              onMouseEnter={() => handleItemHover('Accessories')}
              onMouseLeave={() => handleItemHover(null)}
            />
            <div
            className="absolute top-11 w-screen left-0 z-50"
            style={{
              height: showDropdown && hoveredItem === 'Accessories' ? '380px' : '0',
              overflow: 'hidden',
              transition: '0.3s ease-in-out',
              backgroundColor: '#111112'
            }}>
              <div className="flex p-11 gap-20">
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
            </div>

          </li>
          <li className="h-full"> {/*This is for Support menu*/}    
            <Item 
              name='Support'
              onMouseEnter={() => handleItemHover('Support')}
              onMouseLeave={() => handleItemHover(null)}
            />
            <div
            className="absolute top-11 w-screen left-0 z-50"
            style={{
              height: showDropdown && hoveredItem === 'Support' ? '425px' : '0',
              overflow: 'hidden',
              transition: '0.3s ease-in-out',
              backgroundColor: '#111112'
            }}
            >
              <div className="flex gap-10 p-11">
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
            </div>
          </li>
          <li className="h-full"> {/*This is for Search menu*/}
            <button className="flex h-full items-center px-2 text-xl" onClick={() => {handleCart('Search'), firstInputRef.current.focus()}}><IoSearch /></button>
            <div
            className="absolute top-10 w-screen left-0 z-50"
            style={{
              height: showDropdown && hoveredItem === 'Search' ? '425px' : '0',
              overflow: 'hidden',
              transition: '0.3s ease-in-out',
              backgroundColor: '#111112'
            }}
            onMouseLeave={() => handleItemHover(null)}
            >
              <div className="flex flex-col gap-10 p-11">
                <div className="w-full">
                  <div className="flex items-center bg-navColor p-2 rounded-md">
                    <h6 className="text-2xl font-sans "><IoSearch /></h6>
                    <input 
                        className="w-full p-2 bg-navColor outline-none" 
                        type="text" 
                        placeholder="Search apple.com" 
                        ref={firstInputRef}/>
                  </div>
                </div>
                <div>
                  <h6 className="text-sm font-sans text-slate-400">Quick Links</h6>
                  <ul className="text-sm mt-3 flex flex-col">
                    <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 px-2 py-1 hover:text-white hover:bg-navColor "> <FaArrowRightLong />Find a Store</li>
                    <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 px-2 py-1 hover:text-white hover:bg-navColor "> <FaArrowRightLong />Apple Vision Pro</li>
                    <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 px-2 py-1 hover:text-white hover:bg-navColor "> <FaArrowRightLong />AirPods</li>
                    <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 px-2 py-1 hover:text-white hover:bg-navColor "> <FaArrowRightLong />AirTag</li>
                    <li className="flex items-center whitespace-nowrap gap-5 text-gray-400 px-2 py-1 hover:text-white hover:bg-navColor "> <FaArrowRightLong />Apple Trade In</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="h-full"> {/*This is for Cart menu*/}
            <button className="flex h-full items-center px-3 text-xl" onClick={() => handleCart('Cart')}><IoBag /></button>
            <div
            className="absolute top-10 w-screen left-0 z-50"
            style={{
              height: showDropdown && hoveredItem === 'Cart' ? '425px' : '0',
              overflow: 'hidden',
              transition: '0.3s ease-in-out',
              backgroundColor: '#111112'
            }}
            onMouseLeave={() => handleItemHover(null)}
            >
              <div className="flex flex-col p-11 gap-5">
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
            </div>
          </li>
          <li className="h-full items-center px-2 hidden tablet-visible ">
            <button><HiOutlineMenuAlt4 /></button>
          </li>
        </ul>
        {/* Show blur background filter when any dropdown is shown or active */}
        <div
          className={`backdrop-blur-sm bg-black/30 h-screen w-screen absolute top-11 z-0`}
          style={{ height: showDropdown === true ? "calc(100vh - 44px)" : '0'}}
          >
        </div>
      </nav>
    </main>
  );
}