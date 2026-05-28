import { initHabitTracker } from "./habittracker.js";
import { initDailyTracker } from "./dailygoals.js";
import { initMoodTracker } from "./moodtracker.js";
import { initWaterIntake } from "./waterintake.js";
import { initQuoteGenerator } from "./quotes.js";
import { initCurrentDate } from "./currentdate.js";

initCurrentDate();
initMoodTracker();
initWaterIntake();
initHabitTracker();
initDailyTracker();
initQuoteGenerator();
