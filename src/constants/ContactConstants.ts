import Mail from '../assets/imgs/Mail.svg';
import Instagram from '../assets/imgs/Instagram.svg';
import KakaoTalk from '../assets/imgs/KakaoTalk.svg';

export interface Contact {
  type: string;
  label: string;
  icon: string;
  link: string;
}

export const CONTACTS: Contact[] = [
  {
    type: 'email',
    label: '이메일 문의',
    icon: Mail,
    link: 'https://www.konkuk-kuit.com/5/introduce', // TODO: email 링크 추후 변경
  },
  {
    type: 'instagram',
    label: '인스타그램 문의',
    icon: Instagram,
    link: 'https://www.instagram.com/kuit.official/',
  },
  {
    type: 'kakao',
    label: '카카오톡 문의',
    icon: KakaoTalk,
    link: 'http://pf.kakao.com/_Dxbgvxj',
  },
];
