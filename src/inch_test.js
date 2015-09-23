
"use strict";

var InstanciatableClass = function() {};
InstanciatableClass.prototype.render = function() {
  return null;
};

var InchTest = {};

/**
* @private
*/
InchTest.generate_docs = function(project, version, args, options) {}

InchTest.Docs = {
  'Formatter': {
    // Generate JSON documentation for the given modules
    'run': function(modules, args, config) {
      return null;
    },
    /*
     * @ignore
     */
    'nodoc_ignore': function() {},
    /* istanbul ignore next */
    'nodoc_istanbul': function() {}
  }
};

InchTest.Functions = {};
/**
 *
 * This function takes `param1` and `param2` as arguments.
 *
 * @param {Number} param1 A number from 0 to 26 that will result in a letter a-z
 * @param {String} param2 A text
 * @return {String} A character from a-z based on the input number n
 *
 * Examples:
 *
 *   > InchTest.Naming.resource_name(MyApp.User)
 *   "user"
 *   > InchTest.Naming.resource_name(MyApp.UserView, "View")
 *   "user"
 */
InchTest.Functions.full_doc = function(param1, param2) {
  return null;
}
/**
*
* This function takes a `param1` and a second parameter that is never used
* (maybe, because it is a callback or something like that). However, the
* second param should impact the evaluation by Inch.
*
* Examples:
*
*   > InchTest.Naming.resource_name(MyApp.User)
*   "user"
*   > InchTest.Naming.resource_name(MyApp.UserView, "View")
*   "user"
*/
InchTest.Functions.full_doc_second_parameter_unnamed = function(param1, _) {
  return null;
};


InchTest.CodeExamples = {
  /**
  *
  * This function takes no arguments.
  *
  * Examples:
  *
  *   > InchTest.Naming.resource_name(MyApp.User)
  *   "user"
  *   > InchTest.Naming.resource_name(MyApp.UserView, "View")
  *   "user"
  */
  'single_code_example': function() {
    return null;
  },
  /**
  *
  * This function takes no arguments.
  *
  * Examples:
  *
  *   > InchTest.Naming.resource_name(MyApp.User)
  *   "user"
  *   > InchTest.Naming.resource_name(MyApp.UserView, "View")
  *   "user"
  *
  * In general, `underscore` can be thought of as the reverse ...
  *
  *   > InchTest.Naming.resource_name(MyApp.User)
  *   "user"
  *   > InchTest.Naming.resource_name(MyApp.UserView, "View")
  *   "user"
  */
  'multiple_code_examples': function() {
    return null;
  }
};
