import AJAX from '@/utils/request'


const ajaxInstance = new AJAX({
  baseUrl:'',
  reqSuccessKey:'',
  reqSuccessValue:'code',
  msgKey:'message'
})

export function find(params){
  return ajaxInstance.post(this.baseUrl,params)
}