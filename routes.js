Router.configure({
  trackPageView: true,
});

Router.route('/', {
  name: 'home',
  layoutTemplate: 'layout',
});

Router.route('/contacto', {
  name: 'contact',
  layoutTemplate: 'layout',
});

Router.route('/about', {
  name: 'about',
  layoutTemplate: 'layout',
});

Router.route('/educator', {
  name: 'educator.index',
  layoutTemplate: 'educatorLayout',
});

Router.route('/educator/student-work', {
  name: 'educator.work',
  layoutTemplate: 'educatorLayout',
});

Router.route('/educator/contact', {
  name: 'educator.contact',
  layoutTemplate: 'educatorLayout',
});

Router.route('/educator/about/:url', {
  name: 'educator.about.item',
  layoutTemplate: 'educatorLayout',
});

Router.route('/:url', {
  name: 'work',
  layoutTemplate: 'layout',
});
