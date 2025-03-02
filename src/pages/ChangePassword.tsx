import { Button, Row } from "antd";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ChangePassword = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput
          type="text"
          name="oldPassword"
          label="Old Password: "
        ></PHInput>
        <PHInput
          type="text"
          name="newPassword"
          label="New Password: "
        ></PHInput>
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default ChangePassword;
