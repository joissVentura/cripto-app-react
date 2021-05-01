export const PostData = (url , data) => {

    fetch(url, {
        method : 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then( () => {
        window.location.href = "https://intranet.unjfsc.edu.pe";
    }).catch( (error) => {

    });

}