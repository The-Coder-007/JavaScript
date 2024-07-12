var arrTicketNo = [];
var arrAmount = [];


var allTicket = [
{ticketNo :'R1', ticketAmount : 80},
{ticketNo :'R2', ticketAmount : 130},
{ticketNo :'R3', ticketAmount : 120},
{ticketNo :'R4', ticketAmount : 80},
{ticketNo :'R5', ticketAmount : 50},
{ticketNo :'R6', ticketAmount : 60},
{ticketNo :'R7', ticketAmount : 70},
{ticketNo :'R8', ticketAmount : 90},
{ticketNo :'R9', ticketAmount : 110},
{ticketNo :'R10', ticketAmount : 120},
{ticketNo :'R11', ticketAmount : 130},
{ticketNo :'R12', ticketAmount : 140},
{ticketNo :'R13', ticketAmount : 150},
{ticketNo :'R14', ticketAmount : 170},
{ticketNo :'R15', ticketAmount : 180}
];

console.log(allTicket.length);

// if (allTicket.length > 0){
	
	// allTicket.forEach((val)=>{
		// console.log(val);
	// })
// };

allTicket.length > 0 && allTicket.forEach((val)=>{
	
	// console.log(val);
	// object distruction
	var {ticketNo, ticketAmount} = val;
	// console.log(ticketAmount);
	var spanTag = document.createElement('span');
	spanTag.innerHTML=`${ticketNo} <br /> ${ticketAmount}`;
	spanTag.className= "ticket"
	
	spanTag.setAttribute("for" , `${ticketNo}#${ticketAmount}`);
	
	spanTag.addEventListener("click" , ticketClick);
	document.querySelector('.allTickets').append(spanTag);
	
	
	
});

function ticketClick(){
	console.log(this);
	
	var result = this.getAttribute('for');
	console.log(result);
	
	var resultSplit = result.split('#');
	console.log(resultSplit);
	
	var [no, amount] = resultSplit;
	console.log(no);
	console.log(amount);
	
	var check_ticket = arrTicketNo.indexOf(no);
	console.log(check_ticket);
	
	//return
	if (check_ticket == -1){
		arrTicketNo.push(no);
	arrAmount.push(amount);
	this.style.background="red";
	}else{
		arrTicketNo.splice(check_ticket, 1);
		arrAmount.splice(check_ticket, 1);
		this.style.background="white";
	};
	
	
	
	console.log(arrTicketNo);
	console.log(arrAmount);
	if (arrTicketNo.length > 0){
	document.getElementById('x1').innerHTML = arrTicketNo.join(",");
	document.getElementById('x2').innerHTML = eval(arrAmount.join("+"));
	}
	else{
		document.getElementById('x1').innerHTML = "No ticket Selected";
	document.getElementById('x2').innerHTML = "0";
	};
	
}