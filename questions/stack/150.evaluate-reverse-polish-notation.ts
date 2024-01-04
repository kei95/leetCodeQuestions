// https://leetcode.com/problems/evaluate-reverse-polish-notation

const OPERATORS = {
  "+": "+",
  "-": "-",
  "*": "*",
  "/": "/",
} as const;

function calculateWithOperands(
  firstOperand: number,
  secondOperand: number,
  operator: keyof typeof OPERATORS
) {
  switch (operator) {
    case OPERATORS["+"]:
      return firstOperand + secondOperand;
    case OPERATORS["-"]:
      return firstOperand - secondOperand;
    case OPERATORS["*"]:
      return firstOperand * secondOperand;
    case OPERATORS["/"]:
      return Math.trunc(firstOperand / secondOperand);
  }
}

function evalRPN(tokens: string[]): number {
  let operandsStack: number[] = [];

  for (const target of tokens) {
    if (Object.keys(OPERATORS).includes(target)) {
      const secondArg = operandsStack.pop();
      const firstArg = operandsStack.pop();

      // Indicates invalid "tokens" input
      if (secondArg === undefined || firstArg === undefined)
        throw Error(
          `Given arg ${tokens} is not a valid reverse polish notation`
        );

      operandsStack.push(
        calculateWithOperands(
          firstArg,
          secondArg,
          target as keyof typeof OPERATORS
        )
      );
      continue;
    }

    operandsStack.push(Number(target));
  }

  return operandsStack[0];
}

// time: O(n)
// space: O(n)
