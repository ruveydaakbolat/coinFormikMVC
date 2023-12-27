import * as yup from "yup";

const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^*?&]).{5,}$";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen geçerli bir email formatı giriniz")
    .required("Email alanı zorunludur"),

  age: yup
    .number()
    .min(18, "Yaşınız 18'den büyük olmalı")
    .max(100, "Yaşınız 100'den büyük olamaz")
    .integer("Lütfen tam sayı giriniz")
    .required("Yaş alanı zorunludur"),

  password: yup
    .string()
    .min(5, "Şifre en az 5 karakterden oluşmalıdır")
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Şifre alanı zorunludur"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Onay şifreniz doğru değil")
    .required("Şifre onay alanı zorunludur")
});
