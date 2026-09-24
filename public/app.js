/* Bloom Dashboard — content (from Figma) + micro-interactions */
(() => {
  const A = (f) => `assets/${f}`;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const TEAMS = `<span class="ico teams" style="width:20px;height:20px"><span style="inset:9.97% 3.61% 2.98% 3.61%"><img src="${A('990e3.svg')}" alt="" /></span></span>`;

  /* ---------------- Data ---------------- */
  const welcome = [
    { strokes: 'B', mask: '63f9a.svg', inset: '5.67% 11.25% 18.86% 11.25%', photo: '9b46e.png', box: [17, 41, 206, 201], img: ['228.26%', '-119.8%', '-17.45%', '334.62%'], name: 'Ahmed Obaid', w: 600, role: 'Contact Center Agent' },
    { strokes: 'L', mask: '06dfc.svg', inset: '5.69% 14.38% 28.59% 14.37%', photo: '70a7e.png', box: [14, 14, 199, 243], img: ['122.9%', '0', '-2.66%', '100%'], name: 'Nada Sayed', w: 500, role: 'Content Manager' },
    { strokes: 'O', mask: '69598.svg', inset: '8.12% 6.88% 31.02% 6.88%', photo: '54205.png', box: [20, 14, 191, 190], img: ['131.76%', '-53.94%', '-0.3%', '198.76%'], name: 'Ahmed bin Said', w: 500, role: 'Sr. Manager' },
    { strokes: 'O', mask: '69598.svg', inset: '8.12% 6.88% 31.02% 6.88%', photo: '15a36.png', box: [0, 0, 240, 227], img: ['220.78%', '-11.25%', '-11.71%', '117.5%'], name: 'Samira Sheikh', w: 500, role: 'Content Manager' },
    { strokes: 'M', mask: '71363.svg', inset: '13.37% 5.6% 36.27% 5.6%', photo: '625ce.png', box: [-8, 23, 256, 208], img: ['215.38%', '0', '-61.54%', '100%'], name: 'Salwa Al-Qwaiz', w: 500, role: 'Marketing Intern' },
  ];

  const SEP = `<div class="p-sep"><div class="line"><img src="${A('4be4e.svg')}" data-dark="${A('dark/0d595.svg')}" alt="" /></div></div>`;
  const policies = [
    {
      thumb: `<img class="p-img" src="${A('06b97.png')}" alt="Brand Guidelines" />
        <div style="position:absolute;left:0;top:0;width:230px;height:150px"><img src="${A('d307b.svg')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;display:block" /></div>`,
      title: 'Brand Guidelines', lg: true, cat: 'Brand &amp; communications',
      desc: 'Use Bloom’s logo, colours and typography consistently across documents, presentations ...', gap: 60,
    },
    {
      thumb: `<div style="position:absolute;inset:0;border-radius:26px;background-image:linear-gradient(159.36deg, rgb(0,131,254) 18.305%, rgb(7,50,206) 90.688%)"></div>
        <div style="position:absolute;left:115px;top:0;width:115px;height:150px;overflow:hidden"><img src="${A('732f2.png')}" alt="" style="position:absolute;max-width:none;height:162.14%;left:-21.74%;top:-24.89%;width:161.37%" /></div>
        <p style="position:absolute;left:22px;top:54px;width:112px;color:#fff;font-size:20px;font-weight:600;line-height:21px;white-space:pre-wrap">Data <br />Security</p>
        <p style="position:absolute;left:22px;top:111px;width:82px;color:#fff;font-size:11px;font-weight:500;line-height:24px">Bloom Holding</p>`,
      title: 'Data &amp; Email Security', cat: 'Information security',
      desc: 'Learn how to protect company information, recognise suspicious emails and use email securely.', gap: 63, goEnd: true,
    },
    {
      thumb: `<img src="${A('067b8.png')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:26px" />
        <p style="position:absolute;left:29px;top:46px;color:#fff;font-size:20px;font-weight:500;line-height:19px;white-space:pre">Bloom<br />Processes <br />Governance</p>`,
      title: 'Management', cat: 'Processes &amp; governance',
      desc: 'Understand the steps for requesting, reviewing and implementing changes to systems and processes.', gap: 61,
    },
    {
      thumb: `<img src="${A('49780.png')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:26px" />
        <div style="position:absolute;left:15px;top:43px;width:17px;height:46px;background:#dd3f22"></div>
        <div style="position:absolute;left:22px;top:56px;color:#fff;font-size:20px;font-weight:500;line-height:19px;white-space:nowrap"><p>Incident</p><p>Response</p></div>`,
      title: 'Incident Management', cat: 'Incident response',
      desc: 'Find guidance on reporting incidents, escalating issues and following the response process.', gap: 61,
    },
  ];

  const deals = [
    { logo: `<div class="inner" style="inset:0"><img src="${A('4da3f.png')}" alt="Marriott" style="height:57.9%;left:12.64%;top:19.09%;width:77.52%" /></div>`, name: 'Marriott Hotel Downtown', off: '30% Off' },
    { logo: `<div class="inner" style="left:18px;top:20px;width:48.18px;height:46.975px"><img src="${A('b8825.png')}" alt="Marriott" style="height:171.79%;left:-35%;top:-35.9%;width:167.5%" /></div>`, name: 'Marriott Hotel Downtown', off: '25% Off' },
    { logo: `<img src="${A('0fbeb.png')}" alt="Emirates Food Industries" style="left:6px;top:7px;width:72px;height:72px;object-fit:cover" />`, name: 'Emirates Food Industries', off: '20% Off' },
    { logo: `<img src="${A('f91b7.png')}" alt="Abu Dhabi Edition" style="left:7px;top:29px;width:72px;height:21px;object-fit:cover;mix-blend-mode:luminosity" />`, name: 'Abu Dhabi Edition', off: '10% Off', w: 500 },
    { logo: `<img src="${A('2784e.svg')}" alt="Abu Dhabi Rise" style="left:19px;top:18px;width:48px;height:49px" />`, name: 'Abu Dhabi Rise', off: '30% Off', w: 500, nameW: 108 },
  ];

  const perks = [
    { img: '4b4ff.png', title: 'Medical Insurance', shade: 'linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,.7))' },
    { img: '21b1b.png', title: 'Flight<br />Tickets' },
    { img: 'fd1dc.png', title: 'Mimojo', shade: 'linear-gradient(180deg, rgba(0,0,0,0), rgba(16,15,15,.6))' },
  ];

  const ICONS = {
    sf: `<div class="t-icon sf"><span class="ico" style="width:40.084px;height:28px"><img src="${A('4ff98.svg')}" data-dark="${A('dark/02655.svg')}" alt="Salesforce" /></span></div>`,
    sap: `<div class="t-icon"><span class="ico" style="width:60px;height:60px"><img src="${A('fd07f.svg')}" data-dark="${A('dark/d075e.svg')}" alt="SAP" /></span></div>`,
    sign: `<div class="t-icon sign"><span class="ico" style="width:31.258px;height:31.241px"><img src="${A('103e6.svg')}" data-dark="${A('dark/3f40f.svg')}" alt="" /></span></div>`,
    teal: `<div class="t-icon teal"><img class="fill" src="${A('5f7b0.png')}" alt="" /></div>`,
    pbi: `<div class="t-icon pbi"><span class="ico" style="width:40px;height:40px"><span style="inset:6.25% 17.3% 6.25% 17.07%"><span style="inset:0 0 -8.34% 0"><img src="${A('1edd3.svg')}" alt="Power BI" /></span></span></span></div>`,
  };
  const AR = 'ar', UPD = 'upd', VIEW = 'view';
  const tasks = [
    { i: 'sf', t: 'Annual Leave Request – 10 Aug to 15 Aug', m: ['REQ-1041 · Annual Leaves · Peter Whitney · ', '15 mins ago'], g: 4, a: AR },
    { i: 'sap', t: 'Tender Decision Request', m: ['REQ-1041 · Purchase order  · ', '<span class="hot">Overdue 12:42 PM | 18 Sep</span>'], g: 4, a: UPD },
    { i: 'sign', t: 'Sign the vendor service agreement', m: ['REQ-1041  · Service agreement · ', '1:18 PM | 18 Sep'], g: 4, a: AR },
    { i: 'teal', t: 'Annual Leave Request – 10 Aug to 15 Aug', m: ['REQ-1041 · Annual Leaves · Peter Whitney · ', '15 mins ago'], g: 4, a: AR },
    { i: 'pbi', t: 'Purchase Order Request for Vendor', m: ['REQ-1041 ·Banner · Marketing team · Due 23 Sep'], g: 0, a: AR },
    { i: 'sf', t: 'Follow up on Acme’s renewal', m: ['REQ-1041 · Acme Corporation  ·', '<span class="hot">Due today, 3:00 PM</span>'], g: 4, a: AR },
    { i: 'teal', t: 'Annual Leave Request – 10 Aug to 15 Aug', m: ['REQ-1041 · Annual Leaves · Peter Whitney · ', '15 mins ago'], g: 4, a: AR },
    { i: 'teal', t: 'Annual Leave Request – 10 Aug to 15 Aug', m: ['REQ-1041 · Annual Leaves · Peter Whitney · ', '15 mins ago'], g: 4, a: AR },
    { i: 'teal', t: 'Annual Leave Request – 10 Aug to 15 Aug', m: ['REQ-1041 · Annual Leaves · Peter Whitney · ', '15 mins ago'], g: 4, a: AR },
    { i: 'teal', t: 'Annual Leave Request – 10 Aug to 15 Aug', m: ['REQ-1041 · Annual Leaves · Peter Whitney · ', '15 mins ago'], g: 4, a: AR },
    { i: 'teal', t: 'Annual Leave Request – 10 Aug to 15 Aug', m: ['REQ-1041 · Annual Leaves · Peter Whitney · ', '15 mins ago'], g: 4, a: AR },
  ];

  const sports = [
    { photo: `<img src="${A('0177f.png')}" alt="" style="height:102.43%;left:-10.64%;top:-2.43%;width:121.28%" />`, grad: 'c702a.svg', av: ['25baf.png', 'd9b62.png', '1daa9.png'], count: '+32', title: 'Padel Group', accent: '#3549fe', desc: 'Grab your racket and join the fun with Bloom Padel Group.', descColor: '#d5ffa6' },
    { photo: `<img class="cover" src="${A('a0d8a.png')}" alt="" />`, grad: '192a7.svg', av: ['e2d60.png', '88637.png', '45830.png'], count: '1.2K', title: 'Bloom Run Club', accent: '#df4411', desc: 'Find your stride and join the fun with Bloom Run Club.' },
    { photo: `<img class="cover" src="${A('96c70.png')}" alt="" />`, grad: '925b8.svg', av: ['e2d60.png', 'e3aae.png', 'c3911.png'], count: '+45', title: 'Bloom Football', accent: '#009955', desc: 'Kick off the fun with Bloom Football Group.' },
    { photo: `<img class="cover" src="${A('55bb2.png')}" alt="" />`, grad: '8b02e.svg', av: ['e2d60.png', '3b940.png', '8f684.png'], count: '+16', title: 'Basket Ball', accent: '#922a22', desc: 'Shoot hoops with Bloom Basketball Group.' },
    { photo: `<img class="cover" src="${A('0d2dc.png')}" alt="" />`, grad: 'e7a53.svg', av: ['e2d60.png', '88637.png', '45830.png'], count: '+32', title: 'Cycling Group', accent: '#9b3eff', desc: 'Ride together with Bloom Cycling Group.', top: 212, joinSmall: true },
  ];

  /* ---------------- Letter writing choreography ----------------
     Each letter is revealed stroke by stroke. A stroke is a soft-edged gradient mask confined to a
     region of the letter box (x, y, w, h as fractions): 'lin' paints in a direction, 'arc' sweeps
     around a centre (cx, cy are % of the region). t = start, d = duration (s). --sN animates 0 → 1. */
  const STROKES = {
    B: [
      { type: 'lin', dir: 'to bottom', x: 0, y: 0, w: .42, h: 1, t: 0, d: .85 },
      { type: 'arc', cx: '27%', cy: '48%', x: .25, y: 0, w: .75, h: .5, t: .55, d: .95 },
      { type: 'arc', cx: '27%', cy: '49%', x: .25, y: .45, w: .75, h: .55, t: 1.15, d: 1.0 },
    ],
    L: [
      { type: 'lin', dir: 'to bottom', x: 0, y: 0, w: .42, h: 1, t: 0, d: 1.0 },
      { type: 'lin', dir: 'to right', x: 0, y: .72, w: 1, h: .28, t: .75, d: .9 },
    ],
    O: [
      { type: 'arc', cx: '50%', cy: '50%', x: 0, y: 0, w: 1, h: 1, t: 0, d: 1.8 },
    ],
    M: [
      { type: 'lin', dir: 'to top', x: 0, y: 0, w: .25, h: 1, t: 0, d: .7 },
      { type: 'lin', dir: 'to bottom', x: .2, y: 0, w: .32, h: 1, t: .45, d: .7 },
      { type: 'lin', dir: 'to top', x: .48, y: 0, w: .32, h: 1, t: .9, d: .7 },
      { type: 'lin', dir: 'to bottom', x: .75, y: 0, w: .25, h: 1, t: 1.35, d: .7 },
    ],
  };
  const pos = (x, w) => (w >= 1 ? '0%' : `${((x / (1 - w)) * 100).toFixed(2)}%`);
  const writeStyle = (key, glyph) => {
    const s = STROKES[key];
    const layers = s.map((k, i) => {
      const v = `var(--s${i + 1})`;
      const g = k.type === 'lin'
        ? `linear-gradient(${k.dir}, #000 calc(${v} * 125% - 25%), rgba(0,0,0,0) calc(${v} * 125%))`
        : `conic-gradient(from -90deg at ${k.cx} ${k.cy}, #000 calc(${v} * 400deg - 40deg), rgba(0,0,0,0) calc(${v} * 400deg))`;
      return `${g} ${pos(k.x, k.w)} ${pos(k.y, k.h)} / ${k.w * 100}% ${k.h * 100}% no-repeat`;
    });
    const all = [`url(${glyph}) 0 0 / 100% 100% no-repeat`, ...layers].join(', ');
    const timing = s.map((k, i) => `--d${i + 1}:${k.d}s;--t${i + 1}:${k.t}s`).join(';');
    const total = Math.max(...s.map((k) => k.t + k.d));
    // glyph ∩ (stroke1 ∪ stroke2 ∪ …)
    const std = ['intersect', ...s.slice(1).map(() => 'add'), 'add'].slice(0, s.length + 1).join(', ');
    const wk = ['source-in', ...s.slice(1).map(() => 'source-over'), 'source-over'].slice(0, s.length + 1).join(', ');
    return `-webkit-mask:${all};mask:${all};-webkit-mask-composite:${wk};mask-composite:${std};${timing};--write:${total}s`;
  };

  /* ---------------- Render ---------------- */
  $('#welcomeRow').innerHTML = welcome.map((p) => `
    <article class="w-card">
      <div class="w-letter" style="inset:${p.inset};--mask:url(${A("masks/" + p.mask)});${writeStyle(p.strokes, A("masks/" + p.mask))}">
        <div class="w-mesh"></div><div class="w-field f1"></div><div class="w-field f2"></div><div class="w-field f3"></div><div class="w-light"></div>
        <img src="${A(p.mask)}" alt="" />
      </div>
      <div class="w-photo" style="left:${p.box[0]}px;top:${p.box[1]}px;width:${p.box[2]}px;height:${p.box[3]}px">
        <img src="${A(p.photo)}" alt="${p.name}" style="height:${p.img[0]};left:${p.img[1]};top:${p.img[2]};width:${p.img[3]}" />
      </div>
      <div class="w-fade"></div>
      <div class="w-text">
        <div><p class="w-name" style="font-weight:${p.w}">${p.name}</p><p class="w-role">${p.role}</p></div>
        <p class="w-tag">New Joining</p>
      </div>
      <button class="soft-btn w-btn" data-done="Hello Sent">${TEAMS}<span class="lbl">Say Hello</span></button>
    </article>`).join('');

  $('#policyList').innerHTML = policies.map((p) => `
    <div class="p-item" style="gap:${p.gap}px" tabindex="0">
      <div class="p-main">
        <div class="p-thumb">${p.thumb}</div>
        <div class="p-body">
          <div class="p-titles"><p class="p-title${p.lg ? ' lg' : ''}">${p.title}</p><p class="p-cat">${p.cat}</p></div>
          <p class="p-desc">${p.desc}</p>
        </div>
      </div>
      <button class="p-go" aria-label="Open ${p.title}" ${p.goEnd ? 'style="align-items:flex-end;justify-content:flex-end"' : ''}>
        <span class="ico" style="width:18px;height:18px"><img src="${A('a7366.svg')}" data-dark="${A('dark/c08d5.svg')}" alt="" /></span>
      </button>
    </div>${SEP}`).join('');

  $('#dealsRow').innerHTML = deals.map((d) => `
    <div class="deal" tabindex="0">
      <div class="deal-logo">${d.logo}</div>
      <div class="deal-text">
        <p class="deal-name" style="font-weight:${d.w || 400}${d.nameW ? `;width:${d.nameW}px` : ''}">${d.name}</p>
        <p><span class="deal-off">${d.off}</span></p>
      </div>
    </div>`).join('');

  $('#perksRow').innerHTML = perks.map((p) => `
    <article class="perk">
      <img class="perk-img" src="${A(p.img)}" alt="" />
      ${p.shade ? `<div class="perk-shade" style="background:${p.shade}"></div>` : ''}
      <div class="perk-bar"><p class="perk-title">${p.title}</p><button class="pill-white">View</button></div>
    </article>`).join('');

  const renderTasks = () => {
    $('#taskList').innerHTML = tasks.map((t, idx) => `
      <div class="task" style="--i:${idx}">
        <div class="t-left">
          ${ICONS[t.i]}
          <div class="t-text">
            <p class="t-title">${t.t}</p>
            <div class="t-meta" style="gap:${t.g}px">${t.m.map((s) => `<span>${s}</span>`).join('')}</div>
          </div>
        </div>
        <div class="t-actions">${
          t.a === AR ? '<button class="chip approve">Approve</button><button class="chip reject">Reject</button>'
          : t.a === UPD ? '<button class="chip update">Update FRI</button>'
          : '<button class="chip view">View Task</button>'}
        </div>
      </div>`).join('');
  };
  renderTasks();

  $('#sportsRow').innerHTML = sports.map((s, i) => `
    <article class="sport" style="--i:${i};--accent:${s.accent}">
      <div class="sport-photo">${s.photo}</div>
      <div class="sport-grad"><img src="${A(s.grad)}" alt="" /></div>
      <div class="sport-text" style="top:${s.top || 220}px">
        <p class="sport-title">${s.title}</p>
        <p class="sport-desc"${s.descColor ? ` style="color:${s.descColor}"` : ''}>${s.desc}</p>
      </div>
      <div class="sport-bar">
        <div class="avatars">
          <span class="av av1"><img src="${A(s.av[0])}" alt="" width="30" height="30" /></span>
          <span class="av av2"><img src="${A(s.av[1])}"${s.av[1] === 'd9b62.png' ? ` data-dark="${A('dark/4cce9.png')}"` : ''} alt="" width="34" height="34" /></span>
          <span class="av av3"><img src="${A(s.av[2])}" alt="" width="34" height="34" /></span>
          <span class="count">${s.count}</span>
        </div>
        <button class="pill-white join"${s.joinSmall ? ' style="font-size:10px;font-weight:500"' : ''}>Join</button>
      </div>
    </article>`).join('');

  /* ---------------- Welcome: letters write themselves in, stroke by stroke ---------------- */
  {
    const cards = $$('.w-card');
    const ERASE_MS = 500;
    const totalMs = (c) => parseFloat(getComputedStyle($('.w-letter', c)).getPropertyValue('--write')) * 1000 || 2000;
    const write = (card) => {
      if (card._busy) return;
      card._busy = true;
      const T = totalMs(card);
      if (card.classList.contains('w-write')) {
        card.classList.add('w-erase');           // recede softly, then write again
        card.classList.remove('w-write');
        setTimeout(() => { card.classList.remove('w-erase'); card.classList.add('w-write'); }, ERASE_MS);
        setTimeout(() => { card._busy = false; }, ERASE_MS + T);
      } else {
        card.classList.add('w-write');
        setTimeout(() => { card._busy = false; }, T);
      }
    };
    if (reduceMotion) cards.forEach((c) => c.classList.add('w-write'));
    else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          setTimeout(() => write(en.target), 250 + cards.indexOf(en.target) * 260);
          io.unobserve(en.target);
        });
      }, { threshold: 0.2 }); // cards peeking in at the carousel edge count as visible
      cards.forEach((c) => io.observe(c));
      cards.forEach((c) => c.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') write(c); }));
    }
  }

  /* ---------------- Welcome: BLOOM letter mesh follows the cursor (spring) ---------------- */
  {
    const section = $('.welcome');
    const cards = $$('.w-card', section).map((el) => ({
      el, letter: $('.w-letter', el),
      x: 0, y: 0, vx: 0, vy: 0,          // mesh offset (-1…1)
      lx: 50, ly: 40, lo: 0, vlo: 0,      // light position (%) + strength
      tx: 0, ty: 0, tlx: 50, tly: 40, tlo: 0,
    }));
    const K = 0.028, D = 0.16;            // soft spring: slow, tiny overshoot
    let pointer = null, raf = 0, visible = false;

    const retarget = () => {
      cards.forEach((c) => {
        if (!pointer) { c.tx = 0; c.ty = 0; c.tlo = 0; return; }
        const r = c.el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        // Direction towards the cursor, softly saturating with distance
        const dx = (pointer.x - cx) / (r.width * 1.6), dy = (pointer.y - cy) / (r.height * 1.6);
        c.tx = Math.tanh(dx); c.ty = Math.tanh(dy);
        const lr = c.letter.getBoundingClientRect();
        c.tlx = ((pointer.x - lr.left) / lr.width) * 100;
        c.tly = ((pointer.y - lr.top) / lr.height) * 100;
        const dist = Math.hypot(pointer.x - cx, pointer.y - cy);
        c.tlo = Math.max(0, 1 - dist / (r.width * 1.4)) * .9;
      });
    };
    const tick = () => {
      let moving = false;
      cards.forEach((c) => {
        c.vx = (c.vx + (c.tx - c.x) * K) * (1 - D); c.x += c.vx;
        c.vy = (c.vy + (c.ty - c.y) * K) * (1 - D); c.y += c.vy;
        c.vlo = (c.vlo + (c.tlo - c.lo) * K) * (1 - D); c.lo += c.vlo;
        c.lx += (c.tlx - c.lx) * .06; c.ly += (c.tly - c.ly) * .06;   // light glides behind the cursor
        const s = c.el.style;
        s.setProperty('--gx', c.x.toFixed(4)); s.setProperty('--gy', c.y.toFixed(4));
        s.setProperty('--lo', Math.max(0, c.lo).toFixed(3));
        s.setProperty('--lx', `${c.lx.toFixed(2)}%`); s.setProperty('--ly', `${c.ly.toFixed(2)}%`);
        if (Math.abs(c.tx - c.x) + Math.abs(c.ty - c.y) + Math.abs(c.vx) + Math.abs(c.vy) + Math.abs(c.tlo - c.lo) + Math.abs(c.tlx - c.lx) / 100 > 0.002) moving = true;
      });
      raf = moving ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => { retarget(); if (!raf) raf = requestAnimationFrame(tick); };

    if (!reduceMotion) {
      new IntersectionObserver(([en]) => {
        visible = en.isIntersecting;
        section.classList.toggle('live', visible);
        if (!visible) { pointer = null; kick(); }
      }).observe(section);
      addEventListener('pointermove', (e) => {
        if (!visible) return;
        const r = section.getBoundingClientRect();
        const pad = 120; // react as the cursor approaches, not only when inside
        const near = e.clientX > r.left - pad && e.clientX < r.right + pad && e.clientY > r.top - pad && e.clientY < r.bottom + pad;
        pointer = near ? { x: e.clientX, y: e.clientY } : null;
        kick();
      }, { passive: true });
      document.addEventListener('pointerleave', () => { pointer = null; kick(); });
      $('#welcomeRow').addEventListener('scroll', () => { if (pointer) kick(); }, { passive: true });
    }
  }

  /* ---------------- Hero: blobs + background image follow the cursor (--hx/--hy) ---------------- */
  {
    const hero = $('.hero');
    if (!reduceMotion) {
      hero.addEventListener('pointermove', (e) => {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty('--hx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
        hero.style.setProperty('--hy', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
      });
      hero.addEventListener('pointerleave', () => { hero.style.setProperty('--hx', 0); hero.style.setProperty('--hy', 0); });
      // Soft pulse when the card is pressed
      hero.addEventListener('pointerdown', () => { hero.classList.remove('blob-pulse'); void hero.offsetWidth; hero.classList.add('blob-pulse'); });
    }
  }

  /* ---------------- Search dock: frosted once the page scrolls ---------------- */
  {
    const dock = $('.search-dock');
    const onScroll = () => dock.classList.toggle('is-stuck', scrollY > 24);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------------- Page scale (keeps the 1728px design proportional) ---------------- */
  const fit = () => {
    const w = document.documentElement.clientWidth;
    const base = w < 1100 ? 784 : 1728;
    document.documentElement.style.setProperty('--z', Math.min(1, w / base).toFixed(4));
  };
  fit();
  addEventListener('resize', fit);

  /* ---------------- Toast ---------------- */
  const toastEl = $('#toast');
  let toastT;
  const toast = (msg) => {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(() => toastEl.classList.remove('show'), 2200);
  };

  /* ---------------- Ripple on buttons ---------------- */
  document.addEventListener('pointerdown', (e) => {
    const b = e.target.closest('.soft-btn, .chip:not(.status), .pill-white, .app-pill');
    if (!b || reduceMotion) return;
    const r = b.getBoundingClientRect();
    const z = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--z')) || 1;
    const size = Math.max(r.width, r.height) / z;
    const s = document.createElement('span');
    s.className = 'ripple';
    s.style.cssText = `width:${size}px;height:${size}px;left:${(e.clientX - r.left) / z - size / 2}px;top:${(e.clientY - r.top) / z - size / 2}px`;
    b.appendChild(s);
    s.addEventListener('animationend', () => s.remove());
  });

  /* ---------------- Side rail ---------------- */
  $$('.rail-group .rail-btn').forEach((b) => b.addEventListener('click', () => {
    $$('.rail-group .rail-btn').forEach((x) => x.classList.toggle('is-active', x === b));
  }));

  /* ---------------- Theme: light (Figma "a") ⇄ dark (Figma "dark theme") ---------------- */
  const moon = $('.moon');
  const root = document.documentElement;
  const applyTheme = (t) => {
    root.dataset.theme = t;
    $$('img[data-dark]').forEach((img) => {
      if (!img.dataset.light) img.dataset.light = img.getAttribute('src');
      img.setAttribute('src', t === 'dark' ? img.dataset.dark : img.dataset.light);
    });
    moon.setAttribute('aria-pressed', t === 'dark');
    moon.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    try { localStorage.setItem('bloom-theme', t); } catch (e) {}
  };
  applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');
  // Warm the cache so the swap doesn't flash
  const preload = () => $$('img[data-dark]').forEach((img) => { new Image().src = img.dataset.dark; new Image().src = img.dataset.light; });
  ('requestIdleCallback' in window ? requestIdleCallback : setTimeout)(preload);

  moon.addEventListener('click', () => {
    moon.classList.remove('spin'); void moon.offsetWidth; moon.classList.add('spin');
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    if (!document.startViewTransition || reduceMotion) { applyTheme(next); return; }
    // Circular reveal from the theme button
    const r = moon.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const vt = document.startViewTransition(() => applyTheme(next));
    vt.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 750, easing: 'cubic-bezier(.22, 1, .36, 1)', pseudoElement: '::view-transition-new(root)' },
      );
    }).catch(() => {});
  });

  /* ---------------- Profile menu ---------------- */
  const profile = $('.profile');
  const pBtn = $('.profile-btn');
  pBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = profile.classList.toggle('open');
    pBtn.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', () => { profile.classList.remove('open'); pBtn.setAttribute('aria-expanded', false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') profile.classList.remove('open'); });

  /* ---------------- "Say Hello" / "Send Wish" ---------------- */
  document.addEventListener('click', (e) => {
    const b = e.target.closest('.soft-btn[data-done]');
    if (!b || b.classList.contains('done')) return;
    const lbl = $('.lbl', b);
    b.classList.add('swap');
    setTimeout(() => { lbl.textContent = `${b.dataset.done} ✓`; b.classList.remove('swap'); b.classList.add('done'); }, 180);
    const who = b.closest('.w-card, .ann-card')?.querySelector('.w-name, .ann-name')?.textContent.trim();
    if (who) toast(`${b.dataset.done} to ${who}`);
  });

  /* ---------------- Attention: tabs ---------------- */
  const tabs = $$('#tabs .tab');
  const ink = $('.tab-ink');
  const moveInk = (t) => {
    const pad = t === tabs[0] ? 0 : 10;
    ink.style.left = `${t.offsetLeft + pad}px`;
  };
  tabs.forEach((t) => t.addEventListener('click', () => {
    tabs.forEach((x) => { x.classList.toggle('is-active', x === t); x.setAttribute('aria-selected', x === t); });
    moveInk(t);
    const list = $('#taskList');
    list.classList.remove('refresh'); void list.offsetWidth; list.classList.add('refresh');
    list.scrollTo({ top: 0, behavior: 'smooth' });
  }));

  /* ---------------- Attention: approve / reject ---------------- */
  let pending = 23;
  const countEl = $('#attnCount');
  const tabCount = $('#tabs [data-count]');
  $('#taskList').addEventListener('click', (e) => {
    const c = e.target.closest('.chip');
    if (!c || c.classList.contains('status')) return;
    const task = c.closest('.task');
    const title = $('.t-title', task).textContent;
    if (c.classList.contains('approve') || c.classList.contains('reject')) {
      const ok = c.classList.contains('approve');
      $('.t-actions', task).innerHTML = `<span class="chip status ${ok ? 'approve' : 'reject'}">${ok ? '✓ Approved' : '✕ Rejected'}</span>`;
      pending = Math.max(0, pending - 1);
      const n = String(pending).padStart(2, '0');
      countEl.textContent = n; tabCount.textContent = n;
      countEl.classList.remove('bump'); void countEl.offsetWidth; countEl.classList.add('bump');
      toast(`${ok ? 'Approved' : 'Rejected'}: ${title}`);
      setTimeout(() => { task.classList.add('leaving'); setTimeout(() => task.remove(), 450); }, 1100);
    } else {
      toast(`Opening: ${title}`);
    }
  });

  /* ---------------- Sports: tilt, light, Join celebration ---------------- */
  $$('.sport').forEach((card) => {
    if (reduceMotion) return;
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.classList.add('tracking');
      card.style.setProperty('--px', (x - .5).toFixed(3));
      card.style.setProperty('--py', (y - .5).toFixed(3));
      card.style.setProperty('--rx', `${((.5 - y) * 10).toFixed(2)}deg`);
      card.style.setProperty('--ry', `${((x - .5) * 12).toFixed(2)}deg`);
      card.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
      card.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.classList.remove('tracking');
      ['--px', '--py', '--rx', '--ry'].forEach((p) => card.style.removeProperty(p));
    });
  });

  const rollCount = (cnt, next) => {
    if (reduceMotion) { cnt.textContent = next; return; }
    cnt.animate([{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(-10px)', opacity: 0 }], { duration: 160, easing: 'ease-in' })
      .onfinish = () => {
        cnt.textContent = next;
        cnt.animate([{ transform: 'translateY(10px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 320, easing: 'cubic-bezier(.34,1.56,.64,1)' });
      };
  };
  const celebrate = (btn, accent) => {
    if (reduceMotion) return;
    const bar = btn.parentElement;
    const bx = btn.offsetLeft, by = btn.offsetTop, bw = btn.offsetWidth, bh = btn.offsetHeight;
    const ring = document.createElement('span');
    ring.className = 'join-ring';
    ring.style.cssText = `left:${bx}px;top:${by}px;width:${bw}px;height:${bh}px`;
    bar.appendChild(ring);
    ring.animate([{ transform: 'scale(1)', opacity: .9 }, { transform: 'scale(1.6, 2.2)', opacity: 0 }], { duration: 700, easing: 'cubic-bezier(.2,.7,.3,1)' }).onfinish = () => ring.remove();
    for (let k = 0; k < 12; k++) {
      const sp = document.createElement('span');
      sp.className = 'spark';
      sp.style.cssText = `left:${bx + bw / 2}px;top:${by + bh / 2}px;background:${k % 3 ? '#fff' : accent}`;
      bar.appendChild(sp);
      const ang = (k / 12) * Math.PI * 2 + rand(-.2, .2), d = rand(34, 58);
      sp.animate([
        { transform: 'translate(0,0) scale(1)', opacity: 1 },
        { transform: `translate(${Math.cos(ang) * d}px,${Math.sin(ang) * d * .8}px) scale(.2)`, opacity: 0 },
      ], { duration: rand(600, 900), easing: 'cubic-bezier(.2,.7,.3,1)' }).onfinish = () => sp.remove();
    }
    btn.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.15)' }, { transform: 'scale(1)' }], { duration: 420, easing: 'cubic-bezier(.34,1.56,.64,1)' });
  };

  $('#sportsRow').addEventListener('click', (e) => {
    const b = e.target.closest('.join');
    if (!b) return;
    const card = b.closest('.sport');
    const avatars = $('.avatars', card);
    const joined = b.classList.toggle('joined');
    b.textContent = joined ? '✓ Joined' : 'Join';
    const cnt = $('.count', card);
    const m = cnt.textContent.match(/^\+(\d+)$/);
    if (m) rollCount(cnt, `+${+m[1] + (joined ? 1 : -1)}`);
    if (joined) {
      const you = document.createElement('span');
      you.className = 'av you';
      you.textContent = 'AB';
      you.title = 'Ahmed Bin Hayder';
      avatars.prepend(you);
      avatars.classList.add('with-you');
      celebrate(b, getComputedStyle(card).getPropertyValue('--accent').trim() || '#fff');
      toast(`You joined ${$('.sport-title', card).textContent}`);
    } else {
      const you = $('.av.you', avatars);
      avatars.classList.remove('with-you');
      if (you) { you.classList.add('out'); you.addEventListener('animationend', () => you.remove(), { once: true }); }
    }
  });

  /* ---------------- Perks: View ---------------- */
  $('#perksRow').addEventListener('click', (e) => {
    const b = e.target.closest('.pill-white');
    if (b) toast(`Opening ${$('.perk-title', b.closest('.perk')).textContent.trim()}`);
  });

  /* ---------------- Drag-to-scroll carousels ---------------- */
  $$('.hscroll').forEach((el) => {
    let down = false, sx = 0, sl = 0, moved = false;
    el.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') return;
      down = true; moved = false; sx = e.clientX; sl = el.scrollLeft;
    });
    addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - sx;
      if (Math.abs(dx) > 4) { moved = true; el.classList.add('dragging'); }
      if (moved) el.scrollLeft = sl - dx;
    });
    addEventListener('pointerup', () => { down = false; el.classList.remove('dragging'); });
    el.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    el.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && el.scrollWidth > el.clientWidth) {
        const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 && e.deltaY > 0;
        if (!atStart && !atEnd && e.shiftKey) { e.preventDefault(); el.scrollLeft += e.deltaY; }
      }
    }, { passive: false });
  });

  /* ---------------- 3D tilt on announcement cards ---------------- */
  if (!reduceMotion) {
    $$('.tilt').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) translateY(-6px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  /* ---------------- Announcement cards: star confetti ---------------- */
  const CONFETTI = { warm: ['#ffffff', '#ffe99e', '#ffd0e6', '#ffb3a6'], cool: ['#ffffff', '#ffe99e', '#dcd9ff', '#ffc2ea'] };
  const rand = (a, b) => a + Math.random() * (b - a);
  $$('.ann-card').forEach((card) => {
    const head = $('.ann-head', card);
    const palette = card.dataset.palette === 'cool' ? CONFETTI.cool : CONFETTI.warm;
    const layer = document.createElement('div');
    layer.className = 'ann-confetti';
    head.appendChild(layer);
    // Burst layer lives inside the photo background, so the person's photo (a later sibling) covers it.
    const burstLayer = document.createElement('div');
    burstLayer.className = 'ann-burst';
    head.appendChild(burstLayer);
    if (reduceMotion) return;

    // Ambient floating stars
    const anims = [];
    for (let k = 0; k < 16; k++) {
      const el = document.createElement('i');
      el.className = `star${k % 5 === 0 ? ' dot' : ''}`;
      const size = k % 5 === 0 ? rand(4, 6) : rand(7, 14);
      el.style.cssText = `--s:${size}px;--c:${palette[k % palette.length]};left:${rand(2, 94)}%;top:${rand(55, 100)}%`;
      layer.appendChild(el);
      const dx = rand(-24, 24), rise = rand(90, 170), spin = rand(120, 300) * (Math.random() < .5 ? -1 : 1), o = rand(.55, .95);
      const a = el.animate([
        { transform: 'translate(0,0) rotate(0deg) scale(.5)', opacity: 0 },
        { transform: `translate(${dx * .5}px,${-rise * .25}px) rotate(${spin * .25}deg) scale(1)`, opacity: o, offset: .2 },
        { transform: `translate(${dx}px,${-rise * .6}px) rotate(${spin * .6}deg) scale(.9)`, opacity: o * .8, offset: .6 },
        { transform: `translate(${dx * .3}px,${-rise}px) rotate(${spin}deg) scale(.6)`, opacity: 0 },
      ], { duration: rand(5200, 9000), delay: -rand(0, 9000), iterations: Infinity, easing: 'linear' });
      anims.push(a);
    }
    const setRate = (r) => anims.forEach((a) => a.updatePlaybackRate(r));
    card.addEventListener('pointerenter', () => setRate(1.6));
    card.addEventListener('pointerleave', () => setRate(1));

    // Burst of confetti from a point (card-local, unzoomed px)
    // Burst of confetti from a point (header-local, unzoomed px). Pieces fan out mostly upward and
    // sideways from behind the photo, hang for a moment, then drift down and fade.
    const burst = (x, y, n = 26) => {
      for (let k = 0; k < n; k++) {
        const el = document.createElement('i');
        const kind = k % 4 === 0 ? ' dot' : k % 4 === 1 ? ' bar' : '';
        el.className = `star${kind}`;
        el.style.cssText = `--s:${rand(7, 14)}px;--c:${[...palette, '#f97316', '#922a22'][k % (palette.length + 2)]};left:${x}px;top:${y}px;margin:-6px`;
        burstLayer.appendChild(el);
        const ang = rand(Math.PI * 0.95, Math.PI * 2.05), dist = rand(70, 150);
        const tx = Math.cos(ang) * dist, ty = Math.sin(ang) * dist * .75;
        el.animate([
          { transform: 'translate(0,0) rotate(0) scale(.3)', opacity: 0 },
          { transform: `translate(${tx * .25}px,${ty * .25}px) rotate(${rand(-60, 60)}deg) scale(.9)`, opacity: 1, offset: .12 },
          { transform: `translate(${tx * .85}px,${ty * .85}px) rotate(${rand(-160, 160)}deg) scale(1)`, opacity: 1, offset: .45 },
          { transform: `translate(${tx}px,${ty + 45}px) rotate(${rand(-280, 280)}deg) scale(.75)`, opacity: 0 },
        ], { duration: rand(2200, 3000), delay: rand(0, 180), easing: 'cubic-bezier(.16,.7,.3,1)', fill: 'backwards' }).onfinish = () => el.remove();
      }
    };
    // Point just behind the person's head: centre of the photo box, ~30% down.
    const photo = $('.ann-photo', card);
    const behindHead = () => [photo.offsetLeft + photo.offsetWidth / 2, photo.offsetTop + photo.offsetHeight * .3];
    const zoom = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--z')) || 1;
    head.addEventListener('click', (e) => {
      const r = card.getBoundingClientRect(), z = zoom();
      burst((e.clientX - r.left) / z, (e.clientY - r.top) / z);
    });
    $('.ann-btn', card).addEventListener('click', () => burst(...behindHead(), 34));
  });

  /* ---------------- Scroll reveal + footer tagline ---------------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add(en.target.id === 'footTag' ? 'play' : 'in');
      io.unobserve(en.target);
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach((el, i) => { el.style.transitionDelay = `${Math.min(i, 3) * 60}ms`; io.observe(el); });
  io.observe($('#footTag'));

  /* ---------------- Footer "Bloom": bloom-in, spotlight, letter hop ---------------- */
  {
    const wordEl = $('.foot-word');
    const letters = $$('.fl', wordEl);

    // Play the entrance when the footer comes into view
    new IntersectionObserver(([en], obs) => {
      if (en.isIntersecting) { wordEl.classList.add('in'); obs.disconnect(); }
    }, { threshold: 0.25 }).observe(wordEl);

    // Spotlight: letter-local coords (ratio-based so it's correct at any page zoom)
    wordEl.addEventListener('pointermove', (e) => {
      wordEl.classList.add('lit');
      letters.forEach((l) => {
        const r = l.getBoundingClientRect();
        l.style.setProperty('--lx', `${((e.clientX - r.left) / r.width) * l.offsetWidth}px`);
        l.style.setProperty('--ly', `${((e.clientY - r.top) / r.height) * l.offsetHeight}px`);
      });
    });
    wordEl.addEventListener('pointerleave', () => wordEl.classList.remove('lit'));

    letters.forEach((l) => {
      l.addEventListener('pointerenter', () => l.classList.add('hop'));
      l.addEventListener('pointerleave', () => l.classList.remove('hop'));
    });
    wordEl.addEventListener('click', () => {
      letters.forEach((l, i) => setTimeout(() => {
        l.classList.add('hop'); setTimeout(() => l.classList.remove('hop'), 380);
      }, i * 70));
    });
  }

  /* ---------------- Footer "Bloom" parallax ---------------- */
  const word = $('.foot-word');
  if (!reduceMotion) {
    let raf = 0;
    addEventListener('scroll', () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = word.getBoundingClientRect();
        const p = (r.top - innerHeight) / innerHeight; // -1..0 while entering
        word.style.setProperty('--parallax', `${Math.max(-1, Math.min(0.5, p)) * -40}px`);
      });
    }, { passive: true });
  }
})();
