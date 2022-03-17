var catalog__subcatalog_link = document.querySelectorAll('.catalog__subcatalog-link-lvl');
var subcatalog_resist = document.querySelectorAll('.subcatalog_resist');
var count = 0;

console.log(subcatalog_resist);
console.log(catalog__subcatalog_link);
console.log(catalog__subcatalog_link.length);

	


for(var i = 0; i < catalog__subcatalog_link.length; i++) {
	catalog__subcatalog_link[i].addEventListener('mouseenter', function (count) {
		catalog__subcatalog_lin
		count
		subcatalog_resist[].style.display = 'block'; 
	});
	
	catalog__subcatalog_link[i].addEventListener('mouseleave', function () {
		console.log(i);
		subcatalog_resist[i].style.display = 'none'; 
	});
	
}

for(var i = 0; i < subcatalog_resist.length; i++) {
	
	subcatalog_resist[i].addEventListener('mouseenter', function () {
		subcatalog_resist[i].style.display = 'block';
		console.log(1);
	});
	
	subcatalog_resist[i].addEventListener('mouseleave', function () {
		subcatalog_resist[i].style.display = 'none'; 
		console.log(1);
	});
	
}

*/
	

