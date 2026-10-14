/** 角度转弧度 */
export function deg2rad(deg:number):number {
  return deg * Math.PI / 180
}
/** 弧度转角度 */
export function rad2deg(rad:number):number {
  return rad * 180 / Math.PI
}

/** 两点距离 */
export function distance2d(x1:number,y1:number,x2:number,y2:number):number{
  const dx = x2-x1
  const dy = y2-y1
  return Math.sqrt(dx*dx + dy*dy)
}
