import React from "react";
import { SidebarData1, SidebarData2 } from "./SidebarData.js";

const Sidebar = () => {
  return (
    <aside class="h-full absolute w-64 shadow pl-5 pr-5 md:w-60">
      <div class="mb-5 text-xl flex items-center border-b h-20">
        <div class="bg-black h-10 w-10 rounded-full mr-3"></div>
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
