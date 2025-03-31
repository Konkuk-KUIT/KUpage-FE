export const isValidStudentId = (studentId: string) => {
  const onlyDigits = /^\d{9}$/;
  return onlyDigits.test(studentId);
};

export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string) => {
  const phoneRegex = /^\d{10,11}$/;
  return phoneRegex.test(phone);
};
