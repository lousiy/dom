window.dom = {
    find(selector,scope){
    return (scope || document),querySelectorAll(selector)
    }
}
style(node, name1, value)
{
    if(arguments.length===3){
        node.style[name1] = value
    }else if(arguments.length===2){
        if(typeof name1 ==='string'){
            return node.style[name]
        }else if (name1 instanceof Object){
            const object = name1
            for(let key in object){
                node.style[key] = object[key]
            }
        }
    }
}
each(nodeList,fn)
{
    for(let i=0;i<nodeList.length;i++){
        fn.call(null, nodeList[i])
    }
}