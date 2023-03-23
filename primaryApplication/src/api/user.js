import request from './request'

setTimeout(()=>{
    request({
        url: '/user/login',
        method: 'get',
        params: {
            username: 'admin'
        }
    }).then(res => {
        console.log(res)
    })
},1000*3)