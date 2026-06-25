const TOTAL_MONTHS = 56;
const ACTIONS_PER_MONTH = 3;

const traineesSeed = [
  ["zhang_guiyuan", "张桂源", "表达、镜头感", 68, 64, 60, 65, 70, 72, "05-11"],
  ["zhang_hanrui", "张函瑞", "声线、情绪表达", 72, 58, 55, 66, 64, 73, "10-18"],
  ["wang_lujie", "王橹杰", "均衡、合作", 64, 66, 61, 60, 69, 67, "01-08"],
  ["zuo_qihan", "左奇函", "节奏、创作苗子", 65, 63, 68, 61, 68, 70, "03-19"],
  ["chen_yiheng", "陈奕恒", "齐舞、舞台稳定", 60, 69, 58, 63, 72, 66, "05-09"],
  ["yang_bowen", "杨博文", "演技、叙事感", 67, 62, 57, 68, 66, 71, "06-01"],
  ["chen_sihan", "陈思罕", "表演、亲和", 66, 60, 57, 67, 65, 69, "11-08"],
  ["chen_junming", "陈浚铭", "声乐、综合", 69, 63, 59, 64, 67, 70, "05-17"],
];

const eventImages = {
  newYear: "./assets/events/new-year-stage.png",
  summer: "./assets/events/summer-stage.png",
  evaluation: "./assets/events/evaluation-room.png",
  debut: "./assets/events/debut-battle.png",
};

const fanCommentTemplates = [
  "今天这条泡泡好真诚，感觉他不是在营业，是在认真回应我们。",
  "数据组集合，刚发的动态先赞评转一轮。",
  "别太累啦，看到你有好好练习就已经很安心了。",
  "这句回复我能反复看十遍，养成感太强了。",
  "希望下次考核能选到适合他的舞台。",
  "评论区别吵，先把正向反馈顶上去。",
  "刚刚那张练习室文字动态好像纪录片旁白。",
  "他真的有在把每个月的短板补起来。",
  "粉丝不要替他贷款成绩，等舞台说话。",
  "今天的心情：继续陪他走到出道战。",
];

const monthlyEvents = {
  "2023-1": ["2023 新年音乐会「瞬间」", "演唱会", "第一次大型舞台，灯光压下来的一刻，你听见耳返里自己的呼吸。", ["稳定合唱", "主动争取镜头", "保守跟队"], 1.6],
  "2023-5": ["「TF 少年梦工厂」-「立夏」", "专属舞台", "这次有一个能被记住的片段。争，还是稳？", ["Solo 片段", "双人合作", "小组稳定"], 1.9],
  "2023-7": ["「多巴胺快乐图鉴」", "暑期演出", "暑期流量来了，后台每个人都在等一个出圈镜头。", ["活力舞台", "声乐舞台", "互动营业"], 2.2],
  "2024-2": ["2024 新年音乐会「盛放」", "家族舞台", "跨代同台会带来新观众，也会放大每一个表情。", ["争取中心", "稳定完成", "绑定合作"], 2.3],
  "2024-8": ["四代见面会「肆意生长」", "见面会", "粉丝开始有了固定偏爱，你需要确认自己的路线。", ["Solo", "双人舞台", "小组舞台"], 2.45],
  "2025-1": ["2025 新年音乐会「热爱」", "大型舞台", "资源重新分配前，舞台导演给了你一次选择。", ["大胆表现", "稳定跟队", "互动营业"], 2.55],
  "2025-8": ["「肆意少年」双城巡演", "暑期巡演", "两站连排，体力和粉丝都会被拉到极限。", ["双城高强度", "只保一站状态", "CP 舞台"], 2.9],
  "2025-12": ["2026 新年音乐会「荣耀」", "家族舞台", "后期高曝光舞台，所有粉丝都在等一个高光。", ["高光舞台", "团队舞台", "情绪叙事"], 3.05],
  "2026-8": ["原创夏日演唱会「热岛回声」", "原创舞台", "分队竞争开始。队长位、C 位、合作舞台都能改写走势。", ["队长位", "C 位挑战", "CP 合作"], 3.4],
  "2027-6": ["出道战一公", "出道战", "安全牌能保住稳定，高难度能赢下口碑。", ["高难度", "安全牌", "合作舞台"], 4.4],
  "2027-7": ["预热公演「倒计时 30 天」", "出道战", "倒计时开始，粉丝、路人、数据都进入最后冲刺。", ["拉票直播", "舞台口碑", "粉丝互动"], 5.1],
  "2027-8": ["四代出道战「破晓成团夜」", "终局", "今晚之后，四年半的选择都会变成最终排名。", ["最终舞台", "拉票宣言", "稳住风险"], 6.0],
};

const trainActions = [
  ["vocal", "声乐训练", "Vocal +，粉丝小幅增加", 900, 1],
  ["dance", "舞蹈训练", "Dance +，体力消耗较高", 980, 2],
  ["rap", "Rap 创作", "Rap +，灵感增加", 820, 2],
  ["acting", "镜头表演", "Acting +，镜头感提升", 760, 1],
  ["stamina", "体能管理", "Stamina +，风险下降", 420, -3],
];

