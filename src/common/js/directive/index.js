/**
 * Created by user on 2016/12/4.
 */
import Vue from 'vue' //vue

import title from 'title'

const name = 'v';

const directives = [title];

function addDirective (){
  directives.forEach(function(d){
    Vue.directive(name + '-' + d.name, d.options)
  })
}

module.exports = {addDirective}