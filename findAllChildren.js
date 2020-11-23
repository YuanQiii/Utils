Element.prototype.findAllChildren = function () {
  let result = []
  //将过滤出的元素节点伪数组变为数组
  let children = Array.from(filterChildren(this))
  mapChildren(children)
  return result
}

function filterChildren(ele) {
  // 过滤出元素节点
  let children = ele.childNodes
  let elementChildren = []
  for (let i = 0; i < children.length; i++) {
    if (children[i].nodeType === 1) {
      elementChildren.push(children[i])
    }
  }
  return elementChildren
}

function mapChildren(node) {
  //遍历每个元素节点
  node.forEach(ele => {
    //判断每个元素节点的子元素节点长度是否有子元素节点
    if (filterChildren(ele).length) {
      result.push(ele.nodeName.toLowerCase())
      //递归遍历
      mapChildren(Array.from(filterChildren(ele)))
    } else {
      result.push(ele.nodeName.toLowerCase())
    }
  })
}