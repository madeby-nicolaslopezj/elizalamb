var MathMap = function(x, a, b, c, d) {
  return (x - a) / (b - a) * (d - c) + c;
};

var isTouchDevice = function() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window; // works on ie10
};

Template.educatorWork.onCreated(function() {
  this.subscribe('student_works');
  this.autorun(function() {
    SEO.set({
      title: 'Student Work - ' + orion.dictionary.get('seo.title'),
      link: {
        icon: Meteor.absoluteUrl().slice(0, -1) + orion.dictionary.get('seo.favicon.url'),
      },
      meta: {
        description: orion.dictionary.get('seo.description'),
      },
      og: {
        title: 'Student Work - ' + orion.dictionary.get('seo.title'),
        description: orion.dictionary.get('seo.description'),
        image: Meteor.absoluteUrl().slice(0, -1) + orion.dictionary.get('seo.image.url'),
      },
    });
  });
});

Template.educatorWork.onRendered(function() {
  var self = this;
  $(document).keydown(function(e) {
    if (e.keyCode == 39) {
      self.$('.carousel').carousel('next');
    } else if (e.keyCode == 37) {
      self.$('.carousel').carousel('prev');
    }
  });

  self.autorun(function() {
    var ready = Template.instance().subscriptionsReady();
    if (!ready) return;

    Tracker.afterFlush(function() {
      var resizeItem = function() {
        var itemHeight = $(window).height() - $('.headersito').outerHeight() - $('.indicators').outerHeight() - 120;
        $('.imagensita').height(itemHeight);
      };

      resizeItem();
      $(window).resize(function() {
        resizeItem();
      });

      $(window).mousemove(function(e) {
        var posX = MathMap(e.pageX, 0, $(window).width(), 0, 100);
        var posY = MathMap(e.pageY, 0, $(window).height(), 0, 100);
        $('.zoom .imagensita').css('background-position', posX + '% ' + posY + '%');
      });
    });
  });
});

Template.educatorWork.helpers({
  images: function()  {
    return StudentWorks.find({}, {
      sort: {
        index: 1,
      },
    });
  },

  isFirst: function() {
    var image = StudentWorks.findOne({}, {
      sort: {
        index: 1,
      },
    });
    return image && image._id == this._id;
  },
});
