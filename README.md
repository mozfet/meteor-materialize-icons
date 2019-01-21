# Meteor Materialize Icons
> **IMPORTANT** This version does not work with versions of MaterializeCSS < 1.0.
> **IMPORTANT** For earlier versions of Materialize use V0.1.1 of this package.

This package provides reactive materialize icons with built in tooltips. In other words, Materializecss icons on steriods.

While Materializecss provides a great set of icons and build in tooltip support, using these two together is clumsy with lots of boilerplate code. In addition to this, Materializecss icons do not render reactively out of the box which, when using Meteor and creating modular and reactive components that use different icons, becomes a problem. To make things worse, there are so many icons out there and often reused, it is often confusing to users what icons mean, so tooltips are often required. And because of all of this, this package has been born.

On desktop, tooltips show when you hover over the icon. On mobile apps and browsers a long press will show the tooltip, and a fast click will open the link.

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

Static example
```html
{{> tooltippedIcon
    icon="home"
    iconClass="medium"
    text="Go to Home Page"
    position="right"
    link="/home"
}}
```

Note that iconClass, position and link is optional. ```position``` can be : ```bottom```, ```top```, ```left```, or ```right```.

It is typical for an icons with tooltips to be links. You can of course wrap the tooltipped icon in a ```<a href="/home">...</a>``` to achieve a link, however this does not work well on mobile devices becuase long pressing on a link will usually open a browser popup over your tooltip.

In fact tooltips on mobile devices are kinda tricky because we do not know where your finger is hovering until you actually touch the screen and mobile browsers often do not handle ```hover``` events. In addition the are known issues with Materialize tooltips on mobile that this package tries to work around... so its probably best just use the ```link``` argument whenever you can.

Reactive example where ```icon```, ```text``` and ```link``` are helpers returning ```ReactiveVar``` objects:
```html
{{> tooltippedIcon
    icon=icon
    iconClass="medium"
    text=text
    position="right"
    link=link    
}}
```

### Reactive Tooltipped Icon with Text ###

in client template html:
```
{{> tooltippedIconText icon="iconName" class="grey-text text-darken-4"
    tooltipText="Tooltip" text="Text" tooltipPosition="right"}}
```
