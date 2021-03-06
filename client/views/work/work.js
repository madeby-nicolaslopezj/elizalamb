var MathMap = function(x, a, b, c, d) {
	return (x-a)/(b-a) * (d-c) + c;
};

var isTouchDevice = function() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window; // works on ie10
};

Template.work.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var category = Categories.findOne({ url: Router.current().params.url });
    if (category) {
      self.subscribe('images.byCategory', category._id);
			SEO.set({
	  		title: category.name + ' - ' + orion.dictionary.get('seo.title'),
	  		link: {
	  			icon: Meteor.absoluteUrl().slice(0, -1) + orion.dictionary.get('seo.favicon.url'),
	  		},
	  		meta: {
	  			'description': orion.dictionary.get('seo.description')
	  		},
	  		og: {
	  			'title': category.name +  ' - ' + orion.dictionary.get('seo.title'),
	  			'description': orion.dictionary.get('seo.description'),
	  			'image': Meteor.absoluteUrl().slice(0, -1) + orion.dictionary.get('seo.image.url')
	  		}
	  	});
    } else {
			SEO.set({
	  		title: 'Not found - ' + orion.dictionary.get('seo.title'),
	  		link: {
	  			icon: Meteor.absoluteUrl().slice(0, -1) + orion.dictionary.get('seo.favicon.url'),
	  		},
	  		meta: {
	  			'description': orion.dictionary.get('seo.description')
	  		},
	  		og: {
	  			'title': 'Not found - ' + orion.dictionary.get('seo.title'),
	  			'description': orion.dictionary.get('seo.description'),
	  			'image': Meteor.absoluteUrl().slice(0, -1) + orion.dictionary.get('seo.image.url')
	  		}
	  	});
		}
  });
});

Template.work.onRendered(function() {
	var self = this;
	$(document).keydown(function(e) {
		if (e.keyCode == 39) {
			self.$('.carousel').carousel('next');
		} else if(e.keyCode == 37) {
			self.$('.carousel').carousel('prev');
		}
	});
  self.autorun(function() {
    var ready = Template.instance().subscriptionsReady();
    if (!ready) return;

  	Tracker.afterFlush(function() {
      var resizeItem = function() {
    		var itemHeight = $(window).height() - $(".headersito").outerHeight() - $(".indicators").outerHeight() - 120;
    		$(".imagensita").height(itemHeight);
    	};
    	resizeItem();
    	$(window).resize(function() {
    		resizeItem();
    	});

			$(window).mousemove(function(e){
				var posX = MathMap(e.pageX, 0, $(window).width(), 0, 100);
				var posY = MathMap(e.pageY, 0, $(window).height(), 0, 100);
				$(".zoom .imagensita").css('background-position', posX + "% " + posY + "%");
			});
    });
  });
});


Template.work.helpers({
	category: function() {
		return Categories.findOne({ url: Router.current().params.url });
	},
  images: function() {
    var category = Categories.findOne({ url: Router.current().params.url });
    return category && Images.find({ categoryId: category._id }, { sort: { index: 1 } });
  },
  isFirst: function() {
    var category = Categories.findOne({ url: Router.current().params.url });
    var image = category && Images.findOne({ categoryId: category._id }, { sort: { index: 1 } });
  	return image && image._id == this._id;
  },
	lastIndex: function() {
		var category = Categories.findOne({ url: Router.current().params.url });
		if (!category) {
			return 0;
		}
		return Images.find({ categoryId: category._id }).count();
	}
});

Template.work.events({
	'click .item.with-zoom': function (event, template) {
		return;
		if (!isTouchDevice()) {
			$(event.currentTarget)
			.toggleClass('zoom')
			.find('.imagensita')
			.css("background-position", "center");
		}
	}
});
