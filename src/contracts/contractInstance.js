import web3 from '../web3';

const address = '0x6aa8c196e4149fcd45ea204b0041c6213c10627b';

const abi = 
	[
		{
			"constant": true,
			"inputs": [],
			"name": "firstName",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_firstName",
					"type": "string"
				},
				{
					"name": "_lastName",
					"type": "string"
				}
			],
			"name": "setData",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "lastName",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "walletId",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		}
	]

export default new web3.eth.Contract(abi, address);