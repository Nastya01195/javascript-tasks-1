var hours = parseInt(process.argv[2],10);
var minutes = parseInt(process.argv[3],10);
var romanTime;
var romanTimeScreen='';
var romanTimeASCLL = new Array();
var noFull =['','','','','','','',''];
if(hours<25 && hours>-1 && minutes<60 && minutes>-1){
	romanTime=timeToRoman(romanTime);
	for(var i=0;i< romanTime.length;i++){
		romanTimeScreen+=romanTime[i];
	}
	console.log(romanTimeScreen);
	romanTimeASCLL=timeRomanToASCLL(romanTimeASCLL,timeToRoman(romanTime));
		for(var i=0;i< romanTimeASCLL.length;i++){
		console.log(romanTimeASCLL[i]);
	}
}else {
	console.log("Время указано не верно");}
function timeToRoman(romanTime){
	romanTime=[''];
	var units = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
	var dozens = ['','X','XX','XXX','XL','L'];
	var countArray=0;
	romanTime[countArray]=dozens[parseInt(hours/10,10)];
	countArray++;
	romanTime[countArray]=units[hours%10];
	if(dozens[parseInt(hours/10),10]==0 && units[hours%10]==0){
		countArray--;
		romanTime[countArray]='-';
	}
	countArray++;
	romanTime[countArray]=':';
	countArray++;
	romanTime[countArray]=dozens[parseInt(minutes/10,10)];
	countArray++;
	romanTime[countArray]=units[minutes%10];
	if(dozens[parseInt(minutes/10,10)]==0 && units[minutes%10]==0){
		countArray--;
		romanTime[countArray]='-';
	}
	return(romanTime);
}
function timeRomanToASCLL(romanTimeASCLL,romanTime){
	for(var i=0;i<noFull.length;i++){
		romanTimeASCLL[i]=noFull[i];
	} var count =0;
	var O =['               ',
		'               ',
		'               ',
		' _  _  _  _  _ ',
		'(_)(_)(_)(_)(_)',
		'               ',
		'               ',
		'               '];
	var I = [' _ ',
		'(_)',
		'(_)',
		'(_)',
		'(_)',
		'(_)',
		'(_)',
		'(_)'];
	var V = [' _           _ ',
		'(_)         (_)',
		'(_)         (_)',
		'(_)_       _(_)',
		'  (_)     (_)  ',
		'   (_)   (_)   ',
		'    (_)_(_)    ',
		'      (_)      '];
	var X = [' _           _ ',
		'(_)_       _(_)',
		'  (_)_   _(_)  ',
		'    (_)_(_)    ',
		'     _(_)_     ',
		'   _(_) (_)_   ',
		' _(_)     (_)_ ',
		'(_)         (_)'];
	var L =[' _          ',
		'(_)         ',
		'(_)         ',
		'(_)         ',
		'(_)         ',
		'(_)         ',
		'(_) _  _  _ ',
		'(_)(_)(_)(_)'];
	var colon = ['   ',
		     '   ',
		     ' _ ',
	       	     '(_)',
		     '   ',
		     ' _ ',
		     '(_)',
		     '   '];
	do{
		switch(romanTime[count]){
			case('-'):
				for (var i = 0; i < O.length; i++) {
					romanTimeASCLL[i] += O[i];
				}
				break;
			case(':'):
				for (var i = 0; i < colon.length; i++) {
					romanTimeASCLL[i] += colon[i];
				}
				break;
			case('I'):
				for(var i=0;i< I.length;i++){
					romanTimeASCLL[i]+=I[i];
				}
				break;
			case('II'):
				for(var i=0;i< I.length;i++){
					romanTimeASCLL[i]+=I[i]+I[i];
				}
				break;
			case('III'):
				for(var i=0;i< I.length;i++){
					romanTimeASCLL[i]+=I[i]+I[i]+I[i];
				}
				break;
			case('IV'):
				for(var i=0;i< I.length;i++){
					romanTimeASCLL[i]+=I[i]+V[i];
				}
				break;
			case('V'):
				for(var i=0;i< V.length;i++){
					romanTimeASCLL[i]+=V[i];
				}
				break;
			case('VI'):
				for(var i=0;i< V.length;i++){
					romanTimeASCLL[i]+=V[i]+I[i];
				}
				break;
			case('VII'):
				for(var i=0;i< V.length;i++){
					romanTimeASCLL[i]+=V[i]+I[i]+I[i];
				}
				break;
			case('VIII'):
				for(var i=0;i< V.length;i++){
					romanTimeASCLL[i]+=V[i]+I[i]+I[i]+I[i];
				}
				break;
			case('IX'):
				for(var i=0;i< I.length;i++){
					romanTimeASCLL[i]+=I[i]+X[i];
				}
				break;
			case('X'):{
				for(var i=0;i< X.length;i++){
					romanTimeASCLL[i]+=X[i];
				}
				break;
			}
			case('XX'):
				for(var i=0;i< X.length;i++){
					romanTimeASCLL[i]+=X[i]+X[i];
				}
				break;
			case('XXX'):
				for(var i=0;i< X.length;i++){
					romanTimeASCLL[i]+=X[i]+X[i]+X[i];
				}
				break;
			case('XL'):
				for(var i=0;i< X.length;i++){
					romanTimeASCLL[i]+=X[i]+L[i];
				}
				break;
			case('L'):
				for(var i=0;i< L.length;i++){
					romanTimeASCLL[i]+=L[i];
				}
				break;
			default :
		}
		count++;
	}while(count<romanTime.length);
	return(romanTimeASCLL);
}
