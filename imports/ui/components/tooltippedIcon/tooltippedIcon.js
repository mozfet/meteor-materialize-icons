/*jshint esversion: 6 */

//imports
import { Template } from 'meteor/templating';
import '../materialIcon/materialIcon';
import './tooltippedIcon.html';

//on created
Template.tooltippedIcon.onCreated(() => {
  const instance = Template.instance();
  instance.text = instance.data.text?instance.data.text:'';
  instance.icon = instance.data.icon?instance.data.icon:'polymer';

  //init attributes
  instance.iconAttr = {
  };
  instance.tooltipAttr = {
  };

  //init class
  console.log('tooltipped data', instance.data);

  //tooltip
  if(instance.data.text) {
    const classes = 'tooltipped disable-selection';
    instance.tooltipAttr['class'] = instance.data.tooltipClass?instance.data.tooltipClass+' '+classes:classes;
    instance.tooltipAttr['data-tooltip'] = instance.data.text;
    instance.tooltipAttr['data-position'] = instance.data.position?instance.data.position:'top';
  }

  //add icon name to icon attr
  instance.iconAttr.name = instance.data.icon;

  //add icon class to icon attr
  instance.iconAttr['class'] = instance.data.iconClass;

  //return
  return undefined;
});

//on rendered
Template.tooltippedIcon.onRendered(() => {
  const instance = Template.instance();
  if(instance.data.text) {
    instance.$('.tooltipped').tooltip({delay: 1000});
  }
  return undefined;
});

//helpers
Template.tooltippedIcon.helpers({
  iconAttr() {
    const instance = Template.instance();
    return instance.iconAttr;
  },
  tooltipAttr() {
    const instance = Template.instance();
    return instance.tooltipAttr;
  }
});

Template.tooltippedIcon.events({
  'click'(event, template) {
    const instance = Template.instance();
    instance.$('.tooltipped').trigger('mouseleave.tooltip');
  },
  'hover'(event, template) {
    const instance = Template.instance();
    instance.$('.tooltipped').trigger('mouseenter.tooltip');
  }
});

Template.tooltippedIcon.onDestroyed(() => {
  const instance = Template.instance();
  instance.$('.tooltipped').tooltip('remove');
});
