import { useGetAllOfferedCoursesQuery } from "../../redux/features/student/studentCourseManagement.api";

const OfferedCourse = () => {
  const { data: offeredCourseData } = useGetAllOfferedCoursesQuery(undefined);
  const singleObject = offeredCourseData?.data?.reduce((acc, item) => {
    console.log(item);
    return acc;
  }, {});
  console.log(singleObject);
  return <div>Offered Course component</div>;
};

export default OfferedCourse;
