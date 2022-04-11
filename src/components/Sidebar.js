import React from "react";
import { SidebarData1, SidebarData2 } from "./SidebarData.js";

const Sidebar = () => {
  return (
    <aside class="h-full absolute w-64 shadow pl-5 pr-5 md:w-60">
      <div class="mb-5 text-xl flex items-center border-b h-20">
        <svg
          class="w-12 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1600 1600"
        >
          <style type="text/css">
            {
              ".st0 {fill: url(#SVGID_1_);} .st1 { fill: #E07F00; } .st2 { fill: #FFFFFF;stroke: #000000;stroke-miterlimit: 10;\n    }\n  "
            }
          </style>
          <g>
            <g>
              <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1={372.796}
                y1={813.4753}
                x2={1237.1985}
                y2={813.4753}
              >
                <stop
                  offset={0}
                  style={{
                    stopColor: "#F98200",
                  }}
                />
                <stop
                  offset={0.9874}
                  style={{
                    stopColor: "#E5BC7A",
                  }}
                />
              </linearGradient>
              <path
                className="st0"
                d="M1118.5,984.9c-56.9-31.2-111-61-172.4-94.7c11.6-15.1,21.9-29.7,33.4-43.3c73.9-87.5,80.1-201.7,15.4-291.6 c-63.7-88.4-181-121.1-281.5-78.5c-99.8,42.4-159.2,150.9-140.6,256.8c19.3,109.6,111.8,189,225.6,193.9 c230,9.8,399.3,154.9,432.6,367.4c7.9,50.6-5.3,74.3-58.2,71.5c-23.6-1.3-47.3-1.3-70.9,0.1c-38.2,2.3-57.2-13.4-68.1-51.5 c-36.6-128.6-112.2-185.1-248-191.5c-232.1-11-412-197.5-413-428.2c-1-230.5,183.1-423.1,415.4-434.6 c169.9-8.4,337,96.8,412.1,259.4C1270.7,672,1238.7,861.7,1118.5,984.9z"
              />
              <path
                className="st1"
                d="M651.1,1154.7c-29.3,63.5-54.4,121.4-83.1,177.4c-7.3,14.3-25.9,31.9-39.8,32.3 c-152.1,4.5-183.2,22.3-129.1-146.5c4.6-14.3,9.7-28.5,15.9-42.1c48.4-106.4,60.1-110.3,159.6-57.6 C601,1132.2,628.4,1144,651.1,1154.7z"
              />
            </g>
          </g>
          <path className="st2" d="M1133.5,758.5" />
          <path className="st2" d="M1153.5,1047.5" />
        </svg>
        <h1 class="cursor-pointer font-bold text-logo">Argos</h1>
      </div>
      <div class="relative mb-5">
        <div class="absolute inset-y-0  left-0 flex items-center pl-2 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-800 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          class="h-8 w-full rounded-full pl-8 pr-4 py-2.5 text-s font-light outline outline-1 outline-gray-300 bg-gray-100 text-gray-800 placeholder-gray-600"
          placeholder="Search"
        />
      </div>
      <ul class="space-y-2 border-b pb-4">
        {SidebarData1.map((item, index) => {
          return (
            <li
              key={index}
              class="flex items-center space-x-4 w-full bg-gray-100 h-15 p-4 rounded-lg cursor-pointer ease duration-200"
              // class={
              //   router.pathname == item.path
              //     ? "flex items-center space-x-4 w-full bg-gray-100 h-15 p-4 rounded-lg cursor-pointer ease duration-200"
              //     : "flex items-center space-x-4 w-full hover:bg-gray-100 h-15 p-4 rounded-lg cursor-pointer ease duration-200"
              // }
            >
              <div>{item.icon}</div>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <ul class="space-y-2 pt-4 pb-4">
        {SidebarData2.map((item, index) => {
          return (
            <li
              key={index}
              class="flex items-center space-x-4 w-full bg-black h-15 p-4 rounded-lg cursor-pointer ease duration-200"
              // class={
              //   router.pathname == item.path
              //     ? "flex items-center space-x-4 w-full bg-black h-15 p-4 rounded-lg cursor-pointer ease duration-200"
              //     : "flex items-center space-x-4 w-full hover:bg-gray-100 h-15 p-4 rounded-lg cursor-pointer ease duration-200"
              // }
            >
              <div>{item.icon}</div>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div class="absolute bottom-0 bg-gray-100 w-full right-[0px] h-20 flex justify-center items-center space-x-2 cursor-pointer">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 class="font-semibold">Account</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
