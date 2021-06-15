function* greeter() {
  yield "Hi";
  yield "How are you";
  yield "Bye"
}

const greet = greeter();
console.log(greet.next().value); //Hi
console.log(greet.next().value); //How are you
console.log(greet.next().value); //Bye
console.log(greet.next().value); //undefined

//使用生成器生成无限个值：

function* idCreator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const ids = idCreator();
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);