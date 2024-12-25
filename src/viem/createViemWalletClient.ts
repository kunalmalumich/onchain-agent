import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { abstractTestnet, mainnet } from "viem/chains";
import { eip712WalletActions } from "viem/zksync";

export function createViemWalletClient() {
    try {
        if (!process.env.PRIVATE_KEY) {
            throw new Error("⛔ PRIVATE_KEY environment variable is not set.");
        }

        const account = privateKeyToAccount(
            process.env.PRIVATE_KEY as `0x${string}`,
        );

        return createWalletClient({
            account,
            chain: mainnet,
            transport: http(
                "https://eth-mainnet.g.alchemy.com/v2/ROvun5haPudCWs1N8O0IJGmEAM94sNRu",
            ),
        }).extend(eip712WalletActions());
    } catch (error) {
        console.error("Failed to create wallet client:", error);
        throw error;
    }
}
