export function getRandomColor() {
  let color = '#'
  const vars = '0123456789ABCDEF'
  for (let i = 0; i < 6; i++) {
    color += vars[Math.floor(Math.random() * 16)]
  }
  return color
}