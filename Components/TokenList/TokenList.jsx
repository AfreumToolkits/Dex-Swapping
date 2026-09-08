import React from "react";

//INTERNAL IMPORT
import Style from "./TokenList.module.css";
import { Icons } from "../index";

const TokenList = ({ tokenDate, setOpenTokenBox }) => {
  const safeSlice = (val, start, end) => (val || "0").slice(start, end);

  let tokenList = [];
  for (let i = 0; i < tokenDate.length; i++) {
    if (i % 2 == 1) tokenList.push(tokenDate[i]);
  }

  return (
    <div className={Style.TokenList}>
      <p
        className={Style.TokenList_close}
        onClick={() => setOpenTokenBox(false)}
      >
        <Icons.Close width={50} height={50} alt="close" />
      </p>
      <div className={Style.TokenList_title}>
        <h2>Your Token List</h2>
      </div>

      {tokenList.length === 0 ? (
        <p className={Style.TokenList_empty}>No tokens available</p>
      ) : (
        tokenList.map((el, i) => (
          <div className={Style.TokenList_box} key={i}>
            <div className={Style.TokenList_box_info}>
              <p className={Style.TokenList_box_info_symbol}>{el.symbol}</p>
              <p>
                <span>{safeSlice(el.tokenBalance, 0, 9)}</span> {el.name}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TokenList;
