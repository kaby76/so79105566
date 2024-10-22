// Generated from X.g4 by ANTLR 4.13.1
import * as antlr from "antlr4ng";
export class XParser extends antlr.Parser {
    static QUALIFIED_ATTR = 1;
    static ATTR = 2;
    static MYID = 3;
    static DOT = 4;
    static LP = 5;
    static WS = 6;
    static RULE_start = 0;
    static literalNames = [
        null, null, null, null, "'.'", "'('"
    ];
    static symbolicNames = [
        null, "QUALIFIED_ATTR", "ATTR", "MYID", "DOT", "LP", "WS"
    ];
    static ruleNames = [
        "start",
    ];
    get grammarFileName() { return "X.g4"; }
    get literalNames() { return XParser.literalNames; }
    get symbolicNames() { return XParser.symbolicNames; }
    get ruleNames() { return XParser.ruleNames; }
    get serializedATN() { return XParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, XParser._ATN, XParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    start() {
        let localContext = new StartContext(this.context, this.state);
        this.enterRule(localContext, 0, XParser.RULE_start);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 5;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 126) !== 0)) {
                    {
                        {
                            this.state = 2;
                            this.matchWildcard();
                        }
                    }
                    this.state = 7;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 8;
                this.match(XParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    static _serializedATN = [
        4, 1, 6, 11, 2, 0, 7, 0, 1, 0, 5, 0, 4, 8, 0, 10, 0, 12, 0, 7, 9, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1,
        0, 0, 0, 10, 0, 5, 1, 0, 0, 0, 2, 4, 9, 0, 0, 0, 3, 2, 1, 0, 0, 0, 4, 7, 1, 0, 0, 0, 5, 3, 1, 0,
        0, 0, 5, 6, 1, 0, 0, 0, 6, 8, 1, 0, 0, 0, 7, 5, 1, 0, 0, 0, 8, 9, 5, 0, 0, 1, 9, 1, 1, 0, 0, 0,
        1, 5
    ];
    static __ATN;
    static get _ATN() {
        if (!XParser.__ATN) {
            XParser.__ATN = new antlr.ATNDeserializer().deserialize(XParser._serializedATN);
        }
        return XParser.__ATN;
    }
    static vocabulary = new antlr.Vocabulary(XParser.literalNames, XParser.symbolicNames, []);
    get vocabulary() {
        return XParser.vocabulary;
    }
    static decisionsToDFA = XParser._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
}
export class StartContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() {
        return this.getToken(XParser.EOF, 0);
    }
    get ruleIndex() {
        return XParser.RULE_start;
    }
    enterRule(listener) {
        if (listener.enterStart) {
            listener.enterStart(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStart) {
            listener.exitStart(this);
        }
    }
}
