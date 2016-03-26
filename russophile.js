var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

/**
 *  russophile tag
 *
 *  Syntax:
 *      {% russophile [style] %}
 *      text string
 *      {% endrussophile %}
 *
 *      Acceptable styles:
 *          sb - serif bold
 *          sp - serif plain
 *          rsb - red serif bold
 *          rsp - red serif plain
 **/

 module.exports = function(args, content) {
     var style;
     if( args.length > 0 )
        style = args[0];
    else
        style = 'sp';
    var css_style = 'font-family:Georgia,serif; ';
    var text_color;
    if( style.match(/r/))
        text_color = "#b30000";
    else
        text_color = "#0B0B0B";
    css_style += 'color:' + text_color + '; ';
    if( style.match(/b/))
        css_style += 'font-weight:bold; ';

    var text = '<span style="' + css_style + '">' + content + '</span>';
    text = hexo.render.renderSync({text: text, engine: 'markdown'});

    return text;
}
