module.exports = {
  attributes: {
    username: "اسم المستخدم",
    password: "كلمة المرور",
    email: "البريد الالكتروني",
    website: "الموقع الالكتروني",
    firstname: "الاسم الاول",
    lastname: "الاسم الاخير",
    subject: "الموضوع",
    city: "المدينة",
    region: "المنطقة",
    country: "الدولة",
    street: "الشارع",
    zipcode: "الرمز البريدي",
    phone: "رقم الهاتف",
    mobile: "رقم الجوال",
  },
  accepted: "الصفة :attribute يجب أن تكون مقبولة",
  after: "الصفة :attribute يجب أن تكون بعد الصفة :after.",
  after_or_equal: "الصفة :attribute يجب أن تكون مساوية أو بعد الصفة :after_or_equal.",
  alpha: "حقل الصفة  :attribute يجب أن تحتوي على أحرف فقط",
  alpha_dash: "حقل الصفة :attribute مسموح بأن يحتوي على حروف و أرقام و شرطة و شرطة منخفضة",
  alpha_num: "حقل الصفة :attribute يجب أن يحتوي على أحرف و أرقام",
  alpha_numeric: "حقل الصفة :attribute يجب أن يحتوي على أحرف و أرقام",
  array: "The :attribute must be an array",
  before: "الصفة :attribute يجب أن تكون قبل :before.",
  before_or_equal: "الصفة :attribute يجب أن تكون مساوية أو قبل الصفة :before_or_equal.",
  begins_with: "The :attribute must begin with :value.",
  between: "حقل الصفة :attribute يجب أن يكون بين :min و :max.",
  confirmed: "تأكيد الصفة :attribute غير متطابق.",
  email: "الصفة :attribute صيغتها غير صحيحة",
  date: "الصفة :attribute صيغتها ليست تاريخ صحيح",
  def: "الصفة :attribute تحتوي على أخطاء",
  digits: "الصفة :attribute يجب أن تكون :digits أرقام.",
  digits_between: "يجب أن يحتوي :attribute بين :min و :max رقمًا/أرقام .",
  different: "الصفة :attribute و الصفة :different يجب أن تكونا مختلفتين",
  ends_with: "The :attribute must end with :ends_with",
  exclude_if: "The :attribute will be excluded if :exclude_if.",
  exclude_unless: "The :attribute will be excluded unless :exclude_unless.",
  filled: "The :attribute must be filled if supplied.",
  greater_than: {
    numeric: "The :attribute must be greater than :greater_than.",
    file: "The :attribute must be greater than :greater_than kilobytes.",
    string: "The :attribute must be greater than :greater_than.",
    array: "The :attribute must have more than :greater_than items.",
  },
  gt: {
    numeric: "The :attribute must be greater than :gt.",
    file: "The :attribute must be greater than :gt kilobytes.",
    string: "The :attribute must be greater than :gt.",
    array: "The :attribute must have more than :gt items.",
  },
  greater_than_or_equal: {
    numeric: "The :attribute must be greater than or equal :greater_than_or_equal.",
    file: "The :attribute must be greater than or equal :greater_than_or_equal kilobytes.",
    string: "The :attribute must be greater than or equal :greater_than_or_equal.",
    array: "The :attribute must have :greater_than_or_equal items or more.",
  },
  gte: {
    numeric: "The :attribute must be greater than or equal :gte.",
    file: "The :attribute must be greater than or equal :gte kilobytes.",
    string: "The :attribute must be greater than or equal :gte.",
    array: "The :attribute must have :gte items or more.",
  },
  in: "الصفة :attribute المختارة، غير صحيحة.",
  integer: "الصفة :attribute يجب أن تكون عدد صحيح",
  in_array: "The :attribute must be in :in_array.",
  hex: "حقل الصفة :attribute يجب أن يحتوي على صيغة هكسيديسمل",
  json: "The :attribute does not contain valid json.",
  less_than: {
    numeric: "The :attribute must be less than :less_than.",
    file: "The :attribute must be less than :less_than kilobytes.",
    string: "The :attribute must be less than :less_than.",
    array: "The :attribute must have less than :less_than items.",
  },
  lt: {
    numeric: "The :attribute must be less than :lt.",
    file: "The :attribute must be less than :lt kilobytes.",
    string: "The :attribute must be less than :lt.",
    array: "The :attribute must have less than :lt items.",
  },
  less_than_or_equal: {
    numeric: "The :attribute must be less than or equal :less_than_or_equal.",
    file: "The :attribute must be less than or equal :less_than_or_equal kilobytes.",
    string: "The :attribute must be less than or equal :less_than_or_equal.",
    array: "The :attribute must not have more than :less_than_or_equal items.",
  },
  lte: {
    numeric: "The :attribute must be less than or equal :lte.",
    file: "The :attribute must be less than or equal :lte kilobytes.",
    string: "The :attribute must be less than or equal :lte characters.",
    array: "The :attribute must not have more than :lte items.",
  },
  min: {
    numeric: "الصفة :attribute يجب أن تكون :min على الأقل",
    string: "الصفة :attribute يجب أن تكون :min حرف على الأقل.",
  },
  max: {
    numeric: "الصفة :attribute لا يمكن أن تكون أكبر من  :max.",
    string: "الصفة :attribute يجب أن لا تكون أكثر من :max حرف.",
  },
  multiple_of: "The :attribute is not multiple of :multiple_of",
  not_in: "الصفة :attribute المختارة غير صحيحة.",
  not_regex: "The :attribute format is must not match regex.",
  numeric: "الصفة :attribute يجب أن تكون رقما.",
  nullable: "the :attribute is nullable.",
  object: "The :attribute must be an object",
  present: "حقل الصفة :attribute يجب أن يكون معرفا ، يمكن أن يكون فارغا.",
  required: "حقل الصفة :attribute مطلوب.",
  required_if: "حقل الصفة :attribute مطلوب حين تكون قيمة الحقل :other تساوي :value.",
  required_unless: "حقل الصفة :attribute مطلوب حين تكون قيم الحقل :other لا تساوي :value.",
  required_with: "حقل الصفة :attribute مطلوب حين يكون الحقا :field غير فارغ.",
  required_with_all: "حقل الصفة :attribute مطلوب حين تكون الحقول :fields غير فارغة.",
  required_without: "حقل الصفة :attribute مطلوب حين يكون الحقل :field فارغا.",
  required_without_all: "حقل الصفة :attribute مطلوب حين تكون الحقول :fields فارغة.",
  same: "حقل الصفة :attribute و حقل الصفة :same يجب أن يتطابقا.",
  size: {
    numeric: "الصفة :attribute يجب أن تكون :size.",
    string: "الصفة :attribute يجب أن تكون :size حرفا.",
  },
  starts_with: "The :attribute must start with :value.",
  string: "الصفة :attribute يجب أن تكون نص.",
  url: "الصفة :attribute صياغتها غير صحيحة.",
  uuid: "The :attribute must be a valid v1 or v4 uuid",
  regex: "الصفة :attribute صياغتها غير صحيحة.",
};
