// 1. 데이터 정의 (이후 이 객체에 내용을 추가하면 됩니다)
const musicData = {
    "2026": [
        {
            title: "Hitman",
            artist: "King Gnu",
            thumbnail: "https://img.youtube.com/vi/M2LmrvKA2Xo/mqdefault.jpg",
            link: "https://www.youtube.com/watch?v=M2LmrvKA2Xo",
            comment: "어릴적 꾸었던 미래는 희미해진지 오래"
        },
        {
            title: "Brave Shine",
            artist: "Aimer",
            thumbnail: "https://img.youtube.com/vi/XeI8E20ZUE4/mqdefault.jpg",
            link: "https://www.youtube.com/watch?v=XeI8E20ZUE4",
            comment: "어이 그 앞은 지옥이다.. 따라 올 수 있겠나?"
        },
        {
            title: "HYPNOTIZE",
            artist: "XG",
            thumbnail: "https://img.youtube.com/vi/cUfDOS2SINM/mqdefault.jpg",
            link: "https://www.youtube.com/watch?v=cUfDOS2SINM",
            comment: "이게 노래야"
        }
    ],
    "2025": [
        {
            title: "Hysteria",
            artist: "Muse",
            thumbnail: "https://img.youtube.com/vi/67ne64J1gmA/mqdefault.jpg",
            link: "https://www.youtube.com/watch?v=67ne64J1gmA",
            comment: "강렬한 베이스 라인과 일렉 선율의 황금정방형회전"
        },
        {
            title: "God knows...",
            artist: "涼宮ハルヒ",
            thumbnail: "https://img.youtube.com/vi/5QNaSMiZ_-o/mqdefault.jpg",
            link: "https://www.youtube.com/watch?v=5QNaSMiZ_-o",
            comment: "너희들 스즈미야 하루히를 잊은 거냐 ?!"
        },
        {
            title: "偽愛とハイボール",
            artist: "LET ME KNOW",
            thumbnail: "https://img.youtube.com/vi/kw4IawXrsDw/mqdefault.jpg",
            link: "https://www.youtube.com/watch?v=kw4IawXrsDw",
            comment: "도쿄에서 하이볼 마셔본적도 없어(2025년 기준)"
        },
        {
            title: "Where Is My Mind?",
            artist: "Pixies",
            thumbnail: "https://img.youtube.com/vi/Sb1SZYBvvY4/mqdefault.jpg",
            link: "https://www.youtube.com/watch?v=Sb1SZYBvvY4",
            comment: "파이트 클럽 그거 걸스나잇 영화잖아요"
        },
        {
            title: "夢中人",
            artist: "王菲",
            thumbnail: "https://img.youtube.com/vi/bdKdpyLH-IM/mqdefault.jpg",
            link: "https://www.youtube.com/watch?v=bdKdpyLH-IM",
            comment: "사랑에 유통기한이 있다면 5만년으로 하고 싶다."
        },
        {
            title: "The Less I Know The Better",
            artist: "Tame Impala",
            thumbnail: "https://img.youtube.com/vi/YnmEePUXLRs/mqdefault.jpg",
            link: "https://www.youtube.com/watch?v=YnmEePUXLRs",
            comment: "네오 지저스 저에게 네오 사이키델리아를 들려주세요"
        }
    ],
    "2024": [
        {
            title: "Nocturne Hotline",
            artist: "Path to nowhere",
            thumbnail: "https://img.youtube.com/vi/JHGp5TStiMU/mqdefault.jpg",
            link: "https://www.youtube.com/watch?v=JHGp5TStiMU",
            comment: "무기미도엔 명곡이 많지만 감히 이 노래가 최고라 해봅니다..."
        },
        {
            title: "Tomorrow is closed",
            artist: "Nothing But Thieves",
            thumbnail: "https://img.youtube.com/vi/fQxTgQrwxHg/mqdefault.jpg",
            link: "https://www.youtube.com/watch?v=fQxTgQrwxHg",
            comment: "화장실 벽에 낙서하지 마세요"
        },
        {
            title: "Black Thunder",
            artist: "The HU",
            thumbnail: "https://img.youtube.com/vi/KYsmMLvmAQo/mqdefault.jpg",
            link: "https://www.youtube.com/watch?v=KYsmMLvmAQo",
            comment: "몽골초원으로의 돌진 지금즉시"
        },
        {
            title: "Thanatos",
            artist: "Evangelion OST",
            thumbnail: "https://img.youtube.com/vi/V71KbeRYx4A/mqdefault.jpg",
            link: "https://www.youtube.com/watch?v=V71KbeRYx4A",
            comment: "365일이 여름이면 정말 힘들겠지"
        }
    ]
};
const cdRack = document.getElementById('cdRack');
const musicListContainer = document.getElementById('musicListContainer');
const songsWrapper = document.getElementById('songsWrapper');
const selectedYearLabel = document.getElementById('selectedYear');

// 연도 배열 추출 및 정렬
const years = Object.keys(musicData).sort((a, b) => b - a);

// --- CD 생성 로직 수정 ---
years.forEach((year, index) => {
    // 1. CD 기본 요소 생성
    const cd = document.createElement('div');
    cd.classList.add('cd-item');
    
    // 2. 호버 시 나타날 메시지 요소 생성 및 추가
    const message = document.createElement('span');
    message.classList.add('cd-message');
    message.innerText = `${year}년의 추천노래`; // 메시지 내용 설정
    cd.appendChild(message); // CD 내부에 메시지 삽입
    
    // 3. 배치 및 계층 구조 설정 (기존 유지)
    cd.style.top = `${index * 60}px`; // 간격 약간 조정
    cd.style.zIndex = years.length - index;

    // 4. 클릭 이벤트 (기존 유지)
    cd.addEventListener('click', () => {
        displayMusicList(year);
    });

    // 5. Rack에 CD 추가
    cdRack.appendChild(cd);
});
// 3. 노래 목록 출력 함수
function displayMusicList(year) {
    // 컨테이너 표시
    musicListContainer.style.display = 'block';
    selectedYearLabel.innerText = `${year}년 추천 곡`;
    
    // 기존 목록 초기화
    songsWrapper.innerHTML = '';

    // 해당 연도의 노래들 생성
    musicData[year].forEach(song => {
        const songCard = document.createElement('div');
        songCard.classList.add('song-card');

        songCard.innerHTML = `
            <img src="${song.thumbnail}" alt="${song.title} 커버" class="thumbnail">
            <div class="song-info">
                <h3><a href="${song.link}" target="_blank" style="color:inherit; text-decoration:none;">${song.title}</a></h3>
                <p><strong>${song.artist}</strong></p>
                <p class="comment">${song.comment}</p>
            </div>
        `;
        songsWrapper.appendChild(songCard);
    });
}