let presents = db.collection('gifts');
const presentList = document.querySelector('.gifts');
//Authstatechange checks if the user is signed in which allows the functions in the "if" statement
auth.onAuthStateChanged(user => {
    if (user) {
        window.location.href = "#";
        // account info displayed in settings
        const accountDetails = document.querySelector('.account-details');
        db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
        <div>
            <p>Navn:</p>
            <div>
                <p> ${doc.data().username}</p>
                <div class="change-info change-username"</div>
            </div>
        </div>
            <p>Email:</p>
            <div>
                <p> ${user.email}</p>
                <div class="change-info change-email"></div>
            </div>    
        `;
            accountDetails.innerHTML = html;
        });
        //Create new person feature, for grabbing the information from the form and inputting to collection
        const presentForm = document.querySelector('#gift-form');
        presentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            presents.add({
                title: presentForm.title.value,
                customid: user.uid,
                price: presentForm.price.value,
                content: presentForm.content.value
            }).then(() => {
                //Reset form
                presentForm.reset();
                //close the pop up after submit
                $('.pop-up__show--gifts').removeClass('pop-up__show--gifts');
                $('.pop-up__show').removeClass('pop-up__show');
                $('.gifts-added-container').removeClass('content-hide');
            }).catch(err => {
                console.log(err.message)
            });
        });
        // Template for the displayed gifts
        const presentInput = (data) => {
            let html = '';
            data.forEach(doc => {
                const presents = doc.data();
                const li = `
                <li class="gifts-added-container content-hide">
                    <div data-id="${doc.id}" class="delete-person">
                        <div class="delete-person-icon"></div>
                    </div>
                    <h2 class="render-gift-title">${presents.title}</h2>
                    <div class="render-gift-container">
                        <div class="render-gift-price-container-column">
                            <p>Pris</p>
                            <div class="render-gift-price-container">
                                <p>${presents.price}</p>
                                <p class="render-gift-price-currency">kr.</p>
                            </div>
                        </div>
                        <div class="render-gift-element-container">
                            <p>Note</p>
                            <p>${presents.content}</p>
                        </div>
                    </div>
                </li>
            `;
                html += li
            });
            presentList.innerHTML = html;
        }

        // This is where we get the data from the collection to be displayed in the template

        presents.where('customid', '==', user.uid).orderBy('title').onSnapshot(snapshot => {
            presentInput(snapshot.docs);
        });

        // settingsUI(user);
    } else {
        window.location.href = "./index.html";
    }
});

// for deleting the different added gifts
presentList.addEventListener('click', (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('gifts').doc(id).delete().then(() => {
        $('.gifts-added-container').removeClass('content-hide')
    })
})