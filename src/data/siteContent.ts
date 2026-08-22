import { 
  NavItem, 
  SectionBlueprint, 
  ProjectItem, 
  ArticleItem, 
  EventItem, 
  CollaborationOption 
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', labelRu: 'Обо мне', labelEn: 'About', iconName: 'User' },
  { id: 'projects', labelRu: 'Проекты', labelEn: 'Projects', iconName: 'Cpu' },
  { id: 'articles', labelRu: 'Статьи', labelEn: 'Articles', iconName: 'FileText' },
  { id: 'events', labelRu: 'Выступления', labelEn: 'Speaking', iconName: 'Calendar' },
  { id: 'contact', labelRu: 'Контакты', labelEn: 'Contact', iconName: 'Send' }
];

export const GENERAL_INFO = {
  nameRu: 'ВАЛЕРИЙ ДОЦЕНКО',
  nameEn: 'VALERIY DOTSENKO',
  titleRu: 'ТЕХНИК-МЕХАНИК • МАСТЕР ПРОИЗВОДСТВЕННОГО ОБУЧЕНИЯ',
  titleEn: 'MECHANICAL TECHNICIAN • VOCATIONAL INSTRUCTOR',
  taglineRu: 'Практик у станка, красный диплом, наставник нового поколения станочников.',
  taglineEn: 'Hands-on machinist, honors graduate, mentor to the next generation of engineers.',
  locationRu: 'Россия',
  locationEn: 'Russia',
  email: 'docenkovaler@gmail.com',
  telegram: '@valera_mechanic',
  telegramUrl: 'https://t.me/valera_mechanic',
  channel: 't.me/struzhka_mashinostroenie',
  channelUrl: 'https://t.me/valera_mechanic',
  age: 21,
  diplomaRu: 'Красный диплом (специальность 15.02.08)',
  diplomaEn: 'Honors Degree (Mechanical Technology 15.02.08)',
  currentRoleRu: 'Мастер производственного обучения в колледже',
  currentRoleEn: 'Master of Vocational Training at Technical College',
  pastRoleRu: 'Слесарь МСР / заводской механосборочный цех (2 года)',
  pastRoleEn: 'Shop-floor assembly fitter (2 years factory experience)',
  missionRu: 'Возвращаю престиж станкостроению через синтез классической точности и цифровых технологий.',
  missionEn: 'Restoring the prestige of machine tooling by uniting hands-on precision with digital tooling.'
};

