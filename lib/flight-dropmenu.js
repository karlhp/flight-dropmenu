define(['flight/lib/component'], function (defineComponent) {

  'use strict';

  function flightDropdown() {

    this.defaultAttrs({
      'toggle':'.widget-dropdown-toggle', 
      'menu': '.widget-dropdown-menu',
      'menuItem': '.widget-dropdown-menu a',
      'input':'.widget-dropdown-value',
      'form': '.widget-dropdown-form',
      'openedClass': 'widget-dropdown-open'
    });

    this.menuToggle = function(e){
      e&&e.preventDefault();
      this.trigger(document, 'drop-down-toggled');
      this.$node.toggleClass(this.attr.openedClass);
    };


    this.closeMenu = function(d){
      this.$node.removeClass(this.attr.openedClass);
    };

    this.optionSelected = function(e,d){
      e&&e.preventDefault();
      this.setItemAndValue({title:d.el.text,value:d.el.getAttribute('href')})
      this.closeMenu();
    };

    this.setItemAndValue = function(d){
      this.attr.value = d.value;
      this.select('input').val(this.attr.value);
      this.select('toggle').empty().append(d.title);
    };

    this.returnData = function(){
      return this.select('form').serialize()||this.attr.value;
    };

    this.after('initialize', function () {

      this.on(this.$node, 'click',{
        'toggle': this.menuToggle,
        'menuItem': this.optionSelected
      });

     this.on(document,'drop-down-toggled',this.closeMenu)
  
   });
  }
  return defineComponent(flightDropdown);

});
