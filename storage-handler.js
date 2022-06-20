function recoveredInfosHandler(usersBoard) {
    if (usersBoard != null) {
        for (user of usersBoard) {
            lineCreator(user.id);
            userClass.addUserToUserList(user);
        }
    }
    else {
        alert("Aucun utilisateur enregistré")
    }
}
function infosRecoverer() {
    let infos = userClass.getDataListFromDataCenter()
    return infos
}
board = recoveredInfosHandler(infosRecoverer());

function modifyInfosModal(lineid,storage) {
    
    let line = storage[lineid-1]
    document.getElementById("table-line-id").textContent = `${line.id} `;
    document.getElementById("surname").value = `${line.surname} `;
    document.getElementById("name").value = `${line.name} `;
    document.getElementById("birthDate").value = `${line.birthDate} `;
    document.getElementById("email").value = `${line.email} `;
    document.getElementById("phone").value = `${line.phone} `;
    document.getElementById("gender").value = `${line.gender} `;
    document.getElementById("comments").value = `${line.comments} `;
    document.getElementById("table-line-modal-container").style.display = 'flex'
    
}
function showInfosModal(lineid,storage) {
    let line = storage[lineid-1]
    document.getElementById("table-line-id").textContent = `${line.id} `;
    document.getElementById("surname").value = `${line.surname} `;
    document.getElementById("name").value = `${line.name} `;
    document.getElementById("birthDate").value = `${line.birthDate} `;
    document.getElementById("email").value = `${line.email} `;
    document.getElementById("phone").value = `${line.phone} `;
    document.getElementById("gender").value = `${line.gender} `;
    document.getElementById("comments").value = `${line.comments} `;
    document.getElementById("table-line-modal-container").style.display = 'flex'

    document.getElementById("buttons").style.display = "none"
}

// Suppresseur de lignes
function lineDeleter(id) {
    document.getElementById("table-body-container").removeChild(document.getElementById(`table-line ${id}`));
}