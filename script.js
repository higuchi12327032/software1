const events = [
  {
    id: 1,
    name: "夏祭り",
    date: "2024-07-20",
    location: "京都市",
    description:
      "日本の夏の風物詩、地元の夏祭りです。屋台や盆踊り、花火大会など、伝統的な文化を楽しむことができます。",
  },
  {
    id: 2,
    name: "花火大会",
    date: "2024-08-15",
    location: "大阪市",
    description:
      "毎年恒例の大規模花火大会。多彩な花火が夜空を彩り、友達や家族と一緒に夏の思い出を作る絶好の機会です。",
  },
  {
    id: 3,
    name: "音楽フェス",
    date: "2024-09-05",
    location: "東京",
    description:
      "若者向けの音楽フェスティバル。国内外の人気アーティストが集結し、一日中音楽に浸れるイベントです。",
  },
  {
    id: 4,
    name: "映画上映会",
    date: "2024-06-10",
    location: "横浜市",
    description:
      "野外映画上映会です。ピクニック気分でお気に入りの映画を大画面で楽しみましょう。家族連れにも最適です。",
  },
  {
    id: 5,
    name: "アート展覧会",
    date: "2024-10-01",
    location: "名古屋市",
    description:
      "地元アーティストによるアート展。絵画、彫刻、写真など、多彩な作品が展示され、クリエイティブな刺激を受けることができます。",
  },
  {
    id: 6,
    name: "フードフェスティバル",
    date: "2024-11-22",
    location: "福岡市",
    description:
      "地元の美食を楽しむフードフェスティバルです。屋台やフードトラックが並び、多様な料理を味わうことができます。",
  },
  {
    id: 7,
    name: "ジョギングイベント",
    date: "2024-03-15",
    location: "札幌市",
    description:
      "初心者歓迎のジョギングイベント。健康的なライフスタイルを始めるきっかけに最適です。参加者全員に記念品あり。",
  },
  {
    id: 8,
    name: "読書会",
    date: "2024-05-30",
    location: "仙台市",
    description:
      "月一回の読書会です。好きな本を持ち寄り、他の読書好きと交流しながらディスカッションを楽しみましょう。",
  },
  {
    id: 9,
    name: "環境ボランティアイベント",
    date: "2024-04-22",
    location: "広島市",
    description:
      "環境保護活動に参加できるボランティアイベント。ゴミ拾いや植樹活動を通じて、地域社会への貢献ができます。",
  },
];

let selectedEventId = null;

function searchEvent() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(query)
  );
  displayEvents(filteredEvents);
}

function displayEvents(eventList) {
  const eventListDiv = document.getElementById("event-list");
  eventListDiv.innerHTML = "";
  eventList.forEach((event) => {
    const eventDiv = document.createElement("div");
    eventDiv.className = "event";
    eventDiv.innerHTML = `
          <h3>${event.name}</h3>
          <p>${event.date} - ${event.location}</p>
          <p>${event.description}</p>
          <button onclick="showRegisterForm(${event.id})">参加申し込み</button>
      `;
    eventListDiv.appendChild(eventDiv);
  });
}

function showRegisterForm(eventId) {
  selectedEventId = eventId;
  const registerSection = document.getElementById("register");
  registerSection.style.display = "block";

  const eventListSection = document.getElementById("events");
  eventListSection.style.display = "none";
}

function submitForm(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  alert(
    `イベントに申し込みました！\nイベントID: ${selectedEventId}\nメールアドレス: ${email}`
  );

  // フォームのリセットと表示のリセット
  document.getElementById("register-form").reset();
  document.getElementById("register").style.display = "none";
  document.getElementById("events").style.display = "block";
}

function goBack() {
  history.back();
}

function goForward() {
  history.forward();
}

function goHome() {
  document.getElementById("search").style.display = "block";
  document.getElementById("events").style.display = "block";
  document.getElementById("register").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  displayEvents(events);
});
