import React from 'react'
import { Table, Tag, Space } from 'antd';

const GetListUser = () => {

    const [data, setData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        let myHeaders = new Headers();
        myHeaders.append("TokenCyberSoft", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E");

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01", requestOptions)
            .then(response => response.text())
            .then(result => {
                let listUser = JSON.parse(result)
                console.log("listUser", listUser.content.length);
                setData(listUser.content)
                setIsLoading(false)
            })
            .catch(error => console.log('error', error));
    }, [])

    const columns = [
        {
            title: 'hoTen',
            dataIndex: 'hoTen',
            key: 'hoTen',
            render: text => <a>{text}</a>,
        },
        {
            title: 'maLoaiNguoiDung',
            dataIndex: 'maLoaiNguoiDung',
            key: 'maLoaiNguoiDung',
            render: text => text == "QuanTri" ? <Tag color="volcano">{text}</Tag> : <Tag color="geekblue">{text}</Tag>,
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'matKhau',
            dataIndex: 'matKhau',
            key: 'matKhau',
        },
        {
            title: 'soDt',
            dataIndex: 'soDt',
            key: 'soDt',
        },
        {
            title: 'taiKhoan',
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
        }
    ];

    return (
        <div style={{ padding: '20px' }}><Table loading={isLoading} columns={columns} dataSource={data} /></div >
    )
}

export default GetListUser