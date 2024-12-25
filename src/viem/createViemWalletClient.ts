import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { abstractTestnet, base } from "viem/chains";
import { eip712WalletActions } from "viem/zksync";

export function createViemWalletClient() {
    try {
        if (!process.env.PRIVATE_KEY) {
            throw new Error("⛔ PRIVATE_KEY environment variable is not set.");
        }

        const privateKey = process.env.PRIVATE_KEY?.startsWith("0x")
            ? process.env.PRIVATE_KEY
            : `0x${process.env.PRIVATE_KEY}`;

        const account = privateKeyToAccount(privateKey as `0x${string}`);

        return createWalletClient({
            account,
            chain: base,
            transport: http(
                "https://base-mainnet.g.alchemy.com/v2/ROvun5haPudCWs1N8O0IJGmEAM94sNRu",
            ),
        }).extend(eip712WalletActions());
    } catch (error) {
        console.error("Failed to create wallet client:", error);
        throw error;
    }
}

// mainnet -    "https://eth-mainnet.g.alchemy.com/v2/ROvun5haPudCWs1N8O0IJGmEAM94sNRu"
