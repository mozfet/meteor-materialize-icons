// imports
import { Template } from 'meteor/templating'
import '../materialIcon/materialIcon'
import './tooltippedIcon.html'
import { FlowRouter } from 'meteor/kadira:flow-router'

// on created
Template.tooltippedIcon.onCreated(() => {
  const instance = Template.instance()

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

  // if link is reactive var
  if (_.isObject(instance.data.link)) {

    // assign reactive var to text
    instance.link = instance.data.link
  }

  // else if text is string
  else if (_.isString(instance.data.link)) {

    // create new reactive var of text
    instance.link = new ReactiveVar(instance.data.link)
  }

  // assign icon
  instance.icon = instance.data.icon?instance.data.icon:'polymer'

  // init attributes
  instance.iconAttr = {}
  instance.tooltipAttr = {}

  // add icon name to icon attr
  instance.iconAttr.name = instance.data.icon

  // add icon class to icon attr
  instance.iconAttr['class'] = instance.data.iconClass

  // return
  return undefined
})

// on rendered
Template.tooltippedIcon.onRendered(() => {
  const instance = Template.instance()
  console.log('tooltip', instance.text.get())
  const element = instance.$('.tooltipped')
  const tooltips = M.Tooltip.init(element, {
    html: instance.data.text,
    enterDelay: 100
  })
  instance.tooltip = _.first(tooltips)
  console.log('tooltip', instance.tooltip)
  return undefined
})

// helpers
Template.tooltippedIcon.helpers({
  iconAttr() {
    const instance = Template.instance()
    return instance.iconAttr
  },

  // reactive tooltip attributes
  tooltipAttr() {
    const instance = Template.instance()
    const classes = 'tooltipped disable-selection'
    instance.tooltipAttr['class'] = instance.data.tooltipClass?
        instance.data.tooltipClass+' '+classes:classes
    instance.tooltipAttr['data-tooltip'] = instance.text.get()
    instance.tooltipAttr['data-position'] = instance.data.position?
        instance.data.position:'top'
    if (instance.link) {
      instance.tooltipAttr.style = `cursor: pointer;`
    }
    return instance.tooltipAttr
  }
})

Template.tooltippedIcon.events({
  'click'(event, instance) {
    instance.tooltip.close()
    if (instance.link) {
      FlowRouter.go(instance.link.get())
    }
  },
  'hover'(event, instance) {
    instance.tooltip.close()
  },
  'touchend'(event, instance) {
    instance.tooltip.close()
  }
})

Template.tooltippedIcon.onDestroyed(() => {
  const instance = Template.instance()
  instance.tooltip.destroy()
})
