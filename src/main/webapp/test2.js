/**
 * Project name(项目名称)：JS_Math
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/6
 * Time(创建时间)： 21:41
 * Version(版本): 1.0
 * Description(描述)：
 * Math 对象中的方法
 * 方法        描述
 * abs(x)        返回 x 的绝对值
 * acos(x)    返回 x 的反余弦值
 * acosh(x)    返回 x 的反双曲余弦值
 * asin(x)    返回 x 的反正弦值
 * asinh(x)    返回 x 的反双曲正弦值
 * atan(x)    返回 x 的反正切值
 * atanh(x)    返回 x 的反双曲正切值
 * atan2(y,x)    返回 y/x 的反正切值
 * cbrt(x)    返回 x 的立方根
 * ceil(x)    对 x 进行向上取整，即返回大于 x 的最小整数
 * clz32(x)    返回将 x 转换成 32 无符号整形数字的二进制形式后，开头 0 的个数
 * cos(x)    返回 x 的余弦值
 * cosh(x)    返回 x 的双曲余弦值
 * exp(x)    返回算术常量 e 的 x 次方，即 Ex
 * expm1(x)    返回 exp(x) - 1 的值
 * floor(x)    对 x 进行向下取整，即返回小于 x 的最大整数
 * fround(x)    返回最接近 x 的单精度浮点数
 * hypot([x, [y, [...]]])    返回所有参数平方和的平方根
 * imul(x, y)    将参数 x、y 分别转换位 32 位整数，并返回它们相乘后的结果
 * log(x)    返回 x 的自然对数
 * log1p(x)    返回 x 加 1 后的自然对数
 * log10(x)    返回 x 以 10 为底的对数
 * log2(x)    返回 x 以 2 为底的对数
 * max([x, [y, [...]]])    返回多个参数中的最大值
 * min([x, [y, [...]]])    返回多个参数中的最小值
 * pow(x,y)    返回 x 的 y 次幂
 * random()    返回一个 0 到 1 之间的随机数
 * round(x)    返回 x 四舍五入后的整数
 * sign(x)    返回 x 的符号，即一个数是正数、负数还是 0
 * sin(x)    返回 x 的正弦值
 * sinh(x)    返回 x 的双曲正弦值
 * sqrt(x)    返回 x 的平方根
 * tan(x)    返回 x 的正切值
 * tanh(x)    返回 x 的双曲正切值
 * toSource()    返回字符串"Math"
 * trunc(x)    返回 x 的整数部分
 * valueOf()    返回 Math 对象的原始值
 */


document.write("<br>");

document.write(Math.abs(-3.1415) + "<br>");
document.write(Math.acos(0.5) + "<br>");
document.write(Math.ceil(1.45) + "<br>");
document.write(Math.exp(1) + "<br>");
document.write(Math.floor(5.99) + "<br>");
document.write(Math.log(6) + "<br>");
document.write(Math.max(4, 8, 1, 9) + "<br>");
document.write(Math.min(4, 8, 1, 9) + "<br>");
document.write(Math.random() + "<br>");
document.write(Math.pow(2, 3) + "<br>");
document.write(Math.sign(-123) + "<br>");
document.write(Math.sqrt(125) + "<br>");


