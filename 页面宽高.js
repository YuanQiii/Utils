function getScrollSize(){
  // window.innerHeight + window.pageYOffset
  if(document.body.scrollHeight){
    return {
      //常规：document.body.scrollHeight/scrollWidth
      width: document.body.scrollWidth,
      height: document.body.scrollHeight
    }
  }else {
    return {
      //document.documentElement.scrollHeight/scrollWidth
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    }
  }
}