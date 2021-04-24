require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"./lang/fa":[function(require,module,exports){
module.exports = {
  accepted: "فیلد :attribute می بایست تایید شود",
  alpha: "فیلد :attribute می بایست فقط شامل حروف انگلیسی باشد",
  alpha_dash: "فیلد :attribute می بایست فقط شامل حروف انگلیسی و خط تیره و زیرخط باشد",
  alpha_num: "فیلد :attribute می بایست فقط شامل حروف و اعداد باشد",
  array: "The :attribute must be an array",
  between: "فیلد :attribute می بایست بزرگتر از :min و کوچکتر از :max باشد",
  confirmed: "تطبیق فیلد :attribute صحیح نمی باشد",
  email: "فرمت ایمیل وارد شده در :attribute صحیح نمی‌باشد",
  date: "تاریخ درج شده در فیلد :attribute صحیح نیست",
  def: "فیلد :attribute اشکال دارد",
  digits: "فیلد :attribute می بایست شامل :digits رقم باشد",
  digits_between: ":attribute باید بین :min و :max رقم باشد.",
  different: "فیلد :attribute می بایست مقداری غیر از :different داشته باشد",
  in: "فیلد :attribute انتخاب شده صحیح نمی باشد",
  integer: "فیلد :attribute می بایست عددی باشد",
  hex: "فیلد :attribute باید در فرمت مبنای ۱۶ باشد",
  min: {
    numeric: "فیلد :attribute می بایست از :min بزرگتر باشد",
    string: "فیلد :attribute بایستی حداقل :min کاراکتر طول داشته باشد",
  },
  max: {
    numeric: "فیلد :attribute می بایست از :max کوچکتر باشد",
    string: "فیلد :attribute نباید بیشتر از :max کاراکتر طول داشته باشد",
  },
  not_in: "فیلد :attribute انتخاب شده صحیح نمی باشد",
  numeric: "فیلد :attribute می بایست عددی باشد",
  present: "The :attribute field must be present (but can be empty).",
  required: "فیلد :attribute الزامی است",
  required_if: "در صورت دادن :value به :other تکمیل فیلد :attribute الزامی است",
  same: "فیلد :attribute می بایست با فیلد :same یکی باشد",
  size: {
    numeric: "فیلد :attribute می بایست :size باشد",
    string: "فیلد :attribute می بایست :size کاراکتر طول داشته باشد",
  },
  string: "فیلد :attribute می بایست متنی باشد",
  url: "آدرس فیلد :attribute صحیح نمی باشد",
  regex: "فرمت آدرس :attribute صحیح نمی باشد",
  attributes: {},
};

},{}]},{},[]);
