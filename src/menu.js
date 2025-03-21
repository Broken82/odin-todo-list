
export function menuPage(){
    const content = document.querySelector('#content')

    const headline = document.createElement('h4')
    headline.innerText = `Szefa's Rollo`;

    const number = document.createElement('h2')
number.innerText = '2137-1337'

    const underline = document.createElement('div')
    underline.classList.add('underline')

    const hours = document.createElement('h4')
    hours.innerText = 'Menu'

    const monday = document.createElement('h3')
    monday.innerText = 'Rollo: $5'
    const tuesday = document.createElement('h3')
    tuesday.innerText = 'Rollo with fries: $7'
    const wednesday = document.createElement('h3')
    wednesday.innerText = 'Mega Rollo: $10'
    const thursday = document.createElement('h3')
    thursday.innerText = `Szefa's Rollo: $13`
    const firday = document.createElement('h3')
    firday.innerText = 'Fries: $3'



    content.append(headline);
    content.append(number);

    content.append(hours);
    content.append(monday);
    content.append(tuesday);
    content.append(wednesday);
    content.append(thursday);
    content.append(firday);


}