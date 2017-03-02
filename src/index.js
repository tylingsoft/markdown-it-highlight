const highlightPlugin = (md) => {
  const temp = md.renderer.rules.fence.bind(md.renderer.rules)
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    return temp(tokens, idx, options, env, slf)
  }
}

export default highlightPlugin
