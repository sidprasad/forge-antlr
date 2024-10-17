import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ForgeListener } from './ForgeListener';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import {ParserRuleContext} from 'antlr4ts/ParserRuleContext';

import { AlloyModuleContext } from "./ForgeParser";
import { ImportDeclContext } from "./ForgeParser";
import { ParagraphContext } from "./ForgeParser";
import { SigDeclContext } from "./ForgeParser";
import { SigExtContext } from "./ForgeParser";
import { MultContext } from "./ForgeParser";
import { ArrowMultContext } from "./ForgeParser";
import { HelperMultContext } from "./ForgeParser";
import { ParaDeclContext } from "./ForgeParser";
import { QuantDeclContext } from "./ForgeParser";
import { ArrowDeclContext } from "./ForgeParser";
import { PredTypeContext } from "./ForgeParser";
import { PredDeclContext } from "./ForgeParser";
import { FunDeclContext } from "./ForgeParser";
import { ParaDeclsContext } from "./ForgeParser";
import { AssertDeclContext } from "./ForgeParser";
import { CmdDeclContext } from "./ForgeParser";
import { TestDeclContext } from "./ForgeParser";
import { TestExpectDeclContext } from "./ForgeParser";
import { TestBlockContext } from "./ForgeParser";
import { ScopeContext } from "./ForgeParser";
import { TypescopeContext } from "./ForgeParser";
import { ConstContext } from "./ForgeParser";
import { SatisfiabilityDeclContext } from "./ForgeParser";
import { PropertyDeclContext } from "./ForgeParser";
import { QuantifiedPropertyDeclContext } from "./ForgeParser";
import { TestSuiteDeclContext } from "./ForgeParser";
import { TestConstructContext } from "./ForgeParser";
import { ArrowOpContext } from "./ForgeParser";
import { CompareOpContext } from "./ForgeParser";
import { LetDeclContext } from "./ForgeParser";
import { BlockContext } from "./ForgeParser";
import { BlockOrBarContext } from "./ForgeParser";
import { QuantContext } from "./ForgeParser";
import { QualNameContext } from "./ForgeParser";
import { OptionDeclContext } from "./ForgeParser";
import { NameContext } from "./ForgeParser";
import { NameListContext } from "./ForgeParser";
import { QualNameListContext } from "./ForgeParser";
import { ParaDeclListContext } from "./ForgeParser";
import { QuantDeclListContext } from "./ForgeParser";
import { ArrowDeclListContext } from "./ForgeParser";
import { LetDeclListContext } from "./ForgeParser";
import { TypescopeListContext } from "./ForgeParser";
import { ExprListContext } from "./ForgeParser";
import { ExprContext } from "./ForgeParser";
import { Expr1Context } from "./ForgeParser";
import { Expr1_5Context } from "./ForgeParser";
import { Expr2Context } from "./ForgeParser";
import { Expr3Context } from "./ForgeParser";
import { Expr4Context } from "./ForgeParser";
import { Expr4_5Context } from "./ForgeParser";
import { Expr5Context } from "./ForgeParser";
import { Expr6Context } from "./ForgeParser";
import { Expr7Context } from "./ForgeParser";
import { Expr8Context } from "./ForgeParser";
import { Expr9Context } from "./ForgeParser";
import { Expr10Context } from "./ForgeParser";
import { Expr11Context } from "./ForgeParser";
import { Expr12Context } from "./ForgeParser";
import { Expr13Context } from "./ForgeParser";
import { Expr14Context } from "./ForgeParser";
import { Expr15Context } from "./ForgeParser";
import { Expr16Context } from "./ForgeParser";
import { Expr17Context } from "./ForgeParser";
import { Expr18Context } from "./ForgeParser";
import { ArrowExprContext } from "./ForgeParser";
import { SexprDeclContext } from "./ForgeParser";
import { SexprContext } from "./ForgeParser";
import { InstDeclContext } from "./ForgeParser";
import { EvalRelDeclContext } from "./ForgeParser";
import { EvalDeclContext } from "./ForgeParser";
import { ExampleDeclContext } from "./ForgeParser";
import { QueryDeclContext } from "./ForgeParser";
import { NumberListContext } from "./ForgeParser";
import { NumberContext } from "./ForgeParser";
import { BoundsContext } from "./ForgeParser";
import { AtomNameOrNumberContext } from "./ForgeParser";
import { BoundContext } from "./ForgeParser";
import { BoundLHSContext } from "./ForgeParser";
import { BindRHSUnionContext } from "./ForgeParser";
import { BindRHSProductContext } from "./ForgeParser";
import { BindRHSProductBaseContext } from "./ForgeParser";

