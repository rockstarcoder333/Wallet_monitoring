import requests
import json

def get_tx_history(address):
    url = "https://blockchain.info/rawaddr/" + address
    response = requests.get(url)
    tx_history = json.loads(response.text)
    return tx_history

address = "YOUR_WALLET_ADDRESS_HERE"
tx_history = get_tx_history(address)
print(tx_history)
