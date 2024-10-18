import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ForgeListener } from './ForgeListener';
import { ForgeParser, AlloyModuleContext } from './ForgeParser';
import { ForgeLexer } from './ForgeLexer';
import { ForgeListenerImpl } from './ForgeListenerImpl';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

export class ForgeUtil {

	forgeSpec : string;
	forgeListener : ForgeListenerImpl = new ForgeListenerImpl();
	walker : ParseTreeWalker = new ParseTreeWalker();

	constructor(forgeSpec : string) {
		this.forgeSpec = forgeSpec;		
	}

	getParseTree() : AlloyModuleContext  {
		const inputStream = CharStreams.fromString(this.forgeSpec);
		const lexer = new ForgeLexer(inputStream);
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new ForgeParser(tokenStream);
		parser.buildParseTree = true;
		// Parse the input and obtain the parse tree
		const tree = parser.alloyModule();
		return tree;
	}

	// Returns the string representation of the parse tree
	getParseTreeString() : string {
		const tree = this.getParseTree();
		return tree.toStringTree();
	}

	processSpec(): void {
        const tree = this.getParseTree();
        this.walker.walk(this.forgeListener, tree);
    }

	getSigs() {
		return this.forgeListener.sigs;
	}

	getPreds() {
		return this.forgeListener.predicates;
	}

	getTests() {
		return this.forgeListener.tests;
	}


	// TODO: Implement this (should this include pfuncs?)
	// getFunctions() {
	// 	return this.forgeListener.functions;
	// }

	getAssertions() {
		return this.forgeListener.assertions;
	}

	getQuantifiedAssertions() {
		return this.forgeListener.quantifiedAssertions;
	}

	getSatisfiabilityAssertions() {
		return this.forgeListener.satisfiabilityAssertions;
	}

	getExamples() {
		return this.forgeListener.examples;
	}

}