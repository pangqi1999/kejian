## 选择器
选中html元素
- doucument.getElmentsByClassName
- ...

## 操作属性
元素对象.属性

## 修改中内容
元素对象.innerHTML = '新内容'

## 设置css样式
行内样式
    元素对像.style.css属性 = '值'
添加class 类名
    元素对象.className  = 'class类名重新赋值'

## 获取html样式兼容
~~~js
    function getStyle(el){
        //el 元素对象
            if(el.curentStyle){ //ie
                return el.curentStyle
            }else{//其他
                return getComputedStyle(el,null)
            }
        }
~~~