const chatActions = [
  ["comfort", "和队友聊状态", "心态 +，亲密度 +", 480, -1],
  ["practice", "约队友练习", "随机专业 +，亲密度 +", 650, 1],
  ["business", "发手机互动", "粉丝 +，风险 +", 1200, 4],
  ["message_fans", "给粉丝发消息", "粉丝黏性 +，应援 +，风险小幅 +", 900, 2],
  ["fans", "看粉丝评论", "应援 +，心态小幅波动", 720, 1],
];

const examTypes = [
  { key: "vocal", label: "唱歌考核", stat: "vocal", support: [["mental", 0.15], ["charm", 0.15]], weight: 0.7 },
  { key: "dance", label: "跳舞考核", stat: "dance", support: [["stamina", 0.2], ["mental", 0.1]], weight: 0.7 },
  { key: "rap", label: "Rap 考核", stat: "rap", support: [["vocal", 0.1], ["charm", 0.2]], weight: 0.7 },
  { key: "stage", label: "综合舞台", stat: "charm", support: [["vocal", 0.25], ["dance", 0.25], ["rap", 0.15], ["acting", 0.15]], weight: 0.2 },
];

const randomEvents = [
  { title: "练习室直拍出圈", text: "粉丝剪了你的练习室片段，评论区开始刷屏。", chance: 0.26, fan: 1800, risk: 1, stat: "charm", delta: 1 },
  { title: "声乐老师点名表扬", text: "声乐老师在复盘会上点名夸了气息稳定。", chance: 0.24, fan: 1200, risk: 0, stat: "vocal", delta: 1.2 },
  { title: "舞蹈室小失误", text: "齐舞里慢了半拍，但你主动留下来补练。", chance: 0.22, fan: -500, risk: 1, stat: "dance", delta: 0.8 },
  { title: "粉丝剪辑出圈", text: "一条成长向剪辑突然被转出圈。", chance: 0.28, fan: 2200, risk: 1, stat: "mental", delta: 0.8 },
  { title: "黑粉带节奏", text: "广场出现争议帖，公关老师提醒你这周少看评论。", chance: 0.2, fan: -1200, risk: 4, stat: "mental", delta: -1 },
  { title: "Rap 词被夸有记忆点", text: "临时写的一句词被老师说有记忆点。", chance: 0.2, fan: 1000, risk: 0, stat: "rap", delta: 1.2 },
];

const state = {
  view: "select",
  infoTab: "feed",
  mode: "train",
  stageFocus: "vocal",
  concertPlan: { song: "strong", position: "group", part: "steady" },
  selectedId: "zhang_hanrui",
  month: 0,
  actionNo: 1,
  eventDone: false,
  trainees: [],
  feed: [],
  chats: [],
  fanMessages: [],
  bubblePosts: [],
  bubbleComments: [],
  examHistory: [],
  randomHistory: [],
  monthlyRandomReport: [],
  randomHandled: false,
  resources: { wealth: 0, support: 0, inspiration: 0 },
  inventory: ["公关卡"],
  lastGameView: "action",
};

function makeTrainees() {
  return traineesSeed.map(([id, name, tags, vocal, dance, rap, acting, stamina, charm, birthday], index) => ({
    id,
    name,
    tags,
    birthday,
    portrait: `./assets/portraits/${id}.jpg`,
    stats: { vocal, dance, rap, acting, stamina, charm, mental: 66 + index, risk: 0, relation: 25 + index * 4 },
    cpHeat: 8 + index * 3,
    soloFanStability: 68 + index * 2,
    fanTypes: { career: 0, nurture: 0, cp: 0, passerby: 0, solo: 0, lost: 0 },
    fans: 0,
    lastGain: 0,
  }));
}

function init() {
  state.view = "select";
  state.infoTab = "feed";
  state.mode = "train";
  state.stageFocus = "vocal";
  state.concertPlan = { song: "strong", position: "group", part: "steady" };
  state.selectedId = "zhang_hanrui";
  state.month = 0;
  state.actionNo = 1;
  state.eventDone = false;
  state.trainees = makeTrainees();
  state.feed = [{ title: "系统", text: "每月可进行 3 次选择：训练或手机聊天只能选一个。本月事件单独触发。" }];
  state.chats = [{ who: "经纪老师", text: "选定主控后，就跟着这个角色一路走到出道战。" }];
  state.fanMessages = [{ who: "粉丝站", text: "开局粉丝数归零。每一次舞台、训练和消息都会重新积累。" }];
  state.bubblePosts = [];
  state.bubbleComments = [];
  state.examHistory = [];
  state.randomHistory = [];
  state.monthlyRandomReport = [];
  state.randomHandled = false;
  state.resources = { wealth: 0, support: 0, inspiration: 0 };
  state.inventory = ["公关卡"];
  render();
}

function refreshFanComment() {
  if (state.view === "select") return;
  const person = lead();
  const text = fanCommentTemplates[(state.bubbleComments.length + state.month + person.name.length) % fanCommentTemplates.length];
  state.bubbleComments.unshift({
    title: "粉丝评论",
    text: `${text}（${person.name} · ${currentMonthLabel()}）`,
  });
  state.bubbleComments = state.bubbleComments.slice(0, 20);
  if (state.view === "phone" && state.infoTab === "bubble") renderPhone();
}

function lead() {
  return state.trainees.find((item) => item.id === state.selectedId);
}

function addFans(person, amount, type = "career") {
  const value = Math.round(amount);
  if (value >= 0) {
    person.fanTypes[type] = (person.fanTypes[type] || 0) + value;
  } else {
    person.fanTypes.lost += Math.abs(value);
  }
  person.fans = Math.max(0, person.fans + value);
  person.lastGain = value;
}

