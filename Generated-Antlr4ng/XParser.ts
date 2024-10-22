// Generated from X.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { XListener } from "./XListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class XParser extends antlr.Parser {
    public static readonly QUALIFIED_ATTR = 1;
    public static readonly ATTR = 2;
    public static readonly MYID = 3;
    public static readonly DOT = 4;
    public static readonly LP = 5;
    public static readonly WS = 6;
    public static readonly RULE_start = 0;

    public static readonly literalNames = [
        null, null, null, null, "'.'", "'('"
    ];

    public static readonly symbolicNames = [
        null, "QUALIFIED_ATTR", "ATTR", "MYID", "DOT", "LP", "WS"
    ];
    public static readonly ruleNames = [
        "start",
    ];

    public get grammarFileName(): string { return "X.g4"; }
    public get literalNames(): (string | null)[] { return XParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return XParser.symbolicNames; }
    public get ruleNames(): string[] { return XParser.ruleNames; }
    public get serializedATN(): number[] { return XParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, XParser._ATN, XParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public start(): StartContext {
        let localContext = new StartContext(this.context, this.state);
        this.enterRule(localContext, 0, XParser.RULE_start);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,6,11,2,0,7,0,1,0,5,0,4,8,0,10,0,12,0,7,9,0,1,0,1,0,1,0,0,0,1,
        0,0,0,10,0,5,1,0,0,0,2,4,9,0,0,0,3,2,1,0,0,0,4,7,1,0,0,0,5,3,1,0,
        0,0,5,6,1,0,0,0,6,8,1,0,0,0,7,5,1,0,0,0,8,9,5,0,0,1,9,1,1,0,0,0,
        1,5
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!XParser.__ATN) {
            XParser.__ATN = new antlr.ATNDeserializer().deserialize(XParser._serializedATN);
        }

        return XParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(XParser.literalNames, XParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return XParser.vocabulary;
    }

    private static readonly decisionsToDFA = XParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class StartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(XParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return XParser.RULE_start;
    }
    public override enterRule(listener: XListener): void {
        if(listener.enterStart) {
             listener.enterStart(this);
        }
    }
    public override exitRule(listener: XListener): void {
        if(listener.exitStart) {
             listener.exitStart(this);
        }
    }
}
