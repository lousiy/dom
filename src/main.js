console.log('获取对应的元素\n')
const div = dom.find('#test>.red')[0];
console.log(div);

console.log('获取多个 div.red 元素\n')
const divList = dom.find('.red');
console.log(divList);

console.log('遍历 divList 里的所有元素\n')
dom.each(divList);
console.log('获取divList 里的指定元素\n')
dom.each(divList,2);


console.log('设置 div.style\n')
const div2 = document.querySelector('.yellow');
dom.style(div2,'font-size','50px');
dom.style(div2,'color','red');
dom.style(div2,'border','1px solid green');