import React from "react";
import { Button, Divider, Form, Input, message } from "antd";
import Link from "antd/es/typography/Link";
import { RegisterUser } from "../../apicalls/users";

function Register() {
  const onFinish = async(values) => {

    try {
   const response = await RegisterUser(values);
   if (response.success) {
      message.success(response.message);
    }
    else {
   throw new Error(response.message);
    } 
  }  
    catch (error) {
      message.error(error.message);
    }

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
            Rebuy - <span className="text-gray-400">Register</span>
          </h1>
          <Divider />
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Name" name="name" rules={rules}>
              <input placeholder="Name" />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={rules}>
              <input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={rules}>
              <input type="password" placeholder="Password" />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
            <div className="mt-5 text-center">
              <span className="text-gray-500">
                Already have an account?{" "}
                <Link href="/login" className="text-primary">
                  Login
                </Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Register;
