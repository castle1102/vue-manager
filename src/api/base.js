/**
 * 接口路径配置：
 * 一般文件目录：base.js  index.js 
 * 但是公司不一定
 *      config
 *          login  index.js config.js 
 *       index.js 
 *       xxxx.js 
 */

const base ={
    host:'http://localhost:8989',//基础域名
    goodsList:'/api/projectList', //商品列表
    search:'/api/search',//商品搜索
    selectCategory:'/api/backend/itemCategory/selectItemCategoryByParentId',//类目选择
    uploadUrl:'/api/upload',//图片上传 post请求
    addGoods:'/api/backend/item/insertTbItem',//添加商品
    deleteGoods:'/api/backend/item/deleteItemById',//删除商品
    updateGoods:'/api/backend/item/updateTbItem',//编辑商品
    login:'/api/login',//登录接口
    params:'/api/backend/itemParam/selectItemParamAll',//规格参数列表
    statistical:'/api/statistical',//统计数据
    sellTotal:"/api/sellTotal",//统计数据
    orderList:"/api/order-list",//订单列表
    insertItemParam:"/api/backend/itemParam/insertItemParam",//规格参数配置-添加
    categoryData:"/api/category/data",//规格参数配置
}

export default base;
