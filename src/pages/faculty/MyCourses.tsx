import { useGetAllFacultiesQuery } from "../../redux/features/admin/userManagement.api";

const MyCourses = () => {
  const { data } = useGetAllFacultiesQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>My courses</h1>
    </div>
  );
};

export default MyCourses;
