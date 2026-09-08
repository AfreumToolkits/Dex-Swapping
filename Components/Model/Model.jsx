import React, { useState, useEffect } from "react";
import { Icons } from "../index";
import Style from "./Model.module.css";

const Model = ({ setOpenModel, connectWallet }) => {
  //USESTATE
  const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnet"];
  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_heading}>
          <p>Connect a wallet</p>
          <div className={Style.Model_box_heading_img}>
            <Icons.Close
              width={50}
              height={50}
              alt="logo"
              onClick={() => setOpenModel(false)}
            />
          </div>
        </div>

        <div className={Style.Model_box_wallet}>
          {walletMenu.map((el, i) => (
            <p key={i + 1} onClick={() => connectWallet()}>
              {el}
            </p>
          ))}
        </div>

        <p className={Style.Model_box_para}>
          By connecting a wallet, you agree to DexSwap Labs’
          <br /> Terms of Service and consent to its Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Model;
