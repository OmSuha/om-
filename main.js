function draw() {
image(video, 0, 0, 480, 380);
if (status = !=""){
    objectDetector.detect(video, gotResult);
    for (i=0 i<objects.length, i++) {
        document.getElementById("status".innerhtml = "Status = object detected");
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are :"+object.length;

        fill("#FF0000");
        percent= floor(objects.confidence * 100);
        text(objects[i].lable + "" +percent+"%",objects[i].x + 15,objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    }
}
}
function gotResult(error, results){
    if (error) {
        console.log(error)
    }
console.log(results);
object=results
}
object = [];
status = "";
video = "";
