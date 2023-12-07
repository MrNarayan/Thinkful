const updateStudentImmutably = (student) => {
  return {
    ...student,
    enrolled: !student.enrolled,
  };
};

const student = {
  id: 1,
  firstName: 'Ahmad',
  lastName: 'Salim',
  enrolled: false,
};

/** Add your code below */
