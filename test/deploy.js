const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AcademyNFT", function () {
  it("Should work!", async function () {
    // 
    // deploy contract
    // 
    const AcademyNFT = await ethers.getContractFactory("AcademyNFT");
    const academyNFT = await AcademyNFT.deploy();
    await academyNFT.deployed();
    expect(await academyNFT.name()).to.equal("Autonolas Agent Developer Academy Graduates");
    expect(await academyNFT.symbol()).to.equal("AUTONOLAS-ACADEMY-GRADS");
    expect(await academyNFT.supportsInterface("0x5b5e139f")).to.equal(true); //IERC721Metadata
    expect(await academyNFT.supportsInterface("0x80ac58cd")).to.equal(true); //IERC721
    expect(await academyNFT.supportsInterface("0x5a05180f")).to.equal(true); //IAccessControlEnumerable
    expect(await academyNFT.supportsInterface("0x780e9d63")).to.equal(true); //IERC721Enumerable

    //
    // award item
    //
    const accounts = await ethers.getSigners();
    const tokenId = 0;
    const quantity = 1;
    const hash = "QmSJYeyCRnG5oBvLMnRsWNQcyGQQZAMeU4Sicy9fpUneDy";
    const url = "https://gateway.pinata.cloud/ipfs/QmSJYeyCRnG5oBvLMnRsWNQcyGQQZAMeU4Sicy9fpUneDy";
    const receiver = accounts[1];
    const awardItemTx = await academyNFT.awardItem(receiver.address, hash);
    // wait until the transaction is mined
    const logs = await awardItemTx.wait();
    // console.log(logs);
    expect(await academyNFT.ownerOf(tokenId)).to.equal(receiver.address);
    expect(await academyNFT.balanceOf(receiver.address)).to.equal(quantity);
    expect(await academyNFT.tokenURI(tokenId)).to.equal(url);

    // await expect(academyNFT.connect(receiver).awardItem(receiver.address, hash)).to.be.revertedWith("AcademyNFT: must have minter role to mint");

    //
    // burn item
    //
    const finalQuantity = 0
    expect(await academyNFT.burn(tokenId));
    expect(await academyNFT.balanceOf(receiver.address)).to.equal(finalQuantity);

    // await expect(academyNFT.burn(tokenId)).to.be.revertedWith("");

  });
});

describe("CommunityNFT", function () {
  it("Should work!", async function () {
    // 
    // deploy contract
    // 
    const CommunityNFT = await ethers.getContractFactory("CommunityNFT");
    const communityNFT = await CommunityNFT.deploy();
    await communityNFT.deployed();
    expect(await communityNFT.name()).to.equal("Autonolas Community Recognition Avatars");
    expect(await communityNFT.symbol()).to.equal("AUTONOLAS-RECOGNITION-AVATARS");
    expect(await communityNFT.supportsInterface("0x5b5e139f")).to.equal(true); //IERC721Metadata
    expect(await communityNFT.supportsInterface("0x80ac58cd")).to.equal(true); //IERC721
    expect(await communityNFT.supportsInterface("0x5a05180f")).to.equal(true); //IAccessControlEnumerable
    expect(await communityNFT.supportsInterface("0x780e9d63")).to.equal(true); //IERC721Enumerable

  });
});