function currentDate() {
  const year = 2023 + Math.floor(state.month / 12);
  const month = (state.month % 12) + 1;
  return { year, month, key: `${year}-${month}` };
}

function currentEvent() {
  const { year, month, key } = currentDate();
  return monthlyEvents[key] || [`${year} 年 ${month} 月月末考核`, "月度考核", "普通月份没有大型演唱会，但训练、手机互动和排名仍在变化。", ["公开复盘", "发练习照", "低调训练"], 1.0];
}

function eventImageForCurrent() {
  const [title, type] = currentEvent();
  if (type.includes("出道") || type.includes("终局") || title.includes("破晓")) return eventImages.debut;
  if (type.includes("演唱会") || type.includes("家族舞台") || title.includes("新年") || title.includes("荣耀")) return eventImages.newYear;
  if (type.includes("暑期") || type.includes("见面会") || type.includes("巡演") || title.includes("热岛") || title.includes("多巴胺")) return eventImages.summer;
  return eventImages.evaluation;
}

function isPerformanceMonth() {
  const [, type] = currentEvent();
  return ["演唱会", "舞台", "巡演", "见面会", "出道战"].some((word) => type.includes(word));
}

function setView(view) {
  state.view = view;
  if (view !== "phone") state.lastGameView = view;
  render();
}

function chooseLead(id) {
  state.selectedId = id;
  render();
}

function startGame() {
  state.view = "event";
  state.lastGameView = "event";
  state.feed.unshift({ title: "开局", text: `${lead().name} 成为本轮主控。` });
  render();
}

function resolveEvent(choice) {
  if (state.eventDone) return;
  const person = lead();
  const [title, type, text, choices, boost] = currentEvent();
  let gain = Math.round((1800 + person.stats.charm * 38 + person.stats.mental * 12) * boost);
  if (choice.includes("中心") || choice.includes("C 位") || choice.includes("拉票") || choice.includes("高光")) gain = Math.round(gain * 1.25);
  if (choice.includes("稳定") || choice.includes("低调") || choice.includes("安全")) gain = Math.round(gain * 0.86);
  if (choice.includes("CP") || choice.includes("合作") || choice.includes("营业")) {
    gain = Math.round(gain * 1.16);
    person.stats.risk += 4;
  }
  if (isPerformanceMonth()) {
    const focusResult = applyStageFocus(person);
    gain += focusResult.fan;
    state.feed.unshift({ title: "舞台偏向", text: focusResult.text });
  }
  applyConcertPlan(person);
  addFans(person, gain, isPerformanceMonth() ? "career" : "passerby");
  state.eventDone = true;
  state.feed.unshift({ title, text: `选择「${choice}」，粉丝 +${gain.toLocaleString()}。` });
  state.chats.unshift({ who: "经纪老师", text: `${choice} 这条线已经定了。接下来这个月还剩 ${ACTIONS_PER_MONTH - state.actionNo + 1} 次日常选择。` });
  growNPCs(Math.max(1.4, boost * 0.82));
  setView("action");
}

function applyStageFocus(person) {
  const focus = state.stageFocus;
  const ranking = [...state.trainees].sort((a, b) => b.stats[focus] - a.stats[focus]);
  const rank = ranking.findIndex((item) => item.id === person.id) + 1;
  const value = person.stats[focus];
  const growth = Math.round((0.6 + value / 55) * 10) / 10;
  person.stats[focus] = clamp(person.stats[focus] + growth, 0, 100);
  if (rank > state.trainees.length - 3) {
    const loss = -Math.round(900 + (70 - Math.min(value, 70)) * 28);
    return { fan: loss, text: `选择了${stageFocusLabel()}舞台，但该属性排名第 ${rank}，舞台完成度不足，粉丝 ${loss.toLocaleString()}。` };
  }
  const fan = Math.round(500 + value * 28 + (state.trainees.length - rank) * 120);
  return { fan, text: `选择了${stageFocusLabel()}舞台，${focus.toUpperCase()} 排名第 ${rank}，属性 +${growth}，粉丝 +${fan.toLocaleString()}。` };
}

function applyConcertPlan(person) {
  if (!isPerformanceMonth()) return;
  const songBonus = { strong: 1.08, challenge: 1.16, collab: 1.1 }[state.concertPlan.song];
  const positionRisk = { center: 4, group: 0, edge: -2 }[state.concertPlan.position];
  const partBonus = { highlight: 2.4, steady: 1.1, harmony: 1.5 }[state.concertPlan.part];
  const gain = Math.round((person.stats[state.stageFocus] * 18 + partBonus * 360) * songBonus);
  addFans(person, gain, state.concertPlan.song === "collab" ? "cp" : "career");
  person.stats.risk = clamp(person.stats.risk + positionRisk + (state.concertPlan.song === "challenge" ? 2 : 0), 0, 100);
  if (state.concertPlan.song === "collab") {
    person.cpHeat = clamp(person.cpHeat + 5, 0, 100);
  }
  state.feed.unshift({ title: "演唱会筹备", text: `选曲/站位/part 结算，粉丝 +${gain.toLocaleString()}，风险 ${positionRisk >= 0 ? "+" : ""}${positionRisk}。` });
}

