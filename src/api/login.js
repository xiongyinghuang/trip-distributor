import AJAX from '@/utils/request'


const ajaxInstance = new AJAX({
  baseUrl:'',
  reqSuccessKey:'',
  reqSuccessValue:'code',
  msgKey:'message'
})

export function login(username,password){
  return ajaxInstance.post(this.baseUrl,{username,password})
}

export function getInfo(token){
  return ajaxInstance.post(this.baseUrl,{token})
}

export function logout(){
  return ajaxInstance.get(this.baseUrl)
}
