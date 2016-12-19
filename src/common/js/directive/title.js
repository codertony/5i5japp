/**
 * Created by user on 2016/12/4.
 */

module.exports = {
  name : 'title',
  options : {
    inserted: function (el, binding) {
      if(el.innerText){
        document.title = el.innerText
      }
      el.remove()
    }
  }
}