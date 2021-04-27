module.exports = function(hljs) {
  var NUMBER = {
      className: 'number',
      variants: [
        { begin: '\\b(0[bB][01]+)' },
        { begin: '\\b(0[oO][0-7]+)' },
        { begin: hljs.C_NUMBER_RE }
      ],
      relevance: 0
    };

  return {

    name:"dps",
    aliases:["dps","data-processing","dp-script"],

    contains: [
    
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,

      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      NUMBER,

      {
        className:"title",
        begin: /[A-Za-z$_][0-9A-Za-z$_]/
      },

      {
        className:"built_in",
        begin:/\@/,
        end:/[A-Za-z$_]+/
      },

      {
        begin:/\(/,
        end:/\)/,
        contains:[
          {
            className:"variable",
            begin: /[A-Za-z$_][0-9A-Za-z$_]/,
            end: /\:/,
            excludeEnd: true 
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          
          NUMBER,
          
          {
            className:"keyword",
            begin:/\{\{/,
            end:/\}\}/  
          },

          {
            begin: /<\?( |\n)/,
            end:/\?>/,
            subLanguage: "javascript",
            returnBegin: true,
            endsWithParent:true,
            contains:[
              {
                className:"built_in",
                begin: /<\?( |\n)/ 
              },
              {
                className:"built_in",
                begin: /\?>/,
                endsParent:true
              },
            ]
          }

        ]
      },
      {
        begin: /<\?sql/,
        end:/\?>/,
        subLanguage: "sql",
        returnBegin: true,
        endsWithParent:true,
        contains:[
          {
            className:"built_in",
            begin: /<\?sql/ 
          },
          {
            className:"built_in",
            begin: /\?>/,
            endsParent:true 
          }
        ]
      },
    ]
  };
};
