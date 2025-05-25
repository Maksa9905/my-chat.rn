import { ScrollView } from 'react-native'
import FindDialogListItem from './FindDialogListItem'
import { useUnit } from 'effector-react'

const testDialogs: NewDialog[] = [
  {
    id: '1',
    username: 'Алексей Петров',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXo6Vai2Xis3baCcUHqGLLqFNYBAdPF67zg&s',
  },
  {
    id: '2',
    username: 'Мария Иванова',
    avatarUrl:
      'https://i.pinimg.com/originals/b3/b0/0a/b3b00ae0d7fc63c8b716d1c3c58e461e.jpg',
  },
  {
    id: '3',
    username: 'Дмитрий Смирнов',
    avatarUrl:
      'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg',
  },
]

const FindDialogList = () => {
  return (
    <ScrollView>
      {testDialogs.map((dialog) => (
        <FindDialogListItem
          key={dialog.id}
          {...dialog}
        />
      ))}
    </ScrollView>
  )
}

export default FindDialogList
