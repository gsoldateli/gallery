function Gallery() {
	this.items = document.querySelectorAll('article.gallery-item');
	this.bg = document.querySelector('.backimage');

	this.init = function() {
		var self = this;		

		self.items.forEach(function(galleryItem){

			galleryItem.addEventListener('click',function(){
				self.changeImage(this);
			});

		});
	};

	this.changeImage = function(item) {
		var self = this;
		var src = item.querySelector('img').src;

		this.bg.className = self.bg.className.replace(/ fadeout /g,'').replace(/ fadein /g,'');
		this.bg.className += ' fadeout ';

		setTimeout(function(){
			self.bg.className = self.bg.className.replace(/ fadeout /g,' fadein ');
			self.bg.style.backgroundImage = "url('"+src+"')";
		},500);
		

	};

	this.init();
}
var $G = new Gallery();