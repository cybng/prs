const os = require('os')
const childProcess = require('child_process')
const { promisify } = require('util')
const ks = require('node-key-sender')  

function hitHotkey (key, modifier) {
    if (os.type() === 'Darwin') {
      if (modifier) {
        return exec(`Script="tell app \\"System Events\\" to keystroke ${key} using ${modifier} down"
        osascript -e "$Script"`)
      } else {
        return exec(`Script="tell app \\"System Events\\" to keystroke ${key}"
        osascript -e "$Script"`)
      }
    } else {
      if (modifier) {
        return ks.sendCombination([modifier, key])
      } else {
        return ks.sendKey(key)
      }
    }
  }