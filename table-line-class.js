
class userClass {
    static counter = 0
    constructor(id, surname, name, birthDate, email, phone, gender, comments) {
        this.id = id
        this.surname = surname
        this.name = name
        this.birthDate = birthDate
        this.email = email
        this.phone = phone
        this.gender = gender
        this.comments = comments
    }

    static createUser() {
        this.counter++;
        let user = new userClass(
         this.counter,
         document.getElementById("surname").value,
         document.getElementById("name").value,
         document.getElementById("birthDate").value,
         document.getElementById("email").value,
         document.getElementById("phone").value,
         document.getElementById("gender").value,
         document.getElementById("comments").value
         );
        return user;
    }
    static convertClassInstanceToObject(user) {
        // this.counter++
        let userObject = {
            id: user.id,
            surname: user.surname,
            name: user.name,
            birthDate: user.birthDate,
            email: user.email,
            phone: user.phone,
            gender: user.gender,
            comments: user.comments
        }
        return userObject
    }

    static addUserToUserList(user) {

        // let user = localStorage.getItem(`Utilisateur ${id}`);

        document.getElementById(`id-container ${user.id}` ).textContent = `${user.id} `;
        document.getElementById(`surname-container ${user.id}` ).textContent = `${user.surname} `;
        document.getElementById(`name-container ${user.id}` ).textContent = `${user.name} `;
        document.getElementById(`birthDate-container ${user.id}` ).textContent = `${user.birthDate} `;
        document.getElementById(`email-container ${user.id}` ).innerHTML = `${user.email} `;
        document.getElementById(`phone-container ${user.id}` ).textContent = `${user.phone} `;
        document.getElementById(`gender-container ${user.id}` ).textContent = `${user.gender} `;
        document.getElementById(`comments-container ${user.id}` ).textContent = `${user.comments} `;
    }
    static addUserToDataList(userObject,storage) {
        storage = storage.push(userObject);
    }
    static addDataListToDataCenter(storage) {
        localStorage.setItem("UsersList", JSON.stringify(storage))
    }
    static getDataListFromDataCenter() {
        return JSON.parse(localStorage.getItem("UsersList"))
    }
}
