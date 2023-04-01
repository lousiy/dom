
window.dom = {
    find : (selector) => {
        return document.querySelectorAll(selector);
    },
    style : (node,name,value) => {
        if(node.nodeType === 1){
            node.style[name] = value;
        }else if(node.nodeType === 3){
            console.log(这个是文本节点);
        }
    },
    each : function (nodeList,n) {
        const list = Array.from(nodeList);
        if(arguments.length === 1){
            for (let i = 0; i < nodeList.length; i++) {
                console.log(list[i]);
            }
        }else if(arguments.length === 2){
            console.log(list[n]);
        }

    }
}