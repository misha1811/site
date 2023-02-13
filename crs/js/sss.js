async function getResponse(){
let response = await fetch('http://77.120.190.159:8080/api')
let content = await response.json()
let list = document.querySelector('.customers__cards')
let key;
for(key in content){
    list.innerHTML +=`
<div class="customers__card">
    <div class="customer__info">
        <div class="customer__photo">
            <img
                src="${content[key].avatar}"
                alt="customer__photo"
                class="customer__photo-link"
            />
        </div>
        <div class="customer__text">
            <span>  ${content[key].name}</span>
            <span>${content[key].location}</span>
        </div>
        <div class="customer__rating">
            <div class="customer__star">
                <img
                    src="/img/svg/Group 1164.svg"
                    alt="star"
                    class="customer__star"
                />
            </div>
        </div>
    </div>
    <p>${content[key].message}</p>
</div>
    `
};
console.log(list)
}
getResponse()
