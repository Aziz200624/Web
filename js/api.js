const petro = document.getElementById("Petro")
const tucson = document.getElementById("Tucson")
const tokyo = document.getElementById("Tokyo")
const madrid = document.getElementById("Madrid")
const los_angeles = document.getElementById("Los Angeles")

async function Api() {
    const respons_petro = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=69.11548809207305&current=temperature_2m&hourly=temperature_2m")
    const respons_tucson = await fetch("https://api.open-meteo.com/v1/forecast?latitude=32.388700047778265&longitude=-111.09217947996893&current=temperature_2m&hourly=temperature_2m")
    const respons_tokyo = await fetch("https://api.open-meteo.com/v1/forecast?latitude=35.45241385930772&longitude=139.69801824402919&current=temperature_2m&hourly=temperature_2m")
    const respons_madrid = await fetch("https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current=temperature_2m&hourly=temperature_2m")
    const respons_los_angeles = await fetch("https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&current=temperature_2m&hourly=temperature_2m")
    const data_petro = await respons_petro.json()
    const data_tucson = await respons_tucson.json()
    const data_tokyo = await respons_tokyo.json()
    const data_madrid = await respons_madrid.json()
    const data_los_angeles = await respons_los_angeles.json()
    return [data_petro, data_tucson, data_tokyo, data_madrid, data_los_angeles]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        petro.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C`
        tucson.textContent = `Air temperature: ${out[1].current.temperature_2m} \u00B0C`
        tokyo.textContent = `Air temperature: ${out[2].current.temperature_2m} \u00B0C`
        madrid.textContent = `Air temperature: ${out[3].current.temperature_2m} \u00B0C`
        los_angeles.textContent = `Air temperature: ${out[4].current.temperature_2m} \u00B0C`
    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeout(output, 10000)
    }
}