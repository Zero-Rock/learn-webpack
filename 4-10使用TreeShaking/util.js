export const constA = 'constA';
export const constB = 'constB';

export function funcA() {
  console.log(new ClassA());
  console.log('funcA');
}

export function funB() {
  console.log(new ClassB());
  console.log('funcB');
}

class ClassA {
  constructor() {
    console.log('classA');
  }
}

class ClassB {
  constructor() {
    console.log('classB');
  }
}

