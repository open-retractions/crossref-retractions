var crossref = require('crossref-cli/query')
var xtend = require('xtend')

var types = [
  'comment',
  'corrected-article',
  'correction',
  'Correction',
  'correspondence',
  'corrigendum',
  'Corrigendum',
  'err',
  'erratum',
  'Erratum',
  'expression_of_concern',
  'expression-of-concern',
  'note-discuss',
  'publisher-note',
  'removal',
  'retraction',
  'Retraction',
  'retration',
  'withdrawal'
]

module.exports = function (query, opts) {
  query = xtend(query || {}, { filter: ['is-update:true'] })
  opts = xtend(opts || {}, { progress: true })

  types.forEach(function (type) { query.filter.push('update-type:' + type) })

  return crossref(query, opts)
}
