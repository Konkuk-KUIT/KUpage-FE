export const isValidStudentId = (studentId: string) => {
  const onlyDigits = /^\d{9}$/;
  return onlyDigits.test(studentId);
};

export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string) => {
  const phoneRegex = /^010-\d{3,4}-\d{4}$/;
  return phoneRegex.test(phone);
};
