'use strict';

describeComponent('lib/flight-dropmenu', function () {

  // jasmine.getFixtures().fixturesPath = 'text/spec/fixtures/';
  var events = {
    dropdownOpened: 'drop-down-toggled'
  };

  var fixture = setFixtures('<div class="widget widget-dropdown">'+
   '<form name="dropdown" class="widget-dropdow-form">'+
   '<input name="ddf-value" type="hidden" value="1" class="widget-dropdown-value">'+
   '<a href="#" class="widget-dropdown-toggle">Выпадающее меню</a>'+
   '<ul class="widget-dropdown-menu">'+
       '<li>'+
         '<a href="number1" >'+
           'Вариант 1'+
         '</a>'+
       '</li>'+
       '<li>'+
         '<a href="number2" >'+
           'Вариант 2'+
         '</a>'+
       '</li>'+       
   '</ul>'+
   '</form>'+
'</div>');
  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent(fixture);
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  it('should not have class opened on init', function () {
    expect(this.component.$node).not.toHaveClass('widget-dropdown-open');
  });

  it('should open when triggered', function () {
    this.component.menuToggle();
    expect(this.component.$node).toHaveClass('widget-dropdown-open');
  });

  it('should trigger event, when opened', function() {
    var eventSpy = spyOnEvent(document, events.dropdownOpened);
    this.component.menuToggle();
    expect(eventSpy).toHaveBeenTriggeredOn(document);
  });

  it('should close When Triggered in open state', function() {
    this.component.menuToggle();
    expect(this.component.$node).toHaveClass('widget-dropdown-open');
    this.component.closeMenu();
    expect(this.component.$node).not.toHaveClass('widget-dropdown-open');
  });

  it('component value should be undefined until updated',function(){
    expect(this.component.attr.value).toBeUndefined();
    this.component.setItemAndValue({value:'1',title:'New Title'});
    expect(this.component.attr.value).toBeDefined();
    expect(this.component.attr.value).toEqual('1');
  });

  it('should return serialized data or value, for sure to be defined',function(){
    this.component.setItemAndValue({value:'1',title:'New Title'});
    expect(this.component.returnData()).toBeDefined();    
    expect(this.component.returnData()).toEqual('1');    
  });


  it('should respond to click, update classes and trigger event',function(){
      expect(this.component.$node).not.toHaveClass('widget-dropdown-open');
      var eventSpy2 = spyOnEvent(document, events.dropdownOpened);
      var spyEvent = spyOnEvent('.widget-dropdown-toggle', 'click')
      $('.widget-dropdown-toggle').click();
      expect('click').toHaveBeenTriggeredOn('.widget-dropdown-toggle');
      expect(this.component.$node).toHaveClass('widget-dropdown-open');
      expect(eventSpy2).toHaveBeenTriggeredOn(document);      
  });
  it('choose, update classes and trigger event',function(){
      
      $('.widget-dropdown-toggle').click();
      expect(this.component.$node).toHaveClass('widget-dropdown-open');      
      this.component.select('menuItem').eq(0).click();
      expect(this.component.$node).not.toHaveClass('widget-dropdown-open');
      expect(this.component.returnData()).toEqual('number1');    
      
  });


});
