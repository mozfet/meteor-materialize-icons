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
    instance.state.iconAttr['style'] = instance.data.iconStyle;
    instance.state.iconAttr['id'] = instance.data.iconId;
  }
});

// on rendered
Template.tooltippedIconText.onRendered(() => {
  const instance = Template.instance();
  if(instance.data.text) {
    const elements = instance.$('.tooltipped')
    const tooltips = M.Tooltip.init(elements, {
      html: instance.data.text,
      enterDelay: 500
    })
    instance.tooltip = _.first(tooltips)
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
// Template.tooltippedIconText.events({
//   'click'(event, template) {
//     const instance = Template.instance();
//     instance.$('.tooltipped').trigger('mouseleave.tooltip');
//   },
//   'hover'(event, template) {
//     const instance = Template.instance();
//     instance.$('.tooltipped').trigger('mouseenter.tooltip');
//   }
// });

// on destroyed
Template.tooltippedIconText.onDestroyed(() => {
  const instance = Template.instance()
  if (instance.tooltip) {
    instance.tooltip.destroy()
  }
});
