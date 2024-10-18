#lang forge
option run_sterling off

sig NonNode {}
sig Node {edges: set Node}

///////// PREDICATES //////////
pred isDirectedTree {
	edges.~edges in iden -- Injective, each child has at most one parent
	lone edges.Node - Node.edges -- At most one element that does not have a parent
	no (^edges & iden) -- No loops
	lone Node or Node in edges.Node + Node.edges -- Either one node or every node has either a child or a parent.
}


pred isRoot[r : Node] {
	isDirectedTree
    one r
    (some edges) => (r in edges.Node - Node.edges)
}

pred isNotRoot[n : Node] {
    isDirectedTree
    some edges.n
}

pred bothRoots[x : Node, y : Node] {
    isRoot[x]
    isRoot[y]
}

pred arethesame [x : Node, y : Node] {
    x = y
}


pred isTwo [x : Int] {
    x = 2
}

pred sameNumber [x : Int, y : Int] {
    x = y
}

///// JUST ASSERTIONS //////
test suite for isDirectedTree {
    assert isDirectedTree is necessary for isDirectedTree
    assert isDirectedTree is sufficient for isDirectedTree
}


//// QUANTIFIED ASSERTIONS //////
assert all r1, r2 : Node | isDirectedTree is sufficient for isDirectedTree
// Allow multiple quantifications + check scopes
assert all r : NonNode, r1 : Node | isRoot[r1] is necessary for isDirectedTree for 1 Node, 1 NonNode
// Ensure disj works
assert all disj r1, r2 : Node | arethesame[r1, r2] is necessary for arethesame[r1, r2]  for 1 Node


/// SATISFACTION ASSERTIONS////
assert isDirectedTree is sat
assert isDirectedTree is unsat // AGAIN, DONT NEED TO PASS. JUST NEED TO BE A VALID TEST

/// TEST EXPECTS /////
test expect {
    t1: {isDirectedTree} is sat
    t2 : {isDirectedTree and !isDirectedTree} is unsat
    t3 : {all n : Node | isRoot[n]} is theorem // Should not pass but is a valid test.
}


//// EXAMPLES /////

example e1 is {isDirectedTree} for {
    no Node
}

// Tests more that just a predicate
example e2 is { isDirectedTree && isRoot[Node] } for {
    no Node
}