import React from "react";
import { Button, Divider, Form, Input } from "antd";
import Link from "antd/es/typography/Link";

function Login() {
  const onFinish = (values) => {
    console.log("succes", values);
  };
  const rules = [
    {
      required: true,
      message: "required",
    },
  ];
  return (
    <>
      <div className="h-screen bg-primary flex justify-center items-center ">
        <div className="bg-white p-5 rounded w-[450px]">
          <h1 className="text-primary text-2xl">
            Rebuy - <span className="text-gray-400">Login</span>
          </h1>
          <Divider />
          <Form layout="vertical" onFinish={onFinish}>
        
            <Form.Item label="Email" name="email" rules={rules}>
              <input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={rules}>
              <input type="password" placeholder="Password" />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
            <div className="mt-5 text-center">
              <span className="text-gray-500">
                Don't have an account?{" "}
                <Link href="/register" className="text-primary">
                  Register
                </Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
