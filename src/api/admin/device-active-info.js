import request from '@/utils/request'

// 查询DeviceActiveInfo列表
export function listDeviceActiveInfo(query) {
  return request({
    url: '/api/v1/device',
    method: 'get',
    params: query
  })
}

// 查询DeviceActiveInfo详细
export function getDeviceActiveInfo(id) {
  return request({
    url: '/api/v1/device/' + id,
    method: 'get'
  })
}

// 新增DeviceActiveInfo
export function addDeviceActiveInfo(data) {
  return request({
    url: '/api/v1/device',
    method: 'post',
    data: data
  })
}

// 修改DeviceActiveInfo
export function updateDeviceActiveInfo(data) {
  return request({
    url: '/api/v1/device/' + data.id,
    method: 'put',
    data: data
  })
}

// 删除DeviceActiveInfo
export function delDeviceActiveInfo(data) {
  return request({
    url: '/api/v1/device',
    method: 'delete',
    data: data
  })
}

