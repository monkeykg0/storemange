//const uuid='cba63bd3-7bf8-48f6-ac1d-62a16f85d953'
var uuid=location.href.split("uuid=")[1].slice(0,36);
const BASEURL='http://192.168.0.133:9001'
//const BASEURL='http://192.168.0.133:8099'
const URL={
    HouseMangeIndex:BASEURL+'/sysUser/storeManage',//门店管理首页
    setStoreInvisible:BASEURL+'/sysUser/setStoreInvisible',//设置佣金或者联系人是否可见
    queryStoreUserCount:BASEURL+'/sysUser/queryStoreUserCount',//门店经纪人列表
    queryStoreOrder:BASEURL+'/sysUser/queryStoreOrder',//门店订单列表
    orderdetail:BASEURL+'/order/detail'//订单详情
}