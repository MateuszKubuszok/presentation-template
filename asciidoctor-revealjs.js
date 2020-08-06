#!/usr/bin/env node
// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('@asciidoctor/core')()
var ascidoctorRevealjs = require('@asciidoctor/reveal.js')
ascidoctorRevealjs.register()

// Convert the document 'presentation.adoc' using the reveal.js converter
var attributes = {
  'revealjsdir': '.',
  'revealjs_history': true,
  'stem': 'latexmath',
  'source-highlighter': 'highlightjs',
  'highlightjsdir': './js',
  'revealjs_theme': 'black',
  'highlightjs-theme': './lib/css/zenburn.css'
}
var options = {safe: 'safe', backend: 'revealjs', attributes: attributes}
asciidoctor.convertFile('index.adoc', options)
