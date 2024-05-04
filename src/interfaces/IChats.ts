export default interface IChats {
  id?: string,
  name: string,
  isGroup: boolean,
  unreadCount: number,
  lastMessage: {
    body: string,
    type: string
  },
  timestamp: number
}