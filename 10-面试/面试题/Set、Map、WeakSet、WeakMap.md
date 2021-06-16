# Set和Map主要的应用场景在于**数据重组**和**数据储存**
# Set是一种叫做**集合**的数据结构，Map是一种叫做**字典**的数据结构

# Set（集合）
  - 类似于数组，但成员是唯一且无序的，没有重复的值
  - Set本身是一种构造函数，用来生成Set数据结构
    - new Set([iterable])
    - 去重数组
      ```
      let arr = [1, 2, 3, 2, 1, 1]
      [...new Set(arr)] //Set可以使用...展开运算符
      ```
  - Array.from方法可以将Set结构转为数组
    ```
    const set2 = new Set([1,2,3,2])
    const arr2 = Array.from(set2)
    const arr3 = [...set2]
    ```

# WeakSet 对象允许你将弱引用对象储存在一个集合中
## WeakSet与Set的区别
  - WeakSet只能储存对象引用，不能存放值，而Set对象都可以
  - WeakSet对象中储存的对象值都是被弱引用的


# Map（字典）
## 集合与字典的区别：
  - 共同点：集合、字典可以储存不重复的值
  - 不同点：集合是以[value, value]的形式储存元素，字典是以[key, value]的形式储存

## 任何具有Iterator接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数
  ```
  const set = new Set([
    ['foo', 1],
    ['bar', 2]
  ]);
  const m1 = new Map(set);
  m1.get('foo') // 1
  ```
## Map的键实际是跟内存地址绑定的，只要内存地址不一样，就视为两个键

## 与其他数据结构的相互转换
  - Map 转 Array(...展开运算符)
  ```
  const map = new Map([[1, 1], [2, 2], [3, 3]])
  console.log([...map])	// [[1, 1], [2, 2], [3, 3]]
  ```
  - Array 转 Map
  ```
  const map = new Map([[1, 1], [2, 2], [3, 3]])
  console.log(map)	// Map {1 => 1, 2 => 2, 3 => 3}
  ```
  - Map 转 Object
  ```
  function mapToObj(map) {
    let obj = Object.create(null)
    for (let [key, value] of map) {
        obj[key] = value
    }
    return obj
  }
  const map = new Map().set('name', 'An').set('des', 'JS')
  mapToObj(map)  // {name: "An", des: "JS"}
  ```
  - Object 转 Map
  ```
  function objToMap(obj) {
    let map = new Map()
    for (let key of Object.keys(obj)) {
        map.set(key, obj[key])
    }
    return map
  }
  objToMap({'name': 'An', 'des': 'JS'}) // Map {"name" => "An", "des" => "JS"}
  ```
  - Map 转 JSON
  ```
  function mapToJson(map) {
    return JSON.stringify([...map])
  }

  let map = new Map().set('name', 'An').set('des', 'JS')
  mapToJson(map)	// [["name","An"],["des","JS"]]
  ```
  - JSON 转 Map
  ```
  function jsonToStrMap(jsonStr) {
    return objToMap(JSON.parse(jsonStr));
  }

  jsonToStrMap('{"name": "An", "des": "JS"}') // Map {"name" => "An", "des" => "JS"}
  ```

# WeakMap 对象是一组键值对的集合，其中的键是弱引用对象，而值可以是任意
  - WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。