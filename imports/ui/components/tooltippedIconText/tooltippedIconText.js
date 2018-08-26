/*jshint esversion: 6 */

// imports
import { Template } from 'meteor/templating';
import './tooltippedIconText.html';
import '../tooltippedIcon';

// on created
Template.tooltippedIconText.onCreated(() => {
  const instance = Template.instance();

  // init state
  instance.state = {
    tooltipAttr: {},
    iconAttr: {}
  };

  // setup tooltip
  if(instance.data.tooltipText) {
    const classes = 'tooltipped disable-selection';
    instance.state.tooltipAttr['class'] = instance.data.class?
        instance.data.class+' '+classes:classes;
    instance.state.tooltipAttr['data-tooltip'] = instance.data.tooltipText;
    instance.state.tooltipAttr['data-position'] = instance.data.tooltipPosition?
        instance.data.tooltipPosition:'top';
  }

  // setup icon
  instance.state.iconAttr.name = instance.data.icon;
  if (instance.data.iconClass) {
    instance.state.iconAttr['class'] = instance.data.iconClass;
  }
});

// on rendered
Template.tooltippedIconText.onRendered(() => {
  const instance = Template.instance();
  if(instance.data.text) {
    instance.$('.tooltipped').tooltip({delay: 1000});
  }
});

// helpers
Template.tooltippedIconText.helpers({
  tooltipAttr() {
    const instance = Template.instance();
    return instance.state.tooltipAttr;
  },
  iconAttr() {
    const instance = Template.instance();
    return instance.state.iconAttr;
  }
});

// events
Template.tooltippedIconText.events({
  'click'(event, template) {
    const instance = Template.instance();
    instance.$('.tooltipped').trigger('mouseleave.tooltip');
  },
  'hover'(event, template) {
    const instance = Template.instance();
    instance.$('.tooltipped').trigger('mouseenter.tooltip');
  }
});

// on destroyed
Template.tooltippedIconText.onDestroyed(() => {
  const instance = Template.instance();
  instance.$('.tooltipped').tooltip('remove');
});
