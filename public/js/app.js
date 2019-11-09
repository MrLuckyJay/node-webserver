console.log('This is coming from the static frontend js file')





const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const meaasgeone = document.querySelector('.message1')
const meaasgetwo = document.querySelector('.message2')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    meaasgeone.textContent= 'loading....'
    meaasgetwo.textContent = ''

    const location = search.value
    fetch('/weather?address='+encodeURIComponent(location)+'').then((response) => {
        response.json().then(({ error, forecastdata, location } = {}) => {
            if (error) {
                meaasgeone.textContent = error
                meaasgetwo.textContent= ''
            } else {
              meaasgeone.textContent  = location
                meaasgetwo.textContent = forecastdata
            }
        })
    })
})