export const SV_DATA = [
  {
    grade: 'IM',
    c: '#2472A0',
    bg: 'rgba(36,114,160,0.09)',
    desc: '첫 오픽 / 기본 점수 목표',
    tips: [
      { t: '<b>4~6개</b>만 선택. 너무 많으면 준비가 부족해져요.' },
      { t: '<b>쉬운 토픽 우선</b>: 음악·TV·집에서 하는 일 등 일상 주제.' },
      { t: '<b>비활동형 토픽</b>이 유리: 복잡한 서술이 필요 없는 주제.' },
    ],
    topics: [
      { nm: '음악 감상', diff: '쉬움', c: '#2A7A40' },
      { nm: 'TV·영화 보기', diff: '쉬움', c: '#2A7A40' },
      { nm: '집에서 하는 일', diff: '쉬움', c: '#2A7A40' },
      { nm: '음식·요리', diff: '보통', c: '#8A6A10' },
      { nm: '동네·이웃', diff: '보통', c: '#8A6A10' },
    ],
  },
  {
    grade: 'IH',
    c: '#1A7A4A',
    bg: 'rgba(26,122,74,0.09)',
    desc: '취업 기준 / 가장 많이 목표',
    tips: [
      { t: '<b>6~8개 토픽</b>: 다양한 주제로 돌발 질문에 대비.' },
      { t: '<b>롤플레이 필수 대비</b>: IH부터 롤플레이 문제가 본격 출제.' },
      { t: '<b>콤보 세트</b>: 현재→과거→비교 3단계 답변을 준비.' },
    ],
    topics: [
      { nm: '운동·스포츠', diff: '추천', c: '#1A7A4A' },
      { nm: '건강', diff: '추천', c: '#1A7A4A' },
      { nm: '쇼핑', diff: '추천', c: '#1A7A4A' },
      { nm: '인터넷·SNS', diff: '보통', c: '#8A6A10' },
      { nm: '국내 여행', diff: '보통', c: '#8A6A10' },
      { nm: '독서', diff: '주의', c: '#A0303A' },
    ],
  },
  {
    grade: 'AL',
    c: '#B87A1A',
    bg: 'rgba(184,122,26,0.10)',
    desc: '최고 등급 / 논리·고급 어휘 필수',
    tips: [
      { t: '<b>8~12개 토픽</b>: 어떤 질문도 대응.' },
      { t: '<b>의견·이슈 적극 활용</b>: 찬반 논리·복잡한 담화 구조 필수.' },
      { t: '<b>복잡한 토픽</b>: 해외여행·기술·환경으로 어휘 수준 업.' },
      { t: '<b>담화 구조 체화</b>: 핵심→이유2개→예시→마무리.' },
    ],
    topics: [
      { nm: '해외여행', diff: 'AL 필수', c: '#8A6A10' },
      { nm: '기술·AI', diff: 'AL 필수', c: '#8A6A10' },
      { nm: '환경·사회', diff: 'AL 필수', c: '#8A6A10' },
      { nm: '비즈니스', diff: '고급', c: '#5A3A8A' },
      { nm: '교육', diff: '추천', c: '#1A7A4A' },
    ],
  },
];

export const GUIDE_DATA = [
  {
    num: '01',
    title: 'OPIc이란?',
    sub: '시험 구조와 등급 체계',
    rows: [
      { grade: 'NL/NM/NH', level: '초급', job: '불인정' },
      { grade: 'IL/IM', level: '중급 하', job: '일부 기업' },
      { grade: 'IH', level: '중급 상', job: '대부분 충족' },
      { grade: 'AL', level: '최고급', job: '최우대' },
    ],
    note: 'OPIc은 ACTFL 공인 영어 말하기 시험. 미리 녹음된 문항에 음성 답변. 총 40분, 15문항.',
  },
  {
    num: '02',
    title: '시험 진행 순서',
    sub: '입장부터 결과까지',
    steps: [
      { n: '1', t: '오리엔테이션 (5분)', d: '헤드셋 체크, 마이크 테스트. 호흡 가다듬기.' },
      { n: '2', t: 'Background Survey', d: '12~15개 항목 선택. 이 선택이 출제 문항을 결정.' },
      { n: '3', t: 'Self Assessment', d: '수준을 1~6으로 평가. 목표보다 1단계 높게 선택.' },
      { n: '4', t: '본 시험 (40분, 15문항)', d: '문제당 45초~2분 이상 목표. 절대 침묵 금지.' },
      { n: '5', t: '결과 (5~7일 후)', d: '홈페이지 확인. 유효기간 2년.' },
    ],
  },
  {
    num: '03',
    title: 'Self-Assessment 전략',
    sub: '등급 선택의 기술',
    saRows: [
      { sel: '1~2', diff: '쉬움', target: 'NL~IM' },
      { sel: '3', diff: '보통', target: 'IM~IH' },
      { sel: '4~5', diff: '어려움', target: 'IH~AL' },
      { sel: '6', diff: '최고', target: 'AL 도전' },
    ],
    dos: ['AL 목표 → 5~6 선택', 'IH 목표 → 4~5 선택', '준비된 주제만 선택'],
    donts: ['너무 낮게 선택', '준비 안 된 주제 선택', '문법 완벽주의'],
  },
  {
    num: '04',
    title: '문제 유형별 전략',
    sub: '콤보·롤플레이·돌발',
    tips: [
      { label: '① 묘사 문제', text: '"Tell me about..." 유형. 현재→세부묘사→느낌 순서.' },
      { label: '② 콤보 문제', text: '같은 주제 3연속. 현재→과거→비교/변화 구조.' },
      { label: '③ 롤플레이', text: '가상 상황 대화. 불만 제기·정보 요청·해결책 패턴 암기.' },
      { label: '④ 돌발 주제', text: '서베이 외 사회 이슈. AL이라면 기술·환경·교육 의견 준비.' },
    ],
  },
  {
    num: '05',
    title: 'AL 핵심 전략',
    sub: '고급 등급을 위한 필수 요소',
    tips: [
      { label: '담화 구조', text: '도입 → 핵심 주장 → 근거 2개 → 예시 → 마무리' },
      { label: '고급 연결어', text: '"Furthermore", "Nevertheless", "What\'s interesting is that", "This leads me to think..."' },
      { label: '추상적 논의', text: '"This reflects a broader trend...", "The underlying issue is..."' },
      { label: '유창성 > 정확성', text: '막히면 "Let me think...", "Come to think of it..." — 절대 침묵 금지!' },
    ],
  },
  {
    num: '06',
    title: '당일 체크리스트',
    sub: '할 것과 피할 것',
    dos: ['스크립트 가볍게 복습', '수면 7~8시간', '영어 팟캐스트 듣기', '신분증 확인'],
    dayDos: ['30분 전 도착', '입 준비운동', '서베이 신중히', '첫 문제서 페이스 설정'],
    fillers: [
      '"Let me think about that for a second..."',
      '"That\'s a really interesting question..."',
      '"Well, to be honest with you..."',
      '"Come to think of it..."',
    ],
  },
];
