lexer grammar ForgeLexer;

OPEN_TOK: 'open';
LEFT_SQUARE_TOK: '[';
RIGHT_SQUARE_TOK: ']';
AS_TOK: 'as';
FILE_PATH_TOK: 'filepath';
VAR_TOK: 'var';
ABSTRACT_TOK: 'abstract';
SIG_TOK: 'sig';
LEFT_CURLY_TOK: '{';
RIGHT_CURLY_TOK: '}';
EXTENDS_TOK: 'extends';
IN_TOK: 'in';
PLUS_TOK: '+';
LONE_TOK: 'lone';
SOME_TOK: 'some';
ONE_TOK: 'one';
TWO_TOK: 'two';
SET_TOK: 'set';
FUNC_TOK: 'func';
PFUNC_TOK: 'pfunc';
DISJ_TOK: 'disj';
COLON_TOK: ':';
WHEAT_TOK: 'wheat';
PRED_TOK: 'pred';
DOT_TOK: '.';
FUN_TOK: 'fun';
LEFT_PAREN_TOK: '(';
RIGHT_PAREN_TOK: ')';
ASSERT_TOK: 'assert';
RUN_TOK: 'run';
CHECK_TOK: 'check';
FOR_TOK: 'for';
BUT_TOK: 'but';
EXACTLY_TOK: 'exactly';
NONE_TOK: 'none';
UNIV_TOK: 'univ';
IDEN_TOK: 'iden';
MINUS_TOK: '-';
IS_TOK: 'is';
SAT_TOK: 'sat';
UNSAT_TOK: 'unsat';
THEOREM_TOK: 'theorem';
FORGE_ERROR_TOK: 'forge_error';
TEST_TOK: 'test';
EXPECT_TOK: 'expect';
SUITE_TOK: 'suite';
BAR_TOK: '|';
ALL_TOK: 'all';
SUFFICIENT_TOK: 'sufficient';
NECESSARY_TOK: 'necessary';
LET_TOK: 'let';
BIND_TOK: 'bind';
OR_TOK: 'or';
XOR_TOK: 'xor';
IFF_TOK: 'iff';
IMP_TOK: 'imp';
ELSE_TOK: 'else';
AND_TOK: 'and';
UNTIL_TOK: 'until';
RELEASE_TOK: 'release';
SINCE_TOK: 'since';
TRIGGERED_TOK: 'triggered';
NEG_TOK: 'neg';
ALWAYS_TOK: 'always';
EVENTUALLY_TOK: 'eventually';
AFTER_TOK: 'after';
BEFORE_TOK: 'before';
ONCE_TOK: 'once';
HISTORICALLY_TOK: 'historically';
CARD_TOK: '#';
PPLUS_TOK: 'pplus';
AMP_TOK: 'amp';
SUBT_TOK: 'subt';
SUPT_TOK: 'supt';
PRIME_TOK: '\'';
TILDE_TOK: '~';
EXP_TOK: 'exp';
STAR_TOK: '*';
AT_TOK: '@';
BACKQUOTE_TOK: '`';
THIS_TOK: 'this';
SEXPR_TOK: 'sexpr';
INST_TOK: 'inst';
EVAL_TOK: 'eval';
EXAMPLE_TOK: 'example';
ARROW_TOK: '->';
EQ_TOK: '=';
LT_TOK: '<';
GT_TOK: '>';
LEQ_TOK: '<=';
GEQ_TOK: '>=';
NI_TOK: 'ni';
NO_TOK: 'no';
SUM_TOK: 'sum';
INT_TOK: 'Int';
OPTION_TOK: 'option';
COMMA_TOK: ',';
SLASH_TOK: '/';
NUM_CONST_TOK: [0-9]+;
IDENTIFIER_TOK: [a-zA-Z_][a-zA-Z0-9_]*;

WS: [ \t\r\n]+ -> skip;
CCOMMENT:  '//' ~[\r\n]* -> skip;
COMMENT: '--' ~[\r\n]* -> skip;
MULTCOMMENT : '/*' .*? '*/' -> skip;
