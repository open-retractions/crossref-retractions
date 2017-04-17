var crossref = require('crossref-cli/query')
var extend = require('xtend')

var types = [
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
  'Removal',
  'Retraction',
  'retration',
  'Withdrawal'
]

module.exports = function (query, opts) {
  query = xtend(query || {}, { filter: ['is-update:true'] }
  opts = xtend(opts || {}, { progress: true })

  types.forEach(function (type) { query.filter.push('update-type:' + type) })

  return crossref(query, opts)
}
