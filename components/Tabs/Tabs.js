Component({
  /**
   * 里面存放的是 要从父组件中接收的数据
   */
  properties: {
    // 要接收的数据的名称
    tabs: {
      // type  要接收的数据的类型 
      type: Array,
      // value  默认值
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /* 
   页面.js 文件中 存放事件回调函数的时候 存放在data同层级下，且必须要存在在 methods中！！！
   */
  methods: {
    hanldeItemTap(e){
      /* 
      1 绑定点击事件  需要在methods中绑定
      2 获取被点击的索引 
      3 获取原数组 
      4 对数组循环
        1 给每一个循环性 选中属性 改为 false
        2 给 当前的索引的项添加激活选中效果
      5 点击事件触发的时候 
        触发父组件中的自定义事件 同时传递数据给  父组件  
        this.triggerEvent("父组件自定义事件的名称",要传递的参数)
       */
      //  2 获取索引
      const {index} = e.currentTarget.dataset;
      // 5 触发父组件中的自定义事件 同时传递数据给  
      this.triggerEvent("itemChange",{index});
    }
  }
})
