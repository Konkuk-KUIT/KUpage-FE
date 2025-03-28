export interface StaffMember {
  name: string;
  position: string;
  role: string;
  description?: string;
  imageUrl: string;
  githubLink?: string;
  siteLink?: string;
}

const STAFFS: { [key: number]: StaffMember[] } = {
  4: [
    // 운영팀
    {
      name: '조하상',
      position: '운영팀',
      role: '회장',
      description:
        '안녕하세요, KUIT 4기 회장을 맡은 조하상입니다.\n\n웹 프론트엔드 개발자를\n희망하고 있습니다.\n\n잘 부탁드립니다!',
      imageUrl: '/src/assets/imgs/staff/cho_hasang.jpg',
      githubLink: 'https://github.com/crohasang',
    },
    {
      name: '김민우',
      position: '운영팀',
      role: '부회장',
      description:
        '안녕하세요!\n\n쿠잇 부회장을 맡은 김민우입니다!\n\n한 학기 동안 여러분의\n든든한 운영진이 되고 \n싶습니다! 감사합니다😊',
      imageUrl: '/src/assets/imgs/staff/kim_minwoo.jpg',
      githubLink: 'https://github.com/kmw10693',
    },
    {
      name: '김윤서',
      position: '운영팀',
      role: '관리부',
      description:
        '안녕하세요, KUIT 4기 관리부장을 맡은 김윤서입니다.\n저는 KUIT을 하면서 개발에 대한 열정과 흥미를 많이 키울 수 있었습니다.\n\nKUIT과 함께 하여 좋은 추억과 프로젝트 경험을 쌓고 가셨으면 좋겠습니다!',
      imageUrl: '/src/assets/imgs/staff/kim_yoonseo.jpg',
      githubLink: 'https://github.com/yskim6772',
    },
    {
      name: '이현희',
      position: '운영팀',
      role: '관리부',
      description: '안녕하세요!\n\n관리부 이현희입니다.\n잘 부탁드립니다!',
      imageUrl: '',
      githubLink: 'https://github.com/nonaninona',
    },
    {
      name: '김현주',
      position: '운영팀',
      role: '홍보부',
      description: '안녕하세요!\n홍보부 김현주입니다.\n\n한 학기 동안\n잘 부탁드려요 :)',
      imageUrl: '/src/assets/imgs/staff/kim_hyunjoo.jpg',
    },
    {
      name: '박원희',
      position: '운영팀',
      role: '홍보부',
      description: '안녕하세요!\n운영팀 박원희 입니다.',
      imageUrl: '/src/assets/imgs/staff/park_wonhee.jpg',
      // githubLink: 'https://github.com/parkwonhee1219',
    },
    {
      name: '김채린',
      position: '운영팀',
      role: '홍보부',
      description:
        '안녕하세요, KUIT 4기\n홍보부 김채린입니다.\n\nAndroid 개발자로서\n다양한 도전을 하고\n있습니다.\n\n잘 부탁드립니다 :)',
      imageUrl: '/src/assets/imgs/staff/kim_chaerin.jpg',
      githubLink: 'https://github.com/chrin05',
    },
    // Android
    {
      name: '김나은',
      position: 'Android',
      role: 'Android 파트장',
      description: '안드 빠샤 👊🔥',
      imageUrl: '/src/assets/imgs/staff/kim_naeun.jpg',
      githubLink: 'https://github.com/Nico1eKim',
    },
    {
      name: '조익성',
      position: 'Android',
      role: 'Android 파트장',
      description: '궁금한 것 있으면\n뭐든 물어봐주세요~',
      imageUrl: '/src/assets/imgs/staff/jo_ikseong.jpg',
      githubLink: 'https://github.com/ikseong00',
    },
    {
      name: '박성현',
      position: 'Android',
      role: 'Android 파트장',
      description: '아직 많이 부족하니,\n잘 부탁드려요!🫡',
      imageUrl: '/src/assets/imgs/staff/park_seonghyun.png',
      githubLink: 'https://github.com/sh1220',
    },
    // Web
    {
      name: '김지환',
      position: 'Web',
      role: 'Web 파트장',
      description: "Even if it's slow,\nkeep going like a turtle.",
      imageUrl: '/src/assets/imgs/staff/kim_jihwan.png',
      githubLink: 'https://github.com/Turtle-Hwan',
    },
    {
      name: '전진호',
      position: 'Web',
      role: 'Web 파트장',
      description: '안녕하세요,\n\n토스코어 프론트엔드\n개발자 전진호입니다.\n\n잘 부탁드려요 🙏',
      imageUrl: '/src/assets/imgs/staff/jeon_jinho.jpg',
      githubLink: 'https://github.com/jinho1011',
    },
    {
      name: '지호준',
      position: 'Web',
      role: 'Web 파트장',
      description: '안녕하세요!\n\n소통하는 개발자\n지호준입니다.',
      imageUrl: '/src/assets/imgs/staff/ji_hojun.jpg',
      githubLink: 'https://github.com/ho0010',
    },
    // Server
    {
      name: '이윤정',
      position: 'Server',
      role: 'Server 파트장',
      description: '한 학기 같이\n재밌게 개발해요😁😁\n\n잘 부탁드립니다!',
      imageUrl: '/src/assets/imgs/staff/lee_yoonjeong.jpg',
      githubLink: 'https://github.com/yunjeongiya',
    },
    {
      name: '이영선',
      position: 'Server',
      role: 'Server 파트장',
      description: '안녕하세요, KUIT 4기\n서버 파트장 이영선입니다.\n\n잘 부탁드립니다!',
      imageUrl: '/src/assets/imgs/staff/lee_youngsun.jpg',
      githubLink: 'https://github.com/lyouxsun',
    },
    {
      name: '함형주',
      position: 'Server',
      role: 'Server 파트장',
      description: '안녕하세요! KUIT 4기\n서버 파트장 함형주입니다.\n\n잘 부탁드립니다!',
      imageUrl: '/src/assets/imgs/staff/ham_hyeongju.jpg',
      githubLink: 'https://github.com/hamhyeongju',
    },
    // PM
    {
      name: '송채영',
      position: 'PM',
      role: 'PM 파트장',
      description:
        "안녕하세요!\n\nKUIT 3기에 \n'아워메뉴'를 기획하고\n\n4기에 운영진을 맡게 된\nPM 송채영입니다.",
      imageUrl: '/src/assets/imgs/staff/song_chaeyoung.jpg',
      // githubLink: 'https://github.com/JerrySong23',
    },
    {
      name: '이지유',
      position: 'PM',
      role: 'PM 파트장',
      description: '안녕하세요! KUIT 4기\nPM 파트장 이지유입니다.\n\n잘 부탁드립니다!',
      imageUrl: '',
      // githubLink: 'https://github.com/scrtzuzdoyou',
    },
  ],
  5: [
    // 운영팀
    {
      name: '이윤정',
      position: '운영팀',
      role: '회장',
      description:
        '@yunjeongiya\n깃헙인스타블로그 맞팔해요😚\n\n궁금한거 있으시면 편하게\n연락하세요~\n\n맛있는거 사드릴지도?',
      imageUrl: '/src/assets/imgs/staff/lee_yoonjeong.jpg',
      githubLink: 'https://github.com/yunjeongiya',
    },
    {
      name: '김지환',
      position: '운영팀',
      role: '부회장',
      description: '303 See Other',
      imageUrl: '/src/assets/imgs/staff/kim_jihwan.png',
      githubLink: 'https://github.com/Turtle-Hwan',
    },
    {
      name: '이영선',
      position: '운영팀',
      role: '부회장',
      description: '안녕하세요, KUIT 5기\n부회장 이영선입니다.\n\n잘 부탁드립니다!',
      imageUrl: '/src/assets/imgs/staff/lee_youngsun.jpg',
      githubLink: 'https://github.com/lyouxsun',
    },
    {
      name: '김나은',
      position: '운영팀',
      role: '총무',
      description:
        '안녕하세요, KUIT 5기 총무\n김나은입니다. \n\n한 학기 동안 잘부탁드립니다! 파이팅 💪🔥',
      imageUrl: '/src/assets/imgs/staff/kim_naeun_5.jpeg',
      githubLink: 'https://github.com/Nico1eKim',
    },
    {
      name: '양석준',
      position: '운영팀',
      role: '인사부',
      description: '영업 뛰는 개발자,\n양석준입니다',
      imageUrl: '/src/assets/imgs/staff/yang_seokjun.png',
      githubLink: 'https://github.com/YangJJune',
    },
    {
      name: '김민우',
      position: '운영팀',
      role: '홍보부',
      description: '쿠잇 파이팅!',
      imageUrl: '/src/assets/imgs/staff/kim_minwoo.jpg',
      githubLink: 'https://github.com/kmw10693',
    },
    {
      name: '정연우',
      position: '운영팀',
      role: '홍보부',
      description: '한학기동안 잘부탁드립니다!!',
      imageUrl: '/src/assets/imgs/staff/jeong_yeonwoo.jpeg',
      githubLink: 'https://github.com/woo319',
    },
    {
      name: '조하상',
      position: '운영팀',
      role: '운영팀',
      description: 'Keep Calm and Carry On',
      imageUrl: '/src/assets/imgs/staff/cho_hasang_5.jpg',
      githubLink: 'https://github.com/crohasang',
      siteLink: 'https://crohasang.com',
    },
    // Android
    {
      name: '김윤서',
      position: 'Android',
      role: 'Android 파트장',
      description:
        '안녕하세요,\nKUIT 5기 안드로이드 파트장을 맡은 김윤서입니다.\n\n같이 컴포즈 함 뿌셔봐요 !!\n화이팅 🍀✨',
      imageUrl: '/src/assets/imgs/staff/kim_yoonseo_5.jpeg',
      githubLink: 'https://github.com/yskim6772',
    },
    {
      name: '조익성',
      position: 'Android',
      role: 'Android 파트장',
      description: '한 학기 잘 부탁드립니다!',
      imageUrl: '/src/assets/imgs/staff/jo_ikseong.jpg',
      githubLink: 'https://github.com/ikseong00',
    },
    {
      name: '현재우',
      position: 'Android',
      role: 'Android 파트장',
      description: '잘 부탁드립니다!🤖🔥',
      imageUrl: '/src/assets/imgs/staff/hyun_jaewoo.jpeg',
      githubLink: 'https://github.com/casper-jr',
    },
    // WEB

    {
      name: '권동희',
      position: 'Web',
      role: 'Web 파트장',
      description: '🍀',
      imageUrl: '/src/assets/imgs/staff/kwon_donghee.jpeg',
    },
    {
      name: '김지환',
      position: 'Web',
      role: 'Web 파트장',
      description: '303 See Other',
      imageUrl: '/src/assets/imgs/staff/kim_jihwan.png',
      githubLink: 'https://github.com/Turtle-Hwan',
    },
    {
      name: '전진호',
      position: 'Web',
      role: 'Web 파트장',
      description: '안녕하세요,\n\n토스코어 프론트엔드\n개발자 전진호입니다.\n\n잘 부탁드려요 🙏',
      imageUrl: '/src/assets/imgs/staff/jeon_jinho.jpg',
      githubLink: 'https://github.com/jinho1011',
    },
    {
      name: '지호준',
      position: 'Web',
      role: 'Web 파트장',
      description: '안녕하세요!\n\n소통하는 개발자\n지호준입니다.',
      imageUrl: '/src/assets/imgs/staff/ji_hojun.jpg',
      githubLink: 'https://github.com/ho0010',
    },
    // Server
    {
      name: '박지원',
      position: 'Server',
      role: 'Server 파트장',
      description: '안녕하세요 KUIT 5기\n서버 파트장 박지원입니다.\n\n잘 부탁드립니다!',
      imageUrl: '/src/assets/imgs/staff/park_jiwon.jpeg',
      githubLink: 'https://github.com/david-parkk',
    },
    {
      name: '임제형',
      position: 'Server',
      role: 'Server 파트장',
      description: '한 학기 동안 같이 성장해 나갔으면 좋겠습니다.\n\n잘 부탁드립니다!!!',
      imageUrl: '/src/assets/imgs/staff/lim_jehyeong.jpg',
      githubLink: 'https://github.com/kisusu115',
    },
    {
      name: '장현준',
      position: 'Server',
      role: 'Server 파트장',
      description: '한 학기 화이팅해봅시다~ 🔥',
      imageUrl: '/src/assets/imgs/staff/jang_hyunjun.jpeg',
      githubLink: 'https://github.com/buzz0331',
    },
    {
      name: '함형주',
      position: 'Server',
      role: 'Server 파트장',
      description: '안녕하세요! KUIT 5기\n서버 파트장 함형주입니다.\n\n잘 부탁드립니다!',
      imageUrl: '/src/assets/imgs/staff/ham_hyeongju.jpg',
      githubLink: 'https://github.com/hamhyeongju',
    },
    // PM
    {
      name: '송채영',
      position: 'PM',
      role: 'PM 파트장',
      description: '안녕하세요 KUIT 5기 파트장 송채영입니다!\n\n밥약, 커피챗 환영합니당',
      imageUrl: '/src/assets/imgs/staff/song_chaeyoung.jpg',
      siteLink: 'https://my.surfit.io/w/630184441',
    },
    {
      name: '이지유',
      position: 'PM',
      role: 'PM 파트장',
      description:
        '안녕하세요, KUIT 5기 PM\n파트장을 맡은 이지유입니다!\n\n한 학기 동안 재미있게 기획,\n개발하며 성장하는 PM이 되고\n싶습니다.\n\n잘 부탁드립니다!',
      imageUrl: '/src/assets/imgs/staff/lee_jiyoo_5.jpg',
      siteLink: 'https://ambiguous-patio-117.notion.site/175fabc2141a80f6ae1cd4e23bedc5cb',
    },
  ],
};

export default STAFFS;
