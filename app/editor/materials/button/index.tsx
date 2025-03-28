import { Button as AntdButton, type ButtonProps as AntdButtonProps } from 'antd'

export type ButtonProps = {
  type: AntdButtonProps['type']
  text: string
}

export const Button = ({ type, text }: ButtonProps) => {
  return <AntdButton type={type}>{text}</AntdButton>
}

export default Button
