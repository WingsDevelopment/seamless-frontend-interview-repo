import { http, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { coinbaseWallet, injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet],
  connectors: [injected(), coinbaseWallet()],
  transports: {
    [mainnet.id]: http(import.meta.env.VITE_BASE_RPC),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
