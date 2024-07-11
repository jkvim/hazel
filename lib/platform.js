// Native
const { extname } = require('path')

module.exports = fileName => {
  const extension = extname(fileName).slice(1)
  const arch = fileName.includes('arm64')
    ? '_arm64'
    : fileName.includes('x64') ? '_x64' : ''
  console.log({ extension, arch, fileName })

  if (
    (fileName.includes('mac') || fileName.includes('darwin')) &&
    extension === 'zip'
  ) {
    return 'darwin' + arch
  }

  const directCache = ['exe', 'dmg', 'rpm', 'deb', 'AppImage']
  return directCache.includes(extension) ? extension + arch : false
}
