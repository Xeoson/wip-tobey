import { type IProduct } from '../../../app/api/firestore/types'
import phoneImg from './phone.webp'

const product: IProduct = {
  id: 'gegtrhr343',
  description:
    'Формат Apple ProRAW, Аудиозум, Автоматическая стабилизация изображения, Режим Киноэффект, Технология Deep Fusion, Регулировка глубины резкости, Эффект боке, Геотегинг, Live Photos, Макросъемка, Ночной режим, Фотографические стили, Портретный режим, Функция QuickTake, Режим замедленной съёмки, Защита объектива сапфировым стеклом, Smart HDR 4, Таймлапс, Следящий автофокус, True Tone с функцией Slow Sync',
  price: 200,
  rating: 4.8,
  title: 'Apple iPhone 14 Pro Max',
  images: [phoneImg, phoneImg, phoneImg, phoneImg, phoneImg],
}

export default new Array(10).fill(product) as IProduct[]
