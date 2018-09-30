// 金额转换（默认数据是分）
export function price (val, prefix = '￥', suffix = '') {
  let price = Number(val) / 100
  return prefix + price.toFixed(2) + suffix
}
