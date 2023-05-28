import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/device/paper/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/device/paper',
    method: 'post',
    data: obj
  })
}

export function getObjByDeptId(obj) {
  return request({
    url: '/device/paper/deptId',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/device/paper/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/device/paper/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/device/paper',
    method: 'put',
    data: obj
  })
}
