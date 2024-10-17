




// Base class for all AST nodes
export abstract class ASTNode {
	constructor(
        public startRow: number,
        public startColumn: number,
        public endRow: number,
        public endColumn: number
    ) {}
}

class Block extends ASTNode {
	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public statements: ASTNode[]
	) {
		super(startRow, startColumn, endRow, endColumn);
	}
}

	
class Sig extends ASTNode {
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
class Formula extends ASTNode {
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

// We don't really care about inst contents for now.
class Inst extends ASTNode {

	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public inst: string
		) {
			super(startRow, startColumn, endRow, endColumn);
		}

}

// We don't really care about expr contents for now.
class Expr extends ASTNode {
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

// We don't really care about Command contents for now.
class Command extends ASTNode {
	constructor(
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		public command: string
		) {
			super(startRow, startColumn, endRow, endColumn);
		}
}


class Predicate extends ASTNode {
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

// TODO: Implement this class
class Test extends ASTNode {

}

export { Sig, Inst, Command, Predicate, Test, Block}