document.getElementById('messageForm').addEventListener("submit", function(e){    
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const response = document.getElementById('response');
    
    const msgSection = document.getElementById('msg-section');
    const msgList = document.getElementById('msg-list');

    if(!name || !email || !message){
        response.textContent = "All fields are required!";
        response.style.color = "red";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)){
        response.textContent = "Email is not valid! Enter a valid Email.";
        response.style.color = "red";
        return;
    }

    let storedData = localStorage.getItem("data");
    let dataArray = storedData ? JSON.parse(storedData) : [];

    let newData = {
            name: name,
            email: email,
            message: message,
        };
    dataArray.push(newData);
    


    localStorage.setItem("data", JSON.stringify(dataArray));

    response.innerHTML = `Message sent successfully. Name: <b>${name}</b>  Email: <b>${email}</b>  Message: <b>${message}</b>`;
    response.style.color = "green";
    response.style.fontSize = '1rem';      
    

});



function showData(){
    const msgSection = document.getElementById('msg-section');
    const msgList = document.getElementById('msg-list');

    let storedMsg = localStorage.getItem('data');

    if (storedMsg){
        let storedMsgData = JSON.parse(storedMsg);
        console.log(storedMsgData);        
    }else{
        msgSection.style.display = 'none';
    }   

    
};+

showData();