// Custom Map
    function initMap() {
        var uluru = {lat: 41.390205, lng: 2.154007};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            scrollwheel: false,
            center: uluru,
            styles: [
                {"featureType":"all","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"color":"#222222"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#222222"},{"visibility":"off"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#222222"},{"lightness":"10"},{"gamma":"01"},{"weight":"1"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":"10"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"},{"weight":"0.75"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#222222"},{"lightness":"10"},{"visibility":"on"}]}
            ]
        });
    }