function stageFocusLabel() {
  return { vocal: "唱歌", dance: "跳舞", rap: "Rap" }[state.stageFocus];
}

function doAction(kind, key) {
  const person = lead();
  const source = kind === "train" ? trainActions : chatActions;
  const item = source.find((entry) => entry[0] === key);
  if (!item) return;
  const [id, label, desc, fan, risk] = item;
  let gain = fan + Math.round(person.stats.charm * 8 + person.stats.mental * 5);
  person.stats.risk = clamp(person.stats.risk + risk, 0, 100);
  if (kind === "train") {
    person.stats[id] = clamp((person.stats[id] || 0) + 2.2, 0, 100);
    if (id === "stamina") person.stats.mental = clamp(person.stats.mental + 1, 0, 100);
  } else {
    person.stats.relation = clamp(person.stats.relation + 4, 0, 100);
    if (id === "comfort") person.stats.mental = clamp(person.stats.mental + 4, 0, 100);
    if (id === "practice") person.stats.dance = clamp(person.stats.dance + 1.4, 0, 100);
    if (id === "business") {
      gain = Math.round(gain * 1.35);
      person.cpHeat = clamp(person.cpHeat + 3, 0, 100);
    }
    if (id === "message_fans") {
      gain = Math.round(gain * 1.12);
      person.stats.mental = clamp(person.stats.mental + 1.5, 0, 100);
      state.fanMessages.unshift({ who: person.name, text: fanMessageLine(person.name) });
    }
    if (id === "fans") state.resources.support += 1;
    if (id === "practice") state.resources.inspiration += 1;
  }
  if (person.stats.risk > 70) gain = Math.round(gain * 0.65);
  addFans(person, gain, kind === "train" ? "career" : id === "business" ? "passerby" : id === "message_fans" ? "nurture" : "solo");
  state.feed.unshift({ title: label, text: `${desc}，粉丝 +${gain.toLocaleString()}。` });
  state.chats.unshift({ who: kind === "train" ? "练习日志" : "手机", text: `${label}完成。本月还剩 ${Math.max(0, ACTIONS_PER_MONTH - state.actionNo)} 次选择。` });
  growNPCs(1);
  if (state.actionNo >= ACTIONS_PER_MONTH) closeMonth();
  else state.actionNo += 1;
  render();
}

function closeMonth() {
  runMonthlyExam();
  triggerRandomEvents();
  state.view = "random";
  state.lastGameView = "random";
  render();
}

function advanceMonth() {
  state.month += 1;
  state.actionNo = 1;
  state.eventDone = false;
  state.randomHandled = false;
  state.stageFocus = "vocal";
  if (state.month >= TOTAL_MONTHS) {
    state.month = TOTAL_MONTHS - 1;
    state.view = "result";
  } else {
    state.view = "event";
  }
  render();
}

function runMonthlyExam() {
  const { year, month } = currentDate();
  const result = {
    monthLabel: `${year} 年 ${month} 月`,
    exams: examTypes.map((exam) => {
      const ranking = state.trainees
        .map((item) => {
          const base = item.stats[exam.stat] * exam.weight;
          const support = exam.support.reduce((sum, [key, weight]) => sum + item.stats[key] * weight, 0);
          const riskPenalty = item.stats.risk * 0.12;
          const wave = deterministicWave(item.id, state.month, exam.key);
          return { id: item.id, name: item.name, score: Math.round((base + support + wave - riskPenalty) * 10) / 10 };
        })
        .sort((a, b) => b.score - a.score);

      ranking.forEach((row, index) => {
        const trainee = state.trainees.find((item) => item.id === row.id);
        const gain = examFanGain(index);
        addFans(trainee, gain, "career");
        if (index === 0) trainee.stats[exam.stat] = clamp(trainee.stats[exam.stat] + 0.8, 0, 100);
        if (index >= 6) trainee.stats.mental = clamp(trainee.stats.mental - 1.2, 0, 100);
        if (trainee.id === state.selectedId && index === 0) {
          state.resources.wealth += 1;
          const itemName = `${exam.label.replace("考核", "")}资源卡`;
          if (!state.inventory.includes(itemName)) state.inventory.push(itemName);
        }
      });
      return { label: exam.label, key: exam.key, ranking };
    }),
  };

  state.examHistory.unshift(result);
  const leadRows = result.exams.map((exam) => {
    const rank = exam.ranking.findIndex((row) => row.id === state.selectedId) + 1;
    return `${exam.label}第 ${rank}`;
  }).join("，");
  state.feed.unshift({ title: `${result.monthLabel} 月度考核`, text: `${lead().name} 本月成绩：${leadRows}。完整榜单可在手机-考核查看。` });
}

function examFanGain(rankIndex) {
  if (rankIndex === 0) return 2200;
  if (rankIndex === 1) return 1600;
  if (rankIndex === 2) return 1200;
  if (rankIndex <= 4) return 650;
  if (rankIndex <= 6) return 200;
  return -300;
}

function deterministicWave(id, month, key) {
  const seed = `${id}-${month}-${key}`.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return ((seed % 7) - 3) * 0.45;
}

