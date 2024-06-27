interface TokenPriceInfo {
  [contractAddress: string]: {
    usd: number;
  };
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": import.meta.env.VITE_BASE_PRICE_API_KEY,
  },
};
const url =
  "https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&vs_currencies=usd";
