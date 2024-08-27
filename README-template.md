# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
Create a newsletter form in which the user can suscribe for the monthly newsletter and get a thankyou message after suscribing. If the user is enter the invalid email format than it will get error message.
### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

[newsletter-sign-up-with-success-message-main\Screenshots] 

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

In Js section I learn To use the local storage to save user email by setitem and then how to get that value using getitem in local storage. Also learn how to hyper link the anthor webpage using window.location.href .

In the Html code I learn How to write the media query for the 2 svg images with picture element. 

 see below:
```js
 if (validateEmail()) {
        const email = document.querySelector("#email").value
        localStorage.setItem("userEmail", email);
        window.location.href = 'thankyou.html'; // Redirect if email is valid
    }
const userEmail = localStorage.getItem("userEmail");
if(userEmail){
    document.querySelector("#para").innerHTML = `A confirmation email has been sent to <b>${userEmail}</b> Please open it and click the button inside to confirm your subscription.`
}
const dismiss = document.querySelector(".btn");
dismiss.addEventListener("click", ()=>
    window.location.href = "index.html";)
```
```html
<picture>
    <source media="(min-width: 1440px)" srcset="assets\images\illustration-sign-up-desktop.svg">
    <img id="img1" src="assets\images\illustration-sign-up-mobile.svg">
</picture>
```

### Continued development

In the future projects I will try to implement React.js, Next.js and sass to improve my coding skills.

### Useful resources

- [mdn](https://developer.mozilla.org/en-US/) - I Use this article for understanding the nature and behaviour of the different element. I really like this article. Helps me to clear my doubts very easily and conceptually
- [colors](https://coolors.co/) - In this article I learn about the gradient color and select for the project.

## Author

- Git Hub - [@Mokshda Dubey](https://github.com/moksh-9a)