import axios from 'axios';

const root = 'https://nas.zuiyu1818.cn/8085';

const LOGIN_URL = `${root}/api/v2/auth/login`;

export interface LoginParams {
  username: string;
  password: string;
}

export async function login(loginParams: LoginParams) {
  return await axios.post(LOGIN_URL, loginParams);
}
