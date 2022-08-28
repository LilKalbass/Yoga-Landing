import React, {useState} from 'react';

import {BiMenu} from 'react-icons/bi';

import {navigation} from "../data";

const NavMobile = () => {
    const [isOpen, setOpened] = useState(false);
  return (
      <nav>
        <div
            onClick={() => setOpened(!isOpen)}
            className = "cursor-pointer text-2xl text-heading ml-2.5 lg:hidden">
          <BiMenu/>
        </div>
        <ul className = {`${isOpen ? "max-h-60" : "max-h-0 p-0"} flex flex-col absolute
        w-full left-0 bg-white top-24 shadow-primary space-y-8 overflow-hidden transition-all`}>
          {navigation.map((item, index) => {
            return (
                <li key = {index}>
                    <a href = {item.href}>{item.name}</a>
                </li>
            );
          })}
        </ul>
      </nav>
  );
};

export default NavMobile;



















