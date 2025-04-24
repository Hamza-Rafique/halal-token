const hre = require("hardhat");

async function main() {
  const HalalToken = await hre.ethers.getContractFactory("HalalToken");
  const halalToken = await HalalToken.deploy(100000000, 50);

  await halalToken.deployed();

  console.log("Halal Token deployed: ", halalToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
