#lang forge

/* Model involving variants of sigs */

abstract sig D {}


sig A {

    id : one D->Int->B
}

sig B, C extends A {}


one sig E extends D {

    f : set D
}

lone sig F {}