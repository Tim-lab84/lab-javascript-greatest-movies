// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}
//Iteration 1.1 Bonus
//Some of the directors had directed multiple movies,
//  so they will pop up multiple times in the array of
//  directors. How could you "clean" this array and
// make it unified (meaning, without duplicates)?
// Don't prioritize the bonus part now. You can
//  return to it when you finish
// the mandatory iterations.
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) return 0;
  console.log("MOVIES ARR", moviesArray);
  return moviesArray.filter(
    (movie) =>
      movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  const scoreTotal = moviesArray.reduce(function (acc, movie) {
    if (!movie.score) movie.score = 0;
    return acc + movie.score;
  }, 0);
  console.log("SCORETOTAL", scoreTotal);
  //   return +(scoreTotal / moviesArray.length).toFixed(2)
  console.log("without", (scoreTotal / moviesArray.length).toFixed(2));
  console.log("with", parseFloat((scoreTotal / moviesArray.length).toFixed(2)));
  return parseFloat((scoreTotal / moviesArray.length).toFixed(2));
}
// 0.2 + 0.1 =
console.log(Number((0.2 + 0.1).toFixed(2)));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) return 0; // Return 0 if the array is empty

  const { dramaTotalScore, dramaCount } = moviesArray.reduce(
    function (acc, movie) {
      if (movie.genre.includes("Drama")) {
        acc.dramaTotalScore += movie.score;
        acc.dramaCount++;
      }
      return acc;
    },
    { dramaTotalScore: 0, dramaCount: 0 }
  );

  if (dramaCount === 0) return 0;

  return parseFloat((dramaTotalScore / dramaCount).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Create a shallow copy and sort
  return [...moviesArray].sort((a, b) => {
    // Sort by year, then by title if years are the same
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}
//this is bs , NOW ITS COOL
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  //THIS IS COOL ... why so tideous
  return [...moviesArray] // Make a shallow copy of the input array
    .sort((a, b) => a.title.localeCompare(b.title)) // Sort movies alphabetically by title
    .map((movie) => movie.title) // Extract only the titles as strings
    .slice(0, 20); // Limit to the first 20 titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    let hours = 0;
    let minutes = 0;

    if (movie.duration.includes("h")) {
      hours = parseInt(movie.duration.split("h")[0]);
    }
    if (movie.duration.includes("min")) {
      minutes = parseInt(
        movie.duration.split("h")[1]?.split("min")[0] ||
          movie.duration.split("min")[0]
      );
    }

    const totalMinutes = hours * 60 + minutes;

    return {
      ...movie,
      duration: totalMinutes,
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null; // Return null if the array is empty
  }

  const yearData = {};

  moviesArray.forEach((movie) => {
    if (!yearData[movie.year]) {
      yearData[movie.year] = { totalScore: 0, count: 0 };
    }
    yearData[movie.year].totalScore += movie.score;
    yearData[movie.year].count++;
  });

  let bestYear = null;
  let highestAvg = 0;

  for (const year in yearData) {
    const { totalScore, count } = yearData[year];
    const avgScore = totalScore / count;

    if (avgScore > highestAvg || (avgScore === highestAvg && year < bestYear)) {
      highestAvg = avgScore;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${highestAvg.toFixed(
    1
  )}`;
}
