/*
 * spa.js
 * Root namespace module
Set JSLint switches per the module template in appendix A.
continue : true,
 maxerr  : 50,
plusplus : true,
    vars : false,
￼*/
/*jslint
  devel  : true,
  newcap : true,
  regexp : true,
  white  : true,
  browser : true,
   indent : 2,
    nomen : true,
   sloppy : true,
*/
/*global $, spa */

var spa = (function(){
  var initModule = function ($container){
    spa.shell.initModule( $container );
  };

  return { initModule: initModule };
}());