export const SECTION_BLUEPRINTS: Record<string, SectionBlueprint> = {
  about: {
    sectionId: 'about',
    titleRu: '01 / ОБО МНЕ',
    titleEn: '01 / ABOUT',
    purposeRu: 'Снятие возрастного скепсиса (21 год), подтверждение реального заводского опыта.',
    purposeEn: 'Age objection removal (21 y.o.), real shop-floor proof of competence.',
    toneOfVoiceRu: 'Строгий, сдержанный, фактологический. Без пафоса и саморекламы.',
    toneOfVoiceEn: 'Strict, restrained, factual. Zero vanity or marketing hype.',
    psychology45PlusRu: 'Уважение к старой школе (сопромат, 16К20, ЕСКД), реальный опыт работы руками.',
    psychologyYoungRu: 'Пример молодого профессионала с высоким уровнем мастерства и ЧПУ.',
    visualRecommendationsRu: [
      'Чёрно-белое фото в опрятной спецовке/поло у реального станка (16К20 или ЧПУ).',
      'Швейцарская швейцарская сетка (Swiss Grid) с широким трекингом заголовков.'
    ],
    visualRecommendationsEn: [
      'Black & white portrait in workwear next to a real machine tool.',
      'Swiss Grid layout with tracked uppercase headings.'
    ]
  },
  projects: {
    sectionId: 'projects',
    titleRu: '02 / ПРОЕКТЫ',
    titleEn: '02 / PROJECTS',
    purposeRu: 'Демонстрация трёх компетенций: хардверная разработка, цифровой инструмент, медиа.',
    purposeEn: 'Three disciplines: hardware engineering, digital workflow, and industry media.',
    toneOfVoiceRu: 'Технический, конкретный, с измеримыми метриками (Ra, %, пользователи).',
    toneOfVoiceEn: 'Technical and metric-driven (Ra, percentages, active users).',
    psychology45PlusRu: 'Понимание вибраций, износа инструмента и цеховой дисциплины.',
    psychologyYoungRu: 'Интеграция Telegram-ботов и подкастов в станочную культуру.',
    visualRecommendationsRu: [
      'Минималистичные схемы в стиле технического чертежа (CAD blueprint).',
      'Интерактивный симулятор бота и аудиоволна подкаста в ч/б исполнении.'
    ],
    visualRecommendationsEn: [
      'Minimal CAD blueprint cross-sections.',
      'Monochrome Telegram bot simulator and audio waveform.'
    ]
  },
  articles: {
    sectionId: 'articles',
    titleRu: '03 / СТАТЬИ',
    titleEn: '03 / ARTICLES',
    purposeRu: 'Экспертный анализ ключевых проблем машиностроения (кадры, техника, зарплаты).',
    purposeEn: 'Expert analysis of manufacturing bottlenecks (labor, machines, wages).',
    toneOfVoiceRu: 'Аналитический, конструктивный, с практическими решениями.',
    toneOfVoiceEn: 'Analytical, solution-focused, grounded in floor data.',
    psychology45PlusRu: 'Понимание экономики завода и психологии рабочих.',
    psychologyYoungRu: 'Честные ответы на вопросы о профессии и доходах.',
    visualRecommendationsRu: ['Типографическая вёрстка газетно-журнального типа (Swiss Editorial).'],
    visualRecommendationsEn: ['Swiss editorial typographic article layout.']
  },
  events: {
    sectionId: 'events',
    titleRu: '04 / ВЫСТУПЛЕНИЯ',
    titleEn: '04 / SPEAKING',
    purposeRu: 'Информация для организаторов форумов и конференций: темы, опыт, форматы.',
    purposeEn: 'Clear speaker dossier for conference organizers: keynotes and panels.',
    toneOfVoiceRu: 'Деловой, структурированный.',
    toneOfVoiceEn: 'Structured, professional.',
    psychology45PlusRu: 'Адекватный спикер от молодёжи без заученных лозунгов.',
    psychologyYoungRu: 'Ориентир для профессионального роста.',
    visualRecommendationsRu: ['Хронологическая таблица событий с указанием роли и темы.'],
    visualRecommendationsEn: ['Chronological event schedule table with roles and topics.']
  },
  contact: {
    sectionId: 'contact',
    titleRu: '05 / КОНТАКТЫ',
    titleEn: '05 / CONTACT',
    purposeRu: 'Прямая связь для заводов, организаторов и студентов.',
    purposeEn: 'Direct contact for factory directors, organizers, and students.',
    toneOfVoiceRu: 'Лаконичный, доступный.',
    toneOfVoiceEn: 'Direct, clear, frictionless.',
    psychology45PlusRu: 'Прямые контакты (Email, Telegram) без сложных барьеров.',
    psychologyYoungRu: 'Быстрый отклик в Telegram.',
    visualRecommendationsRu: ['Минималистичная форма и таблица направлений сотрудничества.'],
    visualRecommendationsEn: ['Minimalist inquiry form and collaboration table.']
  }
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'magnetic-suspension',
    titleRu: 'Магнитный демпфирующий подвес для станков',
    titleEn: 'Magnetic Damping Fixture for Machine Tools',
    categoryRu: 'Инженерная разработка',
    categoryEn: 'Hardware Engineering',
    badgeRu: 'Патентная заявка / Прототип',
    badgeEn: 'Patent Pending / Prototype',
    shortDescRu: 'Гашение микровибраций при точении тонкостенных и длинномерных деталей (L/D > 8).',
    shortDescEn: 'Suppression of micro-vibrations during long and thin-walled turning (L/D > 8).',
    fullDescRu: 'Узел на неодимовой магнитной матрице с вихретоковым демпфированием. Монтируется на суппорт за 3 минуты. Локализует резонансы, защищая шпиндель и режущую кромку.',
    fullDescEn: 'Neodymium eddy-current damping matrix mounting directly on the lathe carriage in 3 minutes. Isolates resonance before it reaches the spindle.',
    technicalSpecs: [
      { labelRu: 'Амплитуда вибраций', labelEn: 'Vibration Amplitude', value: '-38% (до 1.2 мкм)' },
      { labelRu: 'Стойкость пластин', labelEn: 'Tool Insert Life', value: '+45%' },
      { labelRu: 'Шероховатость Ra', labelEn: 'Surface Roughness Ra', value: 'с 3.2 до 0.8 мкм' },
      { labelRu: 'Время монтажа', labelEn: 'Setup Time', value: '3.5 мин' }
    ],
    impactRu: 'Протестировано на 3 заводах региона. Стоимость в 8 раз ниже зарубежных динамических люнетов.',
    impactEn: 'Tested across 3 regional machine shops. Cost is 8x lower than imported active rests.',
    statusRu: 'Действующий стенд в мастерских',
    statusEn: 'Operational test bench in workshop',
    visualType: 'blueprint',
    visualHintRu: 'Схема узла, график вибраций до/после.',
    visualHintEn: 'CAD cross-section, vibration curve.'
  },
  {
    id: 'telegram-shop-bot',
    titleRu: 'Telegram-трекер станочного парка «ЦехКонтроль»',
    titleEn: 'Telegram Shop Tracker "TsehControl"',
    categoryRu: 'Цифровизация цеха',
    categoryEn: 'Shop Automation',
    badgeRu: '420+ пользователей',
    badgeEn: '420+ machinists',
    shortDescRu: 'Быстрая сдача смен, учёт наработки пластин и предупреждения о ТО прямо со смартфона.',
    shortDescEn: 'Paperless shift handover, tool insert wear logging, and maintenance alerts via smartphone.',
    fullDescRu: 'Простой инструмент для токарей и мастеров. Заполнение сдачи смены за 25 секунд с фиксацией партии, фото брака и состояния оборудования.',
    fullDescEn: 'Lightweight tool for operators and foremen. 25-second shift logging with scrap photos and machine status.',
    technicalSpecs: [
      { labelRu: 'Время сдачи смены', labelEn: 'Shift Handover Time', value: '< 30 сек' },
      { labelRu: 'Простои оборудования', labelEn: 'Unscheduled Downtime', value: '-22%' },
      { labelRu: 'Стек технологий', labelEn: 'Tech Stack', value: 'Node.js, Telegram API' },
      { labelRu: 'Экспорт данных', labelEn: 'Export Formats', value: 'Telegram, CSV/PDF' }
    ],
    impactRu: 'Внедрён на 14 станках в колледже и на опытном участке инструментального завода.',
    impactEn: 'Deployed across 14 training machines and an industrial prototype shop.',
    statusRu: 'Бесплатно для учебных заведений',
    statusEn: 'Free for technical schools',
    visualType: 'telegram-bot',
    visualHintRu: 'Интерактивный экран смартфона с кнопками бота.',
    visualHintEn: 'Smartphone interface with bot triggers.'
  },
  {
    id: 'machinist-podcast',
    titleRu: 'Подкаст «Стружка и люди»',
    titleEn: 'Podcast "Chips & People"',
    categoryRu: 'Медиа о машиностроении',
    categoryEn: 'Industry Media',
    badgeRu: '18 выпусков / 35k+ прослушиваний',
    badgeEn: '18 Episodes / 35k+ Listens',
    shortDescRu: 'Честные беседы с токарями, ЧПУ-наладчиками и главными инженерами о профессии.',
    shortDescEn: 'Uncensored conversations with manual machinists, CNC programmers, and plant leaders.',
    fullDescRu: 'Разговоры о реальных зарплатах в цеху, поломках дорогого инструмента, отношениях с ОТК и будущем профессии без цензуры и пафоса.',
    fullDescEn: 'Discussing real shop wages, tooling failures, quality control disputes, and the future of manufacturing.',
    technicalSpecs: [
      { labelRu: 'Формат', labelEn: 'Format', value: 'Аудио + Видео' },
      { labelRu: 'Хронометраж', labelEn: 'Duration', value: '45–60 мин' },
      { labelRu: 'Гости', labelEn: 'Guests', value: 'Токари 6 разряда, технологи, ЧПУ-шники' },
      { labelRu: 'Площадки', labelEn: 'Platforms', value: 'VK, YouTube, Яндекс Музыка' }
    ],
    impactRu: 'Более 50 абитуриентов выбрали машиностроительные специальности после прослушивания.',
    impactEn: '50+ direct messages from students enrolling in machining programs.',
    statusRu: 'Сезон 2 в эфире',
    statusEn: 'Season 2 active',
    visualType: 'podcast',
    visualHintRu: 'Аудиоплеер с динамической волной.',
    visualHintEn: 'Audio waveform player.'
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'cadres-crisis',
    titleRu: 'Почему молодые станочники уходят в курьеры через полгода',
    titleEn: 'Why Young Machinists Quit for Delivery Jobs Within 6 Months',
    readTimeRu: '3 мин',
    readTimeEn: '3 min',
    date: 'Февраль 2026',
    categoryRu: 'Кадры',
    categoryEn: 'Labor',
    teaserRu: 'Культурный шок первого дня, непрозрачная сдельная оплата новичка и отсутствие понятной траектории роста.',
    teaserEn: 'First-day culture shock, opaque entry-level piece rates, and lack of a structured progression path.',
    contentRu: `
Каждый год сотни выпускников техникумов уходят из цехов в первые 6 месяцев.

**3 главные причины:**
1. **Шок первого дня:** вместо современного ЧПУ выпускника встречает разбитый станок и уставший наставник, которому стажёр только мешает выполнять норму.
2. **Сдельная оплата на старте:** в первые месяцы новичку дают копеечную обдирку (30–40 тыс. руб.), тогда как курьерская служба платит вдвое больше без материальной ответственности.
3. **Отсутствие грейдов:** молодой рабочий не видит, что нужно освоить для перехода на 4-й разряд и ЧПУ.

**Решение:** гарантированный базовый оклад на 90 дней адаптации и оплачиваемое наставничество.
    `,
    contentEn: `
Hundreds of technical graduates leave machine shops within their first six months.

**3 root causes:**
1. **First-Day Shock:** Instead of modern CNCs, novices face worn machines and overburdened mentors.
2. **Low Entry Pay:** Early scrap-prep piece rates yield meager pay compared to gig delivery with zero liability.
3. **No Career Tree:** Lack of clear milestones to advance to 4th-grade and multi-axis CNC.

**Solution:** 90-day guaranteed base pay and fairly incentivized mentorship.
    `,
    keyTakeawaysRu: [
      'Молодёжь бежит не от станков, а от непрозрачной сдельной оплаты.',
      'Первые 90 дней наставничества определяют удержание сотрудника.'
    ],
    keyTakeawaysEn: [
      'Apprentices do not fear hard work; they fear opaque piece rates.',
      'The first 90 days of onboarding determine long-term retention.'
    ],
    visualRecommendationRu: 'Схема воронки удержания стажёров.',
    visualRecommendationEn: 'Apprentice retention funnel diagram.'
  },
  {
    id: 'machine-fleet-reality',
    titleRu: 'Станочный парк 2026: советские 16К20 и азиатские ЧПУ',
    titleEn: 'Machine Fleet 2026: 16K20 Manual Lathes vs Modern CNCs',
    readTimeRu: '3 мин',
    readTimeEn: '3 min',
    date: 'Январь 2026',
    categoryRu: 'Технологии',
    categoryEn: 'Technology',
    teaserRu: 'Почему базовая моторика универсала критически важна даже для наладчика 5-осевого центра.',
    teaserEn: 'Why tactile manual lathe feel remains essential even for 5-axis CNC programmers.',
    contentRu: `
Оператор, начавший обучение сразу с кнопок ЧПУ, не чувствует физику резания.

- **Универсал 16К20:** учит чувствовать сопротивление металла на маховике, распознавать свист затупившегося резца и отгиб оправки.
- **Современный ЧПУ:** масштабирует производительность и повторяемость, но требует базового понимания сопромата.
- **Вывод:** лучший ЧПУ-программист — это специалист, прошедший практику на универсальном станке.
    `,
    contentEn: `
An operator starting strictly on touchscreens lacks sensory feedback.

- **Manual Lathes:** Teach tactile tool load, cutting vibration recognition, and tool deflection.
- **CNC Centers:** Multiply precision and throughput, but require deep metallurgical intuition.
- **Conclusion:** The best CNC specialists are those grounded in manual machining fundamentals.
    `,
    keyTakeawaysRu: [
      'Универсальный станок развивает тактильное чувство металла.',
      'ЧПУ масштабирует скорость, но не заменяет знание теории резания.'
    ],
    keyTakeawaysEn: [
      'Manual lathes build physical intuition.',
      'CNC scales speed but cannot replace foundational machining theory.'
    ],
    visualRecommendationRu: 'Таблица сравнения универсала и ЧПУ.',
    visualRecommendationEn: 'Manual vs CNC comparison table.'
  },
  {
    id: 'wages-and-prestige',
    titleRu: 'Экономика станочника: как выйти на 150 000+ рублей',
    titleEn: 'Machinist Economics: Earning High Incomes Through Skill',
    readTimeRu: '2 мин',
    readTimeEn: '2 min',
    date: 'Январь 2026',
    categoryRu: 'Карьера',
    categoryEn: 'Career',
    teaserRu: 'Грейды и квалификация: почему операторы получают мало, а наладчики-универсалы — на уровне IT.',
    teaserEn: 'Skill hierarchy: why button pushers hit low ceilings while multi-axis setup specialists earn top-tier pay.',
    contentRu: `
Развенчиваем миф о «нищих заводах»:

1. **Оператор-кнопочник (установка детали, пуск):** 45–65 тыс. руб.
2. **Токарь/фрезеровщик 5 разряда (сложный штучный заказ):** 90–140 тыс. руб.
3. **Наладчик-программист многоосевых ЧПУ:** 130–220 тыс. руб.
4. **Инженер-технолог с практикой у станка:** 160–280 тыс. руб.

Деньги платят за работу без брака на сложной геометрии.
    `,
    contentEn: `
Debunking factory wage myths:

1. **Button-Push Operator:** Entry floor pay.
2. **5th-Grade Manual Toolmaker:** High demand in prototype shops ($1,200–$1,800).
3. **Multi-Axis CNC Programmer & Setup Specialist:** ($1,600–$2,800).
4. **Manufacturing Engineer with Hands-on Background:** Top industry tier.

Value comes from zero-scrap precision on complex geometry.
    `,
    keyTakeawaysRu: [
      'Синтез ручного мастерства и программирования удваивает доход.',
      'Главная валюта станочника — отсутствие брака в паспорте детали.'
    ],
    keyTakeawaysEn: [
      'Combining manual skill with CAD/CAM doubles market value.',
      'Reputation is built on zero-defect inspection reports.'
    ],
    visualRecommendationRu: 'Лестница квалификаций и доходов.',
    visualRecommendationEn: 'Career compensation ladder diagram.'
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'conf-metalworking-2026',
    titleRu: 'Всероссийский форум «Молодёжь в машиностроении»',
    titleEn: 'National Forum "Youth in Mechanical Engineering"',
    roleRu: 'Ключевой спикер',
    roleEn: 'Keynote Speaker',
    locationRu: 'Москва, Экспоцентр',
    locationEn: 'Moscow, Expocentre',
    date: 'Май 2026',
    status: 'upcoming',
    topicRu: '«Как увлечь молодёжь станком: практическая реформа цехового наставничества»',
    topicEn: '"Engaging Youth with Machine Tools: Practical Mentorship Reform"',
    keyPointsRu: [
      'Модернизация программ без многомиллионных бюджетов',
      'Внедрение Telegram-трекеров в учебный процесс'
    ],
    keyPointsEn: [
      'Curriculum modernization on realistic budgets',
      'Deploying Telegram tracking tools in training labs'
    ]
  },
  {
    id: 'conf-proftech-2025',
    titleRu: 'Съезд мастеров СПО и главных инженеров',
    titleEn: 'Congress of Vocational Instructors & Chief Engineers',
    roleRu: 'Докладчик',
    roleEn: 'Presenter',
    locationRu: 'Екатеринбург',
    locationEn: 'Yekaterinburg',
    date: 'Ноябрь 2025',
    status: 'past',
    topicRu: '«Магнитные подвесы и локальное демпфирование в учебных мастерских»',
    topicEn: '"Magnetic Fixtures & Local Damping in Training Labs"',
    keyPointsRu: [
      'Демонстрация стендовых испытаний прототипа',
      'Привлечение студентов к решению реальных заводских задач'
    ],
    keyPointsEn: [
      'Live prototype bench test demonstration',
      'Engaging students in real industrial problem-solving'
    ],
    recordingAvailable: true
  },
  {
    id: 'conf-students-hackathon',
    titleRu: 'Инженерный хакатон по реверс-инжинирингу',
    titleEn: 'Reverse Engineering & Machining Hackathon',
    roleRu: 'Организатор и жюри',
    roleEn: 'Lead Organizer & Jury',
    locationRu: 'Технопарк колледжа',
    locationEn: 'College Tech Park',
    date: 'Октябрь 2025',
    status: 'past',
    topicRu: '«От 3D-скана изношенной детали до готового изделия на ЧПУ за 8 часов»',
    topicEn: '"From 3D Scan to Finished CNC Part in 8 Hours"',
    keyPointsRu: [
      '12 команд из 4 колледжей региона',
      'Трудоустройство финалистов на завод-партнёр'
    ],
    keyPointsEn: [
      '12 student teams competing in end-to-end fabrication',
      'Direct job offers for finalists from partner plant'
    ],
    recordingAvailable: true
  }
];

