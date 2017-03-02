/* eslint-env jest */
import markdownIt from 'markdown-it'
import markdownItHighlight from '../src/index'

const mdi = markdownIt()
mdi.use(markdownItHighlight)

test('code block', () => {
  expect(mdi.render(`
    print 'hello world'
`).trim()).toBe(`<pre><code>print 'hello world'
</code></pre>`)
})

test('fence without language name', () => {
  expect(mdi.render(`\`\`\`
print 'hello world'
\`\`\``).trim()).toBe(`<pre><code>print 'hello world'
</code></pre>`)
})
