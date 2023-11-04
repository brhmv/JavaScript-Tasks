const token = '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';

function Search(){
    let login=document.getElementById("loginInput").value;
    console.log(login);

    if(login){               
        fetch(`https://api.github.com/users/${login}`, {
        method: 'GET',
        headers: {
            Authorization: `token ${token}`,
        },
        })
        .then((response) => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const {name,url,email,blog,location: city,followers,following,avatar_url: profilePhotoUrl,} = data;

            console.log('Name:', name);
            console.log('URL:', url);
            console.log('Email:', email);
            console.log('Blog:', blog);
            console.log('City:', city);
            console.log('Followers:', followers);
            console.log('Following:', following);
            console.log('Photo:', profilePhotoUrl);

            nameData.innerText = name;
            urlData.innerText = url;
            emailData.innerText = email;
            blogData.innerText=blog;
            cityData.innerText=city;
            loginData.innerText = login;
            followersData.innerText=followers;
            followingData.innerText=following;
            pImage.src = profilePhotoUrl;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    else{
        alert("Please enter a valid login");
    }
}