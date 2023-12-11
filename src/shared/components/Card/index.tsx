import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;
type IProps = {
    key:number,
    src: string,
    title: string,
    description: string,
}
const AntdCard = ({src,title,description,key}:IProps)=> {
  return (
      <Card
    key={key}
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={src} />}
  >
    <Meta title={title} description={description} />
  </Card>
  )
}

export default AntdCard