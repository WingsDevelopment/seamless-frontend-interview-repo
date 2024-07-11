interface TokenPriceInfo {
  [contractAddress: string]: {
    usd: number;
  };
}

export async function fetchTokenPrice(contractAddress: string): Promise<TokenPriceInfo> {
  const apiKey = import.meta.env.VITE_BASE_PRICE_API_KEY;
  const url = `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${contractAddress}&vs_currencies=usd`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": apiKey,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: TokenPriceInfo = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching token price:", error);
    throw error;
  }
}
