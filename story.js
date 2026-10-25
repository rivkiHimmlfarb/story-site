


function copyLink(buttonElement) {
    const linkToCopy = "rivki3776@gmail.com";

    navigator.clipboard.writeText(linkToCopy)
        .then(() => {
            // בונוס חווית משתמש: נחליף זמנית את האייקון ל-V (צ'קמרק) כדי שהמשתמש יבין שהצליח
            const icon = buttonElement.querySelector('.material-icons');
            icon.innerText = 'check'; // משנה את האייקון ל-V
            
            // מחזירים לאייקון המקורי אחרי שנייה וחצי
            setTimeout(() => {
                icon.innerText = 'content_copy';
            }, 1500);
        })
        .catch(err => {
            console.error("שגיאה בהעתקה: ", err);
        });
}
