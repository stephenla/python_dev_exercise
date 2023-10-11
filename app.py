from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("home.html")


@app.route('/search')
def search():
    return render_template("search.html")


@app.route('/api/search', methods=['GET'])
def get_search_results():
    """Searches PatientFirstName from patient_tb.csv with the given url parameter 'query'"""

    query = request.args.get('query')
    data = pd.read_csv('data/patient_tb.csv')

    filtered_data = data[data['PatientFirstName'].str.lower() == query.lower()]

    # convert to json
    data_json = filtered_data.to_json(orient='records')

    return data_json
