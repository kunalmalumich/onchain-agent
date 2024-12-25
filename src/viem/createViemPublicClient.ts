import { createPublicClient, http } from "viem";
import { abstractTestnet, mainnet } from "viem/chains";

export function createViemPublicClient() {
    return createPublicClient({
        chain: mainnet,
        transport: http(
            "https://eth-mainnet.g.alchemy.com/v2/ROvun5haPudCWs1N8O0IJGmEAM94sNRu",
        ),
    });
}
