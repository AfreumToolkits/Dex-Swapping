import React from "react";
import { Icons } from "../index";

//INTERNAL IMPORT
import Style from "./AllTokens.module.css";

const AllTokens = ({ allTokenList }) => {
  const safeSlice = (val, start, end) => (val || "0").slice(start, end);

  if (!Array.isArray(allTokenList) || allTokenList.length === 0) {
    return (
      <div className={Style.AllTokens}>
        <div className={Style.AllTokens_box}>
          <p className={Style.AllTokens_empty}>No tokens available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={Style.AllTokens}>
      <div className={Style.AllTokens_box}>
        <div className={Style.AllTokens_box_header}>
          <p className={Style.hide}>#</p>
          <p>Token name</p>
          <p>Price</p>
          <p className={Style.hide}>ValueLockedUSD</p>
          <p className={Style.hide}>
            <small>
              <Icons.Question width={15} height={15} />
            </small>{" "}
          </p>
          <p className={Style.hide}>
            <small>
              <Icons.ArrowDown width={15} height={15} />
            </small>{" "}
            Total Supply{" "}
            <small>
              <Icons.Question width={15} height={15} />
            </small>{" "}
          </p>
        </div>

        {allTokenList.map((el, i) => (
          <div className={Style.AllTokens_box_list} key={i}>
            <p className={Style.hide}>{i + 1}</p>
            <p className={Style.AllTokens_box_list_para}>
              <small>
                <Icons.DexSwapLogo width={25} height={25} alt="logo" />
              </small>
              <small>{el.name || "Unknown"}</small>
              <small>{el.symbol || "N/A"}</small>
            </p>
            <p>{safeSlice(el.volumeUSD, 0, 9)}</p>
            <p className={Style.hide}>{safeSlice(el.totalValueLockedUSD, 0, 9)}</p>
            <p className={Style.hide}>{safeSlice(el.txCount, 0, 9)}</p>
            <p className={Style.hide}>{safeSlice(el.totalSupply, 0, 9)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTokens;
