const studentDummyData = {
  password: "student123",
  student: {
    name: {
      firstName: "Alu",
      middleName: "Binte",
      lastName: "Alim",
    },
    gender: "male",
    dateOfBirth: "1990-01-01",
    email: "alualim@gmail.com",
    contactNo: "01737223970",
    emergencyContactNumber: "01853196899",
    bloogGroup: "A+",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",
    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "01700000003",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "01700000004",
    },
    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "01700000004",
      address: "789 Pine St, Villageton",
    },
    admissionSemester: "67b031b911a107ca05d1d058",
    academicDepartment: "67b030d211a107ca05d1d056",
  },
};

const CreateStudent = () => {
  return (
    <div>
      <h1>This is create student component</h1>
    </div>
  );
};

export default CreateStudent;
