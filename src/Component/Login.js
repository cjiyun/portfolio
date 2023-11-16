const Login = (props) => {
    const { id, pwd, changeId, changePwd } = props;
    return (
        <div className="login">
            <h3 align="center">로그인</h3>
            <table align="center" width="30%">
                <tr>
                    <td width="50%">아이디</td>
                    <td>
                        <input type="text" size="8" value={id} onChange={changeId} />
                    </td>
                </tr>
                <tr>
                    <td>비밀번호</td>
                    <td>
                        <input type="password" size="8" value={pwd} onChange={changePwd} />
                    </td>
                </tr>
            </table>
            {id} {pwd}
        </div>
    );
    };
    
export default Login;