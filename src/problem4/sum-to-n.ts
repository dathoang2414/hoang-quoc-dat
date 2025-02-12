// Implementation a: Mathematical Formula
// Time Complexity: O(1) - Constant time complexity since it uses a direct formula.
// Space Complexity: O(1) - No additional space usage beyond simple variables.
function sum_to_n_a(n: number): number {
  return (n * (n + 1)) / 2;
}

// Implementation B: Iterative Approach
// Time Complexity: O(n) - Linear time complexity since it loops from 1 to n.
// Space Complexity: O(1) - Constant space since only a few variables are used.
function sum_to_n_b(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Implementation C: Recursive Approach
// Time Complexity: O(n) - Linear time complexity since it makes n recursive calls.
// Space Complexity: O(n) - Linear space complexity due to function call stack.
function sum_to_n_c(n: number): number {
  if (n <= 0) return 0;
  return n + sum_to_n_c(n - 1);
}

console.log("sum_to_n_a(5):", sum_to_n_a(5)); // 15
console.log("sum_to_n_b(5):", sum_to_n_b(6)); // 21
console.log("sum_to_n_c(5):", sum_to_n_c(7)); // 28
