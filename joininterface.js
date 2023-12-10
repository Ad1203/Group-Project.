function getusername(){
	const firstuser = document.getElementById("first-user-holder").value;
    const seconduser = document.getElementById("second-user-holder").value;

    localStorage.setItem('fu', firstuser);
    localStorage.setItem('su', seconduser);
}