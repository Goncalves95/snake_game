# Feed the Snake!

After learning JavaScript I decided to create a game. That's when the idea came to me to create the most addictive game of my youth. I remember very well playing this game on the Nokia. So I decided to create a version of the Snake Game.

The game is meant to be enjoyed and to bring back good memories for users.

![Responsice Mockup](assets/media/responsive_snakegame.png)

[See deployed website](https://goncalves95.github.io/snake_game/)

## Table of content

- [Feed the Snake!](#feed-the-snake)
  - [Table of content](#table-of-content)
  - [Design and User Experience](#design-and-user-experience)
    - [Design](#design)
  - [Features](#features)
    - [Footer](#footer)
    - [Home Page](#home-page)
    - [Gallery Page](#gallery-page)
    - [Contact Page](#contact-page)
    - [Booked Page](#booked-page)
  - [Testing](#testing)
    - [Tests](#tests)
    - [Validator Testing](#validator-testing)
    - [Fixed Bugs](#fixed-bugs)
    - [Unfixed Bugs](#unfixed-bugs)
    - [Performance](#performance)
  - [Deployment](#deployment)
    - [Live Website](#live-website)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
  - [Technologies used](#technologies-used)

## Design and User Experience

### Design

The design of the website is minimalist, and the same time fun, for the user can experience a game page simple and concentrated on the game.

Fonts:

- Roboto - This font is visible throughout the structure of the site

Colours:

![colors](assets/media/rgb_colors.jpg)

- Primary color.   Secondary color.    Gold secondary color:

## Features

There are two pages: Home page and Game page.

- On the Home page, we can find a large start button, referring to the world of games and interacting with the user to press start. There is also an animated backgroud. On this page we can also find a short message for users to have a better experience with the game and a footer with the author's name and the link to the GitHub page.
- oOn the Game page, we can find a Header, the game div and a footer with the social media icons and copyrights.

### Footer

- __Footer__

  - The footer contains:
    - copyrights
    - social media links

  - When clicking on the social links, this gone open in a new tab.

![Footer](assets/media)

### Home Page

- __Hero-Image__

  - This is the landing page for our users, so it has an eye-catching hero image to grab their attention.
  - The Hero Image contains the principal message from the page. In the Home page its the message "Privet Chef's in your Home or Event"
  in the gallery page is "Privet Chef's Gallery History"
  and in the contact page "Privet Chef's Contact us!" this tops for help the user recognise where he are.

![Hero image](assets/media/header-about-content.png)

- __About__

The homebage containg the information about the company. In particular it contains two distinc sections:

- The Algarve, one smal paragraph for descrive the Algarve, where is the work region of the company.

- The about, where the user can finde and read what the company do and what can expect from them.

- __Our Services__

  - In this section I have placed one cards section describing each service provided by the company.  
  - There is one section for each service.
  - It contains one image, a title and a brief description of each service.

 ![Cards's](assets/media/our-services-cards.png)

### Gallery Page

- __Images__

  - On this page you will find simplified information about the services we have already provided. Some images of events and private services provided by the company.

 ![Gallery Page](assets/media/gallery.png)

### Contact Page

- This Page contains a form to contact the company and ask one quote.
- The following fiels are required: Name, Email, Service equired,  Number of people, start and end date of the event.
- There is an additional field to add other information or some doubt. not required field.
- The select element for "Number of People" allows choosing the number of people for the events and, depending on the choice, the company's decision to hire more staff depending on the number of people attending the event, thus giving the client a better price for the service.
- in this extra field exist on I icon with extra informtion for the user know what can fill up in this field.

- __Booked Page__

  - After filling out all the mandatory field, users are redirected to a new page.
  
![Contact Page](assets/media/contact-form.png)

### Booked Page

- Have the Logo company in the Header.
- Have a small video about Algarve so that users can get to know the region they're visiting better and discover more places to visit on their holidays or when they're in the Algarve.
- Thank's message for the contact.
- Company contact in case they have more questions or they need to cancel or modify the sercvie.
- In the information existe the email, here the user can click on the link and open an email page with the company email address already filled in.  
- In the contact information field there is also an address, which when selected opens the map in a new tab for directions to the location.
- A call to action to bring the user back to the homepage, with direct link, so that users are not redirected automatically. The user can clic on the message "back to Home " or in the LOGO.

## Testing

To test my website I have opened it on different devices, to see if it was working as expected.

- Browser tested:
  - Chrome
  - Firefox
  - Safari

- Operating systems:
  - Android
  - iOS

### Tests

  <details>
  <summary>General</summary>

  |Action | Expected behavious | Result|
  |-------|--------------------|-------|
  |Copy url of the browser and paste it in browser. Press enter | Browser should load index.html | Pass |
  |Scale up the window | The contentent should not stretch over a certain size | Pass |
  |Scale down the window | The contentent should be visible without having to scroll horizontally | Pass |
  |Scale down under 840px width | The layout should switch from 2 to 1 column | Pass |

  </details>

  <details>
  <summary>Navigation</summary>

  |Action | Expected behavious | Result|
  |-------|--------------------|-------|
  |Scale down under 769px width | The top navigation bar should collapse into hamburger navbar | Pass |

  </details>

  <details>
  <summary>Footer</summary>

  |Action | Expected behavious | Result|
  |-------|--------------------|-------|
  |Click on the LinkedIn icon in the footer | It should open LinkedIn in a new tab | Pass |
  |Click on the Instagram icon in the footer | It should open Instagram in a new tab | Pass |
  |Click on the Facebook icon in the footer | It should open Facebook in a new tab | Pass |

  </details>

  <details>
  <summary>Form</summary>

  |Action | Expected behavious | Result|
  |-------|--------------------|-------|
  |Submit the form without any value | Browser should inform me that "Name" is a required field | Pass |
  |Submit the form without email address | Browser should inform me that "Email" is a required field | Pass |
  |Submit the form with invalid email address | Browser should inform me that "Email" field must be of email format | Pass |
  |Submit the form without choosing a date | Browser should inform me that is a required field | Pass |
  |Submit the form with all the required information | Form should be submitted and open a booked page page | Pass |

  </details>

  <details>
  <summary>Booked </summary>

  |Action | Expected behavious | Result|
  |-------|--------------------|-------|
  |Click on the email address from the booked page | It should open the email client to send an email | Pass |
  |Click on the "Bring me home" link in the booked page | User should be redirected to index.html | Pass |  
  |Click on the adress in the booked page | It shoud open a new tab with the company adress in google maps | Pass |  

  </details>  

### Validator Testing

- HTML
  - No errors were returned when passing the final version through the official [W3C validator](https://validator.w3.org/nu/#textarea)
- CSS
  - No errors were found when passing the final version through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)

### Fixed Bugs

### Unfixed Bugs

### Performance

I have tested the performance in chrome, using lighthouse:

<details>
  <summary> Desktop </summary>
  
- Home page:

   ![Desktop - home page](assets/media/home-page-desk.png)

- Gallery page:

   ![Desktop - home page](assets/media/gallery-page-desk.png)

- Contact page:

   ![Desktop - home page](assets/media/contact-page-desl.png)

- Booked page:

   ![Desktop - home page](assets/media/booked-page-desk.png)

</details>

<details>
  <summary> Mobile </summary>
  
- Home page:

   ![Desktop - home page](assets/media/home-page-mob.jpg)

- Gallery page:

   ![Desktop - home page](assets/media/gallery-page-mob.jpg)

- Contact page:

   ![Desktop - home page](assets/media/contact-page-mob.jpg)

- Booked page:

   ![Desktop - home page](assets/media/booked-page-mob.jpg)

</details>

## Deployment

### Live Website

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the Code and automation section drop-down menu, select the Pages.
  - In the build and deployment area, choose from source "deply from a branch" and after in Branch choosse the main branch and root and save.
  - Once this is save, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment (he take me more less 5 minutsfor appear the link).

The live link can be found here - [Live Website](https://goncalves95.github.io/snake_game/)

## Credits

### Content

- Ideas and some code  take and lerned for the snake game: [MundoJS](https://www.mundojs.com.br/2020/06/05/criando-jogo-snake-em-javascript-e-canvas/) [Rodrigo Gomes](https://codepen.io/digoart/pen/VgoVmj) [Programador BR](https://www.youtube.com/watch?v=Hua1OSXitdQ)
- Typewrite como inspiration from [Rodrigo Gomes](https://codepen.io/rodrigofrumento/pen/GRZXpWa) [Acervo Lima](https://acervolima.com/como-criar-animacao-de-maquina-de-escrever-usando-html-e-css/)
- Lerning the CSS @keyframes Rule on [W3School](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.php)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
- Instructions on how creat a animated backgroud in the form were taken from [Alvaro Trigo](https://alvarotrigo.com/blog/animated-backgrounds-css/)
- 
- The following fonts, used for the project, are from [Google Fonts](https://fonts.google.com/):
  - Roboto

### Media

- Image for FavIcon [gratispng.com](https://www.gratispng.com/png-bk4p3c/)
- Image for the start button [Flaticon](https://www.flaticon.com/br/icone-gratis/botao-de-inicio_5261101)
- Sounds taken from Pixabay.

## Technologies used

- HTML
- CSS
- JS