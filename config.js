/**
 * Original Warm Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "욱진",
    father: "이국찬",
    mother: "박치화",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "다혜",
    father: "이영진",
    mother: "정종숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-01-09",
    time: "10:40",
    venue: "비렌티 웨딩홀 3층 베르테홀",
    address: "충남 천안시 서북구 천안대로 1198-30",
    mapLinks: {
      kakao: "https://place.map.kakao.com/245466707",
      naver: "https://naver.me/Ghbu0bVI"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "초대 합니다",
    content: "8년전, 처음 사랑을 시작했던 사람과 \n평생을 함께하려 합니다.\n\n서로의 일상에 자연스럽게 자리 잡은 지금,\n영원한 서로의 편이 되어 주기로 했습니다.\n\n함께일 때 가장 즐겁고 행복한 마음을 잊지않겠습니다.\n\n저희의 새로운 시작에\n소중한 분들을 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑 이욱진", bank: "국민", number: "945802-00-605939" },
      { role: "아버지 이국찬", bank: "신한", number: "110-370-040886" },
      { role: "어머니 박치화", bank: "농협", number: "485058-52-114811" }
    ],
    bride: [
      { role: "신부 이다혜", bank: "카카오", number: "3333-15-0697018" },
      { role: "아버지 이영진", bank: "농협", number: "356-1424-275773" },
      { role: "어머니 정종숙", bank: "농협", number: "174431-52-025650" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "욱진 ♥ 다혜 결혼합니다",
    description: "2027년 01월 09일, 소중한 분들을 초대합니다."
  }
};
