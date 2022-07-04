// import { useState } from 'react'
import s from './Timetable.module.css'

const Timetable = ({ tables }) => {
  // const [curIndex, setCurIndex] = useState(1)
  return (
    <div className={s.wrap}>
      <div className={`${s.title} border-b-1px`}>
        <span>课程表</span>
      </div>
      <div>
        {tables.map((item, idx) => (
          <div key={idx}>
            <div
              className={`${s.text} border-b-1px`}
              onClick={(e) => {
                console.log(e)
              }}>
              <span className={s.titleWrap}>
                {idx + 1}
                <span>{item.title}</span>
              </span>
              <img
                alt=""
                src={
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAATBJREFUWAljYBgFoyEwGgKjITBMQoCREn+cOXOG9emLt1EgM6QlhJeZmJj8Jtc8sh2yf/9+ng9ffmwHWmwDtfyIAA+Hp6Oj4xdyHEOWQ7A4AmY32Y4h2SF4HEGRY0hyCBGOINsxRDsElyMYGRlPgmz///+/OcwVUJqkaCLKIfgcwc3O7A6y+OvPvzspcQxBhxByhKur60eQQ3bv3s1PiWPwOoRYR4AcAgKUOIYJYgQmCSqs0MoJsCJQmgBFBywkkHWCxEBysHSDJGcDMgtkJpIYChOnQ6AlJqywAmvC5wiYqfgcAyuFYWqRaZwOQVYEYhPjCJgePI6BKcGgcToEVHcAbV8FdMIXRkaG9biiA8NEqADCMQzrQWaAzAKbiUvDqPhoCIyGwGgIjIbAaAjQOAQA/2SjRgG3X5cAAAAASUVORK5CYII= '
                }
              />
            </div>
            <div className={s.itemWrap}>
              <span className={s.icon}>
                <img src={item.icon} alt={'icon'} />
              </span>
              <div className={s.sub}>
                <p className={s.p1}>{item.sub}</p>
                <p className={s.p2}>{item.livetime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timetable
