var init = function(coordinators) {
    var center = new qq.maps.LatLng(39.930, 116.420);
    var map = new qq.maps.Map(document.getElementById('container'),{
        center: center,
        zoom: 13
    });
    var path1=[];
    /*new qq.maps.LatLng(39.910, 116.399),
    new qq.maps.LatLng(39.920, 116.405),
    new qq.maps.LatLng(39.930, 116.420)*/
    for (var i in coordinators){
      path1.push(new qq.maps.LatLng(coordinators[i][0],coordinators[i][1]))
    }
    console.log(coordinators);
    console.log(path1);
    // var path2=[
    //     new qq.maps.LatLng(39.930456,116.387554),
    //     new qq.maps.LatLng(39.929008,116.414162),
    //     new qq.maps.LatLng(39.909786,116.379314),
    //     new qq.maps.LatLng(39.908206,116.416908)
    // ];
    var polyline = new qq.maps.Polyline({
        path: path1,
        strokeColor: '#cc3300',
        strokeWeight: 5,
        editable:false,
        map: map
    });
  //   //setMap
  //   var mapM=document.getElementById("mapM");
  //   qq.maps.event.addDomListener(mapM,"click",function(){
  //       polyline.setVisible(true);
  //       if(polyline.getMap()){
  //           polyline.setMap(null);
  //       }else{
  //           polyline.setMap(map);
  //       }
  //   });
  //   //setCursor
  //   var curF=true;
  //   var cursor=document.getElementById("cursor");
  //   qq.maps.event.addDomListener(cursor,"click",function(){
  //       polyline.setMap(map);
  //       polyline.setVisible(true);
  //       if(curF){
  //           curF=false;
  //           polyline.setCursor("default");
  //       }else{
  //           curF=true;
  //           polyline.setCursor("pointer");
  //       }
  //   });
  //  //setPath
  //   var pathF=true;
  //   var path=document.getElementById("path");
  //   qq.maps.event.addDomListener(path,"click",function(){
  //       polyline.setMap(map);
  //       polyline.setVisible(true);
  //       if(pathF){
  //           pathF=false;
  //           polyline.setPath(path2);
  //       }else{
  //           pathF=true;
  //           polyline.setPath(path1);
  //       }
  //   });
  //   //setStrokeColor
  //   var strokeF=true;
  //   var strokeC=document.getElementById("strokeC");
  //   qq.maps.event.addDomListener(strokeC,"click",function(){
  //       polyline.setMap(map);
  //       polyline.setVisible(true);
  //       if(strokeF){
  //           strokeF=false;
  //           polyline.setStrokeColor("#000");
  //       }else{
  //           strokeF=true;
  //           polyline.setStrokeColor("#1c29d8");
  //       }
  //   });
  //   //setStrokeDashStyle
  //   var dashF=true;
  //   var dash=document.getElementById("dash");
  //   qq.maps.event.addDomListener(dash,"click",function(){
  //       polyline.setMap(map);
  //       polyline.setVisible(true);
  //       if(dashF){
  //           dashF=false;
  //           polyline.setStrokeDashStyle("dash");
  //       }else{
  //           dashF=true;
  //           polyline.setStrokeDashStyle("solid");
  //       }
  //   });
  //   //setStrokeWeight
  //   var strokeWeightF=true;
  //   var strokeWeight=document.getElementById("strokeWeight");
  //   qq.maps.event.addDomListener(strokeWeight,"click",function(){
  //       polyline.setMap(map);
  //       polyline.setVisible(true);
  //       if(strokeWeightF){
  //           strokeWeightF=false;
  //           polyline.setStrokeWeight(10);
  //       }else{
  //           strokeWeightF=true;
  //           polyline.setStrokeWeight(5);
  //       }
  //   });
  //   //setVisible
  //   var visibleF=true;
  //   var visibleT=document.getElementById("visibleT");
  //   qq.maps.event.addDomListener(visibleT,"click",function(){
  //       polyline.setMap(map);
  //       if(visibleF){
  //           visibleF=false;
  //           polyline.setVisible(false);
  //       }else{
  //           visibleF=true;
  //           polyline.setVisible(true);
  //       }
  //   });
};
module.exports = init;
