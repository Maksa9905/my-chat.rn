import { ScrollView } from 'react-native'
import DialogsListItem from './DialogsListItem'
import DialogsEmpty from '../DialogEmpty/DialogsEmpty'

const testDialogs: Dialog[] = [
  {
    id: '1',
    username: 'Алексей Петров',
    datetime: new Date().toISOString(), // сейчас
    lastMessage: 'Привет, как дела?',
    unreadMessagesCount: 2,
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXo6Vai2Xis3baCcUHqGLLqFNYBAdPF67zg&s',
    read: false,
    isMyMessage: false,
  },
  {
    id: '2',
    username: 'Мария Иванова',
    datetime: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 часа назад
    lastMessage: 'Документы готовы',
    unreadMessagesCount: 0,
    avatarUrl:
      'https://i.pinimg.com/originals/b3/b0/0a/b3b00ae0d7fc63c8b716d1c3c58e461e.jpg',
    read: true,
    isMyMessage: true,
  },
  {
    id: '3',
    username: 'Дмитрий Смирнов',
    datetime: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // вчера
    lastMessage: 'Давай созвонимся завтра',
    unreadMessagesCount: 5,
    avatarUrl:
      'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg',
    read: false,
    isMyMessage: false,
  },
  {
    id: '4',
    username: 'Ольга Кузнецова',
    datetime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 дня назад
    lastMessage: 'Спасибо за помощь!',
    unreadMessagesCount: 0,
    avatarUrl:
      'https://pristor.ru/wp-content/uploads/2023/08/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA-%D0%B7%D0%B0-2023-%D0%B3%D0%BE%D0%B4-18-850x1024.jpg',
    read: true,
    isMyMessage: false,
  },
  {
    id: '5',
    username: 'Иван Васильев',
    datetime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // неделю назад
    lastMessage: 'Когда встречаемся?',
    unreadMessagesCount: 0,
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgAtYTJoIr4cyDu76vl3hJ7Jscqu0rHgjXw&s',
    read: false,
    isMyMessage: true,
  },
  {
    id: '6',
    username: 'Екатерина Новикова',
    datetime: '2023-10-15T14:30:00.000Z', // конкретная дата (15 октября)
    lastMessage: 'Отправила тебе файлы',
    unreadMessagesCount: 0,
    avatarUrl:
      'https://i.pinimg.com/736x/af/db/67/afdb67e7eb9c975d310d50423fc28323.jpg',
    read: true,
    isMyMessage: false,
  },
  {
    id: '7',
    username: 'Сергей Козлов',
    datetime: '2023-09-01T09:15:00.000Z', // 1 сентября
    lastMessage: 'Жду ответа',
    unreadMessagesCount: 3,
    avatarUrl:
      'https://sun9-4.userapi.com/impg/SAt4dmubfUmItmVt8MOp-4Pdz1ZHoRYmSpflig/Kz5j9KdLItY.jpg?size=604x604&quality=96&sign=86f832596d6c24356d5db688a209f7e0&type=album',
    read: false,
    isMyMessage: false,
  },
  {
    id: '8',
    username: 'Анна Морозова',
    datetime: '2023-12-31T23:59:59.999Z', // 31 декабря
    lastMessage: 'С Новым годом!',
    unreadMessagesCount: 0,
    avatarUrl:
      'https://i.pinimg.com/originals/d5/34/4b/d5344bc93fe91b0bc708a5366278c955.jpg',
    read: true,
    isMyMessage: true,
  },
  {
    id: '9',
    username: 'Алексей Петров',
    datetime: new Date().toISOString(), // сейчас
    lastMessage: 'Привет, как дела?',
    unreadMessagesCount: 2,
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXo6Vai2Xis3baCcUHqGLLqFNYBAdPF67zg&s',
    read: false,
    isMyMessage: false,
  },
  {
    id: '10',
    username: 'Мария Иванова',
    datetime: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 часа назад
    lastMessage: 'Документы готовы',
    unreadMessagesCount: 0,
    avatarUrl:
      'https://i.pinimg.com/originals/b3/b0/0a/b3b00ae0d7fc63c8b716d1c3c58e461e.jpg',
    read: true,
    isMyMessage: true,
  },
  {
    id: '11',
    username: 'Дмитрий Смирнов',
    datetime: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // вчера
    lastMessage: 'Давай созвонимся завтра',
    unreadMessagesCount: 5,
    avatarUrl:
      'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg',
    read: false,
    isMyMessage: false,
  },
  {
    id: '12',
    username: 'Ольга Кузнецова',
    datetime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 дня назад
    lastMessage: 'Спасибо за помощь!',
    unreadMessagesCount: 0,
    avatarUrl:
      'https://pristor.ru/wp-content/uploads/2023/08/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA-%D0%B7%D0%B0-2023-%D0%B3%D0%BE%D0%B4-18-850x1024.jpg',
    read: true,
    isMyMessage: false,
  },
  {
    id: '13',
    username: 'Иван Васильев',
    datetime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // неделю назад
    lastMessage: 'Когда встречаемся?',
    unreadMessagesCount: 0,
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgAtYTJoIr4cyDu76vl3hJ7Jscqu0rHgjXw&s',
    read: false,
    isMyMessage: true,
  },
  {
    id: '14',
    username: 'Екатерина Новикова',
    datetime: '2023-10-15T14:30:00.000Z', // конкретная дата (15 октября)
    lastMessage: 'Отправила тебе файлы',
    unreadMessagesCount: 0,
    avatarUrl:
      'https://i.pinimg.com/736x/af/db/67/afdb67e7eb9c975d310d50423fc28323.jpg',
    read: true,
    isMyMessage: false,
  },
  {
    id: '15',
    username: 'Сергей Козлов',
    datetime: '2023-09-01T09:15:00.000Z', // 1 сентября
    lastMessage: 'Жду ответа',
    unreadMessagesCount: 3,
    avatarUrl:
      'https://sun9-4.userapi.com/impg/SAt4dmubfUmItmVt8MOp-4Pdz1ZHoRYmSpflig/Kz5j9KdLItY.jpg?size=604x604&quality=96&sign=86f832596d6c24356d5db688a209f7e0&type=album',
    read: false,
    isMyMessage: false,
  },
  {
    id: '16',
    username: 'Анна Морозова',
    datetime: '2023-12-31T23:59:59.999Z', // 31 декабря
    lastMessage: 'С Новым годом!',
    unreadMessagesCount: 0,
    avatarUrl:
      'https://i.pinimg.com/originals/d5/34/4b/d5344bc93fe91b0bc708a5366278c955.jpg',
    read: true,
    isMyMessage: true,
  },
]

const DialogList = () => {
  if (!testDialogs.length) return <DialogsEmpty />

  return (
    <ScrollView>
      {testDialogs.map((dialog) => (
        <DialogsListItem
          {...dialog}
          key={dialog.id}
        />
      ))}
    </ScrollView>
  )
}

export default DialogList
