// Generated from ForgeLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ForgeLexer extends Lexer {
	public static readonly OPEN_TOK = 1;
	public static readonly LEFT_SQUARE_TOK = 2;
	public static readonly RIGHT_SQUARE_TOK = 3;
	public static readonly AS_TOK = 4;
	public static readonly FILE_PATH_TOK = 5;
	public static readonly VAR_TOK = 6;
	public static readonly ABSTRACT_TOK = 7;
	public static readonly SIG_TOK = 8;
	public static readonly LEFT_CURLY_TOK = 9;
	public static readonly RIGHT_CURLY_TOK = 10;
	public static readonly EXTENDS_TOK = 11;
	public static readonly IN_TOK = 12;
	public static readonly PLUS_TOK = 13;
	public static readonly LONE_TOK = 14;
	public static readonly SOME_TOK = 15;
	public static readonly ONE_TOK = 16;
	public static readonly TWO_TOK = 17;
	public static readonly SET_TOK = 18;
	public static readonly FUNC_TOK = 19;
	public static readonly PFUNC_TOK = 20;
	public static readonly DISJ_TOK = 21;
	public static readonly COLON_TOK = 22;
	public static readonly WHEAT_TOK = 23;
	public static readonly PRED_TOK = 24;
	public static readonly DOT_TOK = 25;
	public static readonly FUN_TOK = 26;
	public static readonly LEFT_PAREN_TOK = 27;
	public static readonly RIGHT_PAREN_TOK = 28;
	public static readonly ASSERT_TOK = 29;
	public static readonly RUN_TOK = 30;
	public static readonly CHECK_TOK = 31;
	public static readonly FOR_TOK = 32;
	public static readonly BUT_TOK = 33;
	public static readonly EXACTLY_TOK = 34;
	public static readonly NONE_TOK = 35;
	public static readonly UNIV_TOK = 36;
	public static readonly IDEN_TOK = 37;
	public static readonly MINUS_TOK = 38;
	public static readonly IS_TOK = 39;
	public static readonly SAT_TOK = 40;
	public static readonly UNSAT_TOK = 41;
	public static readonly THEOREM_TOK = 42;
	public static readonly FORGE_ERROR_TOK = 43;
	public static readonly TEST_TOK = 44;
	public static readonly EXPECT_TOK = 45;
	public static readonly SUITE_TOK = 46;
	public static readonly BAR_TOK = 47;
	public static readonly ALL_TOK = 48;
	public static readonly SUFFICIENT_TOK = 49;
	public static readonly NECESSARY_TOK = 50;
	public static readonly LET_TOK = 51;
	public static readonly BIND_TOK = 52;
	public static readonly OR_TOK = 53;
	public static readonly XOR_TOK = 54;
	public static readonly IFF_TOK = 55;
	public static readonly IMP_TOK = 56;
	public static readonly ELSE_TOK = 57;
	public static readonly AND_TOK = 58;
	public static readonly UNTIL_TOK = 59;
	public static readonly RELEASE_TOK = 60;
	public static readonly SINCE_TOK = 61;
	public static readonly TRIGGERED_TOK = 62;
	public static readonly NEG_TOK = 63;
	public static readonly ALWAYS_TOK = 64;
	public static readonly EVENTUALLY_TOK = 65;
	public static readonly AFTER_TOK = 66;
	public static readonly BEFORE_TOK = 67;
	public static readonly ONCE_TOK = 68;
	public static readonly HISTORICALLY_TOK = 69;
	public static readonly CARD_TOK = 70;
	public static readonly PPLUS_TOK = 71;
	public static readonly AMP_TOK = 72;
	public static readonly SUBT_TOK = 73;
	public static readonly SUPT_TOK = 74;
	public static readonly PRIME_TOK = 75;
	public static readonly TILDE_TOK = 76;
	public static readonly EXP_TOK = 77;
	public static readonly STAR_TOK = 78;
	public static readonly AT_TOK = 79;
	public static readonly BACKQUOTE_TOK = 80;
	public static readonly THIS_TOK = 81;
	public static readonly SEXPR_TOK = 82;
	public static readonly INST_TOK = 83;
	public static readonly EVAL_TOK = 84;
	public static readonly EXAMPLE_TOK = 85;
	public static readonly ARROW_TOK = 86;
	public static readonly EQ_TOK = 87;
	public static readonly LT_TOK = 88;
	public static readonly GT_TOK = 89;
	public static readonly LEQ_TOK = 90;
	public static readonly GEQ_TOK = 91;
	public static readonly NI_TOK = 92;
	public static readonly NO_TOK = 93;
	public static readonly SUM_TOK = 94;
	public static readonly INT_TOK = 95;
	public static readonly OPTION_TOK = 96;
	public static readonly COMMA_TOK = 97;
	public static readonly SLASH_TOK = 98;
	public static readonly NUM_CONST_TOK = 99;
	public static readonly IDENTIFIER_TOK = 100;
	public static readonly WS = 101;
	public static readonly CCOMMENT = 102;
	public static readonly COMMENT = 103;
	public static readonly MULTCOMMENT = 104;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"OPEN_TOK", "LEFT_SQUARE_TOK", "RIGHT_SQUARE_TOK", "AS_TOK", "FILE_PATH_TOK", 
		"VAR_TOK", "ABSTRACT_TOK", "SIG_TOK", "LEFT_CURLY_TOK", "RIGHT_CURLY_TOK", 
		"EXTENDS_TOK", "IN_TOK", "PLUS_TOK", "LONE_TOK", "SOME_TOK", "ONE_TOK", 
		"TWO_TOK", "SET_TOK", "FUNC_TOK", "PFUNC_TOK", "DISJ_TOK", "COLON_TOK", 
		"WHEAT_TOK", "PRED_TOK", "DOT_TOK", "FUN_TOK", "LEFT_PAREN_TOK", "RIGHT_PAREN_TOK", 
		"ASSERT_TOK", "RUN_TOK", "CHECK_TOK", "FOR_TOK", "BUT_TOK", "EXACTLY_TOK", 
		"NONE_TOK", "UNIV_TOK", "IDEN_TOK", "MINUS_TOK", "IS_TOK", "SAT_TOK", 
		"UNSAT_TOK", "THEOREM_TOK", "FORGE_ERROR_TOK", "TEST_TOK", "EXPECT_TOK", 
		"SUITE_TOK", "BAR_TOK", "ALL_TOK", "SUFFICIENT_TOK", "NECESSARY_TOK", 
		"LET_TOK", "BIND_TOK", "OR_TOK", "XOR_TOK", "IFF_TOK", "IMP_TOK", "ELSE_TOK", 
		"AND_TOK", "UNTIL_TOK", "RELEASE_TOK", "SINCE_TOK", "TRIGGERED_TOK", "NEG_TOK", 
		"ALWAYS_TOK", "EVENTUALLY_TOK", "AFTER_TOK", "BEFORE_TOK", "ONCE_TOK", 
		"HISTORICALLY_TOK", "CARD_TOK", "PPLUS_TOK", "AMP_TOK", "SUBT_TOK", "SUPT_TOK", 
		"PRIME_TOK", "TILDE_TOK", "EXP_TOK", "STAR_TOK", "AT_TOK", "BACKQUOTE_TOK", 
		"THIS_TOK", "SEXPR_TOK", "INST_TOK", "EVAL_TOK", "EXAMPLE_TOK", "ARROW_TOK", 
		"EQ_TOK", "LT_TOK", "GT_TOK", "LEQ_TOK", "GEQ_TOK", "NI_TOK", "NO_TOK", 
		"SUM_TOK", "INT_TOK", "OPTION_TOK", "COMMA_TOK", "SLASH_TOK", "NUM_CONST_TOK", 
		"IDENTIFIER_TOK", "WS", "CCOMMENT", "COMMENT", "MULTCOMMENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'open'", "'['", "']'", "'as'", "'filepath'", "'var'", "'abstract'", 
		"'sig'", "'{'", "'}'", "'extends'", "'in'", "'+'", "'lone'", "'some'", 
		"'one'", "'two'", "'set'", "'func'", "'pfunc'", "'disj'", "':'", "'wheat'", 
		"'pred'", "'.'", "'fun'", "'('", "')'", "'assert'", "'run'", "'check'", 
		"'for'", "'but'", "'exactly'", "'none'", "'univ'", "'iden'", "'-'", "'is'", 
		"'sat'", "'unsat'", "'theorem'", "'forge_error'", "'test'", "'expect'", 
		"'suite'", "'|'", "'all'", "'sufficient'", "'necessary'", "'let'", "'bind'", 
		"'or'", "'xor'", "'iff'", "'imp'", "'else'", "'and'", "'until'", "'release'", 
		"'since'", "'triggered'", "'neg'", "'always'", "'eventually'", "'after'", 
		"'before'", "'once'", "'historically'", "'#'", "'pplus'", "'amp'", "'subt'", 
		"'supt'", "'''", "'~'", "'exp'", "'*'", "'@'", "'`'", "'this'", "'sexpr'", 
		"'inst'", "'eval'", "'example'", "'->'", "'='", "'<'", "'>'", "'<='", 
		"'>='", "'ni'", "'no'", "'sum'", "'Int'", "'option'", "','", "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPEN_TOK", "LEFT_SQUARE_TOK", "RIGHT_SQUARE_TOK", "AS_TOK", 
		"FILE_PATH_TOK", "VAR_TOK", "ABSTRACT_TOK", "SIG_TOK", "LEFT_CURLY_TOK", 
		"RIGHT_CURLY_TOK", "EXTENDS_TOK", "IN_TOK", "PLUS_TOK", "LONE_TOK", "SOME_TOK", 
		"ONE_TOK", "TWO_TOK", "SET_TOK", "FUNC_TOK", "PFUNC_TOK", "DISJ_TOK", 
		"COLON_TOK", "WHEAT_TOK", "PRED_TOK", "DOT_TOK", "FUN_TOK", "LEFT_PAREN_TOK", 
		"RIGHT_PAREN_TOK", "ASSERT_TOK", "RUN_TOK", "CHECK_TOK", "FOR_TOK", "BUT_TOK", 
		"EXACTLY_TOK", "NONE_TOK", "UNIV_TOK", "IDEN_TOK", "MINUS_TOK", "IS_TOK", 
		"SAT_TOK", "UNSAT_TOK", "THEOREM_TOK", "FORGE_ERROR_TOK", "TEST_TOK", 
		"EXPECT_TOK", "SUITE_TOK", "BAR_TOK", "ALL_TOK", "SUFFICIENT_TOK", "NECESSARY_TOK", 
		"LET_TOK", "BIND_TOK", "OR_TOK", "XOR_TOK", "IFF_TOK", "IMP_TOK", "ELSE_TOK", 
		"AND_TOK", "UNTIL_TOK", "RELEASE_TOK", "SINCE_TOK", "TRIGGERED_TOK", "NEG_TOK", 
		"ALWAYS_TOK", "EVENTUALLY_TOK", "AFTER_TOK", "BEFORE_TOK", "ONCE_TOK", 
		"HISTORICALLY_TOK", "CARD_TOK", "PPLUS_TOK", "AMP_TOK", "SUBT_TOK", "SUPT_TOK", 
		"PRIME_TOK", "TILDE_TOK", "EXP_TOK", "STAR_TOK", "AT_TOK", "BACKQUOTE_TOK", 
		"THIS_TOK", "SEXPR_TOK", "INST_TOK", "EVAL_TOK", "EXAMPLE_TOK", "ARROW_TOK", 
		"EQ_TOK", "LT_TOK", "GT_TOK", "LEQ_TOK", "GEQ_TOK", "NI_TOK", "NO_TOK", 
		"SUM_TOK", "INT_TOK", "OPTION_TOK", "COMMA_TOK", "SLASH_TOK", "NUM_CONST_TOK", 
		"IDENTIFIER_TOK", "WS", "CCOMMENT", "COMMENT", "MULTCOMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ForgeLexer._LITERAL_NAMES, ForgeLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ForgeLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ForgeLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ForgeLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return ForgeLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ForgeLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ForgeLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ForgeLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02j\u02DB\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03" +
		"!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03" +
		"&\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03" +
		"-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"0\x030\x031\x031\x031\x031\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x034\x03" +
		"4\x034\x034\x035\x035\x035\x035\x035\x036\x036\x036\x037\x037\x037\x03" +
		"7\x038\x038\x038\x038\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03:\x03" +
		";\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x03" +
		"=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03" +
		"?\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03E\x03" +
		"E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03" +
		"I\x03J\x03J\x03J\x03J\x03J\x03K\x03K\x03K\x03K\x03K\x03L\x03L\x03M\x03" +
		"M\x03N\x03N\x03N\x03N\x03O\x03O\x03P\x03P\x03Q\x03Q\x03R\x03R\x03R\x03" +
		"R\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x03U\x03" +
		"U\x03U\x03U\x03U\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03W\x03W\x03" +
		"W\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03]" +
		"\x03]\x03]\x03^\x03^\x03^\x03_\x03_\x03_\x03_\x03`\x03`\x03`\x03`\x03" +
		"a\x03a\x03a\x03a\x03a\x03a\x03a\x03b\x03b\x03c\x03c\x03d\x06d\u02A6\n" +
		"d\rd\x0Ed\u02A7\x03e\x03e\x07e\u02AC\ne\fe\x0Ee\u02AF\ve\x03f\x06f\u02B2" +
		"\nf\rf\x0Ef\u02B3\x03f\x03f\x03g\x03g\x03g\x03g\x07g\u02BC\ng\fg\x0Eg" +
		"\u02BF\vg\x03g\x03g\x03h\x03h\x03h\x03h\x07h\u02C7\nh\fh\x0Eh\u02CA\v" +
		"h\x03h\x03h\x03i\x03i\x03i\x03i\x07i\u02D2\ni\fi\x0Ei\u02D5\vi\x03i\x03" +
		"i\x03i\x03i\x03i\x03\u02D3\x02\x02j\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
		"\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
		"\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13" +
		"%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02" +
		"\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02" +
		"$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]" +
		"\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x029q\x02:s\x02" +
		";u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02B\x83\x02C\x85\x02D\x87" +
		"\x02E\x89\x02F\x8B\x02G\x8D\x02H\x8F\x02I\x91\x02J\x93\x02K\x95\x02L\x97" +
		"\x02M\x99\x02N\x9B\x02O\x9D\x02P\x9F\x02Q\xA1\x02R\xA3\x02S\xA5\x02T\xA7" +
		"\x02U\xA9\x02V\xAB\x02W\xAD\x02X\xAF\x02Y\xB1\x02Z\xB3\x02[\xB5\x02\\" +
		"\xB7\x02]\xB9\x02^\xBB\x02_\xBD\x02`\xBF\x02a\xC1\x02b\xC3\x02c\xC5\x02" +
		"d\xC7\x02e\xC9\x02f\xCB\x02g\xCD\x02h\xCF\x02i\xD1\x02j\x03\x02\x07\x03" +
		"\x022;\x05\x02C\\aac|\x06\x022;C\\aac|\x05\x02\v\f\x0F\x0F\"\"\x04\x02" +
		"\f\f\x0F\x0F\x02\u02E0\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
		"\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
		"\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
		"\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03" +
		"\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02" +
		"\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x02" +
		"3\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02" +
		"\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02" +
		"\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03" +
		"\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02" +
		"\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02" +
		"U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02" +
		"\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02" +
		"\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03" +
		"\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02" +
		"\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02" +
		"w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02}\x03\x02" +
		"\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02\x02\x83\x03\x02" +
		"\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02\x02\x89\x03\x02" +
		"\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02\x02\x02\x8F\x03\x02" +
		"\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02\x02\x02\x95\x03\x02" +
		"\x02\x02\x02\x97\x03\x02\x02\x02\x02\x99\x03\x02\x02\x02\x02\x9B\x03\x02" +
		"\x02\x02\x02\x9D\x03\x02\x02\x02\x02\x9F\x03\x02\x02\x02\x02\xA1\x03\x02" +
		"\x02\x02\x02\xA3\x03\x02\x02\x02\x02\xA5\x03\x02\x02\x02\x02\xA7\x03\x02" +
		"\x02\x02\x02\xA9\x03\x02\x02\x02\x02\xAB\x03\x02\x02\x02\x02\xAD\x03\x02" +
		"\x02\x02\x02\xAF\x03\x02\x02\x02\x02\xB1\x03\x02\x02\x02\x02\xB3\x03\x02" +
		"\x02\x02\x02\xB5\x03\x02\x02\x02\x02\xB7\x03\x02\x02\x02\x02\xB9\x03\x02" +
		"\x02\x02\x02\xBB\x03\x02\x02\x02\x02\xBD\x03\x02\x02\x02\x02\xBF\x03\x02" +
		"\x02\x02\x02\xC1\x03\x02\x02\x02\x02\xC3\x03\x02\x02\x02\x02\xC5\x03\x02" +
		"\x02\x02\x02\xC7\x03\x02\x02\x02\x02\xC9\x03\x02\x02\x02\x02\xCB\x03\x02" +
		"\x02\x02\x02\xCD\x03\x02\x02\x02\x02\xCF\x03\x02\x02\x02\x02\xD1\x03\x02" +
		"\x02\x02\x03\xD3\x03\x02\x02\x02\x05\xD8\x03\x02\x02\x02\x07\xDA\x03\x02" +
		"\x02\x02\t\xDC\x03\x02\x02\x02\v\xDF\x03\x02\x02\x02\r\xE8\x03\x02\x02" +
		"\x02\x0F\xEC\x03\x02\x02\x02\x11\xF5\x03\x02\x02\x02\x13\xF9\x03\x02\x02" +
		"\x02\x15\xFB\x03\x02\x02\x02\x17\xFD\x03\x02\x02\x02\x19\u0105\x03\x02" +
		"\x02\x02\x1B\u0108\x03\x02\x02\x02\x1D\u010A\x03\x02\x02\x02\x1F\u010F" +
		"\x03\x02\x02\x02!\u0114\x03\x02\x02\x02#\u0118\x03\x02\x02\x02%\u011C" +
		"\x03\x02\x02\x02\'\u0120\x03\x02\x02\x02)\u0125\x03\x02\x02\x02+\u012B" +
		"\x03\x02\x02\x02-\u0130\x03\x02\x02\x02/\u0132\x03\x02\x02\x021\u0138" +
		"\x03\x02\x02\x023\u013D\x03\x02\x02\x025\u013F\x03\x02\x02\x027\u0143" +
		"\x03\x02\x02\x029\u0145\x03\x02\x02\x02;\u0147\x03\x02\x02\x02=\u014E" +
		"\x03\x02\x02\x02?\u0152\x03\x02\x02\x02A\u0158\x03\x02\x02\x02C\u015C" +
		"\x03\x02\x02\x02E\u0160\x03\x02\x02\x02G\u0168\x03\x02\x02\x02I\u016D" +
		"\x03\x02\x02\x02K\u0172\x03\x02\x02\x02M\u0177\x03\x02\x02\x02O\u0179" +
		"\x03\x02\x02\x02Q\u017C\x03\x02\x02\x02S\u0180\x03\x02\x02\x02U\u0186" +
		"\x03\x02\x02\x02W\u018E\x03\x02\x02\x02Y\u019A\x03\x02\x02\x02[\u019F" +
		"\x03\x02\x02\x02]\u01A6\x03\x02\x02\x02_\u01AC\x03\x02\x02\x02a\u01AE" +
		"\x03\x02\x02\x02c\u01B2\x03\x02\x02\x02e\u01BD\x03\x02\x02\x02g\u01C7" +
		"\x03\x02\x02\x02i\u01CB\x03\x02\x02\x02k\u01D0\x03\x02\x02\x02m\u01D3" +
		"\x03\x02\x02\x02o\u01D7\x03\x02\x02\x02q\u01DB\x03\x02\x02\x02s\u01DF" +
		"\x03\x02\x02\x02u\u01E4\x03\x02\x02\x02w\u01E8\x03\x02\x02\x02y\u01EE" +
		"\x03\x02\x02\x02{\u01F6\x03\x02\x02\x02}\u01FC\x03\x02\x02\x02\x7F\u0206" +
		"\x03\x02\x02\x02\x81\u020A\x03\x02\x02\x02\x83\u0211\x03\x02\x02\x02\x85" +
		"\u021C\x03\x02\x02\x02\x87\u0222\x03\x02\x02\x02\x89\u0229\x03\x02\x02" +
		"\x02\x8B\u022E\x03\x02\x02\x02\x8D\u023B\x03\x02\x02\x02\x8F\u023D\x03" +
		"\x02\x02\x02\x91\u0243\x03\x02\x02\x02\x93\u0247\x03\x02\x02\x02\x95\u024C" +
		"\x03\x02\x02\x02\x97\u0251\x03\x02\x02\x02\x99\u0253\x03\x02\x02\x02\x9B" +
		"\u0255\x03\x02\x02\x02\x9D\u0259\x03\x02\x02\x02\x9F\u025B\x03\x02\x02" +
		"\x02\xA1\u025D\x03\x02\x02\x02\xA3\u025F\x03\x02\x02\x02\xA5\u0264\x03" +
		"\x02\x02\x02\xA7\u026A\x03\x02\x02\x02\xA9\u026F\x03\x02\x02\x02\xAB\u0274" +
		"\x03\x02\x02\x02\xAD\u027C\x03\x02\x02\x02\xAF\u027F\x03\x02\x02\x02\xB1" +
		"\u0281\x03\x02\x02\x02\xB3\u0283\x03\x02\x02\x02\xB5\u0285\x03\x02\x02" +
		"\x02\xB7\u0288\x03\x02\x02\x02\xB9\u028B\x03\x02\x02\x02\xBB\u028E\x03" +
		"\x02\x02\x02\xBD\u0291\x03\x02\x02\x02\xBF\u0295\x03\x02\x02\x02\xC1\u0299" +
		"\x03\x02\x02\x02\xC3\u02A0\x03\x02\x02\x02\xC5\u02A2\x03\x02\x02\x02\xC7" +
		"\u02A5\x03\x02\x02\x02\xC9\u02A9\x03\x02\x02\x02\xCB\u02B1\x03\x02\x02" +
		"\x02\xCD\u02B7\x03\x02\x02\x02\xCF\u02C2\x03\x02\x02\x02\xD1\u02CD\x03" +
		"\x02\x02\x02\xD3\xD4\x07q\x02\x02\xD4\xD5\x07r\x02\x02\xD5\xD6\x07g\x02" +
		"\x02\xD6\xD7\x07p\x02\x02\xD7\x04\x03\x02\x02\x02\xD8\xD9\x07]\x02\x02" +
		"\xD9\x06\x03\x02\x02\x02\xDA\xDB\x07_\x02\x02\xDB\b\x03\x02\x02\x02\xDC" +
		"\xDD\x07c\x02\x02\xDD\xDE\x07u\x02\x02\xDE\n\x03\x02\x02\x02\xDF\xE0\x07" +
		"h\x02\x02\xE0\xE1\x07k\x02\x02\xE1\xE2\x07n\x02\x02\xE2\xE3\x07g\x02\x02" +
		"\xE3\xE4\x07r\x02\x02\xE4\xE5\x07c\x02\x02\xE5\xE6\x07v\x02\x02\xE6\xE7" +
		"\x07j\x02\x02\xE7\f\x03\x02\x02\x02\xE8\xE9\x07x\x02\x02\xE9\xEA\x07c" +
		"\x02\x02\xEA\xEB\x07t\x02\x02\xEB\x0E\x03\x02\x02\x02\xEC\xED\x07c\x02" +
		"\x02\xED\xEE\x07d\x02\x02\xEE\xEF\x07u\x02\x02\xEF\xF0\x07v\x02\x02\xF0" +
		"\xF1\x07t\x02\x02\xF1\xF2\x07c\x02\x02\xF2\xF3\x07e\x02\x02\xF3\xF4\x07" +
		"v\x02\x02\xF4\x10\x03\x02\x02\x02\xF5\xF6\x07u\x02\x02\xF6\xF7\x07k\x02" +
		"\x02\xF7\xF8\x07i\x02\x02\xF8\x12\x03\x02\x02\x02\xF9\xFA\x07}\x02\x02" +
		"\xFA\x14\x03\x02\x02\x02\xFB\xFC\x07\x7F\x02\x02\xFC\x16\x03\x02\x02\x02" +
		"\xFD\xFE\x07g\x02\x02\xFE\xFF\x07z\x02\x02\xFF\u0100\x07v\x02\x02\u0100" +
		"\u0101\x07g\x02\x02\u0101\u0102\x07p\x02\x02\u0102\u0103\x07f\x02\x02" +
		"\u0103\u0104\x07u\x02\x02\u0104\x18\x03\x02\x02\x02\u0105\u0106\x07k\x02" +
		"\x02\u0106\u0107\x07p\x02\x02\u0107\x1A\x03\x02\x02\x02\u0108\u0109\x07" +
		"-\x02\x02\u0109\x1C\x03\x02\x02\x02\u010A\u010B\x07n\x02\x02\u010B\u010C" +
		"\x07q\x02\x02\u010C\u010D\x07p\x02\x02\u010D\u010E\x07g\x02\x02\u010E" +
		"\x1E\x03\x02\x02\x02\u010F\u0110\x07u\x02\x02\u0110\u0111\x07q\x02\x02" +
		"\u0111\u0112\x07o\x02\x02\u0112\u0113\x07g\x02\x02\u0113 \x03\x02\x02" +
		"\x02\u0114\u0115\x07q\x02\x02\u0115\u0116\x07p\x02\x02\u0116\u0117\x07" +
		"g\x02\x02\u0117\"\x03\x02\x02\x02\u0118\u0119\x07v\x02\x02\u0119\u011A" +
		"\x07y\x02\x02\u011A\u011B\x07q\x02\x02\u011B$\x03\x02\x02\x02\u011C\u011D" +
		"\x07u\x02\x02\u011D\u011E\x07g\x02\x02\u011E\u011F\x07v\x02\x02\u011F" +
		"&\x03\x02\x02\x02\u0120\u0121\x07h\x02\x02\u0121\u0122\x07w\x02\x02\u0122" +
		"\u0123\x07p\x02\x02\u0123\u0124\x07e\x02\x02\u0124(\x03\x02\x02\x02\u0125" +
		"\u0126\x07r\x02\x02\u0126\u0127\x07h\x02\x02\u0127\u0128\x07w\x02\x02" +
		"\u0128\u0129\x07p\x02\x02\u0129\u012A\x07e\x02\x02\u012A*\x03\x02\x02" +
		"\x02\u012B\u012C\x07f\x02\x02\u012C\u012D\x07k\x02\x02\u012D\u012E\x07" +
		"u\x02\x02\u012E\u012F\x07l\x02\x02\u012F,\x03\x02\x02\x02\u0130\u0131" +
		"\x07<\x02\x02\u0131.\x03\x02\x02\x02\u0132\u0133\x07y\x02\x02\u0133\u0134" +
		"\x07j\x02\x02\u0134\u0135\x07g\x02\x02\u0135\u0136\x07c\x02\x02\u0136" +
		"\u0137\x07v\x02\x02\u01370\x03\x02\x02\x02\u0138\u0139\x07r\x02\x02\u0139" +
		"\u013A\x07t\x02\x02\u013A\u013B\x07g\x02\x02\u013B\u013C\x07f\x02\x02" +
		"\u013C2\x03\x02\x02\x02\u013D\u013E\x070\x02\x02\u013E4\x03\x02\x02\x02" +
		"\u013F\u0140\x07h\x02\x02\u0140\u0141\x07w\x02\x02\u0141\u0142\x07p\x02" +
		"\x02\u01426\x03\x02\x02\x02\u0143\u0144\x07*\x02\x02\u01448\x03\x02\x02" +
		"\x02\u0145\u0146\x07+\x02\x02\u0146:\x03\x02\x02\x02\u0147\u0148\x07c" +
		"\x02\x02\u0148\u0149\x07u\x02\x02\u0149\u014A\x07u\x02\x02\u014A\u014B" +
		"\x07g\x02\x02\u014B\u014C\x07t\x02\x02\u014C\u014D\x07v\x02\x02\u014D" +
		"<\x03\x02\x02\x02\u014E\u014F\x07t\x02\x02\u014F\u0150\x07w\x02\x02\u0150" +
		"\u0151\x07p\x02\x02\u0151>\x03\x02\x02\x02\u0152\u0153\x07e\x02\x02\u0153" +
		"\u0154\x07j\x02\x02\u0154\u0155\x07g\x02\x02\u0155\u0156\x07e\x02\x02" +
		"\u0156\u0157\x07m\x02\x02\u0157@\x03\x02\x02\x02\u0158\u0159\x07h\x02" +
		"\x02\u0159\u015A\x07q\x02\x02\u015A\u015B\x07t\x02\x02\u015BB\x03\x02" +
		"\x02\x02\u015C\u015D\x07d\x02\x02\u015D\u015E\x07w\x02\x02\u015E\u015F" +
		"\x07v\x02\x02\u015FD\x03\x02\x02\x02\u0160\u0161\x07g\x02\x02\u0161\u0162" +
		"\x07z\x02\x02\u0162\u0163\x07c\x02\x02\u0163\u0164\x07e\x02\x02\u0164" +
		"\u0165\x07v\x02\x02\u0165\u0166\x07n\x02\x02\u0166\u0167\x07{\x02\x02" +
		"\u0167F\x03\x02\x02\x02\u0168\u0169\x07p\x02\x02\u0169\u016A\x07q\x02" +
		"\x02\u016A\u016B\x07p\x02\x02\u016B\u016C\x07g\x02\x02\u016CH\x03\x02" +
		"\x02\x02\u016D\u016E\x07w\x02\x02\u016E\u016F\x07p\x02\x02\u016F\u0170" +
		"\x07k\x02\x02\u0170\u0171\x07x\x02\x02\u0171J\x03\x02\x02\x02\u0172\u0173" +
		"\x07k\x02\x02\u0173\u0174\x07f\x02\x02\u0174\u0175\x07g\x02\x02\u0175" +
		"\u0176\x07p\x02\x02\u0176L\x03\x02\x02\x02\u0177\u0178\x07/\x02\x02\u0178" +
		"N\x03\x02\x02\x02\u0179\u017A\x07k\x02\x02\u017A\u017B\x07u\x02\x02\u017B" +
		"P\x03\x02\x02\x02\u017C\u017D\x07u\x02\x02\u017D\u017E\x07c\x02\x02\u017E" +
		"\u017F\x07v\x02\x02\u017FR\x03\x02\x02\x02\u0180\u0181\x07w\x02\x02\u0181" +
		"\u0182\x07p\x02\x02\u0182\u0183\x07u\x02\x02\u0183\u0184\x07c\x02\x02" +
		"\u0184\u0185\x07v\x02\x02\u0185T\x03\x02\x02\x02\u0186\u0187\x07v\x02" +
		"\x02\u0187\u0188\x07j\x02\x02\u0188\u0189\x07g\x02\x02\u0189\u018A\x07" +
		"q\x02\x02\u018A\u018B\x07t\x02\x02\u018B\u018C\x07g\x02\x02\u018C\u018D" +
		"\x07o\x02\x02\u018DV\x03\x02\x02\x02\u018E\u018F\x07h\x02\x02\u018F\u0190" +
		"\x07q\x02\x02\u0190\u0191\x07t\x02\x02\u0191\u0192\x07i\x02\x02\u0192" +
		"\u0193\x07g\x02\x02\u0193\u0194\x07a\x02\x02\u0194\u0195\x07g\x02\x02" +
		"\u0195\u0196\x07t\x02\x02\u0196\u0197\x07t\x02\x02\u0197\u0198\x07q\x02" +
		"\x02\u0198\u0199\x07t\x02\x02\u0199X\x03\x02\x02\x02\u019A\u019B\x07v" +
		"\x02\x02\u019B\u019C\x07g\x02\x02\u019C\u019D\x07u\x02\x02\u019D\u019E" +
		"\x07v\x02\x02\u019EZ\x03\x02\x02\x02\u019F\u01A0\x07g\x02\x02\u01A0\u01A1" +
		"\x07z\x02\x02\u01A1\u01A2\x07r\x02\x02\u01A2\u01A3\x07g\x02\x02\u01A3" +
		"\u01A4\x07e\x02\x02\u01A4\u01A5\x07v\x02\x02\u01A5\\\x03\x02\x02\x02\u01A6" +
		"\u01A7\x07u\x02\x02\u01A7\u01A8\x07w\x02\x02\u01A8\u01A9\x07k\x02\x02" +
		"\u01A9\u01AA\x07v\x02\x02\u01AA\u01AB\x07g\x02\x02\u01AB^\x03\x02\x02" +
		"\x02\u01AC\u01AD\x07~\x02\x02\u01AD`\x03\x02\x02\x02\u01AE\u01AF\x07c" +
		"\x02\x02\u01AF\u01B0\x07n\x02\x02\u01B0\u01B1\x07n\x02\x02\u01B1b\x03" +
		"\x02\x02\x02\u01B2\u01B3\x07u\x02\x02\u01B3\u01B4\x07w\x02\x02\u01B4\u01B5" +
		"\x07h\x02\x02\u01B5\u01B6\x07h\x02\x02\u01B6\u01B7\x07k\x02\x02\u01B7" +
		"\u01B8\x07e\x02\x02\u01B8\u01B9\x07k\x02\x02\u01B9\u01BA\x07g\x02\x02" +
		"\u01BA\u01BB\x07p\x02\x02\u01BB\u01BC\x07v\x02\x02\u01BCd\x03\x02\x02" +
		"\x02\u01BD\u01BE\x07p\x02\x02\u01BE\u01BF\x07g\x02\x02\u01BF\u01C0\x07" +
		"e\x02\x02\u01C0\u01C1\x07g\x02\x02\u01C1\u01C2\x07u\x02\x02\u01C2\u01C3" +
		"\x07u\x02\x02\u01C3\u01C4\x07c\x02\x02\u01C4\u01C5\x07t\x02\x02\u01C5" +
		"\u01C6\x07{\x02\x02\u01C6f\x03\x02\x02\x02\u01C7\u01C8\x07n\x02\x02\u01C8" +
		"\u01C9\x07g\x02\x02\u01C9\u01CA\x07v\x02\x02\u01CAh\x03\x02\x02\x02\u01CB" +
		"\u01CC\x07d\x02\x02\u01CC\u01CD\x07k\x02\x02\u01CD\u01CE\x07p\x02\x02" +
		"\u01CE\u01CF\x07f\x02\x02\u01CFj\x03\x02\x02\x02\u01D0\u01D1\x07q\x02" +
		"\x02\u01D1\u01D2\x07t\x02\x02\u01D2l\x03\x02\x02\x02\u01D3\u01D4\x07z" +
		"\x02\x02\u01D4\u01D5\x07q\x02\x02\u01D5\u01D6\x07t\x02\x02\u01D6n\x03" +
		"\x02\x02\x02\u01D7\u01D8\x07k\x02\x02\u01D8\u01D9\x07h\x02\x02\u01D9\u01DA" +
		"\x07h\x02\x02\u01DAp\x03\x02\x02\x02\u01DB\u01DC\x07k\x02\x02\u01DC\u01DD" +
		"\x07o\x02\x02\u01DD\u01DE\x07r\x02\x02\u01DEr\x03\x02\x02\x02\u01DF\u01E0" +
		"\x07g\x02\x02\u01E0\u01E1\x07n\x02\x02\u01E1\u01E2\x07u\x02\x02\u01E2" +
		"\u01E3\x07g\x02\x02\u01E3t\x03\x02\x02\x02\u01E4\u01E5\x07c\x02\x02\u01E5" +
		"\u01E6\x07p\x02\x02\u01E6\u01E7\x07f\x02\x02\u01E7v\x03\x02\x02\x02\u01E8" +
		"\u01E9\x07w\x02\x02\u01E9\u01EA\x07p\x02\x02\u01EA\u01EB\x07v\x02\x02" +
		"\u01EB\u01EC\x07k\x02\x02\u01EC\u01ED\x07n\x02\x02\u01EDx\x03\x02\x02" +
		"\x02\u01EE\u01EF\x07t\x02\x02\u01EF\u01F0\x07g\x02\x02\u01F0\u01F1\x07" +
		"n\x02\x02\u01F1\u01F2\x07g\x02\x02\u01F2\u01F3\x07c\x02\x02\u01F3\u01F4" +
		"\x07u\x02\x02\u01F4\u01F5\x07g\x02\x02\u01F5z\x03\x02\x02\x02\u01F6\u01F7" +
		"\x07u\x02\x02\u01F7\u01F8\x07k\x02\x02\u01F8\u01F9\x07p\x02\x02\u01F9" +
		"\u01FA\x07e\x02\x02\u01FA\u01FB\x07g\x02\x02\u01FB|\x03\x02\x02\x02\u01FC" +
		"\u01FD\x07v\x02\x02\u01FD\u01FE\x07t\x02\x02\u01FE\u01FF\x07k\x02\x02" +
		"\u01FF\u0200\x07i\x02\x02\u0200\u0201\x07i\x02\x02\u0201\u0202\x07g\x02" +
		"\x02\u0202\u0203\x07t\x02\x02\u0203\u0204\x07g\x02\x02\u0204\u0205\x07" +
		"f\x02\x02\u0205~\x03\x02\x02\x02\u0206\u0207\x07p\x02\x02\u0207\u0208" +
		"\x07g\x02\x02\u0208\u0209\x07i\x02\x02\u0209\x80\x03\x02\x02\x02\u020A" +
		"\u020B\x07c\x02\x02\u020B\u020C\x07n\x02\x02\u020C\u020D\x07y\x02\x02" +
		"\u020D\u020E\x07c\x02\x02\u020E\u020F\x07{\x02\x02\u020F\u0210\x07u\x02" +
		"\x02\u0210\x82\x03\x02\x02\x02\u0211\u0212\x07g";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0212\u0213\x07x\x02\x02\u0213\u0214\x07g\x02\x02\u0214\u0215" +
		"\x07p\x02\x02\u0215\u0216\x07v\x02\x02\u0216\u0217\x07w\x02\x02\u0217" +
		"\u0218\x07c\x02\x02\u0218\u0219\x07n\x02\x02\u0219\u021A\x07n\x02\x02" +
		"\u021A\u021B\x07{\x02\x02\u021B\x84\x03\x02\x02\x02\u021C\u021D\x07c\x02" +
		"\x02\u021D\u021E\x07h\x02\x02\u021E\u021F\x07v\x02\x02\u021F\u0220\x07" +
		"g\x02\x02\u0220\u0221\x07t\x02\x02\u0221\x86\x03\x02\x02\x02\u0222\u0223" +
		"\x07d\x02\x02\u0223\u0224\x07g\x02\x02\u0224\u0225\x07h\x02\x02\u0225" +
		"\u0226\x07q\x02\x02\u0226\u0227\x07t\x02\x02\u0227\u0228\x07g\x02\x02" +
		"\u0228\x88\x03\x02\x02\x02\u0229\u022A\x07q\x02\x02\u022A\u022B\x07p\x02" +
		"\x02\u022B\u022C\x07e\x02\x02\u022C\u022D\x07g\x02\x02\u022D\x8A\x03\x02" +
		"\x02\x02\u022E\u022F\x07j\x02\x02\u022F\u0230\x07k\x02\x02\u0230\u0231" +
		"\x07u\x02\x02\u0231\u0232\x07v\x02\x02\u0232\u0233\x07q\x02\x02\u0233" +
		"\u0234\x07t\x02\x02\u0234\u0235\x07k\x02\x02\u0235\u0236\x07e\x02\x02" +
		"\u0236\u0237\x07c\x02\x02\u0237\u0238\x07n\x02\x02\u0238\u0239\x07n\x02" +
		"\x02\u0239\u023A\x07{\x02\x02\u023A\x8C\x03\x02\x02\x02\u023B\u023C\x07" +
		"%\x02\x02\u023C\x8E\x03\x02\x02\x02\u023D\u023E\x07r\x02\x02\u023E\u023F" +
		"\x07r\x02\x02\u023F\u0240\x07n\x02\x02\u0240\u0241\x07w\x02\x02\u0241" +
		"\u0242\x07u\x02\x02\u0242\x90\x03\x02\x02\x02\u0243\u0244\x07c\x02\x02" +
		"\u0244\u0245\x07o\x02\x02\u0245\u0246\x07r\x02\x02\u0246\x92\x03\x02\x02" +
		"\x02\u0247\u0248\x07u\x02\x02\u0248\u0249\x07w\x02\x02\u0249\u024A\x07" +
		"d\x02\x02\u024A\u024B\x07v\x02\x02\u024B\x94\x03\x02\x02\x02\u024C\u024D" +
		"\x07u\x02\x02\u024D\u024E\x07w\x02\x02\u024E\u024F\x07r\x02\x02\u024F" +
		"\u0250\x07v\x02\x02\u0250\x96\x03\x02\x02\x02\u0251\u0252\x07)\x02\x02" +
		"\u0252\x98\x03\x02\x02\x02\u0253\u0254\x07\x80\x02\x02\u0254\x9A\x03\x02" +
		"\x02\x02\u0255\u0256\x07g\x02\x02\u0256\u0257\x07z\x02\x02\u0257\u0258" +
		"\x07r\x02\x02\u0258\x9C\x03\x02\x02\x02\u0259\u025A\x07,\x02\x02\u025A" +
		"\x9E\x03\x02\x02\x02\u025B\u025C\x07B\x02\x02\u025C\xA0\x03\x02\x02\x02" +
		"\u025D\u025E\x07b\x02\x02\u025E\xA2\x03\x02\x02\x02\u025F\u0260\x07v\x02" +
		"\x02\u0260\u0261\x07j\x02\x02\u0261\u0262\x07k\x02\x02\u0262\u0263\x07" +
		"u\x02\x02\u0263\xA4\x03\x02\x02\x02\u0264\u0265\x07u\x02\x02\u0265\u0266" +
		"\x07g\x02\x02\u0266\u0267\x07z\x02\x02\u0267\u0268\x07r\x02\x02\u0268" +
		"\u0269\x07t\x02\x02\u0269\xA6\x03\x02\x02\x02\u026A\u026B\x07k\x02\x02" +
		"\u026B\u026C\x07p\x02\x02\u026C\u026D\x07u\x02\x02\u026D\u026E\x07v\x02" +
		"\x02\u026E\xA8\x03\x02\x02\x02\u026F\u0270\x07g\x02\x02\u0270\u0271\x07" +
		"x\x02\x02\u0271\u0272\x07c\x02\x02\u0272\u0273\x07n\x02\x02\u0273\xAA" +
		"\x03\x02\x02\x02\u0274\u0275\x07g\x02\x02\u0275\u0276\x07z\x02\x02\u0276" +
		"\u0277\x07c\x02\x02\u0277\u0278\x07o\x02\x02\u0278\u0279\x07r\x02\x02" +
		"\u0279\u027A\x07n\x02\x02\u027A\u027B\x07g\x02\x02\u027B\xAC\x03\x02\x02" +
		"\x02\u027C\u027D\x07/\x02\x02\u027D\u027E\x07@\x02\x02\u027E\xAE\x03\x02" +
		"\x02\x02\u027F\u0280\x07?\x02\x02\u0280\xB0\x03\x02\x02\x02\u0281\u0282" +
		"\x07>\x02\x02\u0282\xB2\x03\x02\x02\x02\u0283\u0284\x07@\x02\x02\u0284" +
		"\xB4\x03\x02\x02\x02\u0285\u0286\x07>\x02\x02\u0286\u0287\x07?\x02\x02" +
		"\u0287\xB6\x03\x02\x02\x02\u0288\u0289\x07@\x02\x02\u0289\u028A\x07?\x02" +
		"\x02\u028A\xB8\x03\x02\x02\x02\u028B\u028C\x07p\x02\x02\u028C\u028D\x07" +
		"k\x02\x02\u028D\xBA\x03\x02\x02\x02\u028E\u028F\x07p\x02\x02\u028F\u0290" +
		"\x07q\x02\x02\u0290\xBC\x03\x02\x02\x02\u0291\u0292\x07u\x02\x02\u0292" +
		"\u0293\x07w\x02\x02\u0293\u0294\x07o\x02\x02\u0294\xBE\x03\x02\x02\x02" +
		"\u0295\u0296\x07K\x02\x02\u0296\u0297\x07p\x02\x02\u0297\u0298\x07v\x02" +
		"\x02\u0298\xC0\x03\x02\x02\x02\u0299\u029A\x07q\x02\x02\u029A\u029B\x07" +
		"r\x02\x02\u029B\u029C\x07v\x02\x02\u029C\u029D\x07k\x02\x02\u029D\u029E" +
		"\x07q\x02\x02\u029E\u029F\x07p\x02\x02\u029F\xC2\x03\x02\x02\x02\u02A0" +
		"\u02A1\x07.\x02\x02\u02A1\xC4\x03\x02\x02\x02\u02A2\u02A3\x071\x02\x02" +
		"\u02A3\xC6\x03\x02\x02\x02\u02A4\u02A6\t\x02\x02\x02\u02A5\u02A4\x03\x02" +
		"\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A5\x03\x02\x02\x02\u02A7" +
		"\u02A8\x03\x02\x02\x02\u02A8\xC8\x03\x02\x02\x02\u02A9\u02AD\t\x03\x02" +
		"\x02\u02AA\u02AC\t\x04\x02\x02\u02AB\u02AA\x03\x02\x02\x02\u02AC\u02AF" +
		"\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02" +
		"\u02AE\xCA\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02B0\u02B2\t\x05" +
		"\x02\x02\u02B1\u02B0\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3" +
		"\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4\u02B5\x03\x02" +
		"\x02\x02\u02B5\u02B6\bf\x02\x02\u02B6\xCC\x03\x02\x02\x02\u02B7\u02B8" +
		"\x071\x02\x02\u02B8\u02B9\x071\x02\x02\u02B9\u02BD\x03\x02\x02\x02\u02BA" +
		"\u02BC\n\x06\x02\x02\u02BB\u02BA\x03\x02\x02\x02\u02BC\u02BF\x03\x02\x02" +
		"\x02\u02BD\u02BB\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02C0" +
		"\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02C0\u02C1\bg\x02\x02\u02C1" +
		"\xCE\x03\x02\x02\x02\u02C2\u02C3\x07/\x02\x02\u02C3\u02C4\x07/\x02\x02" +
		"\u02C4\u02C8\x03\x02\x02\x02\u02C5\u02C7\n\x06\x02\x02\u02C6\u02C5\x03" +
		"\x02\x02\x02\u02C7\u02CA\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02\u02C8" +
		"\u02C9\x03\x02\x02\x02\u02C9\u02CB\x03\x02\x02\x02\u02CA\u02C8\x03\x02" +
		"\x02\x02\u02CB\u02CC\bh\x02\x02\u02CC\xD0\x03\x02\x02\x02\u02CD\u02CE" +
		"\x071\x02\x02\u02CE\u02CF\x07,\x02\x02\u02CF\u02D3\x03\x02\x02\x02\u02D0" +
		"\u02D2\v\x02\x02\x02\u02D1\u02D0\x03\x02\x02\x02\u02D2\u02D5\x03\x02\x02" +
		"\x02\u02D3\u02D4\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4\u02D6" +
		"\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\u02D7\x07,\x02\x02" +
		"\u02D7\u02D8\x071\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DA\bi\x02" +
		"\x02\u02DA\xD2\x03\x02\x02\x02\t\x02\u02A7\u02AD\u02B3\u02BD\u02C8\u02D3" +
		"\x03\b\x02\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			ForgeLexer._serializedATNSegment0,
			ForgeLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ForgeLexer.__ATN) {
			ForgeLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ForgeLexer._serializedATN));
		}

		return ForgeLexer.__ATN;
	}

}

