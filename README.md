# react-reflux
# react-reflux计数练习
1. 下载后 npm i 安装所有依赖
2. 个人理解stroe/action 中的trigger 是用来传递数据用,stroe 监听action  (store.listen(self.onStatusChange.bind(self))) 后 ,执行self.onStatusChange.bind(self))这个方法。
3. Browserify的主要作用是将CommonJS模块转为浏览器可以调用的格式，
使用方式  browserify src.js -o bundle.js -t [ babelify --presets [ env es2015 react ] ]，注意：方括号的空格不可少。