import { ASTNode, Sig, Predicate, Test, Block } from './ForgeAST';
import { get } from 'http';

/*
    We don't really need a whole AST right now right?
    Just need to find:
    - Locations and types of sigs
    - Locations and types of predicates
    - Locations and types of functions
    - Locations and types of tests

*/

/**
 * 
 * @param ctx Some parser rule context
 * @returns A block with only the locations of the text in the ctx.
 */
function getLocationOnlyBlock(ctx : ParserRuleContext) : Block {
    const startLine = ctx.start.line;
    const startColumn = ctx.start.charPositionInLine;
    const endLine = ctx.stop ? ctx.stop.line : -1;
    const endColumn =  ctx.stop ? ctx.stop.charPositionInLine : 0;
    const block = new Block(startLine, startColumn, endLine, endColumn, []);
    return block;
}


export class ForgeListenerImpl implements ForgeListener {

    
    private _sigs : Sig[] = [];
    private _predicates : Predicate[] = [];
    private _tests : Test[] = [];

    public get sigs() : Sig[] {
        return this._sigs;
    }

    public get predicates() : Predicate[] {
        return this._predicates;
    }


    public get tests() : Test[] {
        return this._tests;
    }


    /**
     * Exit a parse tree produced by `ForgeParser.sigDecl`.
     * @param ctx the parse tree
     */
    exitSigDecl? (ctx: SigDeclContext) {
        const startLine = ctx.start.line;
        const startColumn = ctx.start.charPositionInLine;
        const endLine = ctx.stop ? ctx.stop.line : -1;
        const endColumn =  ctx.stop ? ctx.stop.charPositionInLine : 0;

        // Could have definied multiple names here.
        const sigNames = this.getAllNames(ctx.nameList());
        const multiplicity = ctx.mult()?.toStringTree(); // This is not ideal, but will do for now.
        const inheritsFrom = ctx.sigExt()?.toStringTree(); // This is not ideal, but will do for now.
        const sigBlock = ctx.block();
        const sigBody : Block | undefined = sigBlock ? getLocationOnlyBlock(sigBlock) : undefined;
        for (const sigName of sigNames) {
            let s = new Sig(
                startLine, 
                startColumn, 
                endLine, 
                endColumn,
                sigName,
                sigBody,
                inheritsFrom,
                multiplicity);
            this._sigs.push(s);
        }
    }

    
    /**
     * Exit a parse tree produced by `ForgeParser.predDecl`.
     * @param ctx the parse tree
     */
    exitPredDecl? (ctx: PredDeclContext) {

        const startLine = ctx.start.line;
        const startColumn = ctx.start.charPositionInLine;
        const endLine = ctx.stop ? ctx.stop.line : -1;
        const endColumn =  ctx.stop ? ctx.stop.charPositionInLine : 0;

        const predName = ctx.name().text;

        // We don't care about the pred type for now (wheat or not.)
        // In fact, this should maybe be removed from FORGE.

        // There is also the PRED qualName that we don't really have for now.

        // Get the pred arguments
        // const predArgs = ctx.paraDecls() ? {} : this.getNameTypePairs(ctx.paraDecls());
        // Ideally, predArgs should look something like this.
        //const predArgs : Record<string, string> = {}; // TODO: This needs to be fixed!!
        const paraDecls = ctx.paraDecls();
        const predArgsBlock : Block | undefined = paraDecls ? getLocationOnlyBlock(paraDecls) : undefined; 
        

        // Get the pred body (block)
        const predBody = ctx.block();
        // Block start, block end.
        let predBlock = getLocationOnlyBlock(predBody);
        const predBodyStatements : ASTNode[] = []; // TODO

        let p = new Predicate(
            startLine, 
            startColumn, 
            endLine, 
            endColumn,
            predName,
            predArgsBlock,
            predBlock
        );

        this._predicates.push(p);
    }


