const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {};

learning.topic = "JS";
learning.learningGoals = [
    "Build JS Programs",
    "Use AI to be a more well rounded developer",
    "Create full functional websites",
    "Learn how to integrate data into sites",
];
learning.category = "Front End Development";
learning.topicImportance = "High";


// console.log(learning);

learning.topic = "JavaScript";
learning.learningGoals.splice(1,1);

console.log(learning);

topicElement.innerText = `I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");