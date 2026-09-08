import React, { useState, useEffect } from "react";
import { Icons } from "../index";

//INTERNAL IMPORT
import Style from "./SearchToken.module.css";

const SearchToken = ({ openToken, tokens, tokenData }) => {
  //USESTATE
  const [active, setActive] = useState(1);
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favoriteTokens") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favoriteTokens", JSON.stringify(favorites));
  }, [favorites]);

  let tokenList = [];
  for (let i = 0; i < tokenData.length; i++) {
    if (i % 2 == 1) tokenList.push(tokenData[i]);
  }

  const toggleFavorite = (symbol, e) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
    );
  };

  const isFavorite = (symbol) => favorites.includes(symbol);

  // const coin = [
  //   {
  //     img: images.ether,
  //     name: "ETH",
  //   },
  //   {
  //     img: images.ether,
  //     name: "DAI",
  //   },
  //   {
  //     img: images.ether,
  //     name: "DOG",
  //   },
  //   {
  //     img: images.ether,
  //     name: "FUN",
  //   },
  //   {
  //     img: images.ether,
  //     name: "WETH9",
  //   },
  //   {
  //     img: images.ether,
  //     name: "UNI",
  //   },
  //   {
  //     img: images.ether,
  //     name: "TIME",
  //   },
  //   {
  //     img: images.ether,
  //     name: "LOO",
  //   },
  //   {
  //     img: images.ether,
  //     name: "OOO",
  //   },
  //   {
  //     img: images.ether,
  //     name: "HEY  ",
  //   },
  // ];
  return (
    <div className={Style.SearchToken}>
      <div className={Style.SearchToken_box}>
        <div className={Style.SearchToken_box_heading}>
          <h4>Select a token</h4>
          <Icons.Close
            width={50}
            height={50}
            alt="close"
            onClick={() => openToken(false)}
          />
        </div>

        <div className={Style.SearchToken_box_search}>
          <div className={Style.SearchToken_box_search_img}>
            <Icons.Search width={20} height={20} alt="img" />
          </div>
          <input type="text" placeholder="Search name and past the address" />
        </div>

        <div className={Style.SearchToken_box_tokens}>
          {tokenList.length === 0 ? (
            <p className={Style.SearchToken_empty}>No tokens available</p>
          ) : (
            tokenList.map((el, i) => (
              <span
                key={i + 1}
                className={`${active == i + 1 ? `${Style.active}` : ""} ${isFavorite(el.symbol) ? Style.favorite : ""}`}
                onClick={() => (
                  setActive(i + 1),
                  tokens({
                    name: el.name,
                    image: el.img,
                    symbol: el.symbol,
                    tokenBalance: el.tokenBalance,
                    tokenAddress: el,
                  })
                )}
              >
                <Icons.EtherLogo width={30} height={30} alt="image" />
                {el.symbol}
                <Icons.Star
                  width={16}
                  height={16}
                  alt="star"
                  filled={isFavorite(el.symbol)}
                  className={Style.SearchToken_star}
                  onClick={(e) => toggleFavorite(el.symbol, e)}
                />
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchToken;
