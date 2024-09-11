# Forge ANTLR

ANTLR4 grammar for [Forge](https://forge-fm.org/)


```
antlr -Dlanguage=JavaScript ForgeLexer.g4 ForgeParser.g4

```



```
import * as antlr4 from 'antlr4';
import { MyGrammarLexer } from './MyGrammarLexer';
import { MyGrammarParser } from './MyGrammarParser';
```