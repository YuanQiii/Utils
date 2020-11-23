function getViewportSize(){
  if(window.innerHeight){
    return {
        // 常规： window.innerHeight/innerWidth
      width: window.innerWidth,
      height: window.innerHeight
    }
  }else {
      // IE8/IE9以下
      // 标准：document.documentElement.clientHeight/clientWidth
      // 怪异：document.body.clientHeight/clientWidth

      //判断是否为怪异模式
    if(document.compatMode === 'BackCompat'){
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
    }else {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    }
  }
}