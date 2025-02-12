#lang forge

option run_sterling off

sig Node {
  key: one Int,     -- every node has some key 
  left: lone Node,  -- every node has at most one left-child
  right: lone Node  -- every node has at most one right-child
}

fun descendantsOf[ancestor: Node]: set Node {
  ancestor.^(left + right) -- nodes reachable via transitive closure
}

pred binary_tree {
  -- no cycles (modified)
  all n: Node | 
    n not in descendantsOf[n] 
  -- connected via finite chain of left, right, and inverses
  all disj n1, n2: Node | n1 in n2.^(left + right + ~left + ~right)
  -- left+right differ (unless both are empty)
  all n: Node | some n.left => n.left != n.right 
  -- nodes have a unique parent (if any)
  all n: Node | lone parent: Node | n in parent.(left+right)
}


// NOW ~BST~
pred invariant_v1[n: Node] {
  -- "Every node's left-descendants..." (if any)
  some n.left => {
    n.left.key < n.key
    all d: Node | reachable[d, n.left, left, right] => d.key < n.key
  }
  -- "Every node's right-descendants..." (if any)
  some n.right => {
    n.right.key < n.key
    all d: Node | reachable[d, n.right, left, right] => d.key > n.key
  }
}
pred binary_search_tree {
  binary_tree  -- a binary tree, with an added invariant
  all n: Node | invariant_v1[n]  
}
