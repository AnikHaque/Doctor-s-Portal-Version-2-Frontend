"use client";
import { Button, Col, Form, Input, Row } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

type FieldType = {
  searchTerm: string;
};

const SearchFilter: React.FC = () => {
  const router = useRouter();
  const onFinish = async (values: any) => {
    router.push(`/admins/doctors?searchTerm=${values.searchTerm}`);
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
      <Row gutter={16}>
        <Col span={20} className="">
          <Form.Item<FieldType>
            // label="Search"

            name="searchTerm"
            rules={[
              { required: true, message: "Please input your search term!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>
        </Col>
        <Col span={4} className="">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchFilter;
