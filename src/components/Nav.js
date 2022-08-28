import React from 'react';

import {navigation} from "../data";

const Nav = () => {
  return (
    <nav className = "ml-24">
      <ul className = "flex gap-x-12">
        {navigation.map((item,index) => {
            return (
                <li key={index}>
                    <a href = {item.href}>{item.name}</a>
                </li>
            )
        })}
      </ul>
    </nav>
  );
};

export default Nav;






























