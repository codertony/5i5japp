/**
 * Created by user on 2016/12/2.
 */
import houseList from './../pages/xiangyu/houseList'
import houseDetail from './../pages/xiangyu/houseDetail'
import costManagement from './../pages/xiangyu/costManagement'
import costManagementNewCost from './../pages/xiangyu/costManagementNewCost'
import reformList from './../pages/xiangyu/reformList'
import reformListNewLi from './../pages/xiangyu/reformListNewLi'
import confirmGoods from './../pages/xiangyu/confirmGoods'
import hostNodeDetail from './../pages/xiangyu/hostNodeDetail'
import hostNodeDetail_delayList from './../pages/xiangyu/hostNodeDetail_delayList'
import childNodeDetail from './../pages/xiangyu/childNodeDetail'




var hash = '/'

module.exports = [
  { path : hash + 'houseList' ,  component: houseList},
  { path : hash + 'houseDetail' ,  component: houseDetail},
  { path : hash + 'costManagement' ,  component: costManagement},
  { path : hash + 'costManagementNewCost' ,  component: costManagementNewCost},
  { path : hash + 'reformList' ,  component: reformList},
  { path : hash + 'reformListNewLi' ,  component: reformListNewLi},
  { path : hash + 'confirmGoods' ,  component: confirmGoods},
  { path : hash + 'hostNodeDetail' ,  component: hostNodeDetail},
  { path : hash + 'hostNodeDetail_delayList' ,  component: hostNodeDetail_delayList},
  { path : hash + 'childNodeDetail' ,  component: childNodeDetail},
]