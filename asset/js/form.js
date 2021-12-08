/*-------------------
    Form.html
---------------------*/ 
const formQuestionBody = document.getElementById("form-question--body");
/*---------------Add and delete Personal-info group-----------*/
(()=>{
    /*---Add group---*/
    const addPersonInfoGroup = document.querySelector(".add-personal-info");

    addPersonInfoGroup.addEventListener("click", () => {
        createPersonInfoGroup();
    });  

    let i=0;
    function createPersonInfoGroup(){
        PersonInfoGroup = document.createElement("div");

        PersonInfoGroup.classList.add("form-question--personal-info-group");
        PersonInfoGroup.setAttribute("id", "form-question--personal-info-group-"+(i))
        PersonInfoGroup.innerHTML=`
        <div class="row">
        <!-- name -->
            <div id="form-question--fullName-${i}" class="form-question--fullName w-50 form-control--container">
                <button type="button" id="btn--remove-fullName-${i}" class="btn--remove-fullName btn--remove-asw-field fas fa-trash-alt">
                </button>
                <input type="text" name="input-descript" id="input-descript" class="form-control--descript" value="Full name">
                <input type="text" name="user-${i}-fullName" id="user-${i}-fullName" class="form-control" required>
            </div>
            <!-- email -->
            <div id="form-question--email-${i}" class="form-question--email w-50 form-control--container">
                <button type="button" id="btn--remove-email-${i}" class="btn--remove-email btn--remove-asw-field fas fa-trash-alt">
                </button>
                <input type="text" name="input-descript" id="input-descript" class="form-control--descript" value="Email">
                <input type="email" name="user-${i}-email" id="user-${i}-email" class="form-control" placeholder="email@domain.com" required>
            </div>
            <!-- birthday -->
            <div id="form-question--birthday-${i}" class="form-question--birthday w-50 form-control--container">
                <button type="button" id="btn--remove-birthday-${i}" class="btn--remove-birthday btn--remove-asw-field fas fa-trash-alt">
                </button>
                <input type="text" name="input-descript" id="input-descript" class="form-control--descript" value="Birthday">
                <input type="date" name="user-${i}-birthday" id="user-${i}-birthday" class="form-control" required>
            </div>
            <!-- phone -->
            <div id="form-question--phone-${i}" class="form-question--phone w-50 form-control--container">
                <button type="button" id="btn--remove-phone-${i}" class="btn--remove-phone btn--remove-asw-field fas fa-trash-alt">
                </button>
                <input type="text" name="input-descript" id="input-descript" class="form-control--descript" value="Phone number">
                <input type="tel" name="user-${i}-phone" id="user-${i}-phone" class="form-control" pattern="[0-9]{10}" placeholder="0123456789" required>
            </div>
            <!-- address -->
            <div id="form-question--address-${i}" class="form-question--address w-100 form-control--container">
                <button type="button" id="btn--remove-address-${i}" class="btn--remove-address btn--remove-asw-field fas fa-trash-alt">
                </button>
                <input type="text" name="input-descript" id="input-descript" class="form-control--descript" value="Address">
                <input type="text" name="user-${i}-address" id="user-${i}-address" class="form-control" placeholder="Street - City - Country" required>
            </div>
            <!-- CCCD -->
            <div id="form-question--CCCD-${i}" class="form-question--CCCD w-50 form-control--container">
                <button type="button" id="btn--remove-CCCD-${i}" class="btn--remove-CCCD btn--remove-asw-field fas fa-trash-alt">
                </button>
                <input type="text" name="input-descript" id="input-descript" class="form-control--descript" value="Cityzen Indentify number">
                <input type="number" name="user-${i}-CCCD" id="user-${i}-CCCD" class="form-control" required>
            </div>
            <!-- works -->
            <div id="form-question--works-${i}" class="form-question--works w-100 form-control--container">
                <button type="button" id="btn--remove-works-${i}" class="btn--remove-works btn--remove-asw-field fas fa-trash-alt">
                </button>
                <input type="text" name="input-descript" id="input-descript" class="form-control--descript" value="Works">
                <input type="text" name="user-${i}-works" id="user-${i}-works" class="form-control" placeholder="Company Name" required>
            </div>
            <div class="form--endline--inner"></div>
        </div>`;
        i++;
        formQuestionBody.appendChild(PersonInfoGroup);
        reload();
    }

    /*---Reload and add Click event for many btn-remove*/
    const reload = () => {
        [...document.querySelectorAll(".btn--remove-fullName")].forEach((fullName) => {
            fullName.addEventListener("click", deleteFullName);
        });
        [...document.querySelectorAll(".btn--remove-email")].forEach((email) => {
            email.addEventListener("click", deleteEmail);
        });
        [...document.querySelectorAll(".btn--remove-birthday")].forEach((birthday) => {
            birthday.addEventListener("click", deleteBirthday);
        });
        [...document.querySelectorAll(".btn--remove-phone")].forEach((phone) => {
            phone.addEventListener("click", deletePhone);
        });
        [...document.querySelectorAll(".btn--remove-address")].forEach((address) => {
            address.addEventListener("click", deleteAddress);
        });
        [...document.querySelectorAll(".btn--remove-CCCD")].forEach((cccd) => {
            cccd.addEventListener("click", deleteCCCD);
        });
        [...document.querySelectorAll(".btn--remove-works")].forEach((works) => {
            works.addEventListener("click", deleteWorks);
        });
    };
    // reload();
    
    /*---Remove element item----*/
    // Remove fullName
    function deleteFullName(event) {
        const currentContainer = [...document.querySelectorAll(".form-question--fullName")].find(
            (container) =>
                container.id.replace("form-question--fullName-", "") ===
                event.target.id.replace("btn--remove-fullName-", "")
        );
        currentContainer.remove();
        reload();
    }
    // Remove email
    function deleteEmail(event) {
        const currentContainer = [...document.querySelectorAll(".form-question--email")].find(
            (container) =>
                container.id.replace("form-question--email-", "") ===
                event.target.id.replace("btn--remove-email-", "")
        );
        currentContainer.remove();
        reload();
    } 
    // Remove birthday
    function deleteBirthday(event) {
        const currentContainer = [...document.querySelectorAll(".form-question--birthday")].find(
            (container) =>
                container.id.replace("form-question--birthday-", "") ===
                event.target.id.replace("btn--remove-birthday-", "")
        );
        currentContainer.remove();
        reload();
    } 
    // Remove phone
    function deletePhone(event) {
        const currentContainer = [...document.querySelectorAll(".form-question--phone")].find(
            (container) =>
                container.id.replace("form-question--phone-", "") ===
                event.target.id.replace("btn--remove-phone-", "")
        );
        currentContainer.remove();
        reload();
    }
    // Remove address
    function deleteAddress(event) {
        const currentContainer = [...document.querySelectorAll(".form-question--address")].find(
            (container) =>
                container.id.replace("form-question--address-", "") ===
                event.target.id.replace("btn--remove-address-", "")
        );
        currentContainer.remove();
        reload();
    } 
    // Remove CCCD
    function deleteCCCD(event) {
        const currentContainer = [...document.querySelectorAll(".form-question--CCCD")].find(
            (container) =>
                container.id.replace("form-question--CCCD-", "") ===
                event.target.id.replace("btn--remove-CCCD-", "")
        );
        currentContainer.remove();
        reload();
    } 
    // Remove works
    function deleteWorks(event) {
        const currentContainer = [...document.querySelectorAll(".form-question--works")].find(
            (container) =>
                container.id.replace("form-question--works-", "") ===
                event.target.id.replace("btn--remove-works-", "")
        );
        currentContainer.remove();
        reload();
    } 
})();

