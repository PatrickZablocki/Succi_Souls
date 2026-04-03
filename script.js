const games = [
  {
    id: 'eldenring',
    title: 'Elden Ring',
    sections: {
      'Limgrave': [
        'Baumwächter',
        'Margit, das Grausame Omen',
        'Godrick, der Verpflanzte',
        'Bluthundritter Darriwil',
        'Bestienmensch von Farum Azula',
        'Grabwächterduellant'
      ],
      'Weinende Halbinsel': [
        'Leonine Bastard',
        'Baumavatar',
        'Uralter Held von Zamor'
      ],
      'Liurnia der Seen': [
        'Rote Wölfin von Radagon',
        'Rennala, Königin des Vollmonds',
        'Königlicher Ritter Loretta',
        'Magmakrake Makar',
        'Alecto, Anführerin der Schwarzen Messer'
      ],
      'Caelid': [
        'General Radahn',
        'Kommandant O’Neil',
        'Godskin-Apostel',
        'Putrider Avatar',
        'Nox-Schwertmeister & Nox-Priesterin'
      ],
      'Altus-Plateau': [
        'Elemer der Dornen',
        'Godskin-Adliger',
        'Baumavatar',
        'Uralter Drache Lansseax'
      ],
      'Gelmir / Vulkananwesen': [
        'Magmawyrm',
        'Godskin-Adliger',
        'Rykard, Herr der Blasphemie'
      ],
      'Leyndell, königliche Hauptstadt': [
        'Drachenbaumwächter',
        'Goldener Godfrey',
        'Morgott, König der Omen'
      ],
      'Verbotene Lande / Berggipfel der Riesen': [
        'Kommandant Niall',
        'Feuerriese',
        'Eisdrache Borealis'
      ],
      'Geweihtes Schneefeld / Miquellas Haligbaum': [
        'Loretta, Ritterin des Haligbaums',
        'Malenia, Klinge von Miquella'
      ],
      'Mohgwyn-Palast': [
        'Mohg, Fürst des Blutes'
      ],
      'Tiefen von Ainsel / Nokron / Nokstella': [
        'Ahngeist',
        'Königlicher Ahngeist',
        'Mimic Tear',
        'Astel, Naturgeborener des Nichts'
      ],
      'Crumbling Farum Azula': [
        'Godskin-Duo',
        'Bestienkleriker / Maliketh, die Schwarze Klinge',
        'Drachenfürst Placidusax'
      ],
      'Endboss': [
        'Godfrey / Hoarah Loux',
        'Radagon vom Goldenen Orden',
        'Eldenbestie'
      ]
    }
  },
  {
    id: 'ds1',
    title: 'Dark Souls 1',
    sections: {
      'Hauptspiel': [
        'Asyl-Dämon',
        'Taurus-Dämon',
        'Glockengargoyles',
        'Capra-Dämon',
        'Klaffdrache',
        'Chaoshexe Quelaag',
        'Mondlicht-Schmetterling',
        'Eisengolem',
        'Ornstein & Smough',
        'Großer Grauwolf Sif',
        'Streudämon',
        'Pinwheel',
        'Gravelord Nito',
        'Seath der Schuppenlose',
        'Vier Könige',
        'Bett des Chaos',
        'Kreuzblütige Priscilla',
        'Finsterer Sonnen-Gwyndolin',
        'Gwyn, Fürst der Asche'
      ],
      'DLC – Artorias des Abgrunds': [
        'Wächter des Heiligtums',
        'Ritter Artorias',
        'Schwarzer Drache Kalameet',
        'Manus, Vater des Abgrunds'
      ]
    }
  },
  {
    id: 'ds2',
    title: 'Dark Souls 2',
    sections: {
      'Hauptspiel': [
        'Der letzte Riese',
        'Der Verfolger',
        'Drachenreiter',
        'Alter Drachentöter',
        'Flexibler Wächter',
        'Ruinenwächter',
        'Glockenturm-Gargoyles',
        'Verlorene Sünderin',
        'Henkerstreitwagen',
        'Skelettfürsten',
        'Gierdämon',
        'Mytha, die Verderbte Königin',
        'Schmelzdämon',
        'Alter Eisenkönig',
        'Skorpionin Najka',
        'Königliche Rattenvorhut',
        'Der Verrottete',
        'Herzogs Liebste Freja',
        'Königliche Rattenautorität',
        'Magus & Gemeinde',
        'Spiegelritter',
        'Dämon des Gesangs',
        'Velstadt, der königliche Aegis',
        'Wächterdrache',
        'Alter Drache',
        'Riesenfürst',
        'Thronwächter & Thronverteidiger',
        'Nashandra',
        'Aldia, Gelehrter der Ersten Sünde'
      ],
      'DLC': [
        'Elana, die Squalide Königin',
        'Sinh, der schlafende Drache',
        'Aava, das Haustier des Königs',
        'Lud & Zallen',
        'Verbrannter Elfenbeinkönig',
        'Rauchritter',
        'Sir Alonne',
        'Blauer Schmelzdämon'
      ]
    }
  },
  {
    id: 'ds3',
    title: 'Dark Souls 3',
    sections: {
      'Hauptspiel': [
        'Iudex Gundyr',
        'Vordt vom Nordwindtal',
        'Fluchverrotteter Großbaum',
        'Kristallweiser',
        'Diakone des Abgrunds',
        'Wächter des Abgrunds',
        'Hochfürst Wolnir',
        'Alter Dämonenkönig',
        'Pontifex Sulyvahn',
        'Aldrich, Verschlinger der Götter',
        'Yhorm der Riese',
        'Tänzerin des Nordwindtals',
        'Drachentöter-Rüstung',
        'Oceiros, der verzehrte König',
        'Champion Gundyr',
        'Lothric & Lorian',
        'Uralter Wyvern',
        'Namenloser König',
        'Seele der Asche'
      ],
      'DLC – Ashes of Ariandel': [
        'Champion des Grabwächters & großer Wolf',
        'Schwester Friede'
      ],
      'DLC – The Ringed City': [
        'Dämon im Schmerz & Dämon aus der Tiefe',
        'Halflight, Speer der Kirche',
        'Dunkelfresser Midir',
        'Sklavenritter Gael'
      ]
    }
  }
];

