"use client";
import { createDoctor } from "@/services/doctors/create-doctor";
import { Button, Checkbox, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

//  "fullName": "Dr. Mezba Doctor",
//             "email": "doctor100@doctor.com",
//             "phoneNumber": "901241242343245678",
//             "role": "doctor",
//             "qualification": "MBBS",
//             "specializationId": "6d845ec8-a72e-4845-b8aa-465bd71063ab",
//             "password": "123",
//             "isPasswordReset": false

type FieldType = {
  fullName: string;
  email?: string;
  phoneNumber?: string;
  role?: string;
  qualification?: string;
  specializationId?: string;
  password?: string;
  isPaswordReset?: boolean;
};

const CreateDoctorForm: React.FC = () => {
  //   const router = useRouter();
  const onFinish = async (values: any) => {
    
    console.log(values, "values");
    await createDoctor({
      ...values,
      isPasswordReset: false,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: "Please input your Full Name!" }]}
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Phone Number"
        name="phoneNumber"
        rules={[{ required: true, message: "Please input your Phone Number!" }]}
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Role"
        name="role"
        rules={[{ required: true, message: "Please input your Role!" }]}
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Qualification"
        name="qualification"
        rules={[
          { required: true, message: "Please input your Qualification!" },
        ]}
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Specialization Id"
        name="specializationId"
        rules={[
          { required: true, message: "Please input your Specialization Id!" },
        ]}
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item<FieldType>
        label="Is Password Reset"
        rules={[
          { required: true, message: "Please input your Is Password Reset!" },
        ]}
      >
        <Checkbox>Password Reset</Checkbox>
      </Form.Item> */}

      <Form.Item<FieldType>
        label="Is Password Reset"
        valuePropName="checked"
        rules={[
          { required: true, message: "Please input your Is Password Reset!" },
        ]}
      >
        <Checkbox>Password Reset</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateDoctorForm;
