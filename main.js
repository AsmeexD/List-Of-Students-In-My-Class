var students_array=[];
var prefix_student_array=[];
var remove_commas=[];

function submit(){
    for(var i = 1;i<= 4; i++){
        var name=document.getElementById("name_of_the_student_"+i).value;
        students_array.push(name);

    }
    for (var l= 0; l < students_array.length;l++){
        prefix_student_array.push("<h4>NAME - "+students_array[l]+"</h4>");
    
    }
    document.getElementById("display_name_with_commas").innerHTML=prefix_student_array;
    remove_commas=prefix_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    prefix_student_array.sort();
    remove_commas=prefix_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}