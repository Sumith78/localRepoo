function areParenthesesBalanced(str) {
  const stack = [];
  const opening = '({[';
  const closing = ')}]';
  
  for (const char of str) {
    if (opening.includes(char)) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (!top || opening.indexOf(top) !== closing.indexOf(char)) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}



const expression1 = "((2 + 3) * 5)";
const expression2 = "({[2 + 3] * 5})";

const isBalanced1 = areParenthesesBalanced(expression1);
const isBalanced2 = areParenthesesBalanced(expression2);

console.log(isBalanced1); // Output: true
console.log(isBalanced2); // Output: true
