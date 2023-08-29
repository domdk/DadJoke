/* Tutorial on Web Development BootCamp - Colt Steele - https://www.udemy.com/course/the-web-developer-bootcamp*/


const jokes = document.querySelector("#jokes");
const button = document.querySelector("#getJokeButton");


const addNewJoke = async () => {
    resetJokes(); // Reset jokes before adding a new one

    const jokeText = await getDadJoke();
    const newJoke = document.createElement("p");
    newJoke.append(jokeText);
    jokes.append(newJoke);
};

const resetJokes = () => {
    jokes.innerHTML = ""; // Clear all existing jokes
};

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json", "User-Agent": "DevilDogDesign (https://devildog.co.za)"} };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :(";
    }
};

button.addEventListener("click", addNewJoke);

const loadJokeOnPageLoad = async () => {
    await addNewJoke();
};

window.addEventListener("load", loadJokeOnPageLoad);
