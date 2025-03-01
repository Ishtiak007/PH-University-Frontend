import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { toast } from "sonner";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const SemesterRegistration = () => {
  const { data: academicSemester } = useGetAllSemestersQuery(undefined);
  console.log("Data:", academicSemester);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastID = toast.loading("Creating");

    const name = semesterOptions[Number(data?.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
    // try {
    //   console.log(semesterData);
    //   const res = (await addAcademicSemester(semesterData)) as TResponse;
    //   if (res.error) {
    //     toast.error(res.error.data.message, { id: toastID });
    //   } else {
    //     toast.success("Semester is Created", { id: toastID });
    //   }
    // } catch (err) {
    //   console.log(err);
    //   toast.error("Something Went Wrong", { id: toastID });
    // }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect
            name="startMonth"
            label="Start Month"
            options={monthOptions}
          />
          <PHSelect name="endMonth" label="End Month" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
