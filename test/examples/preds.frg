#lang forge


sig A {
    next : set A,
    prev : set A
}


pred p1 {
    all a : A | a.next = a.prev
}

pred p2 [ a : A ] {
    a.next = a.prev
}

pred p3 [ a : A, a2 : A ] {
    a.next = a2.prev
}
