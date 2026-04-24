# 🎨 Portfolio — Designer & Creator

소프트 파스텔 그라데이션과 라벤더 액센트 컬러를 활용한 미니멀 클린 스타일의 반응형 포트폴리오 웹사이트입니다.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## ✨ Features

- **반응형 디자인** — 데스크탑, 태블릿, 모바일 완벽 대응
- **GitHub API 연동** — 유저네임 입력 시 공개 저장소 자동 로딩
- **파스텔 그라데이션** — 부드러운 오로라 배경 애니메이션
- **스크롤 애니메이션** — Intersection Observer 기반 fade-up 리빌
- **다크 라벤더 액센트** — `#7C5CFC` 기반 통일된 컬러 시스템

## 📁 Project Structure

```
portfolio/
├── index.html              # 메인 HTML
├── css/
│   └── style.css           # 전체 스타일시트
├── js/
│   └── main.js             # 네비게이션, GitHub API, 애니메이션
├── assets/
│   └── images/             # 프로필 사진 등 이미지 에셋
├── docs/
│   └── design-guide.docx   # 디자인 가이드 문서
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### 로컬 실행

```bash
# 클론
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# 라이브 서버 실행 (VS Code Live Server 또는)
npx serve .
```

브라우저에서 `http://localhost:3000` 으로 접속하세요.

### GitHub Pages 배포

1. GitHub 레포지토리 → **Settings** → **Pages**
2. Source: `Deploy from a branch`
3. Branch: `main` / `/ (root)`
4. Save → `https://YOUR_USERNAME.github.io/portfolio/` 에서 확인

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `#7C5CFC` | 버튼, 링크, 아이콘 |
| `--text-dark` | `#1A1528` | 제목, 강조 텍스트 |
| `--bg` | `#FAFBFE` | 페이지 배경 |
| `--border` | `#EEEAF2` | 카드 테두리, 구분선 |
| `--radius` | `16px` | 카드, 인풋 모서리 |
| `--serif` | Playfair Display | 히어로, 섹션 타이틀 |
| `--sans` | DM Sans | 본문, 버튼, 라벨 |

자세한 내용은 `docs/design-guide.docx`를 참고하세요.

## 🛠️ Customization

### 개인 정보 수정

`index.html`에서 다음 항목을 수정하세요:

- **Hero 섹션** — 이름, 소개 문구
- **About 섹션** — 프로필 사진 (`assets/images/`에 추가), 소개글, 세부 정보
- **Services 섹션** — 서비스 카드 내용
- **Contact 섹션** — 이메일 주소, 소셜 링크
- **Footer** — 연락처, 소셜 미디어 URL

### 프로필 사진 추가

```html
<!-- about-photo-inner 내부의 placeholder를 교체 -->
<img src="assets/images/profile.jpg" alt="Profile" style="width:100%;height:100%;object-fit:cover;">
```

## 📄 License

MIT License — 자유롭게 사용, 수정, 배포 가능합니다.
