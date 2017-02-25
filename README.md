# markdown-it-highlight

highlight.js plugin for [markdown-it](https://github.com/markdown-it/markdown-it).


## install

```
yarn add markdown-it-highlight
```


## usage

```JavaScript
import markdownIt from 'markdown-it'
import markdownItHighlight from 'markdown-it-highlight'

const mdi = markdownIt()
mdi.use(markdownItHighlight)

mdi.render(`
    print 'hello world'
`) // <pre><code>print 'hello world'</code></pre>
```


## develop

```
yarn build
yarn test
```
