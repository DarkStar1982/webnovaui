var map;
let hostname = location.hostname;
var api_server = "http://"+hostname;
var fov_polygons = [];
var local_cache = {};

//  use these after the lookup
var selectedLat = 0, selectedLng = 0;

if (hostname = 'localhost') {
  api_server = api_server + ':8000/';
} else {
  api_server = api_server + '/';
}

function load_missions()
{
  var api_missions_url = api_server +"webnova/v1/mission_list/";
  $.get(api_missions_url, function(data){
    var mission_list = JSON.parse(data);
    $('#mission_list_table tbody').empty();
    var tableBody = $('#mission_list_table tbody');
    // Iterate over each object in the data list
    $.each(mission_list, function(index, object) {
      // Create a new row element
      var row = $('<tr>');
      // Add a cell for each property of the object
      $('<td>').html(object.id).appendTo(row);
      $('<td>').html(object.type).appendTo(row);
      $('<td>').html(object.target).appendTo(row);
      $('<td>').html(object.status).appendTo(row);
      $('<td>').html(object.start_date).appendTo(row);
      $('<td>').html(object.date_available).appendTo(row);
      if (object.download_link=='Not available yet')
      {
        $('<td>').html(object.download_link).appendTo(row);
      }
      else {
        $('<td>').html('<button class=btn><a href="'+object.download_link+'">Download</a></button>').appendTo(row);
      }
      // Append the row to the table body
      row.appendTo(tableBody);
    })
  });
}


function set_map()
{
  let coord =  $("#search_bar").val().split(",");
  var lat_val = coord[0] ? coord[0].trim() : 0;
  var lon_val = coord[1] ? coord[1].trim() : 0;
  //  set as global vars
  selectedLat = lat_val;
  selectedLng = lon_val;
  var zoom_l = map.getZoom();
  map.panTo([lat_val, lon_val], zoom_l);
  redraw_fov_polygon();
}

function set_map_location(lat,lng)
{
  var zoom_l = map.getZoom();
  map.panTo([lat, lng], zoom_l);
  redraw_fov_polygon();
}

function km_to_deg_lat(input_km)
{
  return input_km/110.5;
}

function km_to_deg_lon(input_km, latitude)
{
  return input_km/(111.32*Math.cos(latitude*3.14/180));
}

function redraw_fov_polygon()
{
  //get instrument paramaters
  var call_str_instruments = api_server +"webnova/v1/instruments/";
  var call_str_fov = api_server+"webnova/v1/field_of_view"
  var satellite_id = $("#satellites").val();
  var instrument_id = $("#instruments").val();
  if (fov_polygons.length>0) fov_polygons.forEach(function(item){map.removeLayer(item)});
      //load instrument data
  $.get(call_str_instruments, function( data ) {
    var instrument_list = JSON.parse(data);
    for (var i=0;i<instrument_list.length;i++)
    {
      if (instrument_list[i]["norad_id"]==satellite_id) 
      {
        fov_degs = instrument_list[i]["instruments"][0]["fov"];
        call_str_fov = call_str_fov+"?fov="+fov_degs+"&alt=550"
        $.get(call_str_fov, function(data){
          var fov_value = data;
              //get center point
          var centre_point = map.getCenter();

              //convert fov in km to degrees
          var lat_width = km_to_deg_lat(fov_value);
          var lon_width = km_to_deg_lon(fov_value, centre_point.lat);

          var north_lat = centre_point.lat + lat_width/2.0;
          var south_lat = centre_point.lat - lat_width/2.0;
          var west_lon = centre_point.lng - lon_width/2.0;
          var east_lon = centre_point.lng + lon_width/2.0;
          
          var fov_polygon = L.polygon([
            [north_lat, east_lon],
            [south_lat, east_lon],
            [south_lat, west_lon],
            [north_lat, west_lon]
          ]).addTo(map);
          fov_polygons.push(fov_polygon);
              //draw rectangle
        });
      }
    }
  });

}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(1, '0');
  const hours = String(date.getHours()).padStart(1, '0');
  const minutes = String(date.getMinutes()).padStart(1, '0');
  const seconds = String(date.getSeconds()).padStart(1, '0');
  return `${year},${month},${day},${hours},${minutes},${seconds}`;
}


