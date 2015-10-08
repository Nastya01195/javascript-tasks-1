var hours = parseInt(process.argv[2],10);
var minutes = parseInt(process.argv[3],10);
var romanTimeASCLLScreen='';
var heightASCLL=8;

if(hours<25 && hours>-1 && minutes<60 && minutes>-1){
	console.log(timeToRoman());
		for(var i=0;i< heightASCLL;i++){
			for(var j=0;j<timeToRoman().length;j++){
				romanTimeASCLLScreen+=timeRomanToASCLL(timeToRoman()[j])[i];
			}
			romanTimeASCLLScreen+='\n';
	}
	console.log(romanTimeASCLLScreen);
}else {
	console.log("Время указано не верно");}

function timeToRoman(){
	var romanTime;
	romanTime=arabicNumberToRoman(hours);
	romanTime+=':'+arabicNumberToRoman(minutes);
	return romanTime;
}
function arabicNumberToRoman(number){
	var units = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
	var dozens = ['','X','XX','XXX','XL','L'];
	if(dozens[parseInt(number/10),10]==0 && units[number%10]==0){
		return '-';
	}
	return dozens[parseInt(number/10,10)]+units[number%10];
}

function timeRomanToASCLL(romanTime){
		switch(romanTime){
			case('-'): return [
			    '               ',
				'               ',
				'               ',
				' _  _  _  _  _ ',
				'(_)(_)(_)(_)(_)',
				'               ',
				'               ',
				'               '];
				break;
			case(':'): return [
			    '   ',
				'   ',
				' _ ',
				'(_)',
				'   ',
				' _ ',
				'(_)',
				'   '];
				break;
			case('I'): return [
			    ' _ ',
				'(_)',
				'(_)',
				'(_)',
				'(_)',
				'(_)',
				'(_)',
				'(_)'];
				break;
			case('V'): return [
			    ' _           _ ',
				'(_)         (_)',
				'(_)         (_)',
				'(_)_       _(_)',
				'  (_)     (_)  ',
				'   (_)   (_)   ',
				'    (_)_(_)    ',
				'      (_)      '];
				break;
			case('X'): return [
			    ' _           _ ',
				'(_)_       _(_)',
				'  (_)_   _(_)  ',
				'    (_)_(_)    ',
				'     _(_)_     ',
				'   _(_) (_)_   ',
				' _(_)     (_)_ ',
				'(_)         (_)'];
				break;
			case('L'): return [
			    ' _          ',
				'(_)         ',
				'(_)         ',
				'(_)         ',
				'(_)         ',
				'(_)         ',
				'(_) _  _  _ ',
				'(_)(_)(_)(_)'];
				break;
			default :
		}
}