function triggerRandomEvents() {
  const report = [];
  state.trainees.forEach((person) => {
    person.stats.risk = clamp(person.stats.risk + 0.8 + (person.fans > 20000 ? 0.4 : 0), 0, 100);
    const triggered = randomEvents.filter((event, index) => {
      const roll = ((state.month + 3) * (index + 7) + person.name.length * 11 + person.id.length * 3) % 100;
      const chance = event.chance + (person.stats.risk > 25 ? 0.12 : 0) + (person.stats[event.stat] > 70 ? 0.08 : 0);
      return roll / 100 < chance;
    }).slice(0, 2);

    if (!triggered.length) {
      triggered.push(randomEvents[(state.month + person.name.length + person.id.length) % randomEvents.length]);
    }

    triggered.forEach((event) => {
      addFans(person, event.fan, event.fan >= 0 ? "passerby" : "lost");
      person.stats.risk = clamp(person.stats.risk + event.risk, 0, 100);
      person.stats[event.stat] = clamp((person.stats[event.stat] || 0) + event.delta, 0, 100);
      if (person.id === state.selectedId && event.risk > 0 && person.stats.risk > 55 && state.inventory.includes("公关卡")) {
        state.inventory = state.inventory.filter((item) => item !== "公关卡");
        person.stats.risk = clamp(person.stats.risk - 8, 0, 100);
        state.feed.unshift({ title: "道具使用", text: "自动消耗公关卡，抵消了一次轻度负面发酵，风险 -8。" });
      }
      const record = { monthLabel: currentMonthLabel(), traineeId: person.id, name: person.name, title: event.title, text: event.text, fan: event.fan, risk: event.risk };
      report.push(record);
      state.randomHistory.unshift(record);
      if (person.id === state.selectedId) {
        state.feed.unshift({ title: `随机事件：${event.title}`, text: `${event.text} 粉丝 ${event.fan >= 0 ? "+" : ""}${event.fan.toLocaleString()}，风险 ${event.risk >= 0 ? "+" : ""}${event.risk}。` });
      }
    });
  });
  state.monthlyRandomReport = report;
}

function currentMonthLabel() {
  const { year, month } = currentDate();
  return `${year} 年 ${month} 月`;
}

function growNPCs(multiplier = 1) {
  state.trainees.forEach((item, index) => {
    if (item.id === state.selectedId) return;
    const growth = Math.round((860 + item.stats.charm * 15 + item.stats.mental * 8 + ((state.month + index) % 5) * 150) * multiplier);
    addFans(item, growth, index % 3 === 0 ? "career" : index % 3 === 1 ? "passerby" : "solo");
    const focus = ["vocal", "dance", "rap", "acting"][index % 4];
    item.stats[focus] = clamp(item.stats[focus] + 0.8, 0, 100);
  });
}

function fanMessageLine(name) {
  const lines = [
    `${name}：今天训练结束啦，谢谢你们还在等。我会把下一次舞台唱得更稳。`,
    `${name}：看到应援了。比起排名，我更想让你们看见我一点点变好。`,
    `${name}：今晚早点休息，数据辛苦了。明天我也会继续练习。`,
    `${name}：有些话不能说太满，但我会记得今天收到的每一句鼓励。`,
  ];
  return lines[(state.month + state.actionNo + name.length) % lines.length];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function ranked() {
  return [...state.trainees].sort((a, b) => b.fans - a.fans);
}

function render() {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  document.querySelector(`#${state.view}View`).classList.add("active");
  document.querySelector("#phoneBtn").classList.toggle("hidden", state.view === "select" || state.view === "phone" || state.view === "result");
  document.querySelector("#topTitle").textContent = titleForView();
  renderRoster();
  renderEvent();
  renderAction();
  renderRandom();
  renderPhone();
  renderFinal();
}

function titleForView() {
  if (state.view === "select") return "主控选择";
  if (state.view === "event") return "本月事件";
  if (state.view === "action") return "月内行动";
  if (state.view === "random") return "随机事件";
  if (state.view === "phone") return "手机信息";
  return "出道战";
}

function renderRoster() {
  const wrap = document.querySelector("#roster");
  wrap.innerHTML = "";
  state.trainees.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = `roster-card ${item.id === state.selectedId ? "active" : ""}`;
    btn.type = "button";
    btn.innerHTML = `<img src="${item.portrait}" alt="${item.name}"><span><strong>${item.name}</strong><small>${item.tags}</small></span>`;
    btn.addEventListener("click", () => chooseLead(item.id));
    wrap.appendChild(btn);
  });
}

function renderEvent() {
  const { year, month } = currentDate();
  const [title, type, dialogue, choices] = currentEvent();
  document.querySelector("#monthText").textContent = `${year} 年 ${month} 月`;
  document.querySelector("#eventTitle").textContent = title;
  document.querySelector("#eventType").textContent = state.eventDone ? `${type} · 已处理` : type;
  document.querySelector("#eventDialogue").textContent = dialogue;
  document.querySelector("#eventImage").src = eventImageForCurrent();
  const choiceWrap = document.querySelector("#eventChoices");
  choiceWrap.innerHTML = "";
  choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.disabled = state.eventDone;
    btn.textContent = choice;
    btn.addEventListener("click", () => resolveEvent(choice));
    choiceWrap.appendChild(btn);
  });
  renderStageFocus();
}

