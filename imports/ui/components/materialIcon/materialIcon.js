/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './materialIcon.html';

Template.materialIcon.helpers({
  iconElement() {
    const data = Template.currentData();
    const _class = data.attr['class']?('material-icons '+data.attr['class'])
        :'material-icons';
    return `<i class="${_class}" style="${data.attr.style}">${data.attr.name}</i>`;
  }
});
