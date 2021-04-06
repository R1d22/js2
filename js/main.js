const form = document.forms.visitCard;
const res = document.querySelector('.res')

form.addEventListener ('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData (ev.target);
    const fName = formData.get('f-name');
    const lName = formData.get('l-name');
    const mName = formData.get('m-name');


    const html = `
        <div>
            <div>Firstname: ${fName}</div>
            <div>Lastmane: ${lName}</div>
            <div>Midlname: ${mName}</div>
        </div>
    `;
    

    res.insertAdjacentHTML('afterBegin', html);

});
