export interface ThemeColorType {
  background01: string;
  background02: string;
  background03: string;
  background04: string;
  background04Hover: string;
  background05: string;
  background05Hover: string;
  background06: string;
  background07: string;
  background08: string;
  background09: string;
  background10: string;
  background11: string;
  background12: string;
  background13: string;
  background14: string;
  background15: string;
  background16: string;
  background17: string;
  background18: string;
  background19: string;
  background20: string;
  background21: string;
  background22: string;
  background23: string;
  background24: string;
  background25: string;
  background26: string;
  bgLoading: string;
  backgroundOpacity: string;
  backgroundOpacity2: string;
  backgroundOpacity3: string;
  backgroundOpacity4: string;
  backgroundOpacity5: string;
  backgroundOpacity6: string;
  backgroundOpacity7: string;
  backgroundOpacity8: string;
  backgroundGradient: string;
  backgroundGradient2: string;
  backgroundGradient3: string;
  backgroundGradient4: string;
  backgroundGradient5: string;
  backgroundGradient6: string;
  border01: string;
  border02: string;
  border03: string;
  border04: string;
  border05: string;
  border06: string;
  border07: string;
  border08: string;
  border09: string;
  border10: string;
  border11: string;
  border12: string;
  border13: string;
  border14: string;
  border15: string;
  border16: string;
  text01: string;
  text02: string;
  text03: string;
  text04: string;
  text05: string;
  text06: string;
  text07: string;
  text08: string;
  text09: string;
  text10: string;
  text11: string;
  text12: string;
  text13: string;
  text14: string;
  text15: string;
  text16: string;
  text17: string;
  text18: string;
  text19: string;
  text20: string;
  text21: string;
  text22: string;
  text23: string;
  text24: string;
  text25: string;
  text26: string;
  icon01: string;
  icon02: string;
  icon03: string;
  icon04: string;
  icon05: string;
  icon06: string;
  icon07: string;
  icon08: string;
  icon09: string;
  icon10: string;
  icon11: string;
  icon13: string;
  icon14: string;
  icon15: string;
  icon16: string;
  icon17: string;
  icon18: string;
  hover01: string;
  hover02: string;
  hover03: string;
  hover04: string;
  hover05: string;
  hover06: string;
  tooltipBackground: string;
  point: string;
  green01: string;
  green02: string;
  red01: string;
  red02: string;
  select: string;
  redDark: string;
  greenDark: string;
  shadow: string;
  shadow01: string;
  shadow02: string;
  shadow03: string;
}

export type ThemeColorKeyTypes = keyof ThemeColorType;

export type WindowSizeKeyType = "mobile" | "tablet" | "desktop";

export type WindowSizeType = { [key in WindowSizeKeyType]: string };

export type ThemeKeys = "dark" | "light";
