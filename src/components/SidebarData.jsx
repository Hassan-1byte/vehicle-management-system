import React from "react";

import { BiHome } from "react-icons/bi";
import { BsCardList } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "#",
    icon: <BiHome />,
  },

  {
    title: "Order",
    path: "/order",
    icon: <BsCardList />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Order List",
        path: "/overview/users",
        icon: <BsCardList />,
      },
      {
        title: "Add Order",
        path: "/overview/revenue",
        icon: <BsCardList />,
      },
    ],
  },

  {
    title: "Employees",
    path: "#",
    icon: <BsFillPersonFill />,
  },

  {
    title: "Finance",
    path: "#",
    icon: <RiMoneyDollarBoxLine />,
  },

  {
    title: "Inventory",
    path: "#",
    icon: <AiOutlineShoppingCart />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Inventory",
        path: "/overview/users",
        icon: <AiOutlineShoppingCart />,
      },
    ],
  },

  {
    title: "Customers",
    path: "#",
    icon: <BsPerson />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Customers",
        path: "/overview/users",
        icon: <BsPerson />,
      },
    ],
  },

  {
    title: "Services",
    path: "#",
    icon: <RiServiceLine />,
  },

  {
    title: "Settings",
    path: "#",
    icon: <AiOutlineSetting />,
  },
];
