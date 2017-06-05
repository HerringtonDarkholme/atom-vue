const cp = require('child_process')
const {AutoLanguageClient} = require('atom-languageclient')

class VueLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return [ 'text.html.vue' ] }
  getLanguageName () { return 'vue' }
  getServerName () { return 'vue' }

  startServerProcess () {
    return cp.spawn('node', [require.resolve('vue-language-server/dist/htmlServerMain')])
  }
}

module.exports = new VueLanguageClient()
