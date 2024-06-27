import { formatUnits } from "viem";
import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";
import { useEthereumPrice } from "./getPrice";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: ethBalance } = useBalance({
    address: account.address,
  });
  const { data } = useEthereumPrice();
  console.log({ data });

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
