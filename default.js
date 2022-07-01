!(function () {
    const allComm = JSON.parse(localStorage.getItem("comments"));     
     if (allComm === null) return;
     comments = allComm;
     allComm.forEach(element => {
         addDiv(element.text, element._id, element.isActive);
     });
 }())