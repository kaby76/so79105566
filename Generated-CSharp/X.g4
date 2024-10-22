grammar X;

start: .* EOF;
QUALIFIED_ATTR : '$' ID '.' ('a'..'z'|'A'..'Z'|'_') ('a'..'z'|'A'..'Z'|'_'|'0'..'9')* {this.InputStream.LA(1)==' '}? ;
ATTR:   '$' ID ;
MYID : ID;
DOT : '.';
LP: '(';
WS: [ \n\r\t]+ -> skip;
fragment ID  :   ('a'..'z'|'A'..'Z'|'_') ('a'..'z'|'A'..'Z'|'0'..'9'|'_')*;
