const $ = (selector, multiElement=false) => {
	return new Promise((resolve, reject) => {
		const element = (!multiElement) ? document.querySelector(selector) : Array.from(document.querySelectorAll(selector));

		if(element){
			if(multiElement){
				if(element.length > 0)
					return resolve(element);
				else
					return reject(Error('Element(s) not found'));
			}

			return resolve(element);
		}
		
		return reject(Error('Element(s) not found'));
	});
};

//$('#title2').catch(e => { console.log('no encontrado1') });
//$('p', true).catch(e => { console.log(e) });