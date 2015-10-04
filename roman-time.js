var hours = process.argv[2];
var minutes = process.argv[3];
var key_full;
var roman_time = new Array();
var no_full =new Array('','','','','','','','');
var O = new Array('               ',
      				    '               ',
        				  '               ',
        				  ' _  _  _  _  _ ',
        				  '(_)(_)(_)(_)(_)',
        				  '               ',
        				  '               ',
        				  '               ');
var I = new Array(' _  _  _ ',
	                '(_)(_)(_)',
	                '   (_)   ',
        				  '   (_)   ',
        				  '   (_)   ',
        				  '   (_)   ',
        				  ' _ (_) _ ',
        				  '(_)(_)(_)');
var V = new Array(' _           _ ',
        				  '(_)         (_)',
        				  '(_)         (_)',
        				  '(_)_       _(_)',
        				  '  (_)     (_)  ',
        				  '   (_)   (_)   ',
        				  '    (_)_(_)    ',
        				  '      (_)      ')
var X = new Array(' _           _ ',
        				  '(_)_       _(_)',
        				  '  (_)_   _(_)  ',
        				  '    (_)_(_)    ',
        			    '     _(_)_     ',
        				  '   _(_) (_)_   ',
        			    ' _(_)     (_)_ ',
        				  '(_)         (_)')
var L = new Array(' _          ',
        				  '(_)         ',
        				  '(_)         ',
        				  '(_)         ',
        				  '(_)         ',
        				  '(_)         ',
        				  '(_) _  _  _ ',
        				  '(_)(_)(_)(_)');
var colon = new Array('   ',
					  '   ',
					  ' _ ',
					  '(_)',
					  '   ',
					  ' _ ',
					  '(_)',
					  '   ')
if(hours<25 && hours>-1 && minutes<60 && minutes>-1){
	for(var i=0;i< I.length;i++){
		roman_time[i]=no_full[i];
	}
	key_full=0;
	roman_time=timeToRoman(roman_time,parseInt(hours/10),no_full,X,L);
	roman_time=timeToRoman(roman_time,hours%10,O,I,V);
	for(var i=0;i< I.length;i++){
		roman_time[i]+=colon[i];
	}
	key_full=0;
	roman_time=timeToRoman(roman_time,parseInt(minutes/10),no_full,X,L);
	roman_time=timeToRoman(roman_time,minutes%10,O,I,V);
	for(var i=0;i< roman_time.length;i++){
		console.log(roman_time[i]);
	}
}else {
	console.log("Время указано не верно");}
function timeToRoman(roman_time,varToCompare,noFull,one,five){
	switch(varToCompare){
		case(0):{
			if(key_full==0) {
				for (var i = 0; i < one.length; i++) {
					roman_time[i] += noFull[i];
				}
			}
			break;
		}
		case(1):{
			for(var i=0;i< one.length;i++){
				roman_time[i]+=one[i];
			}
			key_full=1;
			break;
		}
		case(2):{
			for(var i=0;i< I.length;i++){
				roman_time[i]+=one[i]+one[i];
			}
			key_full=1;
			break;
		}
		case(3):{
			for(var i=0;i< one.length;i++){
				roman_time[i]+=one[i]+one[i]+one[i];
			}
			key_full=1;
			break;
		}
		case(4):{
			for(var i=0;i< one.length;i++){
				roman_time[i]+=one[i]+five[i];
			}
			key_full=1;
			break;
		}
		case(5):{
			for(var i=0;i< one.length;i++){
				roman_time[i]+=five[i];
			}
			key_full=1;
			break;
		}
		case(6):{
			for(var i=0;i< one.length;i++){
				roman_time[i]+=five[i]+one[i];
			}
			key_full=1;
			break;
		}
		case(7):{
			for(var i=0;i< one.length;i++){
				roman_time[i]+=five[i]+one[i]+one[i];
			}
			key_full=1;
			break;
		}
		case(8):{
			for(var i=0;i< one.length;i++){
				roman_time[i]+=five[i]+one[i]+one[i]+one[i];
			}
			key_full=1;
			break;
		}
		case(9):{
			for(var i=0;i< one.length;i++){
				roman_time[i]+=one[i]+X[i];
			}
			key_full=1;
			break;
		}
	}
	return(roman_time);
}
