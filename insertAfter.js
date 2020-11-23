Element.prototype.insertAfter = function(newNode, referenceNode){
  
  //过滤出元素节点
  let children = filterChildren(this)
  //被插入元素节点名称
  let referenceName = referenceNode.nodeName.toLowerCase()
  let nextNode = null
  for(let i=0;i<children.length;i++){
    //判断被插入元素节点是否为最后的元素
    if(children[i].nodeName.toLowerCase() === referenceName){
        if(i+1 < children.length){
          nextNode = children[i+1]
        }
    }
  }

  if(nextNode){
    //有最后的元素节点
    this.insertBefore(newNode, nextNode)
  }else {
    referenceNode.append(newNode)
  }
}

function filterChildren(ele) {
  let children = ele.childNodes
  let elementChildren = []
  for (let i = 0; i < children.length; i++) {
    if (children[i].nodeType === 1) {
      elementChildren.push(children[i])
    }
  }
  return elementChildren
}
