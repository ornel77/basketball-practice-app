import {
  startOfWeek,
  addDays,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfYear,
  addMonths,
  isSameMonth,
} from "date-fns";

export const getCalendarWeekStat = (stats) => {
  // récuperer le premier jour de la semaine courante
  const monday = startOfWeek(new Date(), { weekStartsOn: 1 });

  //ajouter les restes des jours de la semaine courante en commançant par lundi
  const weekdays = Array.from({ length: 7 }).map((_, i) => addDays(monday, i));

  // on parcourt chaque jours de la semaine, on compare entre notre tableau de stats et le jours de la semaine S'ils sont identique alors on mets cette date dans un variable.
  // A la fin on retourne un objet avec tout les param de stat et s'il y a pas de stat on met null
  return weekdays.map((day) => {
    const statOfDay = stats.find((stat) =>
      isSameDay(new Date(stat.workoutDate), day)
    );
    return {
      fieldGoal: statOfDay?.fieldGoal || null,
      threePoint: statOfDay?.threePoint || null,
      layupLeft: statOfDay?.layupLeft || null,
      layupRight: statOfDay?.layupRight || null,
      freeThrow: statOfDay?.freeThrow || null,
      workoutDate: formatDateforWeek(day),
    };
  });
};

export const getCalendarMonthStat = (stats) => {
  const startMonth = startOfMonth(new Date());
  const endMonth = endOfMonth(new Date());
  const totalDays =
    Math.floor((endMonth - startMonth) / (1000 * 60 * 60 * 24)) + 1;
  const monthDays = Array.from({ length: totalDays }).map((_, i) =>
    addDays(startMonth, i)
  );

  return monthDays.map((day) => {
    const statOfDay = stats.find((stat) =>
      isSameDay(new Date(stat.workoutDate), day)
    );
    return {
      fieldGoal: statOfDay?.fieldGoal || null,
      threePoint: statOfDay?.threePoint || null,
      layupLeft: statOfDay?.layupLeft || null,
      layupRight: statOfDay?.layupRight || null,
      freeThrow: statOfDay?.freeThrow || null,
      workoutDate: formatDateforMonth(day),
    };
  });
};

export const getYearStats = (stats) => {
  const january = startOfYear(new Date());
  const months = Array.from({ length: 12 }).map((_, i) =>
    addMonths(january, i)
  );

  return months.map(month => {
    const statsOfMonth = stats.filter(stat => isSameMonth(new Date(stat.workoutDate), month))
    if (statsOfMonth.length == 0) {
      return {
        workoutDate: formatDateforYear(month),
        fieldGoal: null,
        threePoint: null,
        layupLeft: null,
        layupRight: null,
        freeThrow: null,
      }
    }

    const sum = statsOfMonth.reduce((c,p) => ({
        fieldGoal: c.fieldGoal + p.fieldGoal,
        threePoint: c.threePoint + p.threePoint,
        layupLeft: c.layupLeft + p.layupLeft,
        layupRight: c.layupRight + p.layupRight,
        freeThrow: c.freeThrow + p.freeThrow,
    }), {
        fieldGoal: 0,
        threePoint: 0,
        layupLeft: 0,
        layupRight: 0,
        freeThrow: 0,
    })

    return {
      workoutDate: formatDateforYear(month),
      fieldGoal: Math.floor(sum.fieldGoal / statsOfMonth.length),
      threePoint: Math.floor(sum.threePoint / statsOfMonth.length),
      layupLeft: Math.floor(sum.layupLeft / statsOfMonth.length),
      layupRight: Math.floor(sum.layupRight / statsOfMonth.length),
      freeThrow: Math.floor(sum.freeThrow / statsOfMonth.length),
    };
  })
};

export const formatDateforWeek = (date) => {
  const formatedDate = new Date(date).toLocaleString("en-UK", {
    weekday: "short",
    day: "numeric",
  });

  return formatedDate;
};
export const formatDateforMonth = (date) => {
  const formatedDate = new Date(date).toLocaleString("en-UK", {
    day: "numeric",
  });

  return formatedDate;
};
export const formatDateforYear = (date) => {
  const formatedDate = new Date(date).toLocaleString("en-UK", {
    month: "short"
  });

  return formatedDate;
};
