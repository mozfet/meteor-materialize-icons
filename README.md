# Meteor Materialize Icons

This package provides reactive materialize icons with built in tooltips. In other words, Materializecss icons on steriods.

While Materializecss provides a great set of icons and build in tooltip support, using these two together is clumsy with lots of boilerplate code. In addition to this, Materializecss icons do not render reactively out of the box which, when using Meteor and creating modular and reactive components that use different icons, becomes a problem. To make things worse, there are so many icons out there and often reused, it is often confusing to users what icons mean, so tooltips are often required. And because of all of this, this package has been born.



### Install ###

Install materialize:materialize (untested) or poetic:materialize-scss. Important: this package has no direct dependency on either of these packages and thus no warning will be generated if they are not already installed.

```
$ meteor add mozfet:autoform-materialize-icons
```

### Useage ###

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

#### tooltipped icon ####

in client template html
```
{{> tooltippedIcon icon="alarm_on" text="Alarm") position="right"}}
```
