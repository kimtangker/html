const events = [
  {
    year: '2024',
    text: '3학년',
    description: [
      'ICT 프로보노 프로젝트',
      '학부융합 프로젝트',
      '네트워크 관리사 2급',
      '리눅스 마스터 2급',
      'ADsp'
    ]
  },
  {
    year: '2025',
    text: '4학년',
    description: [
      '정보처리기사',
      '정보보안산업기사',
      'CTF 참여',
      'IT보안 기업 인턴'
    ]
  },
  {
    year: '2026',
    text: '졸업유예',
    description: [
      'CTF 참여',
      '세미나 및 컨퍼런스 참여',
      '화이트햇 스쿨 참여',
      'IT보안 기업 인턴'
    ]
  },
  {
    year: '2027',
    text: '졸업',
    description: [
      '정보보안기사',
      '취업 준비'
    ]
  },
  {
    year: '2028',
    text: '취업',
    description: [
      '위 역량을 기반으로 관심 기업 취업',
    ]
  }
];
let startIndex = 0;

function showInfo(infoId) {
  const sections = document.querySelectorAll('.info-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(infoId).classList.add('active');
}

function openTechInfo(title, description) {
  const modal = document.getElementById('techModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');

  const formattedDescription = description.replace(/\n/g, '<br>').replace(/<br>/g, '<br>&nbsp;&nbsp;');
  modalTitle.textContent = title;
  modalDescription.innerHTML = '&nbsp;&nbsp;' + formattedDescription;

  modal.style.display = 'block';
}

document.querySelector('.modal .close').onclick = function () {
  const modal = document.getElementById('techModal');
  modal.style.display = 'none';
}

window.onclick = function (event) {
  const modal = document.getElementById('techModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

function openCompanyModal(companyIndex) {
  const descriptions = [
    `&nbsp&nbsp티오리는 2017년 9월에 설립된 사이버 보안 분야의 B2B SaaS 기업이다. 현재 88명의 직원을 보유하고 있으며, 2022년 매출액은 125억 5,680만원이다. 2022년 K-사이버보안 우수기업 외교부장관상을 수상하고 청년친화강소기업 및 강소기업으로 선정되는 등 우수한 성과를 거두고 있다.<br><br>&nbsp&nbsp티오리의 주요 사업 및 제품은 다음과 같다: 정부기관 및 기업을 대상으로 보안 컨설팅을 제공하고 있다. 사이버 보안 교육 플랫폼 '드림핵'과 '패치데이'를 운영하고 있다. 공격자보다 한발 앞서 대응할 수 있도록 기술 중심적으로 문제를 해결하고 있다. 티오리의 미션과 비전은 사이버 보안 분야의 난제를 해결하고 미래를 안전하게 보호하며, 긍정적인 변화와 문화를 주도하는 것을 목표로 하고 있다. 세상을 안전하게 만드는 글로벌 B2B SaaS 기업으로 성장하고자 한다.<br><br>&nbsp&nbsp추가 정보로, 티오리는 사이버 보안 분야에서 기술 혁신을 주도하고 있다. 최근 RSA 컨퍼런스에서 보안 위협을 탐지하고 대응하는 기술을 선보이며 주목을 받았다. 이를 통해 티오리는 사이버 보안 분야의 선두 기업으로 자리매김하고 있다.<br><br>&nbsp&nbsp종합적으로 티오리는 사이버 보안 분야에서 혁신적인 기술과 서비스를 제공하며, 지속적인 성장과 우수한 성과를 거두고 있는 유망한 기업이다. 앞으로도 티오리가 세상을 더 안전하게 만드는 데 기여할 것으로 기대된다.<br><br>채용 정보 : <a href=https://www.theori.team/b1b14bef-f5c8-49cd-89a4-f219dcbe1a7c' target='_blank'>Theori Careers</a>`,
    `&nbsp&nbsp시큐아이는 2000년 3월에 설립된 삼성그룹의 정보보안 전문 회사이다. 현재 삼성SDS의 자회사로 운영되고 있으며, 477명의 직원을 보유하고 있다. 종로에 본사를 두고 있으며, 다양한 보안 솔루션과 서비스를 제공하고 있다.<br><br>&nbsp&nbsp주요 제품 및 서비스로는 네트워크 보안, 클라우드 보안, 보안 서비스 등 다양한 보안 솔루션을 제공하고 있다. 주요 제품으로는 차세대 방화벽 BLUEMAX NGF, 침입방지시스템 BLUEMAX IPS, 무선침입방지시스템 BLUEMAX WIPS, Anti-DDoS BLUEMAX ADS 등이 있다. 보안 진단, 보안 컨설팅 등의 서비스도 제공하고 있다.<br><br>&nbsp&nbsp기업 평가에서 시큐아이는 국내 1위 보안 기업으로 알려져 있다. 직원 존중, 워라밸, 동료 관계, 회사 문화 등에서 긍정적인 평가를 받고 있다.<br><br>&nbsp&nbsp추가 정보로, 시큐아이는 삼성그룹의 정보보안 전문 자회사로, 25년 이상의 경력을 가진 대기업이다. 다양한 보안 솔루션과 서비스를 제공하며, 국내 보안 시장에서 선도적인 역할을 하고 있다. 또한 직원 복지와 기업 문화 면에서도 우수한 평가를 받고 있다.<br><br>&nbsp&nbsp보안 기술 혁신에서 시큐아이는 사이버 보안 분야에서 기술 혁신을 주도하고 있다. 최근 RSA 컨퍼런스에서 보안 위협을 탐지하고 대응하는 기술을 선보이며 주목을 받았다. 이를 통해 시큐아이는 사이버 보안 분야의 선두 기업으로 자리매김하고 있다.<br><br>&nbsp&nbsp종합적으로 시큐아이는 사이버 보안 분야에서 혁신적인 기술과 서비스를 제공하며, 지속적인 성장과 우수한 성과를 거두고 있는 유망한 기업이다. 앞으로도 시큐아이가 세상을 더 안전하게 만드는 데 기여할 것으로 기대된다.<br><br>채용 정보 : <a href='https://www.secui.com/about/recruit' target='_blank'>Secui Careers</a>`,
    `&nbsp&nbsp지니언스는 2005년 1월에 설립된 정보보안 전문 기업이다. 현재 189명의 직원을 보유하고 있으며, 경기도 안양시에 본사를 두고 있다. 주요 제품 및 서비스로는 네트워크 보안: Genian NAC, Genian ZTNA, Genian Cloud NAC, Genian IPAM과 엔드포인트 보안: Genian EDR, Genian GPI 등이 있다. 지니언스는 통합 보안 플랫폼을 제공하며, 네트워크 보안과 엔드포인트 보안 솔루션을 주력으로 하고 있다.<br><br>&nbsp&nbsp기업 실적 및 평가에서 지니언스는 17년 연속 흑자를 달성하며, 기술력과 실적으로 증명된 보안 시장의 리더로 평가받고 있다. 국내 최초로 네트워크 접근제어(NAC) 솔루션을 출시하며 시장을 선도해왔다. 글로벌 기술력을 인정받아 1등 솔루션을 보유하고 있다.<br><br>&nbsp&nbsp추가 정보로, 지니언스는 최신 보안 기술을 전하는 블로그를 운영하며, 보안 전문성을 높이고 있다. 업력 20년차의 중소기업으로, 지속적인 성장과 혁신을 거듭하고 있다.<br><br>&nbsp&nbsp지니언스의 미래 전략으로는 통합 보안 플랫폼 기업으로 지속적인 기술 혁신을 통해 보안 시장을 선도할 것으로 기대된다. 네트워크 보안과 엔드포인트 보안 솔루션의 고도화를 통해 고객의 보안 요구사항을 충족시킬 계획이다. 글로벌 시장 진출을 통해 세계적인 보안 기업으로 성장하고자 한다.<br><br>&nbsp&nbsp종합적으로 지니언스는 통합 보안 플랫폼 기업으로, 네트워크 보안과 엔드포인트 보안 솔루션을 제공하며 보안 시장을 선도하고 있다. 기술력과 실적으로 증명된 유망 기업으로, 앞으로도 지속적인 성장과 혁신을 이어갈 것으로 기대된다.<br><br>채용 정보 : <a href='https://career.genians.co.kr/' target='_blank'>Genians Careers</a>`
  ];

  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');

  modalTitle.textContent = companyIndex === 1 ? '티오리 정보' : companyIndex === 2 ? '시큐아이 정보' : '지니언스 정보';
  modalDescription.innerHTML = descriptions[companyIndex - 1];

  const modal = document.getElementById('techModal');
  modal.style.display = 'block';
}

function showNextEvents() {
  startIndex = (startIndex + 1) % events.length;
  updateTimeline();
}

function showPrevEvents() {
  startIndex = (startIndex - 1 + events.length) % events.length;
  updateTimeline();
}

function updateTimeline() {
  const timeline = document.getElementById('timeline');
  const eventQueue = [...events, ...events];
  const displayEvents = eventQueue.slice(startIndex, startIndex + 3);

  timeline.innerHTML = displayEvents.map((event, index) => `
    <div class="event" onclick="handleEventClick(${index})">
      <h3>${event.year}</h3>
      <p>${event.text}</p>
    </div>
  `).join('');


  const middleEvent = displayEvents[1];
  const middleEventDescription = document.getElementById('middleEventDescription');
  middleEventDescription.innerHTML = `
    <h3>${middleEvent.year}년 계획</h3>
    <ul>${middleEvent.description.map(item => `<li>${item}</li>`).join('')}</ul>
  `;
}

function handleEventClick(index) {
  if (index === 0) {
    showPrevEvents();
  } else if (index === 2) {
    showNextEvents();
  }
}

document.addEventListener('DOMContentLoaded', updateTimeline);

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.classList.toggle('dark-mode');
});

function toggleHashtagInput() {
  const hashtagInputContainer = document.getElementById('hashtagInputContainer');
  hashtagInputContainer.style.display = hashtagInputContainer.style.display === 'none' ? 'inline' : 'none';
}

function addHashtag() {
  const hashtagInput = document.getElementById('hashtagInput');
  const hashtagValue = hashtagInput.value.trim();

  if (hashtagValue) {
    const hashtags = document.getElementById('hashtags');
    const newHashtag = document.createElement('span');
    newHashtag.textContent = `#${hashtagValue} `;
    newHashtag.classList.add('hashtag');
    hashtags.insertBefore(newHashtag, hashtags.lastChild);
    hashtagInput.value = '';
  }
}


const sections = ['container', 'technologies', 'companies', 'plans'];
let currentSectionIndex = 0;

function showNextSection() {
  currentSectionIndex = (currentSectionIndex + 1) % sections.length;
  document.getElementById(sections[currentSectionIndex]).scrollIntoView({behavior: 'smooth'});
}

function getCurrentSection() {
  const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2).closest('section');
  return sections.indexOf(currentSection.id);
}

function checkSectionAndMove() {
  const visibleSectionIndex = getCurrentSection();
  if (visibleSectionIndex !== -1) {
    currentSectionIndex = visibleSectionIndex;
  }
  showNextSection();
}

let inactivityTimeout = setTimeout(checkSectionAndMove, 5000);

function resetInactivityTimeout() {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(checkSectionAndMove, 5000);
}

window.addEventListener('scroll', resetInactivityTimeout);
window.addEventListener('mousemove', resetInactivityTimeout);
window.addEventListener('keydown', resetInactivityTimeout);
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let painting = false;
let brushColor = document.getElementById('colorPicker').value;
let brushSize = document.getElementById('brushSize').value;

function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;

  ctx.lineWidth = brushSize;
  ctx.lineCap = 'round';
  ctx.strokeStyle = brushColor;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

document.getElementById('colorPicker').addEventListener('input', (e) => {
  brushColor = e.target.value;
});

document.getElementById('brushSize').addEventListener('input', (e) => {
  brushSize = e.target.value;
});

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