function renderStageFocus() {
  const panel = document.querySelector("#stageFocusPanel");
  if (!isPerformanceMonth() || state.eventDone) {
    panel.innerHTML = "";
    return;
  }
  panel.innerHTML = `
    <strong>公演舞台偏向</strong>
    <p>选择偏向后按对应属性结算。属性越高收益越多；若该属性排名倒数前三，会导致粉丝减少。</p>
    <div class="focus-options">
      <button type="button" data-focus="vocal">唱歌</button>
      <button type="button" data-focus="dance">跳舞</button>
      <button type="button" data-focus="rap">Rap</button>
    </div>
    <p>演唱会筹备</p>
    <div class="plan-options" data-plan="song">
      <button type="button" data-value="strong">强项曲</button>
      <button type="button" data-value="challenge">挑战曲</button>
      <button type="button" data-value="collab">合作曲</button>
    </div>
    <div class="plan-options" data-plan="position">
      <button type="button" data-value="center">中心位</button>
      <button type="button" data-value="group">小组位</button>
      <button type="button" data-value="edge">边位稳妥</button>
    </div>
    <div class="plan-options" data-plan="part">
      <button type="button" data-value="highlight">高光part</button>
      <button type="button" data-value="steady">稳定part</button>
      <button type="button" data-value="harmony">和声part</button>
    </div>
  `;
  panel.querySelectorAll("button").forEach((button) => {
    const plan = button.closest(".plan-options")?.dataset.plan;
    button.classList.toggle("active", button.dataset.focus === state.stageFocus || (plan && state.concertPlan[plan] === button.dataset.value));
    button.addEventListener("click", () => {
      if (button.dataset.focus) state.stageFocus = button.dataset.focus;
      if (plan) state.concertPlan[plan] = button.dataset.value;
      renderStageFocus();
    });
  });
}

function renderRandom() {
  const { year, month } = currentDate();
  document.querySelector("#randomMonthText").textContent = `${year} 年 ${month} 月月末`;
  const wrap = document.querySelector("#randomMainList");
  if (!state.monthlyRandomReport.length) {
    wrap.innerHTML = `<article><strong>本月平稳</strong><p>没有值得记录的随机事件。</p></article>`;
    return;
  }
  const leadEvents = state.monthlyRandomReport.filter((event) => event.traineeId === state.selectedId);
  const otherEvents = state.monthlyRandomReport.filter((event) => event.traineeId !== state.selectedId);
  const leadHtml = leadEvents.map((event) => randomEventCard(event, true)).join("");
  const othersHtml = otherEvents.slice(0, 8).map((event) => randomEventCard(event, false)).join("");
  wrap.innerHTML = `
    <article class="event-section"><strong>主控事件</strong>${leadHtml || "<p>主控本月没有特殊事件。</p>"}</article>
    <article class="event-section"><strong>其他成员</strong>${othersHtml}</article>
  `;
  wrap.querySelectorAll("[data-random-strategy]").forEach((button) => {
    button.addEventListener("click", () => handleRandomStrategy(button.dataset.randomStrategy));
  });
}

function randomEventCard(event, highlight) {
  const canHandle = highlight && !state.randomHandled;
  return `<div class="random-row ${highlight ? "highlight" : ""}">
    <b>${event.name} · ${event.title}</b>
    <p>${event.text}</p>
    <span>粉丝 ${event.fan >= 0 ? "+" : ""}${event.fan.toLocaleString()} · 风险 ${event.risk >= 0 ? "+" : ""}${event.risk}</span>
    ${canHandle ? `<div class="random-actions">
      <button type="button" data-random-strategy="clarify">公关澄清</button>
      <button type="button" data-random-strategy="practice">沉默训练</button>
      <button type="button" data-random-strategy="fans">粉丝安抚</button>
    </div>` : ""}
  </div>`;
}

function handleRandomStrategy(strategy) {
  if (state.randomHandled) return;
  const person = lead();
  const effects = {
    clarify: { fan: -450, risk: -6, mental: 1, text: "公关老师出了简短回应，争议热度降了下来。" },
    practice: { fan: -900, risk: -2, mental: -1, stat: state.stageFocus, statDelta: 1.5, text: "你没有回应，把时间压回练习室。" },
    fans: { fan: 1300, risk: 2, mental: 2, text: "粉丝评论区被正向反馈刷屏，黏性明显提高。" },
  }[strategy];
  addFans(person, effects.fan, strategy === "fans" ? "nurture" : "passerby");
  person.stats.risk = clamp(person.stats.risk + effects.risk, 0, 100);
  person.stats.mental = clamp(person.stats.mental + effects.mental, 0, 100);
  if (effects.stat) person.stats[effects.stat] = clamp(person.stats[effects.stat] + effects.statDelta, 0, 100);
  state.randomHandled = true;
  state.feed.unshift({ title: "随机事件处理", text: `${effects.text} 粉丝 ${effects.fan >= 0 ? "+" : ""}${effects.fan.toLocaleString()}，风险 ${effects.risk >= 0 ? "+" : ""}${effects.risk}。` });
  renderRandom();
}

