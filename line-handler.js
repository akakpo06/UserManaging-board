let board = []
// Montre la modale pour entrer les infos du user
function createNewLine() {
    showModal('table-line-modal-container')
}

            // Déclenchée quand on clique sur sauvegarder
        function go() {
            closeModal('table-line-modal-container');
            let unregisteredUser = userClass.convertClassInstanceToObject(userClass.createUser())
            lineCreator(unregisteredUser.id);
            userClass.addUserToDataList(unregisteredUser,board);
            userClass.addUserToUserList(board[unregisteredUser.id - 1]);
            userClass.addDataListToDataCenter(board)
        }

        // Générateur de ligne
function lineCreator(lineid) {

    document.getElementById("table-body-container").insertAdjacentHTML('afterbegin', `
    <div class="table-line ${lineid}" id="table-line ${lineid}">
        <div class="checkbox-container">
            <input type="checkbox" name="" id="checkbox ${lineid} " />
        </div>
        <div class="id-container" onclick="showModal('table-line-modal-container')">
            <span id="id-container ${lineid}" ></span>
        </div>
        <div class="surname-container"  onclick="showModal('table-line-modal-container')">
            <span id="surname-container ${lineid}"></span>
        </div>
        <div class="name-container"  onclick="showModal('table-line-modal-container')">
            <span id="name-container ${lineid}"></span>
        </div>
        <div class="birthdate-container"  onclick="showModal('table-line-modal-container')">
            <span id="birthDate-container ${lineid}"></span>
        </div>
        <div class="Email-container"  onclick="showModal('table-line-modal-container')">
            <span id="email-container ${lineid}"></span>
        </div>
        <div class="Phone-container"  onclick="showModal('table-line-modal-container')">
            <span id="phone-container ${lineid}"></span>
        </div>
        <div class="gender-container"  onclick="showModal('table-line-modal-container')">
            <span id="gender-container ${lineid}"></span>
        </div>
        <div class="Actions-container">
            <div class="modify-action-container" onclick="modifyInfosModal(${lineid},infosRecoverer())"><i class="fa-solid fa-pencil"></i></div>
            <div class="show-infos-action-container" onclick="showInfosModal(${lineid},infosRecoverer(),${lineid})"><i class="fa-solid fa-eye"></i></div>
            <div class="del-action-container" onclick="lineDeleter(${lineid})"><i class="fa-solid fa-x"></i></div>
            <div class="show-comment-action-container" onmouseenter="showModal('comment-modal-container')" onmouseleave="closeModal('comment-modal-container')">
                <span><i class="fa-solid fa-comment"></i></span>
                <div id="comment-modal-container">
                    <div class="comment-wrapper">
                        <span id="comments-container ${lineid}"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>  `);
}
