# flight-dropmenu

A [Flight](https://github.com/flightjs/flight) component for making simple dropdown menu. 

## Installation

```bash
bower install --save flight-dropmenu
```

## Example

The HTML part of the component is at this time pretty strict. The markup should look like:
```bash
<div class="widget-dropdown">
   <form name="dropdown" class="widget-dropdown-form">
   <input name="value" type="hidden" value="1" class="widget-dropdown-value">
   <a href="#" class="widget-dropdown-toggle">Dropdown Menu</a>
   <ul class="widget-dropdown-menu">
       <li>
         <a href="value1" >
           Value 1
         </a>
       </li>
       <li>
         <a href="value2" >
           Value 2
         </a>
       </li>       
   </ul>
   </form>
</div>
```

## Development

Development of this component requires [Bower](http://bower.io), and preferably
[Karma](http://karma-runner.github.io) to be globally installed:

```bash
npm install -g bower karma
```

Then install the Node.js and client-side dependencies by running the following
commands in the repo's root directory.

```bash
npm install
bower install
```

To continuously run the tests in Chrome and Firefox during development, just run:

```bash
karma start
```

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
