export interface CreatorInfo {
  part: string;
  roles: string[];
  name: string;
  position: string;
  email: string;
  imageUrl: string;
}

// TODO: 이메일, 이미지 받아서 수정하기
export const CREATORS: CreatorInfo[] = [
  {
    part: 'PM | Design',
    roles: ['PM 파트장', 'Design 파트장'],
    name: '이지유',
    position: 'KUIT 5기 파트장',
    email: 'jeoyeogu@gmail.com',
    imageUrl: '/staff/lee_jiyoo_5.jpg',
  },
  {
    part: 'Frontend',
    roles: ['Frontend 파트장'],
    name: '김나은',
    position: 'KUIT 5기 관리부장',
    email: 'nicolekim0115@gmail.com',
    imageUrl: '/staff/kim_naeun_5.jpeg',
  },
  {
    part: 'Frontend',
    roles: ['Frontend 파트원'],
    name: '김지환',
    position: 'KUIT 5기 부회장',
    email: 'turtlehwan@gmail.com',
    imageUrl: '/staff/kim_jihwan.png',
  },
  {
    part: 'Frontend',
    roles: ['Frontend 파트원'],
    name: '이수아',
    position: 'KUIT 4기 Web 부원',
    email: 'example@gmail.com',
    imageUrl: '',
  },
  {
    part: 'Frontend',
    roles: ['Frontend 파트원'],
    name: '지호준',
    position: 'KUIT 5기 Web 파트장',
    email: 'junehoji@gmail.com',
    imageUrl: '/staff/ji_hojun.jpg',
  },
  {
    part: 'Backend',
    roles: ['Backend 파트장'],
    name: '함형주',
    position: 'KUIT 5기 Server 파트장',
    email: 'gudwn357@gmail.com',
    imageUrl: '/staff/ham_hyeongju.jpg',
  },
  {
    part: 'Backend',
    roles: ['Backend 파트원'],
    name: '김민우',
    position: 'KUIT 5기 홍보부원',
    email: 'kmw106933@naver.com',
    imageUrl: '/staff/kim_minwoo.jpg',
  },
  {
    part: 'Backend',
    roles: ['Backend 파트원'],
    name: '이영선',
    position: 'KUIT 5기 부회장',
    email: 'leedrkr010323@gmail.com',
    imageUrl: '/staff/lee_youngsun.jpg',
  },
  {
    part: 'Backend',
    roles: ['Backend 파트원'],
    name: '이현희',
    position: 'KUIT 3기 회장',
    email: 'starcraft0529@gmail.com',
    imageUrl: '',
  },
];
