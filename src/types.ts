export type Language = 'ru' | 'en';

export type SectionId = 'about' | 'projects' | 'articles' | 'events' | 'contact';

export interface NavItem {
  id: SectionId;
  labelRu: string;
  labelEn: string;
  iconName: string;
}

export interface SectionBlueprint {
  sectionId: SectionId;
  titleRu: string;
  titleEn: string;
  purposeRu: string;
  purposeEn: string;
  toneOfVoiceRu: string;
  toneOfVoiceEn: string;
  psychology45PlusRu: string;
  psychologyYoungRu: string;
  visualRecommendationsRu: string[];
  visualRecommendationsEn: string[];
}

export interface ProjectItem {
  id: string;
  titleRu: string;
  titleEn: string;
  categoryRu: string;
  categoryEn: string;
  badgeRu: string;
  badgeEn: string;
  shortDescRu: string;
  shortDescEn: string;
  fullDescRu: string;
  fullDescEn: string;
  technicalSpecs: { labelRu: string; labelEn: string; value: string }[];
  impactRu: string;
  impactEn: string;
  statusRu: string;
  statusEn: string;
  visualType: 'blueprint' | 'telegram-bot' | 'podcast';
  visualHintRu: string;
  visualHintEn: string;
  links?: { labelRu: string; labelEn: string; url: string }[];
}

export interface ArticleItem {
  id: string;
  titleRu: string;
  titleEn: string;
  readTimeRu: string;
  readTimeEn: string;
  date: string;
  categoryRu: string;
  categoryEn: string;
  teaserRu: string;
  teaserEn: string;
  contentRu: string;
  contentEn: string;
  keyTakeawaysRu: string[];
  keyTakeawaysEn: string[];
  visualRecommendationRu: string;
  visualRecommendationEn: string;
}

export interface EventItem {
  id: string;
  titleRu: string;
  titleEn: string;
  roleRu: string;
  roleEn: string;
  locationRu: string;
  locationEn: string;
  date: string;
  status: 'upcoming' | 'past';
  topicRu: string;
  topicEn: string;
  keyPointsRu: string[];
  keyPointsEn: string[];
  materialsUrl?: string;
  recordingAvailable?: boolean;
}

export interface CollaborationOption {
  id: string;
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionEn: string;
  suitableForRu: string;
  suitableForEn: string;
}
