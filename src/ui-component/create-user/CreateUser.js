import React from 'react'
import { useDispatch } from 'react-redux'
import { Input, Space, Button, Form } from 'antd'
import { CreateNewUser } from "../../redux/action/UserAction"

const CreateUser = () => {

    const dispatch = useDispatch()

    const onFinish = (values) => {
        values.maNhom = "GP01"
        console.log('Success:', values);
        dispatch(CreateNewUser(values))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div style={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Space direction="vertical">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="taiKhoan"
                        name="taiKhoan"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your taiKhoan!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="matKhau"
                        name="matKhau"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your matKhau!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="soDt"
                        name="soDt"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your soDt!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="maLoaiNguoiDung"
                        name="maLoaiNguoiDung"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your maLoaiNguoiDung!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="hoTen"
                        name="hoTen"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your hoTen!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="maNhom"
                        name="maNhom" value="GP01"
                    >
                        <Input placeholder="GP01" value="GP01" disabled={true} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Space>
        </div>
    )
}

export default CreateUser