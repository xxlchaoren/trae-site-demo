/* ================= Data ================= */
const ITEMS = [
  {
    id: "ds-v4",
    date: "2026-11-24",
    time: "08:42",
    source: "深度求索 · 官方博客",
    cat: "模型发布",
    score: 96,
    heat: 31265,
    featured: true,
    title: "DeepSeek-V4 正式发布：1M 上下文 + 原生多模态，推理成本再降 60%",
    summary:
      "DeepSeek-V4 采用新一代稀疏注意力与动态 MoE 路由，在保持旗舰级推理能力的同时，把百万 token 长上下文的推理成本压到上一代的 40%。官方同步开放 API 与权重下载。",
    reason:
      "官方博客完整披露了架构、benchmark 与定价三块信息，是判断下一轮开源模型竞争格局的第一手材料。",
    quote: "「我们要做的不是更大的模型，而是更便宜的智能。」",
    tags: ["DeepSeek-V4", "MoE", "1M Context", "开源权重"]
  },
  {
    id: "deepgemm",
    date: "2026-11-24",
    time: "09:15",
    source: "TechCrunch",
    cat: "开源",
    score: 88,
    heat: 24128,
    featured: true,
    title: "DeepSeek 开源 MoE 训练框架 DeepGEMM 2.0，单卡吞吐提升 2.3 倍",
    summary:
      "新版本重写了分组 GEMM 与通信重叠调度，在 H100 集群上把 MoE 训练的卡间空转时间压到 8% 以内。框架以 Apache-2.0 协议开放，已有多家云厂商提交适配补丁。",
    reason:
      "这不是一次普通的版本更新：训练效率直接决定下一代模型的成本曲线，文中给出的集群实测数据值得细读。",
    tags: ["DeepGEMM", "训练框架", "MoE", "Apache-2.0"]
  },
  {
    id: "r2-aime",
    date: "2026-11-24",
    time: "07:20",
    source: "量子位",
    cat: "研究",
    score: 84,
    heat: 18932,
    featured: true,
    title: "DeepSeek-R2 登顶 AIME 2026，纯强化学习路线再进一步",
    summary:
      "在不使用过程奖励模型的前提下，R2 通过大规模可验证奖励强化学习把 AIME 准确率推到新的高位，同时保持了较低的推理 token 消耗。",
    reason:
      "文章对比了 RLVR 与 PRM 两条路线的训练成本与稳定性，适合关心推理模型工程化落地的人。",
    tags: ["DeepSeek-R2", "强化学习", "AIME", "推理模型"]
  },
  {
    id: "legacy-refactor",
    date: "2026-11-24",
    time: "06:05",
    source: "Hacker News",
    cat: "开发者",
    score: 79,
    heat: 15340,
    featured: true,
    title: "开发者用 DeepSeek API 重写 12 万行遗留代码，账单只有 47 美元",
    summary:
      "一位独立开发者把十年的 PHP 单体拆成模块化服务，全程用 Agent 流程驱动：生成迁移脚本、补测试、跑回归。帖子附上了完整提示词与失败案例。",
    reason:
      "最有价值的是那些失败片段——哪些重构任务模型仍会稳定翻车，比成功案例更能指导实践。",
    tags: ["Agent", "重构", "成本", "实战"]
  },
  {
    id: "cloud-price-war",
    date: "2026-11-24",
    time: "10:30",
    source: "路透社",
    cat: "产业",
    score: 76,
    heat: 12208,
    featured: true,
    title: "多家云厂商同步上线 DeepSeek-V4 托管服务，推理价格战开打",
    summary:
      "V4 发布后 12 小时内，至少五家云厂商宣布上线托管版本，输入价格最低压到每百万 token 0.28 美元。分析人士认为价格战将加速企业侧替换闭源模型。",
    reason:
      "一线厂商的定价与上线节奏，是观察开源权重模型商业化路径最直接的信号。",
    tags: ["云厂商", "定价", "商业化"]
  },
  {
    id: "funding",
    date: "2026-11-23",
    time: "21:18",
    source: "The Information",
    cat: "产业",
    score: 71,
    heat: 10874,
    featured: false,
    title: "DeepSeek 新一轮融资细节曝光，主权基金出现在领投名单",
    summary:
      "报道称本轮资金将主要用于自建推理集群与下一代模型预训练，投后估值较上一轮显著抬升，但公司仍强调研究导向而非短期营收。",
    reason:
      "融资结构与算力投入方向，比估值数字更能说明这家公司的下一步。",
    tags: ["融资", "算力", "估值"]
  },
  {
    id: "sparse-attention",
    date: "2026-11-23",
    time: "17:51",
    source: "机器之心",
    cat: "研究",
    score: 78,
    heat: 9862,
    featured: false,
    title: "拆解 DeepSeek 稀疏注意力：长上下文为何能省下 8 倍显存",
    summary:
      "文章用可视化的方式还原了稀疏注意力在 128K 到 1M 上下文下的选择模式，并给出复现脚本，解释了为什么「只算该算的 token」能同时降低延迟与显存。",
    reason:
      "图文拆解把论文里最难懂的部分讲清楚了，还提供了可直接运行的显存对比实验。",
    tags: ["稀疏注意力", "长上下文", "显存优化"]
  },
  {
    id: "grpo-repro",
    date: "2026-11-23",
    time: "14:02",
    source: "arXiv",
    cat: "研究",
    score: 73,
    heat: 8120,
    featured: false,
    title: "论文复现 DeepSeek 的 GRPO 训练配方，8 张卡即可复现小规模结果",
    summary:
      "作者系统梳理了 GRPO 的超参敏感区间，指出组大小与奖励归一化方式对收敛影响最大，并开源了一套在消费级集群上可复现的训练脚本。",
    reason:
      "对想自己动手复现推理模型训练的小团队来说，这是目前最完整的一份工程化记录。",
    tags: ["GRPO", "复现", "训练配方"]
  },
  {
    id: "chip-adapt",
    date: "2026-11-23",
    time: "11:26",
    source: "36氪",
    cat: "产业",
    score: 69,
    heat: 7640,
    featured: false,
    title: "国产 AI 芯片完成 DeepSeek-V4 适配，推理时延进入 30ms 区间",
    summary:
      "多家国产芯片厂商宣布完成 V4 的算子适配与量化支持，在典型对话场景下单 token 时延进入 30ms 区间，为私有化部署补上了关键一环。",
    reason:
      "国产算力 + 开源权重是今年最实在的一条落地路径，适配进度直接决定企业采购选项。",
    tags: ["国产芯片", "推理时延", "私有化"]
  },
  {
    id: "perplexity",
    date: "2026-11-23",
    time: "09:34",
    source: "OpenAI · 官方博客",
    cat: "政策",
    score: 74,
    heat: 6915,
    featured: true,
    title: "OpenAI 提议以困惑度作为行业共享安全指标，并公开内部测量数据",
    summary:
      "OpenAI 建议把 perplexity（交叉熵损失）确立为跨实验室可比较的共享指标，同时公开自 GPT-3.5 以来的内部预训练测量数据，供安全评估参考。",
    reason:
      "如果这套指标被行业接受，未来模型能力与风险的比较方式都会被改写，值得提前了解。",
    tags: ["安全", "评测", "行业标准"]
  },
  {
    id: "lean-proof",
    date: "2026-11-22",
    time: "20:05",
    source: "The Decoder",
    cat: "研究",
    score: 82,
    heat: 6420,
    featured: false,
    title: "Lean 社区确认黎曼猜想形式化证明正确",
    summary:
      "Lean 与 Mathlib 社区发表声明，确认一份由 AI 辅助完成、共数千万行的形式化证明通过独立核验，验证程序被设计为不会接受存在缺陷的证明。",
    reason:
      "形式化验证第一次在顶级数学难题上完成闭环，这件事的意义远超一条新闻。",
    tags: ["形式化验证", "Lean", "数学"]
  },
  {
    id: "maynard",
    date: "2026-11-22",
    time: "18:15",
    source: "IT之家",
    cat: "研究",
    score: 76,
    heat: 5980,
    featured: false,
    title: "菲尔兹奖得主梅纳德：AI 辅助证明需要被理解才可能被认可",
    summary:
      "梅纳德在采访中表示，形式化验证通过只是第一步，数学界真正接受一个证明，仍然需要人类能够理解其中的思想与结构。",
    reason:
      "在「AI 能否做数学」的争论里，这是一段少见的、来自顶尖数学家的冷静判断。",
    tags: ["AI4Math", "学术评价"]
  },
  {
    id: "agent-framework",
    date: "2026-11-22",
    time: "12:40",
    source: "GitHub Trending",
    cat: "开源",
    score: 80,
    heat: 5540,
    featured: false,
    title: "DeepSeek 官方 Agent 框架开源 48 小时破 3 万星",
    summary:
      "框架内置工具调用、沙箱执行与轨迹回放，示例覆盖代码修复、数据分析与浏览器操作三类任务，社区两天内提交了上百个工具插件。",
    reason:
      "官方下场做 Agent 框架，意味着模型能力开始向工程生态延伸，值得关注它的抽象方式。",
    tags: ["Agent", "开源", "工具调用"]
  },
  {
    id: "open-weights",
    date: "2026-11-22",
    time: "08:12",
    source: "彭博社",
    cat: "产业",
    score: 67,
    heat: 4870,
    featured: false,
    title: "企业 AI 采购转向开源权重模型，成本敏感行业先行",
    summary:
      "调研显示，金融、零售与制造业中已有超过四成企业把开源权重模型纳入生产环境评估，主要动因是数据可控与单位推理成本。",
    reason:
      "采购结构的迁移比任何单点发布都更能说明开源模型的真实渗透率。",
    tags: ["企业采购", "开源权重", "调研"]
  }
];

