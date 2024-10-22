// Generated from trgen 0.23.8
import { CharStream } from 'antlr4ng';
import { CommonTokenStream } from 'antlr4ng';
import { ConsoleErrorListener } from 'antlr4ng';
import { ErrorNode } from 'antlr4ng';
import { ParserRuleContext } from 'antlr4ng';
import { TerminalNode } from 'antlr4ng';
import { Token } from 'antlr4ng';
import { escapeWhitespace } from 'antlr4ng';
import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';
import { openSync } from 'fs';
import { readSync } from 'fs';
import { writeSync } from 'fs';
import { closeSync } from 'fs';
import { isToken } from 'antlr4ng';
import { XLexer } from './XLexer.js';
import { XParser } from './XParser.js';
import { StringBuilder } from 'typescript-string-operations';
import { Timer } from 'timer-node';
function getChar() {
    let buffer = Buffer.alloc(1);
    var xx = 0;
    try {
        xx = readSync(0, buffer, 0, 1, null);
    }
    catch (err) {
    }
    if (xx === 0) {
        return '';
    }
    return buffer.toString('utf8');
}
class MyErrorListener extends ConsoleErrorListener {
    _quiet;
    _tee;
    _output;
    had_error;
    constructor(quiet, tee, output) {
        super();
        this._quiet = quiet;
        this._tee = tee;
        this._output = output;
        this.had_error = false;
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.had_error = true;
        if (this._tee) {
            writeSync(this._output, `line ${line}:${column} ${msg}\n`);
        }
        if (!this._quiet) {
            console.error(`line ${line}:${column} ${msg}`);
        }
    }
}
var tee = false;
var show_profile = false;
var show_tree = false;
var show_tokens = false;
var show_trace = false;
var error_code = 0;
var quiet = false;
var enc = 'utf8';
var string_instance = 0;
var prefix = '';
var inputs = [];
var is_fns = [];
function splitLines(t) { return t.split(/\r\n|\r|\n/); }
function main() {
    for (let i = 2; i < process.argv.length; ++i) {
        switch (process.argv[i]) {
            case '-tokens':
                show_tokens = true;
                break;
            case '-tree':
                show_tree = true;
                break;
            case '-prefix':
                prefix = process.argv[++i] + ' ';
                break;
            case '-input':
                inputs.push(process.argv[++i]);
                is_fns.push(false);
                break;
            case '-tee':
                tee = true;
                break;
            case '-encoding':
                enc = process.argv[++i];
                break;
            case '-x':
                var sb = new StringBuilder();
                var ch;
                while ((ch = getChar()) != '') {
                    sb.Append(ch);
                }
                var input = sb.ToString();
                var sp = splitLines(input);
                for (var ii of sp) {
                    if (ii == '')
                        continue;
                    inputs.push(ii);
                    is_fns.push(true);
                }
                break;
            case '-q':
                quiet = true;
                break;
            case '-trace':
                show_trace = true;
                break;
            default:
                inputs.push(process.argv[i]);
                is_fns.push(true);
                break;
        }
    }
    if (inputs.length == 0) {
        ParseStdin();
    }
    else {
        const timer = new Timer({ label: 'test-timer' });
        timer.start();
        for (var f = 0; f < inputs.length; ++f) {
            if (is_fns[f])
                ParseFilename(inputs[f], f);
            else
                ParseString(inputs[f], f);
        }
        timer.stop();
        var t = timer.time().m * 60 + timer.time().s + timer.time().ms / 1000;
        if (!quiet)
            console.error('Total Time: ' + t);
    }
    process.exitCode = error_code;
}
function ParseStdin() {
    var sb = new StringBuilder();
    var ch;
    while ((ch = getChar()) != '') {
        sb.Append(ch);
    }
    var input = sb.ToString();
    var str = CharStream.fromString(input);
    DoParse(str, "stdin", 0);
}
function ParseString(input, row_number) {
    var str = CharStream.fromString(input);
    DoParse(str, "string" + string_instance++, row_number);
}
function ParseFilename(input, row_number) {
    var buffer = readFileSync(input, { encoding: enc });
    var str = CharStream.fromString(buffer);
    DoParse(str, input, row_number);
}
function DoParse(str, input_name, row_number) {
    const lexer = new XLexer(str);
    const tokens = new CommonTokenStream(lexer);
    const parser = new XParser(tokens);
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    var output = tee ? openSync(input_name + ".errors", 'w') : 1;
    var listener_parser = new MyErrorListener(quiet, tee, output);
    var listener_lexer = new MyErrorListener(quiet, tee, output);
    parser.addErrorListener(listener_parser);
    lexer.addErrorListener(listener_lexer);
    if (show_tokens) {
        for (var i = 0;; ++i) {
            var ro_token = lexer.nextToken();
            var token = ro_token;
            token.tokenIndex = i;
            console.error(token.toString());
            if (token.type === Token.EOF)
                break;
        }
        //        lexer.reset();
    }
    if (show_trace) {
        //       parser._interp.trace_atn_sim = true;
    }
    const timer = new Timer({ label: 'test-timer2' });
    timer.start();
    const tree = parser.start();
    timer.stop();
    var result = "";
    if (listener_parser.had_error || listener_lexer.had_error) {
        result = 'fail';
        error_code = 1;
    }
    else {
        result = 'success';
    }
    var t = timer.time().m * 60 + timer.time().s + timer.time().ms / 1000;
    if (show_tree) {
        if (tee) {
            writeFileSync(input_name + ".tree", tree.toStringTree(parser.ruleNames, parser));
        }
        else {
            console.error(tree.toStringTree(parser.ruleNames, parser));
        }
    }
    if (!quiet) {
        console.error(prefix + 'TypeScript ' + row_number + ' ' + input_name + ' ' + result + ' ' + t);
    }
    if (tee) {
        closeSync(output);
    }
}
function toStringTree(tree, recog) {
    var sb = new StringBuilder();
    let ruleNames = recog.ruleNames;
    toStringTree2(sb, tree, 0, ruleNames);
    return sb.toString();
}
function toStringTree2(sb, tree, indent, ruleNames) {
    let s = getNodeText(tree, ruleNames);
    s = escapeWhitespace(s, false);
    const c = tree.getChildCount();
    if (c === 0) {
        for (let i = 0; i < indent; ++i)
            sb.Append(" ");
        sb.Append(s);
        sb.AppendLine("");
        return;
    }
    for (let i = 0; i < indent; ++i)
        sb.Append(" ");
    sb.Append(s);
    sb.AppendLine("");
    for (let i = 0; i < c; i++) {
        toStringTree2(sb, tree.getChild(i), indent + 1, ruleNames);
    }
}
function getNodeText(t, ruleNames, recog) {
    if (ruleNames !== null) {
        if (t instanceof ParserRuleContext) {
            const context = t.ruleContext;
            const altNumber = context.getAltNumber();
            // use const value of ATN.INVALID_ALT_NUMBER to avoid circular dependency
            if (altNumber !== 0) {
                return ruleNames[t.ruleIndex] + ":" + altNumber;
            }
            return ruleNames[t.ruleIndex];
        }
        else if (t instanceof ErrorNode) {
            return t.toString();
        }
        else if (t instanceof TerminalNode) {
            if (t.symbol !== null) {
                return t.symbol.text;
            }
        }
    }
    const payload = t.getPayload();
    if (isToken(payload)) {
        return payload.text;
    }
    return String(t.getPayload());
}
main();
