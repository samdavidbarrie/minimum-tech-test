# Challenge Specification
1. Create a centred section containing two tabs with a file upload dropzone.
Each tab represents an activity (Fuel usage, Electricity usage, etc.).
The file upload section can be as simple or complex as you like (you may
use a third-party library).
2. Each time a file is uploaded, display a success notification.
3. At the top of the page, include navigation with a submit button.
4. When clicked, this button should send data with both activities.
At least one activity must have a file uploaded before submission, but
uploading files to both is not required.
The submit button should be disabled/enabled dynamically based on this
rule.
5. The navigation (with the submit button) and the form section (with tabs)
should be separate components.
6. We would like to see how you handle state changes (e.g., using
useContext).
