

export const LoginUser = (values) => {


    return async (dispatch) => {
        let myHeaders = new Headers();
        myHeaders.append("TokenCyberSoft", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E");
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(values);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap", requestOptions)
            .then(response => response.text())
            .then(result => {
                let accountInfo = JSON.parse(result)
                console.log("JSON.parse(result)", JSON.parse(result))
                if (accountInfo.statusCode === 200) {
                    localStorage.setItem("TAIKHOAN", values.taiKhoan);
                    localStorage.setItem("MATKHAU", values.matKhau);
                    localStorage.setItem("USER_TOKEN", accountInfo.content.accessToken);
                    alert("Thanh cong!")
                } else {
                    alert("Tai khoan hoac mat khau khong hop le!")
                }
            })
            .catch(error => console.log('error', error));
    }
}

export const CreateNewUser = (values) => {
    return async (dispatch) => {
        let myHeaders = new Headers();
        myHeaders.append("TokenCyberSoft", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E");
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("USER_TOKEN")}`);
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(values);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung", requestOptions)
            .then(response => response.text())
            .then(result => {
                let accountInfo = JSON.parse(result)
                if (accountInfo.statusCode === 200) {
                    alert("Thanh cong!")
                } else {
                    alert("Khong thanh cong!")
                }
            }
            )
            .catch(error => {
                let accountInfo = JSON.parse(error)
                console.log('error', accountInfo.message)
                console.log('error', accountInfo.content)

                alert('error', accountInfo.message)
                alert('error', accountInfo.content)
            });
    }
}