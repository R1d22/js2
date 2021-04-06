/*let elInputFName = document.querySelector('.f-name');
let elInputLName = document.querySelector('.l-name');
let elInputMName = document.querySelector('.m-name');
let elBtnSubm = document.querySelector('.btn-subm');
let elFNameRes = document.querySelector('.f-name__res');
let elLNameRes = document.querySelector('.l-name__res');
let elMNameRes = document.querySelector('.m-name__res');


elBtnSubm.addEventListener('click', (ev) => {
   // let elFNameRes = elInputFName.Value;
    elFNameRes.innerHTML = elInputFName.target.value;
    elLNameRes.innerHTML = elInputLName;
    elMNameRes.innerHTML = elInputMName;
});*/


const form = document.forms.visitCard;
const res = document.querySelector('.res')

form.addEventListener ('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData (ev.target);
    const FName = formData.get('f-name');
    const LName = formData.get('l-name');
    const MName = formData.get('m-name');
    //const submit = formData.get('submit');


    const html = `
        <div>
            <div>Firstname: ${FName}</div>
            <div>Lastmane: ${LName}</div>
            <div>Midlname: ${MName}</div>
        </div>
    `;