const wrapper = document.querySelector('.wrapper'),
selectBtn = wrapper.querySelector('.select-btn'),
searchInp = wrapper.querySelector('#sach-input'),
options = wrapper.querySelector('.options');

let countries = ['Kenya','Uganda','Tanzania','Congo','Ethiopia','Somalia','Sudan','USA','Nigeria',
                 'Ghana','Germany','France','India','China','Uzbekistan','Burundi','Rwanda','Comoros',
                'Libya','Madagascar'];

function addCountry(selectedCountry) {
    options.innerHTML = '';
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? 'selected' : '';
        //adding each country inside li and inserting all li inside options tag
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML('beforeend', li);
    });
}
addCountry();

function updateName(selectedLi){
    searchInp.value = '';
    addCountry(selectedLi.innerText);
    wrapper.classList.remove('active');
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener('keyup', () => {
    let arr = [];
    let searchedVal = searchInp.value;
    arr=countries.filter(data => {
        return (data.toLowerCase().startsWith(searchedVal)) || (data.toUpperCase().startsWith(searchedVal));
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join('');
    options.innerHTML = arr ? arr : `<p style="color: red;">Oops! Country Not Found</p>`;
});

selectBtn.addEventListener('click', () => {
    if(wrapper.classList.contains('active')){
        wrapper.classList.remove('active');
    }else {
        wrapper.classList.add('active');
    }
});