const updateStudentMutably = (student) => {
  student.enrolled = !student.enrolled;
  return student;
};

const student = {
  id: 1,
  firstName: 'Ahmad',
  lastName: 'Salim',
  enrolled: false,
};

/** Add your code below */
