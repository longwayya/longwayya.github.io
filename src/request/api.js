import service from "./http"


export function login(data) {
  return service({
    url: '/login',
    method: 'post',
    data
  })
}



export function getarticleslist() {
  return service({
    url: '/articles/list',
    method: 'get'
  })
}