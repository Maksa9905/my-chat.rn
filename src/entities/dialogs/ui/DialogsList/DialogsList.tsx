import { ScrollView } from 'react-native'
import DialogsListItem from './DialogsListItem'
import DialogsEmpty from '../DialogEmpty/DialogsEmpty'
import { useUnit } from 'effector-react'
import { getDialogsQuery } from '../../api/api'
import { useEffect } from 'react'
import { getProfileQuery } from '@/src/entities/users'
import { io } from 'socket.io-client'
import * as SecureStore from 'expo-secure-store'

const DialogList = () => {
  const { data: dialogsData, start: getDialogs } = useUnit(getDialogsQuery)
  const { data: myInfoData, start: getMyInfo } = useUnit(getProfileQuery)

  useEffect(() => {
    getMyInfo()
    getDialogs({ page: 1, limit: 10 })
  }, [])

  useEffect(() => {
    const socket = io(process.env.EXPO_PUBLIC_BASE_API_URL, {
      auth: {
        token: SecureStore.getItemAsync('authorization'),
      },
    })

    socket.on('dialogsUpdated', () => {
      getDialogs({ page: 1, limit: 10 })
    })
  }, [])

  if (!dialogsData?.data.length) return <DialogsEmpty />

  return (
    <ScrollView>
      {dialogsData.data.map((dialog) => (
        <DialogsListItem
          {...dialog}
          read={dialog.lastMessage.read}
          isMyMessage={dialog.lastMessage.author.id === myInfoData?.data.id}
          avatarUrl="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
          datetime={dialog.lastMessage.createdAt}
          unreadMessagesCount={dialog.unreadCount}
          username={
            dialog.participants.find((user) => user.id !== myInfoData?.data.id)
              ?.username || ''
          }
          lastMessage={dialog.lastMessage.text}
          key={dialog.id}
        />
      ))}
    </ScrollView>
  )
}

export default DialogList
