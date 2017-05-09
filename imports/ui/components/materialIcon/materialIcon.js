/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './materialIcon.html';

Template.materialIcon.helpers({
  iconElement() {
    const data = Template.currentData();
    console.log('materialIcon data', data);
    const _class = data.attr['class']?('material-icons '+data.attr['class'])
        :'material-icons';
    return '<i class="'+_class+'">'+data.attr.name+'</i>';
  }
});
