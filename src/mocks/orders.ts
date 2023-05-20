import phoneImg from '../mocks/phone.webp'
import { type IUserOrderPopulated } from '../types/model'

export const orders: IUserOrderPopulated[] = [
  {
    id: 'fgegw',
    createdAt: Date.now(),
    status: 'created',
    productIds: ['fd'],
    totalPrice: 12,
    products: new Array(5).fill('').map((el) => ({
      id: 'gegtrhr343',
      description:
        'Формат Apple ProRAW, Аудиозум, Автоматическая стабилизация изображения, Режим Киноэффект, Технология Deep Fusion, Регулировка глубины резкости, Эффект боке, Геотегинг, Live Photos, Макросъемка, Ночной режим, Фотографические стили, Портретный режим, Функция QuickTake, Режим замедленной съёмки, Защита объектива сапфировым стеклом, Smart HDR 4, Таймлапс, Следящий автофокус, True Tone с функцией Slow Sync',
      price: 100,
      rating: 4.8,
      title: 'Apple iPhone 14 Pro Max',
      images: [phoneImg, phoneImg, phoneImg, phoneImg, phoneImg],
    })),
  },
]