function renderAction() {
  const person = lead();
  const { year, month } = currentDate();
  document.querySelector("#actionMonth").textContent = `${year} 年 ${month} 月`;
  document.querySelector("#actionCount").textContent = `本月第 ${state.actionNo} / ${ACTIONS_PER_MONTH} 次选择`;
  document.querySelector("#miniFans").textContent = `粉丝 ${person.fans.toLocaleString()}`;
  document.querySelector("#miniRisk").textContent = `风险 ${Math.round(person.stats.risk)}`;
  document.querySelector("#actionPortrait").src = person.portrait;
  document.querySelector("#leadName").textContent = person.name;
  document.querySelector("#leadTags").textContent = person.tags;
  const wrap = document.querySelector("#actionOptions");
  const source = state.mode === "train" ? trainActions : chatActions;
  wrap.innerHTML = "";
  source.forEach(([id, label, desc]) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerHTML = `<strong>${label}</strong><span>${desc}</span>`;
    btn.addEventListener("click", () => doAction(state.mode, id));
    wrap.appendChild(btn);
  });
  document.querySelectorAll(".mode-tab").forEach((btn) => btn.classList.toggle("active", btn.dataset.mode === state.mode));
}

function renderPhone() {
  document.querySelectorAll(".info-tab").forEach((btn) => btn.classList.toggle("active", btn.dataset.info === state.infoTab));
  const content = document.querySelector("#phoneContent");
  if (state.infoTab === "feed") {
    content.innerHTML = state.feed.slice(0, 8).map((item) => `<article><strong>${item.title}</strong><p>${item.text}</p></article>`).join("");
  }
  if (state.infoTab === "bubble") {
    content.innerHTML = renderBubbleContent();
    bindBubbleActions();
  }
  if (state.infoTab === "chat") {
    const merged = [
      ...state.fanMessages.map((item) => ({ ...item, title: "粉丝消息" })),
      ...state.chats.map((item) => ({ ...item, title: "聊天记录" })),
    ];
    content.innerHTML = merged.slice(0, 10).map((item) => `<article><strong>${item.title} · ${item.who}</strong><p>${item.text}</p></article>`).join("");
  }
  if (state.infoTab === "exam") {
    content.innerHTML = renderExamContent();
  }
  if (state.infoTab === "stats") {
    content.innerHTML = state.trainees.map((item) => {
      const s = item.stats;
      return `<article class="stats-row">
        <strong>${item.name}</strong>
        <p>生日 ${item.birthday} · 粉丝 ${item.fans.toLocaleString()} · 风险 ${Math.round(s.risk)} · 心态 ${Math.round(s.mental)}</p>
        <p>V ${Math.round(s.vocal)} / D ${Math.round(s.dance)} / R ${Math.round(s.rap)} / A ${Math.round(s.acting)} / 体能 ${Math.round(s.stamina)} / 魅力 ${Math.round(s.charm)}</p>
      </article>`;
    }).join("");
  }
  if (state.infoTab === "bag") {
    const person = lead();
    const f = person.fanTypes;
    content.innerHTML = `
      <article><strong>资源</strong><p>财富 ${state.resources.wealth} · 应援 ${state.resources.support} · 灵感 ${state.resources.inspiration}</p></article>
      <article><strong>背包</strong><p>${state.inventory.length ? state.inventory.join("、") : "暂无道具"}</p></article>
      <article><strong>粉丝结构</strong><p>事业粉 ${f.career.toLocaleString()} · 养成粉 ${f.nurture.toLocaleString()} · CP 粉 ${f.cp.toLocaleString()}</p><p>路人粉 ${f.passerby.toLocaleString()} · 唯粉 ${f.solo.toLocaleString()} · 脱粉 ${f.lost.toLocaleString()}</p></article>
      <article><strong>CP / 唯粉</strong><p>CP 热度 ${Math.round(person.cpHeat)} · 唯粉稳定 ${Math.round(person.soloFanStability)}</p></article>
    `;
  }
  if (state.infoTab === "rank") {
    content.innerHTML = ranked().map((item, index) => `<article class="rank-row"><b>${index + 1}</b><span>${item.name}</span><em>${item.fans.toLocaleString()}</em></article>`).join("");
  }
}

function renderBubbleContent() {
  const birthday = birthdayInfo();
  const birthdayButtons = [
    birthday.isLeadBirthday ? `<button type="button" data-bubble-action="leadBirthday">发布生日动态</button>` : "",
    ...birthday.coworkers.map((item) => `<button type="button" data-bubble-action="bless" data-id="${item.id}">祝福 ${item.name} 生日</button>`),
  ].join("");
  const posts = state.bubblePosts.slice(0, 8).map((item) => `<article><strong>${item.title}</strong><p>${item.text}</p></article>`).join("");
  const comments = state.bubbleComments.slice(0, 10).map((item) => `<article class="comment-card"><strong>${item.title}</strong><p>${item.text}</p></article>`).join("");
  return `
    <article class="bubble-composer">
      <strong>泡泡互动</strong>
      <textarea id="bubbleText" maxlength="80" rows="3" placeholder="发送一条文本动态..."></textarea>
      <button type="button" data-bubble-action="send">发送动态</button>
      <button type="button" data-bubble-action="refresh">刷新粉丝评论</button>
      <div class="birthday-actions">${birthdayButtons || "<p>本月暂无生日事件。</p>"}</div>
    </article>
    ${posts || "<article><strong>暂无泡泡</strong><p>可以发送文本动态，或在生日月发布生日互动。</p></article>"}
    <article><strong>粉丝评论流</strong><p>每 10 秒自动刷新一条，也可以手动刷新。</p></article>
    ${comments || "<article><strong>暂无评论</strong><p>等待粉丝评论刷新。</p></article>"}
  `;
}

