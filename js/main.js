const giftList = document.querySelector('.gifts');
const accountDetails = document.querySelector('.account-details');


// If user, display the accountdetails in the settings
const settingsUI = (user) => {
    if (user) {
        // account info
        const html = `
        <div>Logged in as ${user.email}</div>
        `;
        accountDetails.innerHTML = html;
    } else {
        //Hide account details
        accountDetails.innerHTML = '';
    }
};

// Jquery scripts for the different on page functions

// Opens the pop up and enables backdrop when adding a gift
$(".bottom-add-gift_btn").click(function () {
    $(".add-gift__popup").toggleClass("pop-up__show--gifts");
    $(".backdrop").toggleClass("pop-up__show")
});

// Opens the pop up and enables backdrop when adding a person
$(".bottom-add-people_btn").click(function () {
    $(".add-people__popup").toggleClass("pop-up__show--people");
    $(".backdrop").toggleClass("pop-up__show")
});

// Enables click on backdrop to close the pop up
$(".backdrop").click(function () {
    $(".add-gift__popup").removeClass("pop-up__show--gifts");
    $(".add-people__popup").removeClass("pop-up__show--people");
    $(".backdrop").toggleClass("pop-up__show")
});

// for sliding the people 
$(".bottom-link__wishlist").click(function () {
    $(".people").addClass("people-out");
});

//for switching to the wishlist section on mobile and tablet view
$(".bottom-link__wishlist").click(function () {
    $(".people").addClass("people-out");
    $(".bottom-link__wishlist").addClass("wishlist-icon-active");
    $(".bottom-link__people").removeClass("people-icon-active");
    // delay for the script to enable the animation to run before content is hidden
    setTimeout(
        function () {
            $(".people").addClass("people-out");
            $(".bottom-add-gift_btn").removeClass("content-hide");
            $(".people-added-container").addClass("content-hide");
            $(".bottom-add-people_btn").addClass("content-hide");
            $(".gifts-added-container").removeClass("content-hide");
            $(".wishlist-heading").removeClass("content-hide");
            $(".people-heading").addClass("content-hide");
            $(".people").removeClass("people-out");
        }, 500
    );
});

//for switching to the people section on mobile and tablet view
$(".bottom-link__people").click(function () {
    $(".gifts").addClass("gifts-out");
    $(".bottom-link__people").addClass("people-icon-active");
    $(".bottom-link__wishlist").removeClass("wishlist-icon-active");
    // delay for the script to enable the animation to run before content is hidden
    setTimeout(
        function () {
            $(".bottom-add-people_btn").removeClass("content-hide");
            $(".bottom-add-gift_btn").addClass("content-hide");
            $(".people-added-container").removeClass("content-hide");
            $(".gifts-added-container").addClass("content-hide");
            $(".people-heading").removeClass("content-hide");
            $(".wishlist-heading").addClass("content-hide");
            $(".gifts").removeClass("gifts-out");
        }, 500
    );
});

//for switching to wishlist section on desktop view
$(".side-link__wishes").click(function () {
    $(".side-link__wishes").addClass("side-link__wishes--active");
    $(".side-link__people").removeClass("side-link__people--active");
    $(".side-link__settings").removeClass("side-link__settings--active");
    $(".bottom-add-people_btn").addClass("content-hide");
    $(".bottom-add-gift_btn").removeClass("content-hide");
    $(".people-added-container").addClass("content-hide");
    $(".gifts-added-container").removeClass("content-hide");
    $(".wishlist-heading").removeClass("content-hide");
    $(".people-heading").addClass("content-hide");
    $(".settings-heading").addClass("content-hide");
    $(".settings-container").removeClass("settings-container-open");
});

//for switching to people section on desktop view
$(".side-link__people").click(function () {
    $(".side-link__people").addClass("side-link__people--active");
    $(".side-link__wishes").removeClass("side-link__wishes--active");
    $(".side-link__settings").removeClass("side-link__settings--active");
    $(".bottom-add-people_btn").removeClass("content-hide");
    $(".bottom-add-gift_btn").addClass("content-hide");
    $(".gifts-added-container").addClass("content-hide");
    $(".people-added-container").removeClass("content-hide");
    $(".wishlist-heading").addClass("content-hide");
    $(".people-heading").removeClass("content-hide");
    $(".settings-heading").addClass("content-hide");
    $(".settings-container").removeClass("settings-container-open");
});

//for switching to settings section on desktop view
$(".side-link__settings").click(function () {
    $(".side-link__people").removeClass("side-link__people--active");
    $(".side-link__wishes").removeClass("side-link__wishes--active");
    $(".side-link__settings").addClass("side-link__settings--active");
    $(".bottom-add-people_btn").addClass("content-hide");
    $(".bottom-add-gift_btn").addClass("content-hide");
    $(".gifts-added-container").addClass("content-hide");
    $(".people-added-container").addClass("content-hide");
    $(".wishlist-heading").addClass("content-hide");
    $(".people-heading").addClass("content-hide");
    $(".settings-heading").removeClass("content-hide");
    $(".settings-container").addClass("settings-container-open");
});

//opening settings on mobile and tablet view
$(".settings-open").click(function () {
    $(".settings-container").addClass("settings-container-open");
});

// closing settings on mobile and tablet view
$(".settings-close").click(function () {
    $(".settings-container").removeClass("settings-container-open");
});

// register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js')
    // .then(reg => console.log('service worker registered'))
    // .catch(err => console.log('service worker not registered', err));
}