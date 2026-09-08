import React, { useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "./MainSection.module.css";
import { Icons, Token, SearchToken } from "../index";

//CONTEXT
import { SwapTokenContext } from "../../Context/SwapContext";

const MainSection = ({}) => {
  //USESTATE
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokensTwo, setOpenTokensTwo] = useState(false);

  const [tokenSwapOutPut, setTokenSwapOutPut] = useState(0);
  const [poolMessage, setPoolMessage] = useState("");
  const [search, setSearch] = useState(false);
  const [swapAmount, setSwapAmount] = useState("0");
  const [priceImpact, setPriceImpact] = useState("");

  const {
    singleSwapToken,
    connectWallet,
    account,
    ether,
    dai,
    tokenData,
    getPrice,
    swapUpdatePrice,
  } = useContext(SwapTokenContext);

  //TOKEN 1
  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: "",
    symbol: "",
    tokenBalance: "",
    tokenAddress: "",
  });
  //TOKEN 2
  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    image: "",
    symbol: "",
    tokenBalance: "",
    tokenAddress: "",
  });

  const callOutPut = async (value) => {
    const yourAccount = "0x97f991971a37D4Ca58064e6a98FC563F03A71E5c";
    const deadline = 10;
    const slippageAmount = 25;
    const data = await swapUpdatePrice(
      value,
      slippageAmount,
      deadline,
      yourAccount
    );
    console.log(data);

    setTokenSwapOutPut(data[1] || 0);
    setSearch(false);

    const poolAddress = "0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8";
    const poolData = await getPrice(value, poolAddress);
    const message = `${value} ${poolData[2]} = ${poolData[0]} ${poolData[1]}`;
    console.log(message);
    setPoolMessage(message);

    if (poolData && poolData[0] && poolData[1]) {
      setPriceImpact(`1 ${poolData[2]} = ${poolData[0]} ${poolData[1]}`);
    } else {
      setPriceImpact("—");
    }
  };

  const handlePercentClick = (percent) => {
    const balance = parseFloat(tokenOne.tokenBalance || "0");
    if (percent === "MAX") {
      setSwapAmount(balance.toString());
      callOutPut(balance.toString());
    } else {
      const amount = (balance * percent / 100).toFixed(6);
      setSwapAmount(amount);
      callOutPut(amount);
    }
  };

  const percentButtons = [25, 50, 75, "MAX"];

  //JSX
  return (
    <div className={Style.MainSection}>
      <div className={Style.MainSection_box}>
        <div className={Style.MainSection_box_heading}>
          <p>Swap</p>
          <div className={Style.MainSection_box_heading_img}>
            <Icons.Close
              width={50}
              height={50}
              alt="image"
              onClick={() => setOpenSetting(true)}
            />
          </div>
        </div>

        <div className={Style.MainSection_box_input}>
          <input
            type="number"
            placeholder="0"
            value={swapAmount}
            onChange={(e) => {
              const val = e.target.value;
              setSwapAmount(val);
              callOutPut(val);
              setSearch(true);
            }}
          />
          <button onClick={() => setOpenToken(true)}>
            <Icons.EtherLogo width={20} height={20} alt="ether" />
            {tokenOne.symbol || "ETH"}
            <small>{(tokenOne.tokenBalance || "0").slice(0, 7)}</small>
          </button>
        </div>

        <div className={Style.MainSection_percent_row}>
          {percentButtons.map((p, i) => (
            <button
              key={i}
              className={Style.MainSection_percent_btn}
              onClick={() => handlePercentClick(p)}
              type="button"
            >
              {p}%
            </button>
          ))}
        </div>

        <div className={Style.MainSection_box_input}>
          <p>
            {search ? (
              <Icons.Loading width={100} height={40} alt="loading" />
            ) : (
              tokenSwapOutPut
            )}
          </p>
          <button onClick={() => setOpenTokensTwo(true)}>
            <Icons.EtherLogo width={20} height={20} alt="ether" />
            {tokenTwo.symbol || "ETH"}
            <small>{(tokenTwo.tokenBalance || "0").slice(0, 7)}</small>
          </button>
        </div>

        <div className={Style.MainSection_price_impact}>
          {priceImpact ? priceImpact : "—"}
        </div>

        {search ? (
          <Icons.Loading width={100} height={40} alt="loading" />
        ) : (
          poolMessage
        )}

        {account ? (
          <button
            className={Style.MainSection_box_btn}
            onClick={() =>
              singleSwapToken({
                token1: tokenOne,
                token2: tokenTwo,
                swapAmount,
              })
            }
          >
            Swap
          </button>
        ) : (
          <button
            onClick={() => connectWallet()}
            className={Style.MainSection_box_btn}
          >
            Connect Wallet
          </button>
        )}
      </div>

      {openSetting && <Token setOpenSetting={setOpenSetting} />}

      {openToken && (
        <SearchToken
          openToken={setOpenToken}
          tokens={setTokenOne}
          tokenData={tokenData}
        />
      )}
      {openTokensTwo && (
        <SearchToken
          openToken={setOpenTokensTwo}
          tokens={setTokenTwo}
          tokenData={tokenData}
        />
      )}
    </div>
  );
};

export default MainSection;
