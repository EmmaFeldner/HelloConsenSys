async function main() {
   const HelloConsensys = await ethers.getContractFactory("HelloConsensys");

   // Start deployment, returning a promise that resolves to a contract object
   const hello_consensys = await HelloConsensys.deploy("Hello Consensys!");
   console.log("Contract deployed to address:", hello_consensys.address);}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
