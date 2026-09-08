import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";

//IMPORT INTERNAL
import Style from "./NavBar.module.css";
import { Icons, Model, TokenList } from "../index";

//CONTEXT
import { SwapTokenContext } from "../../Context/SwapContext";

const NavBar = () => {
  const { ether, account, networkConnect, connectWallet, tokenData } =
    useContext(SwapTokenContext);
  const menuItems = [
    {
      name: "Swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/Tokens",
    },
    {
      name: "Pools",
      link: "/Pools",
    },
  ];
  //USESTATE
  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [recentTxs, setRecentTxs] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setIsDark(saved === "dark");
    else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
    }
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((d) => !d);

  const addRecentTx = (tx) => {
    setRecentTxs((prev) => [tx, ...prev.slice(0, 9)]);
  };

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          {/* //LOGO IMAGE  */}
          <div className={Style.NavBar_box_left_img}>
            <Icons.DexSwapLogo width={50} height={50} alt="logo" />
          </div>
          {/* MENU ITEMS */}

          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link key={i + 1} href={{ pathname: `${el.link}` }}>
                <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* //Middle SECTION */}
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div className={Style.NavBar_box_middle_search_img}>
              <Icons.Search width={20} height={20} alt="search" />
            </div>
            {/* //INPUT SECTION */}
            <input type="text" placeholder="Search Tokens" />
          </div>
        </div>
        {/* //RIGHT SECTION */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
              <Icons.Ether width={30} height={30} alt="Network" />
            </div>
            <p>{networkConnect}</p>
          </div>
          <button className={Style.NavBar_history_btn} onClick={() => setOpenHistory(!openHistory)}>
            <Icons.Clock width={20} height={20} alt="history" />
          </button>
          <button className={Style.NavBar_theme_btn} onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <Icons.Sun width={20} height={20} alt="light" /> : <Icons.Moon width={20} height={20} alt="dark" />}
          </button>
          {account ? (
            <button onClick={() => setOpenTokenBox(true)}>
              {account.slice(0, 20)}..
            </button>
          ) : (
            <button onClick={() => setOpenModel(true)}>Connect</button>
          )}

          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet={connectWallet} />
          )}
        </div>
      </div>

      {/* //TOKENLIST COMPONENT */}
      {openTokenBox && (
        <TokenList tokenDate={tokenData} setOpenTokenBox={setOpenTokenBox} />
      )}

      {/* //RECENT TRANSACTIONS PANEL */}
      {openHistory && (
        <div className={Style.NavBar_history_panel}>
          <div className={Style.NavBar_history_header}>
            <h4>Recent Transactions</h4>
            <Icons.Close width={30} height={30} alt="close" onClick={() => setOpenHistory(false)} />
          </div>
          {recentTxs.length === 0 ? (
            <p className={Style.NavBar_history_empty}>No recent transactions</p>
          ) : (
            <ul className={Style.NavBar_history_list}>
              {recentTxs.map((tx, i) => (
                <li key={i} className={Style.NavBar_history_item}>
                  <span>{tx.type}</span>
                  <span>{tx.amount} {tx.symbol}</span>
                  <span>{tx.time}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
