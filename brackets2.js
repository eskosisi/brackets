function bracks(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const bracketInside = str[i];
    if (bracketInside === "(") {
      stack.push(bracketInside);
    } else if (bracketInside === ")") {
      const lastEl = stack.pop();
      if (!lastEl) {
        return false;
      }
    }
  }
  if (stack.length) return false;
  return true;
}
