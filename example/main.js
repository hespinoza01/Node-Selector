// Use examples

$('#title')
	.then(element => {
		element.addEventListener('click', () => {
			alert('click in title element');
		});
	}).catch(e => { console.log(`Error in #title: ${e}`); });


$('div')
	.then(element => {
		element.textContent = "Hello world!";
	}).catch(e => { console.log(`Error in div: ${e}`); });


$('p', true)
	.then(element => {
		element.forEach(x => {
			x.style.backgroundColor = 'tomato';
		});
	}).catch(e => { console.log(`Error in p: ${e}`); });