import pandas as pd

# Read the CSV file into a DataFrame
df = pd.read_csv('data/patient_tb.csv')

# Remove duplicates based on same last name, first name, test date, and test name
df = df.drop_duplicates(
    subset=['PatientLastName', 'PatientFirstName', 'MostRecentTestDate', 'TestName'])

# Save the to a new CSV file without duplicates
df.to_csv('data/patient_tb_no_duplicates.csv', index=False)
