import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

import { toast } from "sonner";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { TResponse } from "../../../types";
import { semesterStatusOptions } from "../../../constants/semester";
import {
  useAddRegisteredSemesterMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement.api";

const CreateCourse = () => {
  const [addSemester] = useAddRegisteredSemesterMutation();
  const { data: academicSemester } = useGetAllSemestersQuery([
    { name: "sort", value: "year" },
  ]);

  const { data: courses } = useGetAllCoursesQuery(undefined);

  const preRequisiteCoursesOptions = courses?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };

    console.log(semesterData);

    try {
      const res = (await addSemester(semesterData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="title" label="Title" />
          <PHInput type="text" name="prefix" label="Prefix" />
          <PHInput type="text" name="code" label="Code" />
          <PHInput type="text" name="credits" label="Credits" />
          <PHSelect
            mode="multiple"
            options={preRequisiteCoursesOptions}
            name="preRequisiteCourses"
            label="preRequisiteCourses"
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
