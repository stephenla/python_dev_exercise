## Task 1
Task 1 and 2 use the flask application. The frontend is built with the node project in the folder `frontend` it uses React to create the home page and search page for the solution. The React code is inside the folder `frontend/src`.
1. Start flask server by running `flask run`.
2. Open browser and navigate to `http://127.0.0.1:5000`.
3. Home page should be loaded with the title "Lab Results Finder" and a button to go to the Search page.
<img width="947" alt="Screenshot 2023-10-11 at 6 28 35 PM" src="https://github.com/stephenla/python_dev_exercise/assets/5061080/db73311b-252c-48f8-bd03-fdaf1dc6b68c">

## Task 2
1. Navigate to the search page from the home page or go to `http://127.0.0.1:5000/search`
2. Type in a name to search and press enter or click the `Search` button.
3. Matching records with the same first name(case insensitive) from `patient_tb.csv` should be shown in a table.
<img width="951" alt="Screenshot 2023-10-11 at 6 26 41 PM" src="https://github.com/stephenla/python_dev_exercise/assets/5061080/f93f3a1e-f5fd-4e04-8c3d-ea2bcfce1316">

## Task 3
The python script `remove_duplicates.py` will handle removing duplicates.
1. Run `python remove_duplicates.py` in the Terminal.
2. A new csv named `patient_tb_no_duplicates.csv` will be created in the `data` folder.
