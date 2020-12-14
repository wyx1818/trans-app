import React from 'react';
import { useFormik } from 'formik';

interface FormValues {
  server: string;
  port: number;
  https: boolean;
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const initialValues: FormValues = {
    server: '',
    port: 8080,
    https: false,
    username: '',
    password: '',
  };

  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>登陆</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="server">服务器地址</label>
          <input
            id="server"
            name="server"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.server}
            placeholder="example.com"
          />
        </div>

        <div>
          <label htmlFor="username">用户名</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </div>

        <div>
          <label htmlFor="password">密码</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>

        <button type="submit">登陆</button>
      </form>
    </div>
  );
};

export default Login;
