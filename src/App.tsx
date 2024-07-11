import { formatUnits } from "viem";
import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: ethBalance } = useBalance({
    address: account.address,
  });

  // fetchTokenPrice('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')
  //   .then(priceInfo => {
  //     console.log("Price info:", priceInfo);
  //     const price = priceInfo['0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2']?.usd;
  //     console.log(`The current USD price is: $${price}`);
  //   })
  //   .catch(error => {
  //     console.error("Failed to fetch token price:", error);
  //   });

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          address: {account.address}
          <br />
          chainId: {account.chainId}
          <br />
          {ethBalance && (
            <>
              balance:
              {formatUnits(ethBalance.value, ethBalance.decimals)}
            </>
          )}
        </div>

        {account.status === "connected" && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  );
}

export default App;
