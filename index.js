import * as DRIVERS from './drivers.js'
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

let Y = f => (x => a => f(x(x))(a))(x => a => f(x(x))(a));

let CONS = PAIR;
let CAR = FIRST;
let CDR = SECOND;
let AT = l => n => n(CDR)(l)(CAR);
let ADDL = l => v => Y(f => ll => COND(NOT(ll(CAR)))(x => CONS(v)(FALSE))(x => CONS(ll(CAR))(f(ll(CDR))))(FALSE))(l);
let ITER = f => l => Y(ff => ll => COND(NOT(ll(CAR)))(x => FALSE)(x => TRUE(f(ll(CAR)))(x => ff(ll(CDR)))(FALSE)))(l);
let MAP = f => l => Y(ff => ll => COND(NOT(ll(CAR)))(x => FALSE)(x => CONS(f(ll(CAR)))(ff(ll(CDR))))(FALSE))(l);
let REDUCE = f => l => Y(ff => ll => ff(CONS(ll(CAR)(CDR))(f(ll(CDR))(ll(CAR)(CAR)))))(CONS(l)(FALSE))(CDR);

let CONCAT = l1 => l2 => COND(NOT(l1(CAR)))(x => CONS(l1(CAR))(CONCAT(l1(CDR))(l2)))(x => l2)(FALSE);

let CHAR = i => f => f(i);



export * from './drivers.js'
export {
    TRUE,FALSE,OR,NOT,AND,
    ZERO,ONE,TWO,THREE
    ,ADD1,ADD,MULTIPLY,COND,PRED,
    FIRST,SECOND,PAIR,SUB,
    Y,CONS,CDR,CAR,AT,ADDL,ITER,MAP,REDUCE,CONCAT,
CHAR
}