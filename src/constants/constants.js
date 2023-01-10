import whatsappLogo from './icons/whatsapp.svg'
import instLogo from './icons/instagram.svg'
import vkLogo from './icons/vk.svg'
import telLogo from './icons/telegram.svg'
import gitLogo from './icons/github.svg'

export const constNavLinks = [
    // { id: 0, link: '/test', value: 'TEST' },
    { id: 1, link: '/main', value: 'Главная' },
    { id: 2, link: '/projects', value: 'Проекты' },
    { id: 3, link: '/contacts', value: 'Контакты' },
    { id: 4, link: '/posts', value: 'Посты' },
]

export const iconArray = [whatsappLogo, instLogo, vkLogo, telLogo, gitLogo]

export const arrayCategiries = [
    { id: 1, value: 'Все', active: true, sort: 'all' },
    { id: 2, value: 'Спорт', active: false, sort: 'sport' },
    { id: 3, value: 'Политика', active: false, sort: 'politic' },
    { id: 4, value: 'Юмор', active: false, sort: 'humor' }
]

export const arrayProjectsCategories = [
    { id: 1, value: 'Все', active: true, sort: 'all' },
    { id: 2, value: 'Верстка', active: false, sort: 'html' },
    { id: 3, value: 'React', active: false, sort: 'react' },
    { id: 4, value: 'JS', active: false, sort: 'js' },
    { id: 5, value: 'С#', active: false, sort: 'sharp' },
    { id: 6, value: 'Другие', active: false, sort: 'other' }
]