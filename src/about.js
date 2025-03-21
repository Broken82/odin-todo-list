
export function aboutPage(){
    const content = document.querySelector('#content')

    const headline = document.createElement('h4')
    headline.innerText = `Szefa's Rollo`;

    const number = document.createElement('h2')
number.innerText = '2137-1337'

    const underline = document.createElement('div')
    underline.classList.add('underline')

    const hours = document.createElement('h4')
    hours.innerText = 'Hours'

    const monday = document.createElement('h3')
    monday.innerText = 'Monday: 9AM-9PM'
    const tuesday = document.createElement('h3')
    tuesday.innerText = 'Tuesday: 9AM-9PM'
    const wednesday = document.createElement('h3')
    wednesday.innerText = 'Wednesday: 9AM-9PM'
    const thursday = document.createElement('h3')
    thursday.innerText = 'Thursday: 9AM-9PM'
    const firday = document.createElement('h3')
    firday.innerText = 'Friday: 9AM-9PM'

    const location = document.createElement('h4')
    location.innerText = 'Location'
    const locationPlace = document.createElement('h3')
    locationPlace.innerText = 'Głogów, Aleja wolności'


    content.append(headline);
    content.append(number);

    content.append(underline);
    content.append(hours);
    content.append(monday);
    content.append(tuesday);
    content.append(wednesday);
    content.append(thursday);
    content.append(firday);
    content.append(underline);
    content.append(location);
    content.append(locationPlace);

}