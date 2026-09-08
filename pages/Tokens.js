import React, { useState, useEffect, useContext } from "react";
import { Icons, AllTokens } from "../Components/index";
import Style from "../styles/Tokens.module.css";
//CONTEXT
import { SwapTokenContext } from "../Context/SwapContext";
const Tokens = () => {
  const [allTokenList, setAllTokenList] = useState([
    {
      number: 1,
      name: "Ether",
      symbol: "ETH",
      price: "$12,345",
      change: "+ 234.5",
      tvl: "$7894.5M",
      volume: "$716.5 M",
    },
    {
      number: 2,
      name: "USDC Coin",
      symbol: "USDC",
      price: "$12,345",
      change: "+ 234.5",
      tvl: "$7894.5M",
      volume: "$716.5 M",
    },
    {
      number: 3,
      name: "Wrapped BTC",
      symbol: "WBTC",
      price: "$12,345",
      change: "+ 234.5",
      tvl: "$7894.5M",
      volume: "$716.5 M",
    },
    {
      number: 4,
      name: "DexSwap",
      symbol: "DEX",
      price: "$12,345",
      change: "+ 234.5",
      tvl: "$7894.5M",
      volume: "$716.5 M",
    },
  ]);

  const { topTokensList } = useContext(SwapTokenContext);
  const [copyAllTokenList, setCopyAllTokenList] = useState(allTokenList);
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  const onHandleSearch = (value) => {
    const filteredTokens = allTokenList.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredTokens.length === 0) {
      setAllTokenList(copyAllTokenList);
    } else {
      setAllTokenList(filteredTokens);
    }
  };

  const onClearSearch = () => {
    if (allTokenList.length && copyAllTokenList.length) {
      setAllTokenList(copyAllTokenList);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  return (
    <div className={Style.Tokens}>
      <div className={Style.Tokens_box}>
        <h2>Top tokens on DexSwap</h2>
        <div className={Style.Tokens_box_header}>
          <div className={Style.Tokens_box_ethereum}>
            <p>
              <Icons.EtherLogo width={20} height={20} alt="ether" />
            </p>
            <p>Ethereum</p>
          </div>
          <div className={Style.Tokens_box_search}>
            <p>
              <Icons.Search width={20} height={20} alt="image" />
            </p>
            <input
              type="text"
              placeholder="Filter tokens"
              onChange={(e) => setSearchItem(e.target.value)}
              value={searchItem}
            />
          </div>
        </div>

        <AllTokens allTokenList={topTokensList} />
      </div>
    </div>
  );
};

export default Tokens;
