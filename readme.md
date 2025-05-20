# Responsive Contact Form Webpage


This is a simple frontend web application that allows users to submit their contact information and message through a form. Submitted messages are validated, saved locally in the browser using `localStorage`, and displayed dynamically on the page.

## Features

- Responsive navigation bar and layout
- Background cover section with a heading
- Cards section for informational display
- Contact form with:
  - Name, Email, and Message fields
  - Input validation (required fields, valid email)
  - Success and error message display
- Messages are saved to browser `localStorage`
- Dynamically displays all submitted messages

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 
- JavaScript Local Storage 

## Folder Structure

root/
├── index.html
├── style.css
├── script.js
└── images/
    └── bg.jpg
    └── card-one.jpg
    └── card-two.jpg
    └── card-three.jpg
    └── card-four.jpg

## How to Use

1. Open `index.html` in a web browser.
2. Fill out the contact form and click **Submit**.
3. If validation passes, the message is saved and shown below the form.
4. Data persists between sessions using the browser's `localStorage`.

## Notes

- Data is only stored locally on the user's browser.
- No backend or database is involved.
