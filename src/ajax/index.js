import axios from 'axios';

const shijian = axios.create({
    timeout:5000,
    baseURL:'https://www.chengzier.cn:8000'
})

// $.get('/api/navigation')

export default shijian 