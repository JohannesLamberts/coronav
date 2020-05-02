// from https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer

function setAttribute(token, name, value) {
  // If you are sure other plugins can't add `target` - drop check below
  const aIndex = token.attrIndex(name)

  if (aIndex < 0) {
    token.attrPush([name, value]) // add new attribute
  } else {
    token.attrs[aIndex][1] = value // replace value of existing attr
  }
}

export default (md) => {
  // Remember old renderer, if overridden, or proxy to default renderer
  const defaultRender =
    md.renderer.rules.link_open ||
    function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }

  md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
    setAttribute(tokens[idx], 'target', '_blank')
    setAttribute(tokens[idx], 'rel', 'noreferrer noopener')
    return defaultRender(tokens, idx, options, env, self)
  }
}
