export let myTsTest = '';

interface NumberDictionary {
  [index: number]: number;
  length: number; // 可以，length是number类型
  name: number; // 错误，`name`的类型与索引类型返回值的类型不匹配
}

const aa: NumberDictionary = {
  1: 1,
  length: 11,
  name: 333
};

console.log(aa);
