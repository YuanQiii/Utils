function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      //常规window.pageXOffset/pageYOffset
      left: window.pageXOffset,
      top: window.pageYOffset
    }
  } else {
    return {
      //  IE9/IE8以下：
      //  document.documentElement.scrollLeft/scrollTop
      //  document.body.scrollLeft/scrollTop
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      right: document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}