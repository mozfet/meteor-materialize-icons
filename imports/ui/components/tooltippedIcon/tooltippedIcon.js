// imports
import { Template } from 'meteor/templating'
import '../materialIcon/materialIcon'
import './tooltippedIcon.html'

// on created
Template.tooltippedIcon.onCreated(() => {
  const instance = Template.instance();

  // if text is reactive var
  if (_.isObject(instance.data.text)) {

    // assign reactive var to text
    instance.text = instance.data.text
  }
  // else if text is string
  else if (_.isString(instance.data.text)) {

    // create new reactive var of text
    instance.text = new ReactiveVar(instance.data.text)
  }
  // else
  else {

    // create new reactive var
    instance.text = new ReactiveVar('')
  }

  // assign icon
  instance.icon = instance.data.icon?instance.data.icon:'polymer';

  // init attributes
  instance.iconAttr = {
  }
  instance.tooltipAttr = {
  }

  //init class
  // console.log('tooltipped data', instance.data);



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
    const elements = instance.$('.tooltipped')
    const tooltips = M.Tooltip.init(elements, {html: instance.data.text})
    instance.tooltip = _.first(tooltips)
  }
  return undefined;
});

//helpers
Template.tooltippedIcon.helpers({
  iconAttr() {
    const instance = Template.instance();
    return instance.iconAttr;
  },

  // reactive tooltip attributes
  tooltipAttr() {
    const instance = Template.instance();
    const classes = 'tooltipped disable-selection';
    instance.tooltipAttr['class'] = instance.data.tooltipClass?
        instance.data.tooltipClass+' '+classes:classes
    instance.tooltipAttr['data-tooltip'] = instance.text.get()
    instance.tooltipAttr['data-position'] = instance.data.position?
        instance.data.position:'top'
    return instance.tooltipAttr
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
  instance.tooltip.destroy()
});
