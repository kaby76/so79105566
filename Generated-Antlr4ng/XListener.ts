// Generated from X.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { StartContext } from "./XParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `XParser`.
 */
export class XListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `XParser.start`.
     * @param ctx the parse tree
     */
    enterStart?: (ctx: StartContext) => void;
    /**
     * Exit a parse tree produced by `XParser.start`.
     * @param ctx the parse tree
     */
    exitStart?: (ctx: StartContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

