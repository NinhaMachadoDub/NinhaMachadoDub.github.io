const assetBase = "assets";

const education = [
  {
    title: "Curso de Dublagem",
    detail: "Art & Dub • 2026",
    note: "Em andamento",
  },
  {
    title: "Workshop de Dublagem",
    detail: "Fred Mascarenhas • 2024",
  },
  {
    title: "Aulas Livres de Dublagem",
    detail: "Gigavoxx • 2013",
  },
  {
    title: "Curso de Teatro",
    detail: "2012–2015",
  },
];

const artisticEducation = [
  {
    title: "Ballet e Jazz",
    detail: "2002–2023",
  },
  {
    title: "Canto e Técnica Vocal",
    detail: "2016–2018",
  },
  {
    title: "Violão e Guitarra",
    detail: "2017–2022",
  },
];

const languages = [
  {
    title: "Português",
    detail: "Nativo",
  },
  {
    title: "Inglês",
    detail: "Avançado",
  },
  {
    title: "Espanhol",
    detail: "Intermediário",
  },
  {
    title: "Italiano",
    detail: "Básico",
  },
];

const samples = [
  {
    title: "Ação",
    thumb: `${assetBase}/Thumbs/Thumb_Rosa.png`,
    audio: `${assetBase}/Audios/Acao.wav`,
  },
  {
    title: "Animação",
    thumb: `${assetBase}/Thumbs/Thumb_Rosa.png`,
    audio: `${assetBase}/Audios/Animacao.wav`,
  },
  {
    title: "Aventura",
    thumb: `${assetBase}/Thumbs/Thumb_Rosa.png`,
    audio: `${assetBase}/Audios/Aventura.wav`,
  },
  {
    title: "Drama I",
    thumb: `${assetBase}/Thumbs/Thumb_Rosa.png`,
    audio: `${assetBase}/Audios/Drama%201.wav`,
  },
  {
    title: "Drama II",
    thumb: `${assetBase}/Thumbs/Thumb_Rosa.png`,
    audio: `${assetBase}/Audios/Drama%202.wav`,
  },
  {
    title: "Irônico",
    thumb: `${assetBase}/Thumbs/Thumb_Rosa.png`,
    audio: `${assetBase}/Audios/Ironico.wav`,
  },
  {
    title: "Menino",
    thumb: `${assetBase}/Thumbs/Thumb_Rosa.png`,
    audio: `${assetBase}/Audios/Menino.wav`,
  },
  {
    title: "Tutorial",
    thumb: `${assetBase}/Thumbs/Thumb_Rosa.png`,
    audio: `${assetBase}/Audios/Tutorial.WAV`,
  },
];

const works = [
  {
    category: "Voz original • Game",
    role: "Narradora",
    title: "Mente em Jogo",
    meta: "Illuminia Games • Meta Quest • 2026",
    image: `${assetBase}/Trabalhos/MenteEmJogo.png`,
  },
  {
    category: "Voz original • Game",
    role: "Mumbuquinha",
    title: "As Aventuras de Mumbuquinha 2.0",
    meta: "Reach Games • PC • 2025",
    image: `${assetBase}/Trabalhos/Mumbuquinhas.png`,
  },
  {
    category: "Interpretação • Teatro",
    role: "Rosa",
    title: "O Pequeno Príncipe",
    meta: "2014",
    image: `${assetBase}/Trabalhos/OPequenoPrincipe.png`,
  },
  {
    category: "Interpretação • Teatro",
    role: "Participação no elenco",
    title: "Musical To Be",
    meta: "2012",
    image: `${assetBase}/Trabalhos/ToBe.png`,
  },
];

const contact = {
  phoneDisplay: "(21) 99355-6691",
  phoneHref: "https://wa.me/5521993556691",
  email: "AnaCarolinapcm@gmail.com",
  location: "Rio de Janeiro • RJ",
};

const icons = {
  play:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 5v14l11-7z"/></svg>',
  pause:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z"/></svg>',
  email:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  location:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
};