function request_pass_list()
{
  var start_date_value = $("#datepicker_start").datepicker('getDate');
  var end_date_value = $("#datepicker_end").datepicker('getDate');
  var position = map.getCenter();
  var lon = position.lng;
  var lat = position.lat;
      //# change to the correct times, satellite and geographic coordinates
  var net = formatDate(start_date_value);
  var nlt = formatDate(end_date_value);
  var api_str = "webnova/v1/times_on_target/?norad_id=44878&net="+net+"&nlt="+nlt+"&lat="+lat+"&lng="+lon;
  var api_str = api_server + api_str; 
  $.get(api_str, function( data ) {
    var passes = JSON.parse(data)["target_passes"];
    $("#available_pass_list").empty();
    for (var i=0;i<passes.length;i++)
    {
      $("#available_pass_list").append('<tr class="pass_data_row"><td class="pass_start">'+passes[i][0]+'</td><td class="pass_end">'+passes[i][1]+'</td><td><input type="checkbox" class="selected_pass"/></td></tr>');
    }
  });

  $("#target_lat").text(position.lat);
  $("#target_lon").text(position.lng);
}

function get_selected_passes()
{
  var passes = [];
  $('#available_pass_list tr').each(function() {
    if ($(this).find(".selected_pass:checked").val()=='on')
    {
      var pass_start = $(this).find(".pass_start").html(); 
      var pass_finish = $(this).find(".pass_end").html(); 
      passes.push([pass_start, pass_finish]);
    }
  });
  return passes;
}


function launch_mission()
{
      //create a mission object
  var position = map.getCenter();
  
  var mission_data = {
    satellite: $("#satellites").val(),
    instrument: $("#instruments").val(),
    loc_lat: position.lat,
    loc_lon: position.lng,
    start_date: $("#datepicker_start").datepicker('getDate'),
    mission_type: "RGB",
    description:"EO_DEMO",
    passes: get_selected_passes(),
  }
  var user = "demo_user";
  var email = "demo@email.com";


  //return a json file
  mission_file = JSON.stringify(mission_data);
  const a = document.createElement('a');
  const type = name.split(".").pop();
  a.href = URL.createObjectURL( new Blob([mission_file], { type:"application/json" }) );
  var timestamp = Date.now();
  a.download = "mission_config"+timestamp+".json";
  a.click();
  console.log("Clicked!");

  //return mission_data.stringify();
  // Here be api call to server with new mission
  /* var api_str_post = api_server +"webnova/v1/create_mission/";
  $.post(api_str_post, {
    "mission_instance":JSON.stringify(mission_data),
    "user":user,
    "email":email
  }).done( function(data) {
  }); */
}

$(document).ready(function () {
  $("#dialog_text").hide();
  map = L.map('map').setView([46.19, 30.35], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  
  redraw_fov_polygon();
  
  $("#datepicker_start").datepicker();
  $("#datepicker_start").datepicker('setDate', 'today');

  $("#datepicker_end").datepicker();
  
  $("#search_bar").autocomplete({
    source: function(request, response) {
      // https://developers.arcgis.com/esri-leaflet/samples/geocoding-control/
      $.ajax( {
        url: arcgis_url+request.term,
        dataType: "json",
        success: function(data) {
          let dataResp = [];
          $.each(data.candidates, function(item, val) {
            dataResp.push({label:val.address, value: val.location});
          });
          response(dataResp.slice(0, 10));
        }
      } );
    },
    minLength: 2,
    select: function(event, ui) {
      event.preventDefault();
      set_map_location(ui.item.value.y, ui.item.value.x);
      $("#search_bar").val(ui.item.label);
    }
  });
});
