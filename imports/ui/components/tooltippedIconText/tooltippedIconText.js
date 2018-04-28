/*jshint esversion: 6 */

// imports
import { Template } from 'meteor/templating';
import './tooltippedIconText.html';
import '../tooltippedIcon';

// on created
Template.tooltippedIconText.onCreated(() => {
  const instance = Template.instance();
});

// on rendered
Template.tooltippedIconText.onRendered(() => {
  const instance = Template.instance();
});

// helpers
Template.tooltippedIconText.helpers({
  helper() {
    const instance = Template.instance();
    return 'help';
  }
});

// events
Template.tooltippedIconText.events({

  //on click class
  'click .className'(event, instance) {
  }
});

// on destroyed
Template.tooltippedIconText.onDestroyed(() => {
  const instance = Template.instance();
});