/* ================= State ================= */
const state = { tab: "featured", cat: "全部", q: "", sort: "time" };
const CATS = ["全部", "模型发布", "开源", "研究", "产业", "开发者", "政策"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const fmtHeat = (n) => n.toLocaleString("en-US");
const dayLabel = (dateStr) => {
  const d = new Date(dateStr + "T00:00:00");
  return `${d.getMonth() + 1}月${d.getDate()}日`;
};
const weekLabel = (dateStr) => "星期" + "日一二三四五六"[new Date(dateStr + "T00:00:00").getDay()];

/* ================= Ticker ================= */
function renderTicker() {
  const top = [...ITEMS].sort((a, b) => b.heat - a.heat).slice(0, 6);
  const html = top
    .map(
      (it) =>
        `<span class="ticker-item"><i>${fmtHeat(it.heat)}</i><b>${it.title}</b><span>· ${it.source}</span></span>`
    )
    .join("");
  $("#tickerTrack").innerHTML = html + html;
}

/* ================= Hot list ================= */
function renderHot() {
  const top = [...ITEMS].sort((a, b) => b.heat - a.heat).slice(0, 5);
  const max = top[0].heat;
  const rows = top
    .map(
      (it, i) => `
      <li class="hot-row ${i === 0 ? "is-top" : ""}" data-id="${it.id}" tabindex="0" role="button">
        <span class="hot-rank">${String(i + 1).padStart(2, "0")}</span>
        <div class="hot-main">
          <span class="hot-title">${it.title}</span>
          <div class="hot-meta">
            <span class="src">${it.source}</span>
            <span><i class="cat-dot"></i>${it.cat}</span>
            <span class="mono">${it.time}</span>
          </div>
        </div>
        <div class="hot-heat">
          <span class="heat-bar"><i data-w="${Math.round((it.heat / max) * 100)}"></i></span>
          <span class="heat-num">${fmtHeat(it.heat)}</span>
        </div>
      </li>`
    )
    .join("");
  $("#hotList").innerHTML = rows;

  requestAnimationFrame(() => {
    setTimeout(() => {
      $$(".heat-bar i").forEach((el) => {
        el.style.width = el.dataset.w + "%";
      });
    }, reduceMotion ? 0 : 260);
  });
}

/* ================= Feed ================= */
function getFiltered() {
  const q = state.q.trim().toLowerCase();
  let list = ITEMS.filter((it) => {
    if (state.tab === "featured" && !it.featured) return false;
    if (state.cat !== "全部" && it.cat !== state.cat) return false;
    if (q) {
      const hay = [it.title, it.summary, it.reason, it.source, it.cat, ...it.tags]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  list.sort((a, b) =>
    state.sort === "heat"
      ? b.heat - a.heat
      : (b.date + b.time).localeCompare(a.date + a.time)
  );
  return list;
}

function cardHTML(it) {
  return `
    <article class="card reveal" data-id="${it.id}" tabindex="0" role="button" aria-label="${it.title}">
      <div class="card-top">
        <span class="card-time">${it.time}</span>
        <span class="card-source">${it.source}</span>
        <span class="badge ${it.date === "2026-11-24" ? "new" : ""}">${it.date === "2026-11-24" ? "TODAY" : "ARCHIVE"}</span>
        <span class="score">
          <span>AI 评分</span>
          <span class="score-ring" style="--val:${it.score}"><span class="score-num">${it.score}</span></span>
        </span>
      </div>
      <h3>${it.title}</h3>
      <p class="card-summary">${it.summary}</p>
      <div class="card-reason"><b>推荐理由</b>${it.reason}</div>
      <div class="card-tags">
        <span class="tag hot-tag">${it.cat}</span>
        ${it.tags.slice(0, 3).map((t) => `<span class="tag">#${t}</span>`).join("")}
      </div>
    </article>`;
}

function renderFeed() {
  const list = getFiltered();
  const wrap = $("#feedList");
  const empty = $("#emptyState");

  if (!list.length) {
    wrap.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  if (state.sort === "heat") {
    wrap.innerHTML = `
      <section class="day-group">
        <div class="day-head">
          <span class="day-date">热度排序</span>
          <span class="day-week">${list.length} 条匹配</span>
          <span class="day-line"></span>
        </div>
        ${list.map(cardHTML).join("")}
      </section>`;
  } else {
    const groups = [];
    list.forEach((it) => {
      const g = groups[groups.length - 1];
      if (g && g.date === it.date) g.items.push(it);
      else groups.push({ date: it.date, items: [it] });
    });

    wrap.innerHTML = groups
      .map(
        (g) => `
        <section class="day-group">
          <div class="day-head">
            <span class="day-date">${dayLabel(g.date)}${g.date === "2026-11-24" ? "<b>今天</b>" : ""}</span>
            <span class="day-week">${weekLabel(g.date)}</span>
            <span class="day-line"></span>
            <span class="day-count">${g.items.length} 条</span>
          </div>
          ${g.items.map(cardHTML).join("")}
        </section>`
      )
      .join("");
  }

  observeReveal();
}

function renderChips() {
  $("#chips").innerHTML = CATS.map(
    (c) =>
      `<button class="chip ${state.cat === c ? "is-active" : ""}" data-cat="${c}">${c}</button>`
  ).join("");
}

/* ================= Reveal ================= */
let revealObserver;
function observeReveal() {
  if (!("IntersectionObserver" in window)) {
    $$(".reveal").forEach((el) => el.classList.add("is-in"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
  }
  $$(".reveal:not(.is-in)").forEach((el) => revealObserver.observe(el));
}

/* ================= Sidebar ================= */
function renderRadar() {
  const data = [
    ["深度求索 · 官方", 32],
    ["TechCrunch", 24],
    ["机器之心", 19],
    ["arXiv", 16],
    ["GitHub Trending", 14],
    ["路透社 / 彭博社", 11]
  ];
  const max = data[0][1];
  $("#radar").innerHTML = data
    .map(
      ([name, v]) => `
      <li class="radar-item">
        <span class="radar-name">${name}</span>
        <span class="radar-val">${v} 条</span>
        <span class="radar-track"><i data-w="${Math.round((v / max) * 100)}"></i></span>
      </li>`
    )
    .join("");

  requestAnimationFrame(() => {
    setTimeout(() => {
      $$(".radar-track i").forEach((el) => (el.style.width = el.dataset.w + "%"));
    }, reduceMotion ? 0 : 380);
  });
}

function renderSpark() {
  const vals = [38, 52, 44, 66, 58, 74, 86];
  const w = 260, h = 88, pad = 6;
  const max = Math.max(...vals), min = Math.min(...vals) - 8;
  const pts = vals.map((v, i) => [
    pad + (i * (w - pad * 2)) / (vals.length - 1),
    h - pad - ((v - min) / (max - min)) * (h - pad * 2)
  ]);
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x, y] = pts[i];
    const [px, py] = pts[i - 1];
    const mx = (px + x) / 2;
    d += ` C ${mx} ${py}, ${mx} ${y}, ${x} ${y}`;
  }
  const area = `${d} L ${pts[pts.length - 1][0]} ${h} L ${pts[0][0]} ${h} Z`;
  const last = pts[pts.length - 1];

  $("#spark").innerHTML = `
    <defs>
      <linearGradient id="sparkLine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#4d6bfe" />
        <stop offset="60%" stop-color="#22d3ee" />
        <stop offset="100%" stop-color="#a3e635" />
      </linearGradient>
      <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(34,211,238,0.28)" />
        <stop offset="100%" stop-color="rgba(34,211,238,0)" />
      </linearGradient>
    </defs>
    <path d="${area}" fill="url(#sparkFill)" />
    <path d="${d}" fill="none" stroke="url(#sparkLine)" stroke-width="2" stroke-linecap="round" />
    <circle cx="${last[0]}" cy="${last[1]}" r="7" fill="rgba(163,230,53,0.16)" />
    <circle cx="${last[0]}" cy="${last[1]}" r="2.6" fill="#a3e635" />`;
}

function renderWords() {
  const words = [
    ["DeepSeek-V4", 42],
    ["稀疏注意力", 28],
    ["开源权重", 24],
    ["GRPO", 19],
    ["推理成本", 17],
    ["Agent", 15],
    ["MoE", 13],
    ["国产芯片", 11],
    ["1M 上下文", 9]
  ];
  $("#words").innerHTML = words
    .map(([w, n]) => `<button class="word" data-word="${w}">${w}<sup>${n}</sup></button>`)
    .join("");
}

/* ================= Modal ================= */
const modal = $("#modal");
let lastFocus = null;

function openModal(id) {
  const it = ITEMS.find((x) => x.id === id);
  if (!it) return;
  lastFocus = document.activeElement;
  $("#modalBody").innerHTML = `
    <div class="m-meta">
      <span class="card-time">${dayLabel(it.date)} ${it.time}</span>
      <span class="card-source">${it.source}</span>
      <span class="badge">${it.cat}</span>
      <span class="score">
        <span>AI 评分</span>
        <span class="score-ring" style="--val:${it.score}"><span class="score-num">${it.score}</span></span>
      </span>
    </div>
    <h2 class="m-title" id="modalTitle">${it.title}</h2>
    <div class="m-heat">
      <div><span>HEAT</span><b>${fmtHeat(it.heat)}</b></div>
      <div><span>SCORE</span><b>${it.score}/100</b></div>
      <div><span>DATE</span><b>${it.date}</b></div>
    </div>
    <div class="m-section">
      <h4>摘要</h4>
      <p>${it.summary}</p>
    </div>
    ${it.quote ? `<div class="m-section"><h4>原文摘录</h4><p class="m-quote">${it.quote}</p></div>` : ""}
    <div class="m-section">
      <h4>为什么值得读</h4>
      <p>${it.reason}</p>
    </div>
    <div class="m-tags">
      <span class="tag hot-tag">${it.cat}</span>
      ${it.tags.map((t) => `<span class="tag">#${t}</span>`).join("")}
    </div>`;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  $(".modal-close").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

/* ================= Toast ================= */
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-show"), 2600);
}

/* ================= Terminal ================= */
function typeTerminal() {
  const el = $("#terminalBody");
  const lines = [
    { t: "$ ds hot --feed ai --window 24h", c: "t-blue" },
    { t: "> fetch sources ................ 86 ok", c: "t-dim" },
    { t: "> merge items .................. 1,284 ok", c: "t-dim" },
    { t: "> dedupe / cross-check ......... ok", c: "t-dim" },
    { t: "> rank by heat & signal ........ ok", c: "t-dim" },
    { t: "> select featured .............. 24 items", c: "t-cyan" },
    { t: "● 08:42 updated · DeepSeek-V4 leads", c: "t-lime" }
  ];
  if (reduceMotion) {
    el.innerHTML = lines.map((l) => `<span class="${l.c}">${l.t}</span>`).join("\n");
    return;
  }
  el.innerHTML = "";
  const caret = document.createElement("span");
  caret.className = "caret";
  el.appendChild(caret);

  let li = 0;
  const nextLine = () => {
    if (li >= lines.length) return;
    const line = lines[li];
    const span = document.createElement("span");
    span.className = line.c;
    const br = document.createElement("br");
    el.insertBefore(span, caret);
    el.insertBefore(br, caret);
    let ci = 0;
    const step = () => {
      if (ci < line.t.length) {
        span.textContent += line.t[ci++];
        setTimeout(step, 11);
      } else {
        li++;
        setTimeout(nextLine, 130);
      }
    };
    step();
  };
  nextLine();
}

/* ================= Canvas FX ================= */
function initCanvas() {
  const canvas = $("#fx");
  if (!canvas || reduceMotion) return;
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0, nodes = [], raf = null, visible = true;

  const build = () => {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width;
    h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(22, Math.min(64, Math.round((w * h) / 20000)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.5 + 0.7
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 132) {
          ctx.strokeStyle = `rgba(90,120,255,${(1 - dist / 132) * 0.22})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    nodes.forEach((n) => {
      ctx.fillStyle = "rgba(120,190,255,0.55)";
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const tick = () => {
    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    });
    draw();
    raf = requestAnimationFrame(tick);
  };

  const start = () => {
    if (raf) return;
    raf = requestAnimationFrame(tick);
  };
  const stop = () => {
    if (raf) cancelAnimationFrame(raf);
    raf = null;
  };

  build();
  draw();
  start();

  window.addEventListener("resize", () => {
    build();
    draw();
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        visible && !document.hidden ? start() : stop();
      },
      { threshold: 0 }
    ).observe(canvas);
  }
  document.addEventListener("visibilitychange", () => {
    document.hidden || !visible ? stop() : start();
  });
}

/* ================= Scroll & counters ================= */
function initScroll() {
  const nav = $("#nav");
  const progress = $("#progress");
  const onScroll = () => {
    const top = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (top / max) * 100 : 0) + "%";
    nav.classList.toggle("is-scrolled", top > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initCounters() {
  const nums = $$(".num");
  if (!("IntersectionObserver" in window) || reduceMotion) {
    nums.forEach((n) => (n.textContent = Number(n.dataset.count).toLocaleString("en-US")));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        const target = Number(el.dataset.count);
        const start = performance.now();
        const dur = 1300;
        const run = (now) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString("en-US");
          if (p < 1) requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
      });
    },
    { threshold: 0.4 }
  );
  nums.forEach((n) => io.observe(n));
}

/* ================= Events ================= */
function bindEvents() {
  // tabs
  $$(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".tab").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const tab = btn.dataset.tab;
      if (tab === "hot") {
        document.getElementById("hot").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
        return;
      }
      state.tab = tab;
      renderFeed();
      document.getElementById("feed").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
  });

  // chips
  $("#chips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    state.cat = chip.dataset.cat;
    $$(".chip").forEach((c) => c.classList.toggle("is-active", c === chip));
    renderFeed();
  });

  // sort
  $$(".sort-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.sort = btn.dataset.sort;
      $$(".sort-btn").forEach((b) => b.classList.toggle("is-active", b === btn));
      renderFeed();
    });
  });

  // search
  let timer;
  $("#searchInput").addEventListener("input", (e) => {
    clearTimeout(timer);
    const v = e.target.value;
    timer = setTimeout(() => {
      state.q = v;
      renderFeed();
    }, 140);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== $("#searchInput")) {
      e.preventDefault();
      $("#searchInput").focus();
    }
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  // cards & hot rows
  const openFromEvent = (e) => {
    const target = e.target.closest("[data-id]");
    if (target) openModal(target.dataset.id);
  };
  $("#feedList").addEventListener("click", openFromEvent);
  $("#hotList").addEventListener("click", openFromEvent);
  ["#feedList", "#hotList"].forEach((sel) => {
    $(sel).addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const target = e.target.closest("[data-id]");
        if (target) {
          e.preventDefault();
          openModal(target.dataset.id);
        }
      }
    });
  });

  // card pointer glow
  $("#feedList").addEventListener("pointermove", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });

  // modal
  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeModal();
  });

  // words
  $("#words").addEventListener("click", (e) => {
    const btn = e.target.closest(".word");
    if (!btn) return;
    const w = btn.dataset.word;
    state.q = w;
    state.tab = "all";
    $$(".tab").forEach((b) => b.classList.toggle("is-active", b.dataset.tab === "all"));
    $("#searchInput").value = w;
    renderFeed();
    document.getElementById("feed").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    toast(`已筛选「${w}」相关条目`);
  });

  // subscribe
  $("#subForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input");
    toast(`订阅成功（演示）：${input.value}`);
    input.value = "";
  });
}

/* ================= Init ================= */
renderTicker();
renderHot();
renderChips();
renderFeed();
renderRadar();
renderSpark();
renderWords();
typeTerminal();
initCanvas();
initScroll();
initCounters();
bindEvents();
