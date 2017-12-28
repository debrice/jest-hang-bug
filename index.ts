type myType = string;

export default function foo(bar: myType) {
  throw new Error(bar);
}
