let nextAreaListItems = document.getElementsByClassName("nextAreaListItem");
let optionalQuestListItems = document.getElementsByClassName("optionalQuestListItem");
let uniquePackChestListItems = document.getElementsByClassName("uniquePackChestListItem");
let waypointListItems = document.getElementsByClassName("waypointListItem")

function toggleDirections(btnClassActive, btnClassInactive, listItems, e) {
    if (e.target.classList.contains(btnClassActive)) {
        e.target.classList.remove(btnClassActive);
        e.target.classList.add(btnClassInactive)
        for (const listItem of listItems) {
            listItem.style.display = "none";
        }
    }
    else {
        e.target.classList.add(btnClassActive);
        e.target.classList.remove(btnClassInactive)
        for (const listItem of listItems) {
            listItem.style.display = "list-item";
        }
    }
}

document.getElementById("btnNextArea").addEventListener("click", (e) =>
    toggleDirections("btn-light", "btn-outline-light", nextAreaListItems, e)
);
document.getElementById("btnOptionalQuest").addEventListener("click", (e) =>
    toggleDirections("btn-info", "btn-outline-info", optionalQuestListItems, e)
);
document.getElementById("btnUniquePackChest").addEventListener("click", (e) =>
    toggleDirections("btn-warning", "btn-outline-warning", uniquePackChestListItems, e)
);
document.getElementById("btnWaypoint").addEventListener("click", (e) =>
    toggleDirections("btn-danger", "btn-outline-danger", waypointListItems, e)
);