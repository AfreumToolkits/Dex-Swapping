import React, { useState, useEffect } from "react";
import { Icons } from "../index";
import Style from "./Token.module.css";
import { Toggle } from "../index";

const Token = ({
  setOpenSetting,
  setSlippage,
  slippage,
  deadline,
  setDeadline,
}) => {
  const slippagePresets = [
    { label: "0.1%", value: "0.1" },
    { label: "0.5%", value: "0.5" },
    { label: "1%", value: "1" },
    { label: "Custom", value: null },
  ];

  return (
    <div className={Style.Token}>
      <div className={Style.Token_box}>
        <div className={Style.Token_box_heading}>
          <h4>Setting</h4>
          <Icons.Close
            width={50}
            height={50}
            alt="close"
            onClick={() => setOpenSetting(false)}
          />
        </div>
        <p className={Style.Token_box_para}>
          Slippage tolerance{""}
          <Icons.Lock width={20} height={20} alt="img" />
        </p>

        <div className={Style.Token_box_slippage_presets}>
          {slippagePresets.map((preset, i) => (
            <button
              key={i}
              className={`${Style.Token_slippage_btn} ${preset.value === slippage ? Style.active : ""} ${!preset.value ? Style.custom : ""}`}
              onClick={() => {
                if (preset.value) {
                  setSlippage(preset.value);
                }
              }}
              type="button"
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className={Style.Token_box_input}>
          <button>Auto</button>
          <input
            type="text"
            placeholder={slippage}
            value={slippage}
            onChange={(e) => setSlippage(e.target.value)}
          />
        </div>

        <p className={Style.Token_box_para}>
          Deatline Time{""}
          <Icons.Lock width={20} height={20} alt="img" />
        </p>

        <div className={Style.Token_box_input}>
          <input
            type="text"
            placeholder={deadline}
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <button>minutes</button>
        </div>

        <h2>Interface Setting</h2>

        <div className={Style.Token_box_toggle}>
          <p className={Style.Token_box_para}>Transaction deadline</p>
          <Toggle label="No" />
        </div>
      </div>
    </div>
  );
};

export default Token;