function bindBubbleActions() {
  document.querySelectorAll("[data-bubble-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.bubbleAction;
      if (action === "send") sendBubble();
      if (action === "refresh") refreshFanComment();
      if (action === "leadBirthday") sendLeadBirthdayBubble();
      if (action === "bless") blessCoworker(button.dataset.id);
    });
  });
}

function sendBubble() {
  const input = document.querySelector("#bubbleText");
  const text = input.value.trim() || "今天也有好好练习，谢谢你们一直在。";
  const person = lead();
  const gain = Math.round(650 + person.stats.charm * 12 + person.stats.mental * 6);
  addFans(person, gain, "nurture");
  person.stats.risk = clamp(person.stats.risk + 1.2, 0, 100);
  state.bubblePosts.unshift({ title: `${person.name} 的泡泡`, text: `${text}（粉丝 +${gain.toLocaleString()}）` });
  state.feed.unshift({ title: "泡泡动态", text: `${person.name} 发送了文本动态，粉丝 +${gain.toLocaleString()}。` });
  refreshFanComment();
  renderPhone();
}

function sendLeadBirthdayBubble() {
  const person = lead();
  const gain = 4200 + Math.round(person.stats.charm * 28);
  addFans(person, gain, "nurture");
  person.stats.mental = clamp(person.stats.mental + 3, 0, 100);
  state.bubblePosts.unshift({ title: `${person.name} 生日泡泡`, text: `谢谢你们记得今天。新的一岁，我想把舞台做得更好。粉丝 +${gain.toLocaleString()}。` });
  state.feed.unshift({ title: "生日事件", text: `${person.name} 发布生日动态，粉丝 +${gain.toLocaleString()}。` });
  refreshFanComment();
  renderPhone();
}

function blessCoworker(id) {
  const coworker = state.trainees.find((item) => item.id === id);
  if (!coworker) return;
  lead().stats.relation = clamp(lead().stats.relation + 4, 0, 100);
  coworker.stats.relation = clamp(coworker.stats.relation + 8, 0, 100);
  addFans(coworker, 900, "cp");
  lead().cpHeat = clamp(lead().cpHeat + 5, 0, 100);
  state.bubblePosts.unshift({ title: `生日祝福 · ${coworker.name}`, text: `${lead().name} 给 ${coworker.name} 送上生日祝福，亲密度提升。` });
  state.chats.unshift({ who: coworker.name, text: "谢谢！等这次考核结束，一起去练习室补一下合作段吧。" });
  renderPhone();
}

function birthdayInfo() {
  const { month } = currentDate();
  const person = lead();
  const monthText = String(month).padStart(2, "0");
  return {
    isLeadBirthday: person.birthday?.startsWith(`${monthText}-`),
    coworkers: state.trainees.filter((item) => item.id !== person.id && item.birthday?.startsWith(`${monthText}-`)),
  };
}

function renderExamContent() {
  if (!state.examHistory.length) {
    return "<article><strong>暂无考核结果</strong><p>每月 3 次行动结束后，会自动进行唱歌、跳舞、Rap 三项考核。</p></article>";
  }
  const latest = state.examHistory[0];
  const exams = latest.exams.map((exam) => {
    const rows = exam.ranking.map((row, index) => {
      const active = row.id === state.selectedId ? " active-exam" : "";
      return `<li class="${active}"><b>${index + 1}</b><span>${row.name}</span><em>${row.score}</em></li>`;
    }).join("");
    return `<article class="exam-card"><strong>${latest.monthLabel} · ${exam.label}</strong><ol>${rows}</ol></article>`;
  }).join("");
  const randoms = state.randomHistory.slice(0, 3).map((event) => `<article><strong>${event.monthLabel} · ${event.title}</strong><p>${event.text}</p></article>`).join("");
  return exams + randoms;
}

function renderFinal() {
  document.querySelector("#finalList").innerHTML = ranked().map((item, index) => {
    const label = endingLabel(item, index);
    return `<article class="${index < 7 ? "debut" : ""}"><b>${index + 1}</b><span><strong>${item.name}</strong><small>${label}</small></span><em>${item.fans.toLocaleString()}</em></article>`;
  }).join("");
}

function endingLabel(item, index) {
  if (item.stats.risk >= 90) return "高风险停滞";
  if (index === 0) return "C 位出道";
  if (index < 7) return item.cpHeat > 70 ? "话题出道" : "出道";
  if (index === 7) return "卡位第 8";
  if (item.fans > 150000 && item.soloFanStability > 72) return "转 Solo 发展";
  return "未出道";
}

document.querySelector("#startBtn").addEventListener("click", startGame);
document.querySelector("#skipEventBtn").addEventListener("click", () => setView("action"));
document.querySelector("#continueMonthBtn").addEventListener("click", advanceMonth);
document.querySelector("#phoneBtn").addEventListener("click", () => setView("phone"));
document.querySelector("#backToGameBtn").addEventListener("click", () => setView(state.lastGameView === "phone" ? "action" : state.lastGameView));
document.querySelector("#restartBtn").addEventListener("click", init);
document.querySelectorAll(".mode-tab").forEach((btn) => btn.addEventListener("click", () => {
  state.mode = btn.dataset.mode;
  renderAction();
}));
document.querySelectorAll(".info-tab").forEach((btn) => btn.addEventListener("click", () => {
  state.infoTab = btn.dataset.info;
  renderPhone();
}));

init();
setInterval(refreshFanComment, 10000);
