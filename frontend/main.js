

window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://tamindevfunctions.azurewebsites.net/api/ResumeFunction?code=ESzKHIh4oMYbNklgLmRBsqLDFVf/QNH0krqJdXmlu4kVLKHLVd9pdA=='
const functionApi = 'http://localhost:7071/api/GetResumeCounter';


const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });

    return count;
};