import s from './Star.module.css'

const Star = ({ star = 5, width = 0.48, height = 0.48, marginRight = 0.1 }) => {
  const starList = [1, 1, 1, 1, 1]
  const index = Math.floor(star)
  const res = (Math.floor(star * 10) - index * 10) / 10
  starList[index] = res
  if (star > 3 && star <= 4) {
    starList[4] = 0
  } else if (star > 2 && star <= 3) {
    starList[4] = 0
    starList[3] = 0
  } else if (star > 1 && star <= 2) {
    starList[4] = 0
    starList[3] = 0
    starList[2] = 0
  } else if (star >= 0 && star <= 1) {
    starList[4] = 0
    starList[3] = 0
    starList[2] = 0
    starList[1] = 0
  } else if (star == 5) {
    starList.pop()
  }

  return (
    <div className={s.wrap}>
      {starList.map((i, index) => (
        <div
          className={s.star}
          key={index + new Date().getTime()}
          style={{
            backgroundImage: `url(/img/star${i}.png)`,
            width: `${width}rem`,
            height: `${height}rem`,
            marginRight: `${marginRight}rem`,
          }}></div>
      ))}
    </div>
  )
}

export default Star
