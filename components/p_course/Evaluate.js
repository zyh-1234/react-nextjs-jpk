import Star from '@/Common/Star'
import s from './Evaluate.module.css'

const Evaluate = ({ data }) => {
  const { isEvaluate, content } = data
  const total = content.length
  const res = content.reduce((p, c) => (p ? p + c.star : c.star), 0) / total
  const scroe = Math.floor(res * 10) / 10
  return (
    <div className={s.wrap}>
      <div className={s.title}>
        <span>学员评价</span>
      </div>
      {isEvaluate ? (
        <div>
          <div className={s.scroeWrap}>
            <div className={s.scroeL}>
              <div className={s.scroe}>{scroe}</div>
              <div className={s.starWrap}>
                <Star star={scroe} />
                <div className={s.total}>共 {total} 条评论</div>
              </div>
            </div>
            <div className={s.scroeR}>
              <div className={s.line}></div>
              <div className={s.fullmarkWrap}>
                <div className={s.fullmark}>5.0</div>
                <div className={s.full}>满分</div>
              </div>
            </div>
          </div>
          <div>
            {content.map((item, idx) => (
              <div className={s.reviewbox} key={idx + new Date().getTime()}>
                <div className={s.avatar}>
                  <img src={item.avatar} alt={item.review} />
                  <div className={s.avatarBroder}></div>
                </div>
                <div className={s.review}>
                  <div className={s.avatarName}>{item.name}</div>
                  <div className={s.createtime}>{item.createtime}</div>
                  <Star width={0.34} height={0.34} star={item.star} />
                  <div className={s.reviewitem}>
                    <p>{item.review}</p>
                    <div className={s.tagbox}>
                      {item.tags.map((tag) => (
                        <div className={s.tag} key={tag}>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={s.noReveiw}>本期课程暂无评论，来留下宝贵的第一条吧~</div>
      )}
    </div>
  )
}

export default Evaluate
