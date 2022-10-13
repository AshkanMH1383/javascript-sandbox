let linkItems = document.querySelectorAll('.item');
linkItems.forEach((item)=> {
    let getLink = item.href;
    let linkEdited = getLink.slice(getLink.search('/account/'))
        .replace("/account/" , "").replace(".html" , "");
    item.setAttribute('id' , linkEdited);
})
let pathUrl = window.location.pathname;
let path = pathUrl.slice(pathUrl.search('/account/')).replace("/account/" , "")
    .replace(".html" , "");
document.querySelector(`#${path}`).classList.add('active');