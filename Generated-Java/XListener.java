// Generated from X.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link XParser}.
 */
public interface XListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link XParser#start}.
	 * @param ctx the parse tree
	 */
	void enterStart(XParser.StartContext ctx);
	/**
	 * Exit a parse tree produced by {@link XParser#start}.
	 * @param ctx the parse tree
	 */
	void exitStart(XParser.StartContext ctx);
}