const app = document.getElementById('app');

function loadState() {
  try {
    return JSON.parse(localStorage.getItem('dsBossTrackerState')) || {};
  } catch {
    return {};
  }
}

function saveState(state) {
  localStorage.setItem('dsBossTrackerState', JSON.stringify(state));
}

let state = loadState();

function totalBosses(game) {
  return Object.values(game.sections).flat().length;
}

function doneCount(game) {
  return Object.values(state[game.id] || {}).filter(Boolean).length;
}

function render() {
  app.innerHTML = '';

  games.forEach(game => {
    const total = totalBosses(game);
    const done = doneCount(game);
    const percent = Math.round((done / total) * 100) || 0;

    const card = document.createElement('section');
    card.className = 'card';

    card.innerHTML = `
      <h2>${game.title}</h2>
      <div class="meta">
        <span>Fortschritt</span>
        <strong>${done} / ${total} (${percent}%)</strong>
      </div>
      <progress value="${done}" max="${total}"></progress>
    `;

    Object.entries(game.sections).forEach(([sectionName, bosses]) => {
      const details = document.createElement('details');
      details.open = true;

      const summary = document.createElement('summary');
      summary.textContent = `${sectionName} (${bosses.length})`;
      details.appendChild(summary);

      const list = document.createElement('div');
      list.className = 'boss-list';

      bosses.forEach(boss => {
        const checked = !!state[game.id]?.[boss];

        const label = document.createElement('label');
        label.innerHTML = `
          <input type="checkbox" ${checked ? 'checked' : ''} data-game="${game.id}" data-boss="${boss}">
          <span class="${checked ? 'done' : ''}">${boss}</span>
        `;
        list.appendChild(label);
      });

      details.appendChild(list);
      card.appendChild(details);
    });

    app.appendChild(card);
  });

  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', e => {
      const gameId = e.target.dataset.game;
      const boss = e.target.dataset.boss;

      state[gameId] = state[gameId] || {};
      state[gameId][boss] = e.target.checked;

      saveState(state);
      render();
    });
  });
}

document.getElementById('resetAll')?.addEventListener('click', () => {
  const ok = confirm('Wirklich den kompletten Fortschritt zurücksetzen?');
  if (!ok) return;
  state = {};
  saveState(state);
  render();
});

document.getElementById('expandAll')?.addEventListener('click', () => {
  document.querySelectorAll('details').forEach(d => {
    d.open = true;
  });
});

document.getElementById('collapseAll')?.addEventListener('click', () => {
  document.querySelectorAll('details').forEach(d => {
    d.open = false;
  });
});

render();