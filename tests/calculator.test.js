const Calculator = require ('../script.js'); 

  test('Addition', () => {
    expect(eval(5 +3)).toBe(8);
    expect(eval(-5 + (-3))).toBe(-8);
    expect(eval(0 +7)).toBe(7);
  });

  test('Subtraction', () => {
    expect(eval(10 - 3)).toBe(7);
    expect(eval(5 - 8)).toBe(-3);
    expect(eval(8 - 0)).toBe(8);
  });

  test('Multiplication', () => {
    expect(eval(4 * 5)).toBe(20);
    expect(eval(-4 * 10)).toBe(-40);
    expect(eval(7 * 0)).toBe(0);
  });

  test('Division', () => {
    expect(eval(15/3)).toBe(5);
    expect(eval(-21/3)).toBe(-7);
    
  });

 