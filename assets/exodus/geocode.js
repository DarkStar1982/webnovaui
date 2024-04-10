// https://developers.arcgis.com/esri-leaflet/samples/geocoding-control/
// get the API key from https://developers.arcgis.com/rest/geocode/api-reference/overview-world-geocoding-service.htm

//  FEEL FREE TO MOVE THESE ELSEWHERE
const argcis_key = 'AAPK3c88a509d5764417a9c4baccc7e88c74YnCvsQefvwcT49NWlLABmGfKjgQrdmgMrRqjIK4i8ITBxPSM8J0NBvwZFs6NINok';
const arcgis_url = 'https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=pjson&token='+argcis_key+'&singleLine=';

var geosearchLat = 0;
var geosearchLng = 0;

/**
 * Not used yet
 */
function arcgisGeocodeSearch(location)
{
    let url = arcgis_url+encodeURI(location);
    $.getJSON(url, function(data){
        console.log(data);
      });
}