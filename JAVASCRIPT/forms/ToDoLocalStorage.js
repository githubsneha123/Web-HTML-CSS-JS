let courseList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
let listFormEle=document.querySelector('#list-form');
let listInputEle=document.querySelector('#task-box');


listFormEle.addEventListener('submit',function(event){
    event.preventDefault();
    let enteredTask=listInputEle.value;

    courseList.push(enteredTask);
    localStorage.setItem('tasks',JSON.stringify(courseList));
    displayCourses(courseList);
    listInputEle.value="";
});

function displayCourses(courses){
    if(courses.length==0){
        document.getElementById('list-ele').innerHTML="Your List is Empty...";
        return;
    }
    let eachCourse="";
    courses.forEach(function(course,index) {
      eachCourse+=`<li class="list-group-item list-group-item-info mb-2">
                            <span class="fw-bolder"> ${course}</span>
                            <button class="float-end btn btn-info text-white" onclick="deleteCourse(${index})"><i class="fa-solid fa-trash"></i></button>
                            <button class="float-end btn btn-info text-white me-2" onclick="updateCourse(${index})"><i class="fa-solid fa-pen"></i></button>
                    </li>`;
    });
    document.getElementById('list-ele').innerHTML=eachCourse;
}
displayCourses(courseList);

function updateCourse(id){
    listInputEle.value=courseList[id];
    deleteCourse(id);

}

function deleteCourse(id){
   courseList.splice(id,1);
   localStorage.setItem('tasks',JSON.stringify(courseList));
   displayCourses(courseList);
}

