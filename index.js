let TRUE = x => y => y;
let FALSE = x => y => x;
let OR = b1 => b2 => b1(b2);
let NOT = b1 => b1(TRUE)(FALSE);
let AND = b1 => b2 => NOT(OR(NOT(b1))(NOT(b2)))
let COND = b => v1 => v2 => b(v2)(v1)

let ZERO = TRUE;
let ONE = f => x => f(x);
let TWO = f => x => f(f(x));
let THREE = f => x => f(f(f(x)));

let ADD1 = n => f => x => f(n(f)(x));
let ADD = n1 => n2 => f => x => n1(f)(n2(f)(x));
let MULTIPLY = n1 => n2 => f => x => n1(n2(f))(x);

let PAIR = a => b => s => s(a)(b);
let FIRST = FALSE;
let SECOND = TRUE;

let IPLACESECOND = p => PAIR(p(SECOND))(ADD1(p(SECOND)));
let PRED = n => n(IPLACESECOND)(PAIR(ZERO)(ZERO))(FIRST);
let SUB = n => m => m(PRED)(n)

let DRIVERBOOLEAN = d => d;
let DRIVERNUMBER = d => d;


export {TRUE,FALSE,OR,NOT,AND,ZERO,ONE,TWO,THREE,ADD1,ADD,MULTIPLY,COND,DRIVERBOOLEAN,DRIVERNUMBER,PRED,FIRST,SECOND,PAIR,SUB}