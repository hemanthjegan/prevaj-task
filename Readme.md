Task 1: Table View and Infinite Slider
    1.1 Table with Sorting and Pagination

        HTML Structure:
            Create an HTML file (index.html) with a table element.
            The table should have a thead for column headers and a tbody for data rows.

        JavaScript for Sorting and Pagination:
            Add a JavaScript file (script.js) to handle sorting and pagination.
            Sorting: Implement sorting functions for each column header.
            Pagination: Implement functions to divide the table data into pages and navigate between them.

        CSS for Styling:
            Create a CSS file (styles.css) for table styling and pagination controls.

    1.2 Infinite Slider with Arrow Buttons

        HTML Structure:
            In the same HTML file (index.html), add a container for the slider.
            Include images or content to be displayed in the slider.

        JavaScript for Slider Functionality:
            Implement functions in script.js to move the slider left or right when arrow buttons are clicked.
            Implement an infinite loop for the slider, so it cycles through the content continuously.

        CSS for Styling:
            Use styles.css to style the slider container, images, and arrow buttons.

Task 2: Dynamic Page with MVC Pattern
    2.1 Project Structure

        assets/
            data.json: JSON file containing data for the table.
        js/
            model.js: Model part of MVC.
            view.js: View part of MVC.
            controller.js: Controller part of MVC.
        index.html: Main HTML file.

    2.2 Implementation Details

        Model (model.js):
            Load data from data.json.
            Provide functions to fetch and manipulate data.

        View (view.js):
            Render the table with data.
            Implement sorting and pagination controls.

        Controller (controller.js):
            Handle user interactions.
            Update the view based on user actions and data from the model.

        Routing:
            Use URL query parameters for sorting and pagination.
            Update the page state based on the query parameters.