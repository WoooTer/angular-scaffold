export const IndexableType0indexerType = true;

// interface NumberDictionaryError {
//   [index: string]: number;
//   length: number; // 可以，length是number类型
//   name: string; // 错误，`name`的类型与索引类型返回值的类型不匹配
// }

interface NumberDictionary {
  [index: number]: number;
  length: number; // 可以，length是number类型
  name: string; // 可以，indexer的 index类型为 number, 而此处 name类型为 string，两者不冲突
}

const a: NumberDictionary = {
  0: 0,
  1: 1,
  length: 2,
  name: '3'
};

console.log(a);
console.log(a[1]);
