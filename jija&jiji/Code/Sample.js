

/*
   This function runs when the user clicks:

   "Continue ❤️"
*/

function showMessage() {

    // Get the selected relationship
    const relation =
        document.getElementById("relation").value;


    // Get message area
    const messageBox =
        document.getElementById("message");


    // Get homepage button
    const homeButton =
        document.getElementById("homeButton");


    // Clear old message
    messageBox.innerHTML = "";


    // Hide "Enter My World" button
    homeButton.classList.remove("show");


    /* =====================================================
       CHECK WHETHER RELATIONSHIP IS SELECTED
       ===================================================== */

    if (relation === "") {

        messageBox.innerHTML = `
            <h2>⚠️ Wait! ❤️</h2>

            <p>
                Please select your relationship with me first.
            </p>

            <p>
                I want to know who you are
                before you enter my little world. 👶⭐
            </p>
        `;

        messageBox.classList.add("show");

        return;
    }


    /* =====================================================
       PERSONALIZED MESSAGE
       ===================================================== */

    let message = "";


    switch (relation) {


        /* -------------------------------------------------
           MOTHER
           ------------------------------------------------- */

        case "mother":

            message = `
                <h2>💕 Hi Mommy!</h2>

                <p>
                    You are my first home,
                    my first love and my forever happiness. ❤️
                </p>

                <p>
                    Thank you for taking care of me,
                    loving me and protecting me. 👶❤️
                </p>

                <h3>
                    I Love You Mommy! 💕
                </h3>
            `;

            break;


        /* -------------------------------------------------
           FATHER
           ------------------------------------------------- */

        case "father":

            message = `
                <h2>💙 Hi Daddy!</h2>

                <p>
                    You are my first superhero. 🦸‍♂️
                </p>

                <p>
                    I may be tiny,
                    but I already know how much
                    you love me. ❤️
                </p>

                <h3>
                    Love You Daddy! 💙
                </h3>
            `;

            break;


        /* -------------------------------------------------
           AMMAMMA
           ------------------------------------------------- */

        case "grandmother":

            message = `
                <h2>👑 Hi Ammamma!</h2>

                <p>
                    I am your little princess. 👑❤️
                </p>

                <p>
                    Your love, hugs and blessings
                    mean so much to me.
                </p>

                <h3>
                    Your Little Princess Loves You! 💕
                </h3>
            `;

            break;


        /* -------------------------------------------------
           NANAMMA
           ------------------------------------------------- */

        case "grandfather":

            message = `
                <h2>⭐ Hi Nanamma!</h2>

                <p>
                    Your little granddaughter has arrived! 👶💕
                </p>

                <p>
                    I may be tiny,
                    but I already have a huge place
                    in your heart. ❤️
                </p>

                <h3>
                    Your Little Superstar! ⭐
                </h3>
            `;

            break;


        /* -------------------------------------------------
           UNCLE
           ------------------------------------------------- */

        case "uncle":

            message = `
                <h2>😎 Hi Uncle!</h2>

                <p>
                    So... you're my Uncle! ❤️
                </p>

                <p>
                    Get ready for lots of fun,
                    smiles, mischief and beautiful
                    memories together. 😎⭐
                </p>

                <h3>
                    Your Little Superstar! 👶⭐
                </h3>
            `;

            break;


        /* -------------------------------------------------
           AUNT
           ------------------------------------------------- */

        case "aunt":

            message = `
                <h2>💕 Hi Auntie!</h2>

                <p>
                    Thank you for being such a
                    special part of my little world. ❤️
                </p>

                <p>
                    Sending you tiny hugs,
                    cute smiles and lots of love! 👶💕
                </p>

                <h3>
                    Lots of Love From Me! ☀️
                </h3>
            `;

            break;


        /* -------------------------------------------------
           DEFAULT
           ------------------------------------------------- */

        default:

            message = `
                <h2>😊 Hello!</h2>

                <p>
                    Welcome to my little world. ❤️
                </p>
            `;
    }


    /* =====================================================
       DISPLAY PERSONALIZED MESSAGE
       ===================================================== */

    messageBox.innerHTML = message;

    messageBox.classList.add("show");


    /* =====================================================
       ALLOW USER TO ENTER HOMEPAGE
       ===================================================== */

    homeButton.classList.add("show");

}


/* =========================================================
   ENTER HOMEPAGE
   =========================================================

   This function runs ONLY after a relationship
   has been selected.
*/

function enterHome() {


    // Check relationship again
    const relation =
        document.getElementById("relation").value;


    /* =====================================================
       EXTRA PROTECTION

       Even if someone somehow clicks the button
       without selecting a relation, they cannot enter.
       ===================================================== */

    if (relation === "") {

        alert(
            "Please select your relationship with me first ❤️"
        );

        return;
    }


    /* =====================================================
       GET OPENING SCREEN
       ===================================================== */

    const welcomeScreen =
        document.getElementById("welcomeScreen");


    /* =====================================================
       START EXIT ANIMATION
       ===================================================== */

    welcomeScreen.classList.add("hide");


    /* =====================================================
       COMPLETELY REMOVE OPENING SCREEN
       AFTER ANIMATION
       ===================================================== */

    setTimeout(function () {

        welcomeScreen.style.display = "none";

        /*
           Start the homepage from the top.
        */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 900);

}
