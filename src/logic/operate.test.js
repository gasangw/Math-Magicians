import operate from './operate';
describe('operate', () =>{
    test('operator plus (+)', ()=>{
        expect(operate(3, 2, '+')).toEqual('5')
    });
    test('operator plus (-)', ()=>{
        expect(operate(3, 2, '-')).toEqual('1')
    });
    test('operator plus (x)', ()=>{
        expect(operate(3, 2, 'x')).toEqual('6')
    });
    test('operator plus (÷)', ()=>{
        expect(operate(4, 2, '÷')).toEqual('2')
    });
    test('operator plus (%)', ()=>{
        expect(operate(5, 2, '%')).toEqual('1')
    });  
});