/*-------------------
    Form.html
---------------------*/ 
const formQuestionBody = document.getElementById("form-question--body");

/*---------------Add and delete inputBox-----------*/ 
(() => {
    /*---Add---*/ 
    const addInputBox = document.querySelector(".add-input");

    addInputBox.addEventListener("click", () => {
        createInputBox();
    })

    let i=0;
    function createInputBox() {
        inputBox = document.createElement("div");

        inputBox.classList.add("form-question--inputBox-group");
        inputBox.setAttribute("id", "form-question--inputBox-group-"+(i))
        inputBox.innerHTML=`
        <div class="row">
            <div class="form-question--inputBox w-100 form-control--container">
                <button type="button" class="btn--remove-asw-field btn--remove-input fas fa-trash-alt" id="btn--remove-input-${i}">
                </button>
                <input type="text" name="input-descript" id="input-descript" class="form-control--descript" value="Input box description">
                <input type="text" name="user-${i}-inputBox" id="user-${i}-inputBox" class="form-control" required>
            </div>
        </div>`;
        i++;
        formQuestionBody.appendChild(inputBox);
        reload();
    }

    /*---Remove---*/

    function deleteInputBox(event) {
        const currentContainer = [...document.querySelectorAll(".form-question--inputBox-group")].find(
            (container) =>
                container.id.replace("form-question--inputBox-group-", "") ===
                event.target.id.replace("btn--remove-input-", "")
        );
        currentContainer.remove();
        reload();
    }

    const reload = () => {
        [...document.querySelectorAll(".btn--remove-input")].forEach((btn) => {
            btn.addEventListener("click", deleteInputBox);
        });
    };
    // reload();
})();

/*---------------Add and delete checkBox group-----------*/ 
(()=> {
    /*---Add---*/
    const addcheckBoxGroup = document.querySelector(".add-checkbox");

    addcheckBoxGroup.addEventListener("click", () => {
        createCheckBox();
    })

    let i=0;
    function createCheckBox() {
        checkBox = document.createElement("div");

        checkBox.classList.add("form-question--checkbox-group");
        checkBox.setAttribute("id", "form-question--checkbox-group-"+(i))
        checkBox.innerHTML=`
        <div class="row">
            <div class="form-question--radioBox w-100 form-control--container">
            <button type="button" class="btn--remove-asw-field btn--remove-checkbox fas fa-trash-alt" id="btn--remove-checkbox-${i}">
            </button>
            <div class="form-check--container">
                <input type="checkbox" name="group-checkbox-${i}" id="ques-checkbox-${i}" class="form-check--input">                                       
                <input type="text" name="input-descript" id="input-descript" class="form-check--descript" placeholder="Radio box description">
            </div> 
            </div>
        </div>`;
        i++;
        formQuestionBody.appendChild(checkBox);
        reload();
    }

    /*Reload*/ 
    const reload = () => {
        [...document.querySelectorAll(".btn--remove-checkbox")].forEach((btn) => {
            btn.addEventListener("click", deleteCheckBox);
        });
    };

    /*---Remove---*/ 
    function deleteCheckBox(event) {
        console.log("hello");
        console.log(event.target);
        const currentContainer = [...document.querySelectorAll(".form-question--checkbox-group")].find(
            (container) =>
                container.id.replace("form-question--checkbox-group-", "") ===
                event.target.id.replace("btn--remove-checkbox-", "")
        );
        currentContainer.remove();
        reload();
    }
    // reload();
})(); 