function createMiniCard(item) {
  const card = document.createElement("article");
  card.className = "mini-card";
  card.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.detail}</p>
    ${item.note ? `<p class="note">${item.note}</p>` : ""}
  `;
  return card;
}

function renderMiniCards(id, data) {
  const list = document.getElementById(id);
  data.forEach((item) => list.append(createMiniCard(item)));
}

function renderSamples() {
  const list = document.getElementById("samples-list");

  samples.forEach((sample) => {
    const card = document.createElement("article");
    card.className = "sample-card";
    card.innerHTML = `
      <div class="sample-media">
        <img src="${sample.thumb}" alt="Capa do sample de voz ${sample.title}" loading="lazy">
        <button class="play-button" type="button" aria-label="Reproduzir sample ${sample.title}">
          ${icons.play}
        </button>
        <audio preload="metadata" src="${sample.audio}"></audio>
      </div>
      <h3 class="sample-title">${sample.title}</h3>
    `;
    list.append(card);
  });
}

function resetAudio(card) {
  const audio = card.querySelector("audio");
  const button = card.querySelector(".play-button");
  audio.pause();
  audio.currentTime = 0;
  button.innerHTML = icons.play;
  button.setAttribute(
    "aria-label",
    button.getAttribute("aria-label").replace("Pausar", "Reproduzir"),
  );
}

function setupAudioPlayers() {
  const cards = Array.from(document.querySelectorAll(".sample-card"));

  cards.forEach((card) => {
    const audio = card.querySelector("audio");
    const button = card.querySelector(".play-button");
    const title = card.querySelector(".sample-title").textContent;

    button.addEventListener("click", () => {
      const isPlaying = !audio.paused;

      cards.filter((other) => other !== card).forEach(resetAudio);

      if (isPlaying) {
        audio.pause();
        button.innerHTML = icons.play;
        button.setAttribute("aria-label", `Reproduzir sample ${title}`);
        return;
      }

      audio.play();
      button.innerHTML = icons.pause;
      button.setAttribute("aria-label", `Pausar sample ${title}`);
    });

    audio.addEventListener("ended", () => resetAudio(card));
  });
}

function renderWorks() {
  const list = document.getElementById("works-list");

  works.forEach((work) => {
    const card = document.createElement("article");
    card.className = "work-card";
    card.innerHTML = `
      <div class="work-image">
        <img src="${work.image}" alt="${work.title}" loading="lazy">
      </div>
      <div class="work-content">
        <p class="eyebrow">${work.category}</p>
        <h3>${work.title}</h3>
        <p class="role">${work.role}</p>
        <p class="meta">${work.meta}</p>
      </div>
    `;
    list.append(card);
  });
}

function createContactCard({ label, value, href, icon }) {
  const tag = href ? "a" : "div";
  const card = document.createElement(tag);
  card.className = "contact-card";
  if (href) {
    card.href = href;
  } else {
    card.setAttribute("aria-disabled", "true");
  }
  card.innerHTML = `
    <span class="contact-icon">${icons[icon]}</span>
    <span>
      <span class="contact-label">${label}</span>
      <span class="contact-value">${value}</span>
    </span>
  `;
  return card;
}

function renderContact() {
  const list = document.getElementById("contact-list");
  const items = [
    {
      label: "Telefone",
      value: contact.phoneDisplay,
      href: contact.phoneHref,
      icon: "phone",
    },
    {
      label: "E-mail",
      value: contact.email,
      href: contact.email.includes("@") ? `mailto:${contact.email}` : "",
      icon: "email",
    },
    {
      label: "Localização",
      value: contact.location,
      href: "",
      icon: "location",
    },
  ];

  items.forEach((item) => list.append(createContactCard(item)));
}

function revealOptionalHistoricPhoto() {
  const figure = document.querySelector(".historic-photo");
  const image = figure?.querySelector("img");
  if (!figure || !image) return;

  image.addEventListener("load", () => {
    figure.hidden = false;
  });

  image.addEventListener("error", () => {
    figure.hidden = true;
  });
}

function setupRevealAnimations() {
  const elements = Array.from(document.querySelectorAll(".reveal"));

  if (!elements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  elements.forEach((element, index) => {
    element.classList.add("is-armed");
    element.style.transitionDelay = `${Math.min(index * 90, 270)}ms`;
    observer.observe(element);
  });
}

renderMiniCards("education-list", education);
renderMiniCards("artistic-education-list", artisticEducation);
renderMiniCards("language-list", languages);
renderSamples();
renderWorks();
renderContact();
setupAudioPlayers();
revealOptionalHistoricPhoto();
setupRevealAnimations();
