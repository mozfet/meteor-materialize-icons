# Meteor Materialize Icons

This package provides reactive materialize icons with built in tooltips. In other words, Materializecss icons on steriods.

While Materializecss provides a great set of icons and build in tooltip support, using these two together is clumsy with lots of boilerplate code. In addition to this, Materializecss icons do not render reactively out of the box which, when using Meteor and creating modular and reactive components that use different icons, becomes a problem. To make things worse, there are so many icons out there and often reused, it is often confusing to users what icons mean, so tooltips are often required. And because of all of this, this package has been born.

> **Thank You** This suite of packages is maintained by [ExpertBox.com](http://www.ExpertBox.com) as a thank you to the Open Source community.

### Install ###

Install materialize:materialize. Important: this package has no direct dependency on materialize thus no warning will be generated if not already installed.

command line:
```
$ meteor add mozfet:autoform-materialize-icons
```

client js:
```
import 'meteor/mozfet:materialize-icons';
```

### Supported Icons ###

Icon names can be any [icon supported by MaterializeCSS](http://archives.materializecss.com/0.100.2/icons.html).

### Reactive Icons ###

in client myTemplate.html
```
{{> materialIcon attr=iconAttr}}
```

in client myTemplate.js
```
Template.myTemplate.onCreated() => {
  const instance = Template.instance();
  instance.iconName = new ReactiveVar('alarm_on');
  instance.iconClass = new ReactiveVar('large');
};

Template.myTemplate.helpers({
  iconAttr() {
    const instance = Template.instance();
    return {
      name: instance.iconName.get(),
      class: instance.iconClass.get()
    }
  }
});
```

### Reactive Tooltipped Icon ###

in client template html:
```
{{> tooltippedIcon icon="alarm_on" iconClass="medium" text="Alarm" position="right"}}
```
position can be : bottom, top, left, or right

### Reactive Tooltipped Icon with Text ###

in client template html:
```
{{> tooltippedIconText icon="iconName" class="grey-text text-darken-4"
    tooltipText="Tooltip" text="Text" tooltipPosition="right"}}
```