    /**
     * Exit a parse tree produced by `ForgeParser.funDecl`.
     * @param ctx the parse tree
     */
    exitFunDecl?: (ctx: FunDeclContext) => void;

    /**
     * Exit a parse tree produced by `ForgeParser.testDecl`.
     * @param ctx the parse tree
     */
    exitTestDecl?: (ctx: TestDeclContext) => void;
   
    /**
     * Exit a parse tree produced by `ForgeParser.testBlock`.
     * @param ctx the parse tree
     */
    exitTestBlock?: (ctx: TestBlockContext) => void;

    
    /**
     * Exit a parse tree produced by `ForgeParser.satisfiabilityDecl`.
     * @param ctx the parse tree
     */
    exitSatisfiabilityDecl?: (ctx: SatisfiabilityDeclContext) => void;

    /**
     * Exit a parse tree produced by `ForgeParser.propertyDecl`.
     * @param ctx the parse tree
     */
    exitPropertyDecl?: (ctx: PropertyDeclContext) => void;

    /**
     * Exit a parse tree produced by `ForgeParser.quantifiedPropertyDecl`.
     * @param ctx the parse tree
     */
    exitQuantifiedPropertyDecl?: (ctx: QuantifiedPropertyDeclContext) => void;




    /**
     * Exit a parse tree produced by `ForgeParser.name`.
     * @param ctx the parse tree
     * 
     * 
     * TODO: THIS MAY BE USEFUL FOR NAME LOCATIONS (CLICK TO GO TO DEFN OR SOMETHING?)
     * 
     * 
     */
    exitName?: (ctx: NameContext) => void;

    /**
     * Exit a parse tree produced by `ForgeParser.expr`.
     * @param ctx the parse tree
     * 
     * 
     * 
     * TODO: It feels like this is too important to not be useful at some point.
     * 
     * 
     */
    exitExpr?: (ctx: ExprContext) => void;



    /**
     * Exit a parse tree produced by `ForgeParser.instDecl`.
     * @param ctx the parse tree
     * 
     * 
     * Useful for examples or tests???
     */
    exitInstDecl?: (ctx: InstDeclContext) => void;

   

    /**
     * Exit a parse tree produced by `ForgeParser.exampleDecl`.
     * @param ctx the parse tree
     */
    exitExampleDecl?: (ctx: ExampleDeclContext) => void;

  


    //// Inherited from ParseTreeListener
    visitTerminal?: (/*@NotNull*/ node: TerminalNode) => void;
    visitErrorNode?: (/*@NotNull*/ node: ErrorNode) => void;
    enterEveryRule?: (/*@NotNull*/ ctx: ParserRuleContext) => void;
    exitEveryRule?: (/*@NotNull*/ ctx: ParserRuleContext) => void;
    /////////////////////



    /**
     * Collects all names from the given NameListContext.
     * @param ctx the NameListContext
     * @returns an array of NameContext
     */
    getAllNames(ctx: NameListContext): string[] {
        const names: NameContext[] = [];

        // Helper function to traverse the NameListContext
        function collectNames(nameListCtx: NameListContext) {
            if (nameListCtx.name()) {
                names.push(nameListCtx.name());
            }
            const nestedNameList = nameListCtx.nameList();
            if (nestedNameList) {
                collectNames(nestedNameList);
            }
        }

        // Start the collection from the given context
        collectNames(ctx);

        return names.map(nameCtx => nameCtx.IDENTIFIER_TOK().text);
    }
}