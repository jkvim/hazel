const aliases = {
  darwin: ['mac', 'macos', 'osx'],
  exe: ['win32', 'windows', 'win']
}

for (const existingPlatform of Object.keys(aliases)) {
  const arm64Platform = existingPlatform + '_arm64'
  aliases[arm64Platform] = aliases[existingPlatform].map(
    alias => `${alias}_arm64`
  )
  const x64Platform = existingPlatform + '_x64'
  aliases[arm64Platform] = aliases[existingPlatform].map(
    alias => `${alias}_x64`
  )
}

module.exports = platform => {
  if (typeof aliases[platform] !== 'undefined') {
    return platform
  }

  for (const guess of Object.keys(aliases)) {
    const list = aliases[guess]

    if (list.includes(platform)) {
      return guess
    }
  }

  return false
}
