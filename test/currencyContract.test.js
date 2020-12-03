const LongRoot = artifacts.require("LongrootToken");

contract("LongRoot token", async accounts => {
    it("should have zero balance", async () => {
        const instance = await LongRoot.deployed();
        const balance = await instance.balanceOf.call(accounts[0]);
        assert.equal(balance.valueOf(), 0);
    });

    it("should mint some", async () => {
        const instance = await LongRoot.deployed();
        await instance.mint(accounts[0], 2, {from: accounts[0]});

        const balance = await instance.balanceOf.call(accounts[0]);
        assert.equal(balance.valueOf(), 2);
    });
})
