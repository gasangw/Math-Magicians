import calculate from './calculate';

describe('Calculate', () =>{
  test('If AC deletes', ()=>{
    const obj = {
      total: '10',
      next: '15',
      operation: '+'
    }
    expect(calculate(obj, 'AC')).toEqual({
        total: null,
        next: null,
        operation: null,
    });
  });
  test('for two consective zero entry', () => {
    const obj = {
      total: '',
      next: '0',
      operation: ''
    }
    expect(calculate(obj, '0')).toEqual({});
  });
  test('If there is an operation, update next', () => {
    const obj = {
      total: '',
      next: '1',
      operation: '-'
    }
    expect(calculate(obj, '2')).toEqual({
      total: '',
      next: '12',
      operation: '-'
    });
  });

  test('If there is an operation, update next', () => {
    const obj = {
      total: '',
      next: '0',
      operation: '-'
    }
    expect(calculate(obj, '2')).toEqual({
      total: '',
      next: '2',
      operation: '-'
    });
  });

  test('If there is no operation, update next and clear the value', () => {
    const obj = {
      total: null,
      next: '1',
      operation: ''
    }
    expect(calculate(obj, '2')).toEqual({
      total: null,
      next: '12',
    });
  });

  test('For decimal key', () => {
    const obj = {
      total: null,
      next: '1.',
      operation: ''
    }
    expect(calculate(obj, '.')).toEqual({
      total: null,
      next: '1.',
      operation: ''
    });
  });

  test('For decimal key', () => {
    const obj = {
      total: null,
      next: '1',
      operation: ''
    }
    expect(calculate(obj, '.')).toEqual({
      total: null,
      next: '1.',
      operation: ''
    });
  });

  test('For +/- key', () => {
    const obj = {
      total: null,
      next: '1',
      operation: ''
    }
    expect(calculate(obj, '+/-')).toEqual({
      total: null,
      next: '-1',
      operation: ''
    });
  });

  test('if user pressed an operation after pressing =', () => {
    const obj = {
      total: '10',
      next: '',
      operation: ''
    }
    expect(calculate(obj, '-')).toEqual({
      total: '10',
      next: '',
      operation: '-'
    });
  });

  test('if user pressed an operation button and there is an existing operation', () => {
    const obj = {
      total: '10',
      next: '',
      operation: '-'
    }
    expect(calculate(obj, '-')).toEqual({
      total: '10',
      next: '',
      operation: '-'
    });
  });

});