document.querySelector('#btn').onclick = function(){
	// console.log(btn);
	
	var amount = document.querySelector('#x1').value;
	var roi = document.querySelector('#x2').value;
	var duration = document.querySelector('#x3').value;
	// console.log(typeof amount);
	amount = parseInt(amount);
	roi = parseFloat(roi);
	duration = parseInt(duration);
	// console.log(typeof amount);
	
	var i = 1;
	var opening_balance = 0;
	
	var totalAmount = 0;
	document.querySelector('.result').innerHTML = ''
	while(i<=duration){
		
		totalAmount += amount;
																		
 
		var interest_earned = (opening_balance + amount ) * roi /100;
		// console.log(interest_earned);
		interest_earned = Math.round(interest_earned);
		
		
		var closing_balance = opening_balance + amount + interest_earned;
		// console.log(closing_balance);
		console.log(i , opening_balance, amount, interest_earned, closing_balance);
		
		var trTag = document.createElement('tr');
		console.log(trTag , typeof trTag );
		
		var tdTag1 = document.createElement('td');
		var tdTag2 = document.createElement('td');
		var tdTag3 = document.createElement('td');
		var tdTag4 = document.createElement('td');
		var tdTag5 = document.createElement('td');
		
		console.log(tdTag1);
		
		trTag.append(tdTag1);
		trTag.append(tdTag2);
		trTag.append(tdTag3);
		trTag.append(tdTag4);
		trTag.append(tdTag5);
		
		tdTag1.innerText = i;
		tdTag2.innerText = opening_balance;
		tdTag3.innerText = amount;
		tdTag4.innerText = interest_earned;
		tdTag5.innerText = closing_balance;
		
		document.querySelector('.result').append(trTag);
		
		i++;
		opening_balance = closing_balance;
	
		
		// console.log(i);
		
	}
	
		// HIghChart
		Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in May, 2020',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Totale Investment',
            y: opening_balance
            // sliced: true,
            // selected: true
        }, {
            name: 'Total Interest',
            y: closing_balance - totalAmount
        }
         ]
    }]
});

		// Highchart
	document.querySelector('.y1').innerHTML= closing_balance;
	document.querySelector('.y2').innerHTML= totalAmount;
	document.querySelector('.y3').innerHTML= closing_balance - totalAmount;
	
}