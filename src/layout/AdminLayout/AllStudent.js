import axios from "axios"
import { useEffect, useState } from "react"
import {
    Button,
    Card,
    DatePicker,
    Descriptions,
    Form,
    Image,
    Input,
    Checkbox,
    Radio,
    Select,
    Space,
    Switch,
    Tooltip,
    Cascader,
    InputNumber,
    AutoComplete,
    Row,
    Col,
    Upload,
} from "antd"
import Sider from "antd/es/layout/Sider"
import { Content } from "antd/es/layout/layout"
import { LockOutlined, UserOutlined, UploadOutlined } from "@ant-design/icons"

import httpTest from "../../utils/httpTest"
import { useForm } from "antd/es/form/Form"

const { Option } = Select
const residences = [
    {
        value: "zhejiang",
        label: "Zhejiang",
        children: [
            {
                value: "hangzhou",
                label: "Hangzhou",
                children: [
                    {
                        value: "xihu",
                        label: "West Lake",
                    },
                ],
            },
        ],
    },
    {
        value: "jiangsu",
        label: "Jiangsu",
        children: [
            {
                value: "nanjing",
                label: "Nanjing",
                children: [
                    {
                        value: "zhonghuamen",
                        label: "Zhong Hua Men",
                    },
                ],
            },
        ],
    },
]
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
}

function AllStudent() {
    const [selectedFile, setSelectedFile] = useState(null)
    const [form] = useForm()
    useEffect(() => {
        const fetchApi = async () => {
            const res = await httpTest.get("/student/all")
            console.log("student", res.data)
            const res2 = await httpTest.get("/class/all")
            console.log("class", res2.data)
            const res3 = await httpTest.get("/school/all")
            console.log("school", res3.data)
        }
        fetchApi()
    })

    const handelClick = async () => {
        const formData = new FormData()
        formData.append("img", selectedFile)
        formData.append("classId", 1)
        formData.append("schoolId", 1)
        formData.append("name", "aaaa")
        formData.append("birthday", "28-01-1999")
        formData.append("adrress", "GL")
        formData.append("email", "dkajhsgdj")
        formData.append("phone", "0987655341")
        // private Long classId;
        // private Long schoolId;
        // private String name;
        // private String birthday;
        // private MultipartFile img;
        // private String adrress;
        // private String email;
        // private String phone;
        // private String status;

        try {
            const response = await axios.post("http://localhost:8084/up", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })

            const data = await response.data
            console.log(data)
        } catch (error) {
            console.error("Error uploading file:", error)
            alert(error.response.data)
        }
    }

    const handelFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    }
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    )
    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    )

    return (
        <div>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                initialValues={{
                    residence: ["zhejiang", "hangzhou", "xihu"],
                    prefix: "86",
                }}
                style={{
                    maxWidth: 600,
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!",
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve()
                                }
                                return Promise.reject(new Error("The new password that you entered do not match!"))
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label="Nickname"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: "Please input your nickname!",
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: "Please input your phone number!",
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="donation"
                    label="Donation"
                    rules={[
                        {
                            required: true,
                            message: "Please input donation amount!",
                        },
                    ]}
                >
                    <InputNumber
                        addonAfter={suffixSelector}
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: "Please select gender!",
                        },
                    ]}
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="img" label="file">
                    <input
                        class="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50  outline-none   "
                        id="file_input"
                        type="file"
                    />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error("Should accept agreement"))),
                        },
                    ]}
                ></Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default AllStudent
