## You can use the web3.eth.getTransaction method to retrieve information about a specific transaction, and web3.eth.getBlock method to retrieve information about a specific block.
## This code will retrieve the latest block number and then retrieve the last 10 blocks, checking each transaction in each block to see if it is related to your first wallet (either sending from or receiving to the wallet). 
## If it is, it will log the transaction details to the console.

import web3

async def monitor_transaction_history():
    w3 = web3.Web3(web3.HTTPProvider('https://mainnet.infura.io/v3/YOUR-PROJECT-ID'))
    latest_block = w3.eth.blockNumber
    print(f"Latest block number: {latest_block}")

    for i in range(latest_block, latest_block-10, -1):
        block = w3.eth.getBlock(i, True)

        for transaction in block['transactions']:
            if transaction['to'] == first_wallet_address or transaction['from'] == first_wallet_address:
                print("Transaction found:")
                print(transaction)
