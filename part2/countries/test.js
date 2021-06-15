json = {"request":{"type":"City","query":"Hong Kong, Hong Kong","language":"en","unit":"m"},"location":{"name":"Hong Kong","country":"Hong Kong","region":"","lat":"22.283","lon":"114.150","timezone_id":"Asia\/Hong_Kong","localtime":"2021-06-07 00:19","localtime_epoch":1623025140,"utc_offset":"8.0"},"current":{"observation_time":"04:19 PM","temperature":28,"weather_code":353,"weather_icons":["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0025_light_rain_showers_night.png"],"weather_descriptions":["Light rain shower"],"wind_speed":12,"wind_degree":159,"wind_dir":"SSE","pressure":1006,"precip":1.2,"humidity":78,"cloudcover":73,"feelslike":32,"uv_index":1,"visibility":9,"is_day":"no"}}


const {current: {temperature, wind_speed, wind_dir, weather_icons}} = json

console.log(temperature)
console.log(weather_icons[0])