/*---------------Add and delete Question Title-----------*/ 
(()=>{
    /*---Add---*/ 
    const addQuesTitle = document.querySelector(".add-title");

    addQuesTitle.addEventListener("click", () => {
        createQuesTitle();
    });

    let i=0;
    function createQuesTitle() {
        quesTitle = document.createElement("div");

        quesTitle.classList.add("form-question--titleBox-group");
        quesTitle.setAttribute("id", "form-question--titleBox-group-"+(i))
        quesTitle.innerHTML=`
        <div class="row">
            <div class="form-question--titleBox w-100 form-control--container">
                <button type="button" class="btn--remove-asw-field btn--remover-quesTitle fas fa-trash-alt" id="btn--remover-quesTitle-${i}">
                </button>
                <input type="text" name="question--title-${i}" id="question--title-${i}" class="question--title" placeholder="Question Title">
                 <div class="section--endline--inner"></div>
            </div>
        </div>`;
        i++;
        formQuestionBody.appendChild(quesTitle);
        reload();
    }

    /*---Reload---*/
    const reload = () => {
        [...document.querySelectorAll(".btn--remover-quesTitle")].forEach((btn) => {
            btn.addEventListener("click", deleteQuesTitle);
        });
    };
    // reload();

    /*---Remove---*/ 
    function deleteQuesTitle(event) {
        const currentContainer = [...document.querySelectorAll(".form-question--titleBox-group")].find(
            (container) =>
                container.id.replace("form-question--titleBox-group-", "") ===
                event.target.id.replace("btn--remover-quesTitle-", "")
        );
        currentContainer.remove();
        reload();
    }
})();

