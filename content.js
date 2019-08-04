// content.js
let elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
	let element = elements[i];

	for (let j = 0; j < element.childNodes.length; j++) {
		let node = element.childNodes[j];

		if (node.nodeType === 3) {
			let text = node.nodeValue;
			// let replacedText = text.replace(/goodbye|bye/gi, 'may the force be with you');
			let replacedText = [
				[/tricks/gi, ' Illusions Michael! Tricks are what whores do for money.'],
				[/Her/gi, ' Egg?'],
				[/regret/gi, ' I\'ve made a huge mistake'],
				[/money/gi, ' There\'s always money in the banana stand.'],
				[/hello|hi/gi, ' Annyong!'],
				[/touch/gi, ' No Touching!'],
				[/banana/gi, '“ I mean, it’s one banana. What could it cost? 10 dollars?'],
				[/the OC|the O.C./gi, ' Don\'t call it that.']
			];
			
			for(let k = 0; k < replacedText.length; k++) {
				let replaced = text.after(replacedText[k]);

				if (replaced !== text) {
					element.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
}