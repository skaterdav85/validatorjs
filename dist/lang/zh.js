require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"./lang/zh":[function(require,module,exports){
module.exports = {
  accepted: ":attribute必须是可接受的.",
  alpha: ":attribute只能包含字母.",
  alpha_dash: ":attribute只能包含字母,连字符和下划线.",
  alpha_num: ":attribute只能包含字母和数字.",
  alpha_numeric: ":attribute只能包含字母和数字.",
  array: "The :attribute must be an array",
  between: ":attribute的(大小,长度等)只能在:min和:max之间.",
  confirmed: ":attribute确认不一致.",
  email: ":attribute格式不正确.",
  date: ":attribute日期格式错误.",
  def: ":attribute属性错误.",
  digits: ":attribute必须是:digits位小数.",
  digits_between: ":attribute 必须是介于 :min 和 :max 位的数字。",
  different: ":attribute和:different必须不同.",
  in: "选择的:attribute无效",
  integer: ":attribute必须是一个整数.",
  min: {
    numeric: ":attribute不能小于:min.",
    string: ":attribute长度不能小于:min.",
  },
  max: {
    numeric: ":attribute不能大于:max.",
    string: ":attribute长度不能大于:max.",
  },
  not_in: "所选的:attribute无效.",
  numeric: ":attribute必须是一个数字.",
  object: "The :attribute must be an object",
  required: ":attribute不能为空.",
  required_if: "当:other是:value时,:attribute不能为空.",
  same: ":attribute和:same必须一致.",
  size: {
    numeric: ":attribute必须等于:size.",
    string: ":attribute的长度必须等于:size.",
  },
  string: ":attribute必须是一个字符串.",
  url: ":attribute格式不正确.",
  regex: ":attribute格式不正确.",
  attributes: {},
};

},{}]},{},[]);
