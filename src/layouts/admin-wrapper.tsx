import type { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

export default function TinaWrapper({ children }: Props) {
  return <div>{children}</div>
} 