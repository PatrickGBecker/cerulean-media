
import { atom } from 'recoil'
import { Video } from '../typings'

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const videoState = atom<Video | null>({
  key: 'videoState',
  default: null,
})