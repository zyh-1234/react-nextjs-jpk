import { memo, useState } from 'react'
import { provincesData, citysData, areasData } from './config'

import icClose from 'public/img/ic_close.png'
import icPitchOn from 'public/img/ic_pitchon.png'
import s from './index.module.css'

const navArr = ['province', 'city', 'area']
const placeHolder = '请选择'

const AddressPicker = ({
  closePicker,
  handleAddressSelected,
  province = placeHolder,
  city = placeHolder,
  area = placeHolder,
}) => {
  const [state, setState] = useState({
    province: province || placeHolder,
    city: city || placeHolder,
    area: area || placeHolder,
    cur: 'province', // 当前所在分类
    address: provincesData, // 当前选中的省/市/区数据
  })

  const getAddressData = (type) => {
    const { province, city } = state
    switch (type) {
      case 'province':
        return provincesData
      case 'city':
        return citysData[province]
      case 'area':
        return areasData[city]
      default:
        return null
    }
  }

  // 切换省/市/区
  const handleSwitchAddress = (e, type) => {
    e.stopPropagation()
    setState({
      ...state,
      address: getAddressData(type),
      cur: type,
    })
  }

  const handleSelect = (item) => {
    const { cur, province, city } = state
    switch (cur) {
      case 'province':
        setState({
          area: '请选择',
          city: '请选择',
          province: item,
          cur: 'city', // 切换到市选择列表
          address: citysData[item],
        })
        break
      case 'city':
        setState({
          ...state,
          area: '请选择',
          city: item,
          cur: 'area', // 切换到区选择列表
          address: areasData[item],
        })
        break
      case 'area':
        setState({
          ...state,
          area: item,
        })
        handleAddressSelected({ province, city, area: item })
        break
      default:
        break
    }
  }

  const renderPickerHead = () => {
    const { cur } = state
    return (
      <div className={s.selectHead}>
        {navArr.map((nav) => (
          <span
            key={nav}
            onClick={(e) => handleSwitchAddress(e, nav)}
            className={cur === nav ? s.active : ''}>
            {state[nav]}
          </span>
        ))}
      </div>
    )
  }

  const renderContent = () => {
    const { address, cur } = state
    return (
      <div className={s.selectContent}>
        {address &&
          address.map((item, index) => (
            <p onClick={() => handleSelect(item)} key={`picker${index}`}>
              {item}
              {state[cur] === item ? (
                <img className={s.icPitchOn} src={icPitchOn} alt={''} />
              ) : null}
            </p>
          ))}
      </div>
    )
  }

  const renderPicker = () => (
    <div className={s.picker}>
      <div className={s.head}>
        请选择区域
        <img className={s.icClose} src={icClose} alt={''} onClick={() => closePicker(false)} />
      </div>
      {renderPickerHead()}
      {renderContent()}
    </div>
  )

  return <div className={s.container}>{renderPicker()}</div>
}

export default memo(AddressPicker)
