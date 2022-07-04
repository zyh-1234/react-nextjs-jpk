export default (req, res) => {
  const { id } = req.query
  const mockData = [
    // 课程信息
    {
      // 课时
      lessonNum: 101.5,
      // 教师
      teacherList: [
        {
          // 头像
          img: '/img/teacher2.png',
          // 名字
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
        {
          img: '/img/teacher2.png',
          name: '张三2',
        },
      ],
      // 分类
      categoryName: '素养',
      // 标题
      courseTitle: '精选文学作品赏析',
      // 课程id
      id: 99,
      // 促销类型 0: 没有促销， 1: 有促销
      saleType: 0,
      // 已售数量
      saleNum: 394,
      // 原价
      price: 2199,
      // 开课时间
      courseTime: '随报随学',
    },
    // 课程信息
    {
      // 课时
      lessonNum: 101.5,
      // 教师
      teacherList: [
        {
          // 头像
          img: '/img/teacher2.png',
          // 名字
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
        {
          img: '/img/teacher2.png',
          name: '张三2',
        },
        {
          img: '/img/teacher2.png',
          name: '张三3',
        },
        {
          img: '/img/teacher2.png',
          name: '张三4',
        },
      ],
      // 分类
      categoryName: '专四专八',
      // 标题
      courseTitle: '【适用20备考】专八全程班（领券下单只需1299元！）',
      // 课程id
      id: 100,
      // 促销类型 0: 没有促销， 1: 有促销
      saleType: 0,
      // 已售数量
      saleNum: 394,
      // 原价
      price: 2199,
      // 开课时间
      courseTime: '随报随学',
    },
    {
      lessonNum: 249,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
        {
          img: '/img/teacher2.png',
          name: '张三2',
        },
      ],
      categoryName: '考研',
      courseTitle: '2022考研政治抢跑班（加微信领优惠：YDKS111）',
      id: 101,
      saleType: 0,
      saleNum: 422,
      price: 4999,
      courseTime: '2020-01-09 19:00:00',
    },
    {
      lessonNum: 36.5,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
      ],
      categoryName: '四六级',
      courseTitle: '王菲语法长难句班·第17季（本季新增写译课+精读课）',
      id: 102,
      // 促销开始时间
      saleStartTime: +new Date() - 1000,
      // 有促销
      saleType: 1,
      // 促销结束时间
      saleEndTime: +new Date() + 10000,
      // 原价
      price: 699,
      // 促销价格
      salePrice: 599,
      courseTime: '2020-07-27 19:30',
    },
    {
      lessonNum: 112,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
        {
          img: '/img/teacher2.png',
          name: '张三2',
        },
        {
          img: '/img/teacher2.png',
          name: '张三3',
        },
        {
          img: '/img/teacher2.png',
          name: '张三4',
        },
      ],
      categoryName: '四六级',
      courseTitle: '【12月考试】四级全程班·1班（暑假抢跑，轻松备战！）',
      id: 103,
      saleStartTime: +new Date() - 1000,
      saleType: 1,
      saleNum: 1959,
      saleEndTime: +new Date() + 24 * 60 * 60 * 1000,
      price: 399,
      courseSaleTime: 1593792600000,
      salePrice: 299,
      courseTime: '2020-08-06 08:30',
    },
    {
      lessonNum: 112,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
        {
          img: '/img/teacher2.png',
          name: '张三2',
        },
        {
          img: '/img/teacher2.png',
          name: '张三3',
        },
        {
          img: '/img/teacher2.png',
          name: '张三4',
        },
      ],
      categoryName: '四六级',
      subCategories: [],
      courseTitle: '【12月考试】六级全程班·1班（暑假抢跑，轻松备战！）',
      id: 104,
      saleStartTime: +new Date() - 1000,
      saleType: 1,
      saleNum: 778,
      saleEndTime: +new Date() + 5 * 24 * 60 * 60 * 1000,
      price: 399,
      salePrice: 299,
      courseTime: '2020-08-06 10:30',
    },
    {
      lessonNum: 26,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
      ],
      // 分类
      categoryName: '实用英语',
      // 标题
      courseTitle: '杨亮讲单词·方法与实战16班',
      // 课程id
      id: 105,
      // 促销类型
      saleType: 0,
      saleNum: 100,
      price: 999,
      courseTime: '随到随学',
    },
    {
      lessonNum: 180,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
        {
          img: '/img/teacher2.png',
          name: '张三2',
        },
      ],
      categoryName: '考研',
      courseTitle: '2021考研政治领学14班',
      id: 106,
      saleType: 0,
      saleNum: 0,
      price: 4999,
      courseTime: '随到随学',
    },
    {
      lessonNum: 249,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
        {
          img: '/img/teacher2.png',
          name: '张三2',
        },
      ],
      categoryName: '考研',
      courseTitle: '2022考研政治抢跑班（加微信领优惠）',
      id: 107,
      saleType: 0,
      saleNum: 422,
      price: 4999,
      courseTime: '2020-01-09 19:00:00',
    },
    {
      lessonNum: 265,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
      ],
      categoryName: '考研',
      courseTitle: '2022考研数学抢跑班（加微信领优惠）',
      id: 108,
      saleType: 0,
      saleNum: 224,
      price: 4999,
      courseTime: '2020-01-15 19:00:00',
    },
    {
      lessonNum: 265,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
      ],
      categoryName: '考研',
      courseTitle: '2021考研数学抢跑班',
      id: 109,
      saleType: 0,
      saleNum: 224,
      price: 4999,
      courseTime: '2020-01-15 19:00:00',
    },
  ]
  mockData.forEach((item) => {
    // 课程说明
    item.courseDes = [
      '/img/detail1.png',
      '/img/detail2.png',
      '/img/detail3.png',
      '/img/detail4.png',
      '/img/detail5.png',
    ]
    // 评价

    item.evaluate = {
      isEvaluate: 1,
      content: [
        {
          avatar: '/img/teacher2.png',
          name: '李三',
          createtime: '2022-01-16:20:38',
          star: 0,
          review: '很好的课程，有趣的灵魂',
          tags: ['风趣幽默', '大招输出', '讲解透彻'],
        },
        {
          avatar: '/img/teacher2.png',
          name: '老六',
          createtime: '2022-09-16:20:38',
          star: 0,
          review: '课程不错~有噶或',
          tags: ['服务贴心'],
        },
      ],
    }
    // 课表
    item.timetables = [
      {
        title: '请务必添加辅导老师微信，确保学生正常上课！',
        type: 0,
        sub: '提示',
        icon: '/img/tip.png',
      },
      {
        title: '读书的逻辑密码',
        type: 1,
        sub: '课程直播',
        livetime: '2020-01-15 19:00:00',
        liveId: 1100,
        icon: '/img/live.png',
      },
      {
        title: '文学创作的第二条路',
        type: 1,
        sub: '课程直播',
        livetime: '2020-01-15 19:00:00',
        liveId: 1122,
        icon: '/img/live.png',
      },
      {
        title: '人文素养的实际运用',
        type: 1,
        sub: '课程直播',
        livetime: '2020-01-15 19:00:00',
        liveId: 1123,
        icon: '/img/live.png',
      },
    ]
    // 老师信息
    item.teacherInfo = {
      titleImg: '/img/teacherImage.png',
      avatar: '/img/teacher1.png',
      teacherName: '张三',
      teacherId: 123,
      teacherDes:
        '全国优秀教师，课题《互联网时代中学语文学习的方式方法》获全国创新教育科研成果一等奖，公开课《古诗词学习方法》获中国教育电视台电视评选一等奖。《新京报》专版专题报道教师。全国百万级金牌教师著有教辅类畅销书《文语方程式》。【法事情人】阅读法创始人，作家，诗人，著有诗集《第三门》，获得业内好评，在《青年文学》《锦绣》等杂志发表作品数篇。国家二级心理咨询师，中央财经大学商学院莲兮国艺学院首席心理咨询讲师 。对青少年心理有资深研究。',
    }
  })
  const resData = mockData.find((item) => item.id == id)

  res.statusCode = 200
  res.json({
    code: '0',
    message: 'success',
    data: resData || {},
  })
}
