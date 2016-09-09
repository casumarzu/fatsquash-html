import paintTriangle from './paintTriangle'
export default function paintIsoscelesTriange(wdt, hgt) {
  let th = hgt / 2 //вершина по горизонтали
  let tv = wdt / 3 //вершина по вертикали

  let lh = wdt / 3 //левый нижний угол по горизонтали
  let lv = hgt * 2 / 3 //левый нижний угол по ветрикали

  let rh = wdt * 2 / 3 //правый нижний угол по горизонтали
  let rv = hgt * 2 / 3 //правый нижний угол по вертикали
  return paintTriangle(th, tv, rh, rv, lh, lv)
}
