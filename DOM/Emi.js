document.getElementById('btn').onclick=function(){
	
	var P = document.getElementById('x1').value;
	
	var R = document.getElementById('x2').value;
	var N = document.getElementById('x3').value;
	
	
	var errMsg = "";
	
	if (P=="" || R=="" ||  N==""){
		errMsg= "All values are required.";
	}
	
	else if(isNaN(P) || isNaN(R) || isNaN(N)){
		errMsg = "values must be in numbers";
	}
	else if( P<0 || R < 0 || N < 0){
		errMsg= "Fail";
	}
	else{
		P = Number(P);
		R = Number(R);
		N = Number(N);
		
		// P x R x (1+R)**N / ((1+R)**N-1);
		R = R/12/100;
		N = N*12;
		var EMI = P * R * (1+R)**N / ((1+R)**N-1)
		EMI = Math.round(EMI);
		console.log(EMI);
		
		var Total_Amount_Payable = EMI * N;
		console.log(Total_Amount_Payable);
		
		var Interest_Amount = Total_Amount_Payable - P;
		console.log(Interest_Amount);
		
		
		errMsg= `EMI : ${EMI} <br/>
					Total Amount Payable  : ${Total_Amount_Payable}<br/>
					Interest Amount : ${Interest_Amount}`;
					
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
            name: 'Principal Amount',
            y: P
            // sliced: true,
            // selected: true
        }, {
            name: 'Interest Amount',
            y: R
        },  {
            name: 'Total Amount',
            y: N
        }
         ]
    }]
});

		// Highchart
	}
	
	document.getElementById('result').innerHTML=errMsg;
}