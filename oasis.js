
var web3

const address  = '0xb4fae488e7C0c00735Fc062b792B7Da45c023e12';  //rinkeby_old
const address1 = '0x921F95fe57D033408559DEC71772DDe2E95D6488';  //rinkeby
const address2 = '0xD1A9A8ecb4CF084a761fcf2b6670B6229CD5df41';  //matic
const address3 = '0x785ca3057f4319c80a0444f1025e89aFdAE8A150';  //BSC
const address4 = '0x7d13942fD3A8c7c8DcB8448C25d4Af18fbB8a39E';  //Oasis
const address5 = '0xB6BFfab608430Ebe652795De1f8A3db8723e122D';  //Matic_2

const abi =[
	{
		"constant": false,
		"inputs": [],
		"name": "invest",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address payable",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "weight",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "category",
				"type": "uint256"
			}
		],
		"name": "payout",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balanceof",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

//contract = new web3.eth.contract(abi,address)
function pay1(){

	jQuery(document).ready(function($){
		//open popup
		$('.btn-signin').on('click', function(event){
			event.preventDefault();
			$('.cd-popup').addClass('is-visible');
		});
        
        var weight = document.getElementById("weight").value;
        var category = document.getElementById("category").value;

        var y=weight/10;
		document.getElementById("max").innerHTML="Total Carbon Captured-"+y+"kg "
		//close popup
		$('.cd-popup').on('click', function(event){
			if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
				event.preventDefault();
				$(this).removeClass('is-visible');
			}
		});
		//close popup when clicking the esc keyboard button
		$(document).keyup(function(event){
			if(event.which=='27'){
				$('.cd-popup').removeClass('is-visible');
			}
		});
	});

	
}
async function pay() {

		var web3=new Web3(window.ethereum)

		await window.ethereum.enable()
		

/*
const portis = new Portis('8327b253-e459-44fa-94bd-c9cc457bf5fb', 'rinkeby');
const web3 = new Web3(portis.provider);
*/
		contract = new web3.eth.Contract(abi,address4)


        var paymentAddress = document.getElementById("address").value;
        var weight = document.getElementById("weight").value;
        var category = document.getElementById("category").value;

        const accounts = await web3.eth.getAccounts()

        
        contract.methods.payout(paymentAddress,weight,category).send({from:accounts[0]}) 


                /*(err, transactionId) => {
                    if  (err) {
                        console.log('Payment failed', err)
                        $('#status').html('Payment failed')
                    } else {
                        console.log('Payment successful', transactionId)
                        $('#status').html('Payment successful')
                    }
                    })*/
} 

