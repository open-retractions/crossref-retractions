var crossref = require('crossref-cli/query')

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

module.exports = function () {
  var args = {
    filter: ['is-update:true'],
    progress: true
  }

  types.forEach(function (type) { args.filter.push('update-type:' + type) })

  return crossref(args)
}
