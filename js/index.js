'use strict';
const categories = [{
	title: 'JavaScript',
	href: 'views/js',
	cls: 'js'
}, {
	title: 'HTML5',
	href: 'views/html5',
	cls: 'html',
}, {
	title: 'CSS3',
	href: 'views/css3',
	cls: 'css',
}, {
	title: 'Nodejs',
	href: 'views/nodejs',
	cls: 'nodejs',
}, {
	title: 'UI',
	href: 'views/ui',
	cls: 'ui',
}, {
	title: 'C#',
	href: 'views/csharp',
	cls: 'csharp',
}];
let vm = new Vue({
	el: '#app',
	data: {
		categories: categories,
		content: ''
	},
	methods: {
		openCategory: function(e){
			let target = e.target,
				href = target.dataset.href;
			this.$http.get('https://api.mlab.com/api/1/databases/blogs/collections/categories?apiKey=DgJNWWsp8hW5AirXH6q6APHu_rRkLIbM').then(function(res){
				console.log(res)
				vm.content = res.data;
			}).catch(function(err){
				console.error(err);
			});
		}
	}
});