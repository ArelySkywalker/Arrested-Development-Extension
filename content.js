// content.js
let elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
	let element = elements[i];

	for (let j = 0; j < element.childNodes.length; j++) {
		let node = element.childNodes[j];

		if (node.nodeType === 3) {
			let text = node.nodeValue;
			let replacedText = [
				['tricks', /tricks/gi, '(llusions Michael!)'],
				['her', /her/gi, '(Egg?)'],
				['regret', /regret/gi, '(I\'ve made a huge mistake.)'],
				['money', /money/gi, '(There\'s always money in the banana stand.)'],
				['Hello', /hello/gi, '(Annyong!)'],
				['touch', /touch/gi, '(No Touching!)'],
				['banana', /banana/gi, '(I mean, it’s one banana. What could it cost? 10 dollars?'],
				['the OC', /the OC/gi, '(Don\'t call it that)']
			];
			
			for(let k = 0; k < replacedText.length; k++) {
				let replaced = text.replace(replacedText[k][1],replacedText[k][0] + ' ' + replacedText[k][2]);

				if (replaced !== text) {
				
					element.replaceChild(document.createTextNode(replaced), node);
				}
			}
		}
	}
}