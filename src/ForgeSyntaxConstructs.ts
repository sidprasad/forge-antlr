




// Base class for all AST nodes
export abstract class SyntaxNode {
	constructor(
        public startRow: number,
        public startColumn: number,
        public endRow: number,
        public endColumn: number
    ) {}
}

abstract class TestSyntaxNode extends SyntaxNode {
	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public name?: string
	) {
		super(startRow, startColumn, endRow, endColumn);
	}
}



class Block extends SyntaxNode {
	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public statements: SyntaxNode[]
	) {
		super(startRow, startColumn, endRow, endColumn);
	}
}

	
class Sig extends SyntaxNode {
    constructor(
		startRow: number,
        startColumn: number,
        endRow: number,
        endColumn: number,
		public name: string,
		public body?: Block,
		public  inheritsFrom?: string, // This could be 'SIG'. We are just ignoring this for now.
		public  annotation?: string)  	// annotation is One of 'one', 'abstract', 'lone', or null

		{
			super(startRow, startColumn, endRow, endColumn);
		}
}


// We don't really care about formula contents for now.
class Formula extends SyntaxNode {
	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public formula: string
		) {
			super(startRow, startColumn, endRow, endColumn);
		}
}



// We don't really care about expr contents for now.
class Expr extends SyntaxNode {
	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public expr: string
		) {
			super(startRow, startColumn, endRow, endColumn);
		}
}


class Predicate extends SyntaxNode {
    constructor(
        startRow: number,
        startColumn: number,
        endRow: number,
        endColumn: number,
        public name: string,
        public params?: Block, // FOr now, just a location block. We should change this as we get as things get more sophisticated.
        public body?: Block
        ) {
            super(startRow, startColumn, endRow, endColumn);
        }
}






// TODO: Implement these
class Test extends TestSyntaxNode {
	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public name: string,

		public check : string,
		public body?: Block,
		public bounds? : string,
		public scope? : string

	) {
		super(startRow, startColumn, endRow, endColumn, name);
	}
}
class AssertionTest extends TestSyntaxNode {

	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public pred: string,
		public prop: Expr,
		public check : string,
		public bounds? : string,
		public scope? : string,
		name?: string
	) {
		super(startRow, startColumn, endRow, endColumn, name);
	}
}
class QuantifiedAssertionTest extends TestSyntaxNode {

	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public pred: string,
		public prop: Expr,
		public check : string,
		public disj? : boolean,
		public quantDecls? : Block,
		public bounds? : string,
		public scope? : string,
		public predArgs?: Block,
		name?: string
	) {
		super(startRow, startColumn, endRow, endColumn, name);
	}



}



class Example extends TestSyntaxNode {
	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public name: string,
		public testExpr : Block,
		public bounds : Block,
	) {
		super(startRow, startColumn, endRow, endColumn, name);
	}


}
class Function extends SyntaxNode {

	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public name: string,
		public params?: Block, // FOr now, just a location block. We should change this as we get as things get more sophisticated.
		public body?: Block
	) {
		super(startRow, startColumn, endRow, endColumn);
	}



}


class SatisfiabilityAssertionTest extends TestSyntaxNode {

	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public exp: Expr,
		public check : string,
		public bounds? : string,
		public scope? : string,
		name?: string
	) {
		super(startRow, startColumn, endRow, endColumn, name);
	}
}

class ConsistencyAssertionTest extends TestSyntaxNode {

	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public pred: string,
		public prop: Expr,
		public consistent : boolean,
		public bounds? : string,
		public scope? : string,
		name?: string
	) {
		super(startRow, startColumn, endRow, endColumn, name);
	}
}

export {
		Block,
		Sig, Predicate, Function, 
		Test, AssertionTest, QuantifiedAssertionTest, Example, SatisfiabilityAssertionTest,
		ConsistencyAssertionTest,
		Expr
		//Formula, Expr // THese ones are not used for now
};