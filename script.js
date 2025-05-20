const form = document.getElementById('messageForm');
form.addEventListener("submit", function(e){    
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const response = document.getElementById('response');
    
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
    
    form.reset();
    showData();


});



function showData(){
    const msgSection = document.getElementById('msg-section');
    const msgList = document.getElementById('msg-list');
    msgList.innerHTML = ""

    let storedMsg = localStorage.getItem('data');
    let storedMsgData = JSON.parse(storedMsg);
    

    if (storedMsgData && storedMsgData.length > 0){        
        
        storedMsgData.forEach((element, index) => {    
            const Li = document.createElement('li');        
            Li.innerHTML =               
            `
                <h5>${index + 1}</h5>
                <h6><b>Name: </b>${element.name}</h6>
                <h6><b>Email:</b> ${element.email}</h6>
                <p><b>Message:</b> ${element.message}</p>
            `;
            msgList.appendChild(Li);   
            Li.classList = "msg shadow-sm p-2";         
        });          
       msgSection.style.display = "flex";
    }else{
        msgSection.style.display = 'none';
    }       
};

showData();