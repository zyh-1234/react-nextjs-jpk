import s from './Nav.module.css'

const Nav = () => {
  return (
    <div className={s.wrap}>
      <span className={s.current}>
        课程详情<p></p>
      </span>
      <span>主讲老师</span>
      <span>评价</span>
      <span>课程表</span>
    </div>
  )
}

export default Nav
