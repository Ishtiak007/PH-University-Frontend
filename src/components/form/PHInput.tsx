import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInpurProps = {
  type: string;
  name: string;
  label?: string;
  disabled: boolean;
};

const PHInput = ({ type, name, label, disabled }: TInpurProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
              disabled={disabled}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
