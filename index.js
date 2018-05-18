import x from './a.js'

const sum = (x, y, total=x + y) => total

global.sum = sum

if (global.document) {
  document.body.innerHTML = `
  <p>status: <b>${sum(2, 3) !== 2 + 3 ? 'BROKEN' : 'OK'}</b></p>

  <pre>2 + 3 = ${JSON.stringify(sum(2, 3))}</pre>

  <p>Compiled function:</p>

  <pre>${sum.toString()}</pre>
  `
}