/*---------------Add and delete Question Description-----------*/
(()=>{
    /*---Add---*/ 
    const addDescriptTitle = document.querySelector(".add-description");

    addDescriptTitle.addEventListener("click", () => {
        createDescriptTitle();
    });

    let i=0;
    function createDescriptTitle() {
        DescriptTitle = document.createElement("div");

        DescriptTitle.classList.add("form-question--descriptBox-group");
        DescriptTitle.setAttribute("id", "form-question--descriptBox-group-"+(i))
        DescriptTitle.innerHTML=`
        <div class="row">
            <div class="form-question--descriptBox w-100 form-control--container">
                <button type="button" id="btn--remove-quesDescript-${i}" class="btn--remove-asw-field btn--remove-quesDescript fas fa-trash-alt">
                </button>
                <input type="text" name="question-descript-${i}" id="question-descript-${i}" class="form-control--descript" placeholder="Question description">
                <div class="section--endline--inner"></div>
            </div>
        </div>`;
        i++;
        formQuestionBody.appendChild(DescriptTitle);
        reload();
    }

    /*---Reload---*/
    const reload = () => {
        [...document.querySelectorAll(".btn--remove-quesDescript")].forEach((btn) => {
            btn.addEventListener("click", deleteDescriptTitle);
        });
    };
    // reload();

    /*---Remove---*/ 
    function deleteDescriptTitle(event) {
        const currentContainer = [...document.querySelectorAll(".form-question--descriptBox-group")].find(
            (container) =>
                container.id.replace("form-question--descriptBox-group-", "") ===
                event.target.id.replace("btn--remove-quesDescript-", "")
        );
        currentContainer.remove();
        reload();
    }
})();

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

/*---------------Add and delete radio group-----------*/
(()=>{
    /*---Add group---*/
    const addRadioGroup = document.querySelector(".add-radio");

    addRadioGroup.addEventListener("click", () => {
        createRadioBox();
    })

    let i=0;
    function createRadioBox() {
        radioBox = document.createElement("div");

        radioBox.classList.add("form-question--radio-group");
        radioBox.setAttribute("id", "form-question--radio-group-"+(i))
        radioBox.innerHTML=`
        <div class="row">
            <div id="form-question--radioBox-${i}" class="form-question--radioBox w-100 form-control--container">
                <button type="button" id="btn--remove-radioBox-${i}" class="btn--remove-radioBox btn--remove-asw-field fas fa-trash-alt">
                </button>
                <button type="button" id="btn--add-radioItem-${i}" class="btn--add-radioItem btn--add-radio-field far fa-plus-square">
                </button>
                <!--radio item-->
                <div class="form-check--container row">
                    <input type="radio" name="group-radio-${i}" class="form-check--input">                                       
                    <input type="text" name="input-descript" id="input-descript" class="form-check--descript" placeholder="Radio box description">
                </div>
            </div>
        </div>`;
        i++;
        formQuestionBody.appendChild(radioBox);
        reload();
    }

    /*---Reload---*/
    const reload = () => {
        [...document.querySelectorAll(".btn--remove-radioBox")].forEach((btn) => {
            btn.addEventListener("click", deleteRadioBox);
        });
        [...document.querySelectorAll(".btn--add-radioItem")].forEach((btn) => {
            btn.addEventListener("click", addRadioItem);
        });
    };
    // reload();
    
    /*---Remove---*/
    function deleteRadioBox(event) {
        const currentContainer = [...document.querySelectorAll(".form-question--radio-group")].find(
            (container) =>
                container.id.replace("form-question--radio-group-", "") ===
                event.target.id.replace("btn--remove-radioBox-", "")
        );
        currentContainer.remove();
        reload();
    } 

    /*---Add radio item---*/
    function addRadioItem(event) {
        // X = id number of button-add-radioItem clicked
        let x = event.target.id.replace("btn--add-radioItem-", "");

        const formQuesRadioBox = document.getElementById("form-question--radioBox-"+(x));

        radioBoxItem = document.createElement("div");

        radioBoxItem.classList.add("form-check--container", "row");
        radioBoxItem.innerHTML = `
        <input type="radio" name="group-radio-${x}" class="form-check--input">                                       
        <input type="text" name="input-descript" id="input-descript" class="form-check--descript" placeholder="Radio box description">`;

        formQuesRadioBox.appendChild(radioBoxItem);
    } 
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