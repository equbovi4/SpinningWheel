function addTile() {
    const tilesList = document.querySelector(".tiles-list");
    const tileText = document.getElementById("tile-input-field");
    const tile = createElement("div", ["tile"], {});

    tilesList.appendChild(tile);

    const tileInput = createElement("input", [], {
        "contenteditable": "true", 
        "type": "text", 
        "value": tileText.value
    });

    tileText.value = "";

    tile.appendChild(tileInput);

    const tileActions = createElement("div", ["tile-actions"], {});
    tile.appendChild(tileActions);

    const deleteButton = createElement("button", [], {});
    const deleteIcon = createElement("i", ["fa", "fa-solid", "fa-trash"], {});

    deleteButton.appendChild(deleteIcon);
    tileActions.appendChild(deleteButton);
}


function createElement(elementType, elementClasses, elementAttributes) {
    const element = document.createElement(elementType);

    if (elementClasses.length) {
        elementClasses.forEach(elementClass => {
            element.classList.add(elementClass);
        });
    };

    for (const [key, value] of Object.entries(elementAttributes)) {
        element.setAttribute(key, value)
    };

    return element;
};