export const COLLABORATION_OPTIONS: CollaborationOption[] = [
  {
    id: 'factory-owners',
    titleRu: 'Директорам предприятий',
    titleEn: 'For Factory Directors',
    descriptionRu: 'Целевая подготовка станочников под ваш парк станков, аудит программ практики, совместные НИОКР-проекты.',
    descriptionEn: 'Targeted apprentice training for your machine fleet, curriculum audits, applied R&D.',
    suitableForRu: 'Директора заводов, главные инженеры, HRD',
    suitableForEn: 'Plant CEOs, Chief Engineers, HRDs'
  },
  {
    id: 'event-organizers',
    titleRu: 'Организаторам конференций',
    titleEn: 'For Event Organizers',
    descriptionRu: 'Живые доклады о реальном состоянии профтеха и станкостроения без канцелярита. Модерация круглых столов.',
    descriptionEn: 'Actionable keynote talks on modern vocational education and machine tooling. Panel moderation.',
    suitableForRu: 'Продюсеры форумов, выставок, ассоциации',
    suitableForEn: 'Expo producers, industrial summits'
  },
  {
    id: 'young-engineers',
    titleRu: 'Студентам и молодым инженерам',
    titleEn: 'For Students & Apprentices',
    descriptionRu: 'Консультации по сложным чертежам, режимам резания, участие в подкасте «Стружка и люди».',
    descriptionEn: 'Guidance on machining setups, toolpath optimization, guest spots on the podcast.',
    suitableForRu: 'Студенты СПО, молодые токари и ЧПУ-шники',
    suitableForEn: 'Machining students, entry-level operators'
  }
];

export const COPYWRITING_MANIFESTO = {
  principlesRu: [
    { name: '1. Факты вместо прилагательных', desc: 'Разряды, марка станков (16К20), допуски (Ra 0.8), цифры аудитории.' },
    { name: '2. Сдержанный швейцарский стиль', desc: 'Чёрно-белая графика, строгая сетка, лаконичный текст, никакого визуального шума.' },
    { name: '3. Диалог на равных', desc: 'Уважение к опыту 45+ лет и понятный язык для молодёжи 18–25 лет.' }
  ],
  principlesEn: [
    { name: '1. Facts over Adjectives', desc: 'Certifications, machine models (16K20), tolerances (Ra 0.8), verified numbers.' },
    { name: '2. Swiss Editorial Aesthetic', desc: 'Strict monochrome, disciplined grid, concise copy, zero visual noise.' },
    { name: '3. Equal Ground Dialogue', desc: 'Respect for seasoned toolmakers (45+) and clear relevance for Gen-Z (18-25).' }
  ]
};
