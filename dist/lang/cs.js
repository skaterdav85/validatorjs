require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"./lang/cs":[function(require,module,exports){
module.exports = {
  accepted: ":attribute musí být přijat.",
  active_url: ":attribute není platnou URL adresou.",
  after: ":attribute musí být datum po :date.",
  after_or_equal: "The :attribute must be a date after or equal to :date.",
  alpha: ":attribute může obsahovat pouze písmena.",
  alpha_dash: ":attribute může obsahovat pouze písmena, číslice, pomlčky a podtržítka. České znaky (á, é, í, ó, ú, ů, ž, š, č, ř, ď, ť, ň) nejsou podporovány.",
  alpha_num: ":attribute může obsahovat pouze písmena a číslice.",
  alpha_numeric: ":attribute může obsahovat pouze písmena a číslice.",
  attributes: {},
  array: ":attribute musí být pole.",
  before: ":attribute musí být datum před :date.",
  before_or_equal: "The :attribute must be a date before or equal to :date.",
  begins_with: "The :attribute must begin with :value.",
  between: {
    numeric: ":attribute musí být hodnota mezi :min a :max.",
    file: ":attribute musí být větší než :min a menší než :max Kilobytů.",
    string: ":attribute musí být delší než :min a kratší než :max znaků.",
    array: ":attribute musí obsahovat nejméně :min a nesmí obsahovat více než :max prvků.",
  },
  boolean: ":attribute musí být true nebo false",
  confirmed: ":attribute nebylo odsouhlaseno.",
  date: ":attribute musí být platné datum.",
  date_format: ":attribute není platný formát data podle :format.",
  def: "The :attribute attribute has errors.",
  different: ":attribute a :other se musí lišit.",
  digits: ":attribute musí být :digits pozic dlouhé.",
  digits_between: ":attribute musí být dlouhé nejméně :min a nejvíce :max pozic.",
  dimensions: ":attribute má neplatné rozměry.",
  distinct: ":attribute má duplicitní hodnotu.",
  email: ":attribute není platný formát.",
  ends_with: "The :attribute must end with :ends_with",
  exclude_if: "The :attribute will be excluded if :exclude_if.",
  exclude_unless: "The :attribute will be excluded unless :exclude_unless.",
  exists: "Zvolená hodnota pro :attribute není platná.",
  file: ":attribute musí být soubor.",
  filled: ":attribute musí být vyplněno.",
  greater_than: {
    numeric: "The :attribute must be greater than :greater_than.",
    file: "The :attribute must be greater than :greater_than kilobytes.",
    string: "The :attribute must be greater than :greater_than.",
    array: "The :attribute must have more than :greater_than items.",
  },
  gt: {
    numeric: "The :attribute must be greater than :value.",
    file: "The :attribute must be greater than :value kilobytes.",
    string: "The :attribute must be greater than :value characters.",
    array: "The :attribute must have more than :value items.",
  },
  greater_than_or_equal: {
    numeric: "The :attribute must be greater than or equal :greater_than_or_equal.",
    file: "The :attribute must be greater than or equal :greater_than_or_equal kilobytes.",
    string: "The :attribute must be greater than or equal :greater_than_or_equal.",
    array: "The :attribute must have :greater_than_or_equal items or more.",
  },
  gte: {
    numeric: "The :attribute must be greater than or equal :value.",
    file: "The :attribute must be greater than or equal :value kilobytes.",
    string: "The :attribute must be greater than or equal :value characters.",
    array: "The :attribute must have :value items or more.",
  },
  hex: "The :attribute field should have hexadecimal format",
  image: ":attribute musí být obrázek.",
  in: "Zvolená hodnota pro :attribute je neplatná.",
  in_array: ":attribute není obsažen v :other.",
  integer: ":attribute musí být celé číslo.",
  ip: ":attribute musí být platnou IP adresou.",
  ipv4: "The :attribute must be a valid IPv4 address.",
  ipv6: "The :attribute must be a valid IPv6 address.",
  json: ":attribute musí být platný JSON řetězec.",
  less_than: {
    numeric: "The :attribute must be less than :less_than.",
    file: "The :attribute must be less than :less_than kilobytes.",
    string: "The :attribute must be less than :less_than.",
    array: "The :attribute must have less than :less_than items.",
  },
  lt: {
    numeric: "The :attribute must be less than :value.",
    file: "The :attribute must be less than :value kilobytes.",
    string: "The :attribute must be less than :value characters.",
    array: "The :attribute must have less than :value items.",
  },
  less_than_or_equal: {
    numeric: "The :attribute must be less than or equal :less_than_or_equal.",
    file: "The :attribute must be less than or equal :less_than_or_equal kilobytes.",
    string: "The :attribute must be less than or equal :less_than_or_equal.",
    array: "The :attribute must not have more than :less_than_or_equal items.",
  },
  lte: {
    numeric: "The :attribute must be less than or equal :value.",
    file: "The :attribute must be less than or equal :value kilobytes.",
    string: "The :attribute must be less than or equal :value characters.",
    array: "The :attribute must not have more than :value items.",
  },
  max: {
    numeric: ":attribute musí být nižší než :max.",
    file: ":attribute musí být menší než :max Kilobytů.",
    string: ":attribute musí být kratší než :max znaků.",
    array: ":attribute nesmí obsahovat více než :max prvků.",
  },
  mimes: ":attribute musí být jeden z následujících datových typů :values.",
  mimetypes: ":attribute musí být jeden z následujících datových typů :values.",
  min: {
    numeric: ":attribute musí být větší než :min.",
    file: ":attribute musí být větší než :min Kilobytů.",
    string: ":attribute musí být delší než :min znaků.",
    array: ":attribute musí obsahovat více než :min prvků.",
  },
  multiple_of: "The :attribute is not multiple of :multiple_of",
  not_in: "Zvolená hodnota pro :attribute je neplatná.",
  not_regex: "The :attribute format is invalid.",
  nullable: "the :attribute is nullable.",
  numeric: ":attribute musí být číslo.",
  object: ":attribute musí být pole.",
  present: ":attribute musí být vyplněno.",
  regex: ":attribute nemá správný formát.",
  required: ":attribute musí být vyplněno.",
  required_if: ":attribute musí být vyplněno pokud :other je :value.",
  required_unless: ":attribute musí být vyplněno dokud :other je v :value.",
  required_with: ":attribute musí být vyplněno pokud :field je vyplněno.",
  required_with_all: ":attribute musí být vyplněno pokud :fields je zvoleno.",
  required_without: ":attribute musí být vyplněno pokud :field není vyplněno.",
  required_without_all: ":attribute musí být vyplněno pokud není žádné z :fields zvoleno.",
  same: ":attribute a :other se musí shodovat.",
  size: {
    numeric: ":attribute musí být přesně :size.",
    file: ":attribute musí mít přesně :size Kilobytů.",
    string: ":attribute musí být přesně :size znaků dlouhý.",
    array: ":attribute musí obsahovat právě :size prvků.",
  },
  starts_with: "The :attribute must start with :value.",
  string: ":attribute musí být řetězec znaků.",
  timezone: ":attribute musí být platná časová zóna.",
  unique: ":attribute musí být unikátní.",
  uploaded: "Nahrávání :attribute se nezdařilo.",
  url: "Formát :attribute je neplatný.",
  uuid: "The :attribute must be a valid v1 or v4 uuid",
};

},{}]},{},[]);
