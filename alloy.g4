

// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging

grammar alloy;

alloyModule
    : moduleDecl? import_* paragraph+ EOF
    ;

moduleDecl
    : 'module' qualName name (',' name)*
    ;

import_
    : 'open' qualName (',' qualName)* ('as' name)?
    ;

paragraph
    : sigDecl
    | factDecl
    | predDecl
    | funDecl
    | assertDecl
    | cmdDecl
    ;

sigDecl
    : 'abstract'? mult? 'sig' name (',' name)* sigExt? '{' (decl (',' decl)*)? '}' block?
    ;

sigExt
    : 'extends' qualName
    | 'in' qualName ('+' qualName)*
    ;

mult
    : 'lone'
    | 'some'
    | 'one'
    ;

decl
    : 'disj'? name (',' name)* ':' 'disj'? expr
    ;

factDecl
    : 'fact' name? block
    ;

predDecl
    : 'pred' (qualName '.')? name paraDecls? block
    ;

funDecl
    : 'fun' (qualName '.')? name paraDecls? ':' expr '{' expr '}'
    ;

paraDecls
    : '(' decl (',' decl)* ')'
    | '[' decl (',' decl)* ']'
    ;

assertDecl
    : 'assert' name? block
    ;

cmdDecl
    : (name ':')? ('run' | 'check')? (qualName | block) scope?
    ;

scope
    : 'for' number ('but' typescope (',' typescope)*)?
    | 'for' typescope (',' typescope)*
    ;

typescope
    : 'exactly'? number qualName
    ;

expr
    : const_
    | qualName
    | '@' name
    | 'this'
    | unOp expr
    | expr binOp expr
    | expr arrowOp expr
    | expr '[' (',' expr)+ ']'
    | expr ('!' | 'not')? compareOp expr
    | expr ('=>' | 'implies')? expr 'else' expr
    | 'let' letDecl (',' letDecl)* blockOrBar
    | quant decl (',' decl)* blockOrBar
    | '{' decl (',' decl)* blockOrBar '}'
    | '(' expr ')'
    | block
    ;

const_
    : '-'? number
    | 'none'
    | 'univ'
    | 'iden'
    ;

unOp
    : '!'
    | 'not'
    | 'no'
    | mult
    | 'set'
    | '#'
    | '~'
    | '*'
    | '^'
    ;

binOp
    : '||'
    | 'or'
    | '&&'
    | 'and'
    | '<=>'
    | 'iff'
    | '=>'
    | 'implies'
    | '&'
    | '+'
    | '-'
    | '++'
    | '<:'
    | ':>'
    | '.'
    ;

arrowOp
    : (mult | 'set')? '->' (mult | 'set')?
    ;

compareOp
    : 'in'
    | '='
    | '<'
    | '>'
    | '=<'
    | '>='
    ;

letDecl
    : name '=' expr
    ;

block
    : '{' expr* '}'
    ;

blockOrBar
    : block
    | BAR expr
    ;

quant
    : 'all'
    | 'no'
    | 'sum'
    | mult
    ;

qualName
    : 'this/'? (name '/')* name
    ;

name
    : IDENTIFIER
    ;

number
    : DIGIT+
    ;

BAR
    : '|'
    ;

DIGIT
    : '0' .. '9'
    ;

IDENTIFIER
    : ('a' .. 'z' | 'A' .. 'Z') ('a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_')*
    ;

COMMENT
    : '//' ~ [\r\n]* -> skip
    ;

WS
    : [ \t\r\n] -> skip
    ;