export default interface ICall {
  name: string
  me: boolean
  icon?: string
  time?: string
  isViewed?: boolean
  type?: 'voice' | 'video'
}