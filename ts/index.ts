import { User } from "./User";

const user = new User('山田', '太郎', 44)

const contentsElem = document.getElementById('contents');
if (!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}