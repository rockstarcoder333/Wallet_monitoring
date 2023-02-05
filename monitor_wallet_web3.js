// You can use the web3.eth.getTransaction method to retrieve information about a specific transaction, and web3.eth.getBlock method to retrieve information about a specific block.
// This code will retrieve the latest block number and then retrieve the last 10 blocks, checking each transaction in each block to see if it is related to your first wallet (either sending from or receiving to the wallet). 
// If it is, it will log the transaction details to the console.

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('HTTP://YOUR-NODE-URL'));

async function monitorTransactionHistory() {
  const latestBlock = await web3.eth.getBlockNumber();
  console.log(`Latest block number: ${latestBlock}`);

  for (let i = latestBlock; i >= latestBlock - 10; i--) {
    const block = await web3.eth.getBlock(i, true);

    block.transactions.forEach(async (transaction) => {
      if (transaction.to === firstWalletAddress || transaction.from === firstWalletAddress) {
        console.log(`Transaction found:`);
        console.log(transaction);
      }
    });
  }
}