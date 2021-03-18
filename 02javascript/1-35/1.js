alert("asdf");
// 声明一个变量
var a;
var b=1;
a = 123;
console.log(a);
// 标识符
// 驼峰命名法，首字母小写，每个单词的开头字母大写，其余字母小写
// unicode编码中的文字都可以做变量名，但是要符合规范
var str = "hello";
// 单引号双引号都可，但不能嵌套
typeof a;
console.log(typeof a);
// 检查变量类型
Number.MAX_VALUE;
// js中可以表示的数字的最大值，如果超过最大值，返回Infinity，正无穷
a = Infinity;
// 不加引号，类型为Number
a=Number.MIN_VALUE
// 0以上的最小值
var bool = true;
var bool = false;
var a = null;
// 表示空对象
// null的typeof是object
var b;
// 声明一个变量没有定义时就是undefined；

// 强制转换
var a= 123;
a.toString();
b=a.toString();
a=String(a);
// 不影响原变量，将结果返回。 undefined和null无toString方法，但是可以调用String()函数转换
var a= "123";
b=Number(a);
// 字符，或者数字字符混合不能转换=NaN；空值或者全空格=0，布尔真=1，假=0，null=0；undefined=NaN
a="123px";
a=parseInt(a);
// a输出=123，转换字符串中有效的整数内容，但是只能转换开头数字到第一个非数字位
// 可以便捷取整小数
a="123.345px";
a=parseFloat(a);
// 取出有效的小数123.456，如果是123.456.678，则等于123.456
// 这两个函数如果对非String使用，会先转换成String，因此true会变成“true”


