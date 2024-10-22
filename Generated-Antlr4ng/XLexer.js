// Generated from X.g4 by ANTLR 4.13.1
import * as antlr from "antlr4ng";
export class XLexer extends antlr.Lexer {
    static QUALIFIED_ATTR = 1;
    static ATTR = 2;
    static MYID = 3;
    static DOT = 4;
    static LP = 5;
    static WS = 6;
    static channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];
    static literalNames = [
        null, null, null, null, "'.'", "'('"
    ];
    static symbolicNames = [
        null, "QUALIFIED_ATTR", "ATTR", "MYID", "DOT", "LP", "WS"
    ];
    static modeNames = [
        "DEFAULT_MODE",
    ];
    static ruleNames = [
        "QUALIFIED_ATTR", "ATTR", "MYID", "DOT", "LP", "WS", "ID",
    ];
    constructor(input) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, XLexer._ATN, XLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }
    get grammarFileName() { return "X.g4"; }
    get literalNames() { return XLexer.literalNames; }
    get symbolicNames() { return XLexer.symbolicNames; }
    get ruleNames() { return XLexer.ruleNames; }
    get serializedATN() { return XLexer._serializedATN; }
    get channelNames() { return XLexer.channelNames; }
    get modeNames() { return XLexer.modeNames; }
    sempred(localContext, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 0:
                return this.QUALIFIED_ATTR_sempred(localContext, predIndex);
        }
        return true;
    }
    QUALIFIED_ATTR_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 0:
                return this.inputStream.LA(1) == 32;
        }
        return true;
    }
    static _serializedATN = [
        4, 0, 6, 50, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2,
        6, 7, 6, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 5, 0, 21, 8, 0, 10, 0, 12, 0, 24, 9, 0, 1, 0, 1, 0, 1,
        1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 4, 5, 38, 8, 5, 11, 5, 12, 5, 39, 1,
        5, 1, 5, 1, 6, 1, 6, 5, 6, 46, 8, 6, 10, 6, 12, 6, 49, 9, 6, 0, 0, 7, 1, 1, 3, 2, 5, 3, 7, 4,
        9, 5, 11, 6, 13, 0, 1, 0, 3, 3, 0, 65, 90, 95, 95, 97, 122, 4, 0, 48, 57, 65, 90, 95, 95,
        97, 122, 3, 0, 9, 10, 13, 13, 32, 32, 51, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0,
        0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 1, 15, 1, 0, 0, 0, 3, 27, 1, 0, 0, 0,
        5, 30, 1, 0, 0, 0, 7, 32, 1, 0, 0, 0, 9, 34, 1, 0, 0, 0, 11, 37, 1, 0, 0, 0, 13, 43, 1, 0, 0,
        0, 15, 16, 5, 36, 0, 0, 16, 17, 3, 13, 6, 0, 17, 18, 5, 46, 0, 0, 18, 22, 7, 0, 0, 0, 19,
        21, 7, 1, 0, 0, 20, 19, 1, 0, 0, 0, 21, 24, 1, 0, 0, 0, 22, 20, 1, 0, 0, 0, 22, 23, 1, 0, 0,
        0, 23, 25, 1, 0, 0, 0, 24, 22, 1, 0, 0, 0, 25, 26, 4, 0, 0, 0, 26, 2, 1, 0, 0, 0, 27, 28, 5,
        36, 0, 0, 28, 29, 3, 13, 6, 0, 29, 4, 1, 0, 0, 0, 30, 31, 3, 13, 6, 0, 31, 6, 1, 0, 0, 0, 32,
        33, 5, 46, 0, 0, 33, 8, 1, 0, 0, 0, 34, 35, 5, 40, 0, 0, 35, 10, 1, 0, 0, 0, 36, 38, 7, 2,
        0, 0, 37, 36, 1, 0, 0, 0, 38, 39, 1, 0, 0, 0, 39, 37, 1, 0, 0, 0, 39, 40, 1, 0, 0, 0, 40, 41,
        1, 0, 0, 0, 41, 42, 6, 5, 0, 0, 42, 12, 1, 0, 0, 0, 43, 47, 7, 0, 0, 0, 44, 46, 7, 1, 0, 0,
        45, 44, 1, 0, 0, 0, 46, 49, 1, 0, 0, 0, 47, 45, 1, 0, 0, 0, 47, 48, 1, 0, 0, 0, 48, 14, 1,
        0, 0, 0, 49, 47, 1, 0, 0, 0, 4, 0, 22, 39, 47, 1, 6, 0, 0
    ];
    static __ATN;
    static get _ATN() {
        if (!XLexer.__ATN) {
            XLexer.__ATN = new antlr.ATNDeserializer().deserialize(XLexer._serializedATN);
        }
        return XLexer.__ATN;
    }
    static vocabulary = new antlr.Vocabulary(XLexer.literalNames, XLexer.symbolicNames, []);
    get vocabulary() {
        return XLexer.vocabulary;
    }
    static decisionsToDFA = XLexer._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
}
