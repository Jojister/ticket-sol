// Contracts are Immutable so TEST!
const { expect } = require("chai")

describe("MyTicketToken", () => {

    describe("Deployment", () => {
        is("Set name", async () => {
            const MyTicketToken = await ethers.getContractFactory("MyTicketToken")
            let myTicketToken = await MyTicketToken.deploy("MyTicketToken", "MTK")
            let name = await myTicketToken.name()
            expect(name).to.equal("MyTicketToken")
        })
    })
})