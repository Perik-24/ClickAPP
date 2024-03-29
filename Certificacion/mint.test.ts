import { assert } from "chai";
import { nftPrincipal } from "../lib";
import { eventData } from "./events.test";
import { admin, mint, users } from "./accounts";
import { trap } from "./utils/trap";

describe("Mint", () => {
    const user = users[0];

    before(async () => {
        await mint(user, 100_00_000_000n);

        let i = await admin.nft.launchpadEventCreate({
            ...eventData,
            startsAt: 0n, // <=0: non time-gated
            endsAt: 0n
        });
        assert.equal(i, 0n);
    });
    after(async () => {
        await admin.ledger.reset();
        await admin.nft.reset(100n);
        await admin.launchpad.removeEvent(nftPrincipal, 0n);
    });

    it("Mint an NFT...", async () => {
        const tokenIndex = await user.launchpad.mint(nftPrincipal, 0n);
        assert.isTrue("ok" in tokenIndex);
        assert.equal((<{ "ok": bigint }>tokenIndex).ok, 0n);
        const balance = await user.nft.balance();
        assert.equal(balance.length, 1);
        assert.equal(balance[0], 0n);
    });
    it("Check balances after mint.", async () => {
        const account = await user.launchpad.getPersonalAccount();
        const balance = await user.ledger.account_balance({ account });
        assert.equal(balance.e8s, 99_00_000_000n);

        const nftAccount = await user.nft.getPersonalAccount();
        const nftBalance = await user.ledger.account_balance({ account: nftAccount });
        assert.equal(nftBalance.e8s, 99_990_000n)
    });
    it("Check balances as an admin.", async () => {
        await trap(user.launchpad.balances());
        const balances = await admin.launchpad.balances();
        assert.equal(balances.length, 1);
        let [token, tokens] = balances[0];
        assert.equal(token.toString(), nftPrincipal.toString());
        assert.equal(tokens.e8s, 99_990_000n);
    });
    it("Mint, but NFT traps.", async () => {
        await admin.nft.toggleTrap(true);
        const err = await user.launchpad.mint(nftPrincipal, 0n);
        assert.isTrue("err" in err);
        assert.isTrue("Refunded" in (<{ "err": object }>err).err)
        await admin.nft.toggleTrap(false);
    });
    it("Check whether price was refunded...", async () => {
        const account = await user.launchpad.getPersonalAccount();
        const balance = await user.ledger.account_balance({ account });
        assert.equal(balance.e8s, 99_00_000_000n);
        const minting = await user.launchpad.currentlyMinting(nftPrincipal, 0n);
        assert.isTrue("ok" in minting);
        assert.equal((<{ "ok": bigint }>minting).ok, 0n);
    });
});
