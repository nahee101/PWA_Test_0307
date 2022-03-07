const todoInput = document.querySelector("#todo_form input");
const todoButton = document.querySelector("#todoBtn");

const todoBoard = document.querySelector("#todo_board");

todoButton.addEventListener("click", todoFormButton);

function todoFormButton(){
    //버튼을 눌렀을 때, li element를 생성하고 추가한다
    const todoLi = document.createElement("li");

    //체크 박스 생성
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute('name', 'todoThings');
    //체크박스 이벤트 리스너를 추가한다
    checkbox.addEventListener("click", todoCheck);
    checkbox.addEventListener("click", getCheckedBox); //체크박스 개수 세기

    //todo 내용 작성
    const todoText = document.createTextNode(todoInput.value);

    //X버튼
    const xButton = document.createElement("button");
    xButton.textContent = "X";
    //X버튼의 이벤트 리스너를 추가한다
    xButton.addEventListener("click", todoDelete);

    //todoLi + todoText + xButton
    todoLi.appendChild(checkbox);
    todoLi.appendChild(todoText);
    todoLi.appendChild(xButton);

    //ul에 todoLi 추가
    todoBoard.appendChild(todoLi);

    todoInput.value = "";
};

//체크박스 상태에 따른 글자색
function todoCheck(event){
    const checkbox = event.target;
    if(checkbox.checked){
        //체크박스가 checked 상태가 된다면, todoText의 색상을 lightgray로 변경한다
        checkbox.parentNode.style.color = "lightgray";
    }
    else{
        //체크박스가 checked == false 상태라면, todoText의 색상은 black으로 변경한다
        checkbox.parentNode.style.color = "black";
    }
};

//체크박스 개수
function getCheckedBox(){
    const query = 'input[name = "todoThings"]:checked';
    const selectedChk = document.querySelectorAll(query);

    const selectedChkCnt = selectedChk.length;

    document.getElementById('result').innerText = `오늘 완료한 할 일: ${selectedChkCnt}개`;

};

//체크박스 삭제
function todoDelete(event){
    event.target.parentNode.remove();
};

//주기적으로 getCheckedBox를 실행해서 체크박스를 삭제했을 때 개수 업데이트 진행함...
setInterval(getCheckedBox, 1000);

