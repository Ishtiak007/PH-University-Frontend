import { useGetAllOfferedCoursesQuery } from "../../redux/features/student/studentCourseManagement.api";

const OfferedCourse = () => {
  const { data } = useGetAllOfferedCoursesQuery(undefined);
  console.log(data);
  return <div>Offered Course component</div>;
};

export default OfferedCourse;
