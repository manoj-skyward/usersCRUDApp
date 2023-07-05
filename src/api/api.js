import axios from 'axios';
const ACCESS_TOKEN =
  '54d88d9b49bf959e0f137aad2c6834249d39e3ec41692c9b6daaf252c2487efa';

const BASE_URL = 'https://gorest.co.in/public/v2/users';
const api = axios.create({baseURL: BASE_URL});
axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export default api;
