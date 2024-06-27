import { useQuery } from "@tanstack/react-query";

// Define an interface for the expected structure of the CoinGecko API response for a token
interface TokenPriceInfo {
  [contractAddress: string]: {
    usd: number;
  };
}

export const getEthereumPrice = async (): Promise<TokenPriceInfo | null> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": import.meta.env.VITE_BASE_PRICE_API_KEY,
    },
  };

  try {
    const url =
      "https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&vs_currencies=usd";
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = (await response.json()) as TokenPriceInfo;
    return data;
  } catch (error) {
    console.error("Failed to fetch the price:", error);
    return null;
  }
};

export const useEthereumPrice = () => {
  return useQuery<TokenPriceInfo | null, Error>({
    queryKey: ["ethereumPrice"],
    queryFn: getEthereumPrice,
    staleTime: 60 * 60 * 1000,
  });
};
