const readline = require("readline");
const profile = {
  name: "",
  activity: "",
  listenTo: "",
  favoriteMeal: "",
  favoriteFood: "",
  favoriteSport: "",
  superpower: "",
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("what's you name? Nicknames are also acceptable :) ", (name) => {
  profile.name = name;
  rl.question("what's an activity you like doing? ", (activity) => {
    profile.activity = activity;
    rl.question("what do you listen to while doing that? ", (listenTo) => {
      profile.listenTo = listenTo;
      rl.question(
        "which  meal is your favourite (eg: dinner, brunch, etc.) ",
        (meal) => {
          profile.favoriteMeal = meal;
          rl.question(
            "what's your favourtie thing to eat for that meal? ",
            (food) => {
              profile.favoriteFood = food;
              rl.question("whats your favourite sport? ", (sport) => {
                profile.favoriteSport = sport;
                rl.question(
                  "what is your super power? What are you good at? ",
                  (superpower) => {
                    profile.superpower = superpower;
                    console.log(
                      `Welcome ${profile.name}. You love to ${profile.activity} while listening to ${profile.listenTo}. You love to eat ${profile.favoriteFood} for ${profile.favoriteMeal}. Your love playing ${profile.favoriteSport} and your superpower is ${profile.superpower}. Great to have you with us :) `
                    );
                    rl.close();
                  }
                );
              });
            }
          );
        }
      );
    });
  });
  // profile.name = answer;
  // rl.setPrompt("what's an activity you like doing? ");
  // rl.prompt();
});
