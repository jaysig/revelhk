// ******************* GLOBAL SETTINGS *****************************

// SUBSCRIPTIONS

FlowRouter.subscriptions = function() {
  // this.register('mySub', Meteor.subscribe('mySubName'));
};

// TRIGGERS

FlowRouter.triggers.enter([
  // myEnterFunc
] /* , {
  only: ['myRoute'],
  except: ['myOtherRoute']
} */);

FlowRouter.triggers.exit([
  // myExitFunc
] /* , {
  only: ['myRoute'],
  except: ['myOtherRoute']
} */);

// ************************* ROUTES ********************************


FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {content: <BlogHome />});
  }
});

FlowRouter.route('/:postId', {
  action(params) {
    ReactLayout.render(MainLayout, {content: <BlogPost {...params} />});
  }
});