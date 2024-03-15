//your JS code here. If required.
function mapLetters(str="") {
	if (str.length==1) {
		const s=str.charAt(0);
		let obj={
			s:[0]
		}
		return obj;
	}
	let obj={};
	for (let i = 0; i < str.length; i++) {
		const s=str.charAt(i);
		if (!obj[s]) {
			obj[s]=[i];
		}else{
			obj[s].push(i);
		}
		
	}
	return obj
}
const s=prompt("enter the string");
alert(mapLetters(s))