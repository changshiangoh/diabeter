import uuid
import matplotlib.pyplot as plt
import base64
from io import BytesIO
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Union
import numpy as np
import pandas as pd
import pickle
import dill
import warnings
import lime
import lime.lime_tabular
import dill
from fastapi.staticfiles import StaticFiles
import os

warnings.filterwarnings('ignore')

app = FastAPI()
app.mount("/static", StaticFiles(directory="generated_html"), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class DataWrapper(BaseModel):
    data: List[Union[int, float]]

@app.post("/runModel/")
async def generate_html(data: DataWrapper):
    # Create plot
    # plt.figure()
    # plt.bar(range(len(data.data)), data.data)
    # plt.title("Bar Chart of Input Data")

    # # Save plot to memory buffer
    # buf = BytesIO()
    # plt.savefig(buf, format="png")
    # plt.close()
    # buf.seek(0)

    # # Encode image to base64
    # img_base64 = base64.b64encode(buf.read()).decode("utf-8")

    # # Create HTML string
    # html_content = f"""
    # <html>
    # <head><title>Chart Result</title></head>
    # <body>
    #     <h2>Generated Chart</h2>
    #     <img src="data:image/png;base64,{img_base64}" alt="Generated Chart"/>
    # </body>
    # </html>
    # """
    rf = pickle.load(open('model','rb'))
    explainer = dill.load(open('lime','rb'))
    df_test = pd.DataFrame(np.array(data.data).reshape(1,-1),columns=rf.feature_names_in_)
    proba = rf.predict_proba(df_test)[:,1][0]
    if proba < 0.2:
        risk = 'Low risk'
    elif proba >= 0.5:
        risk = 'High risk'
    else:
        risk = 'Medium risk'
    exp = explainer.explain_instance(df_test.values[0],rf.predict_proba,num_features=5)
    # exp.show_in_notebook(predict_proba=True,show_predicted_value=False,show_table=True) ### Comment if want to suppress figure
    # exp.save_to_file('fig.html') ### Uncomment if want to save figure as html
    filename = f"{uuid.uuid4().hex}.html"
    html_path = os.path.join("generated_html", filename)
    exp.save_to_file(html_path)
    # html_as_string = open('fig.html','r',encoding="utf8").read()

    suggestion = give_suggestion(exp.as_list())
    # return risk, suggestion
    plot_figure(df_test)

    return {"message": "Data is valid.", "htmlPath": f"/static/{filename}", "risk": risk, "suggestion": suggestion}

@app.post("/runModell/")
async def generate_html():
    train_X = pd.read_csv("train_X.csv")
    explainer = lime.lime_tabular.LimeTabularExplainer(train_X.values,feature_names=train_X.columns.values.tolist(),class_names=['No diabetes','Diabetes'],verbose=True,mode='classification')
    dill.dump(explainer,open('lime','wb'))

def give_suggestion(exp_list):
    suggestion = []
    for item in exp_list:
        if item[1] > 0:
            s = print_suggestion(item[0])
            if s is not None:
                suggestion.append(s)
    if len(suggestion) > 3:
        suggestion = suggestion[0:3]
    elif len(suggestion) == 0:
        suggestion.append('Congratulations on maintaining good health! Sustaining your present lifestyle may help protect against diabetes.')
    return suggestion

def print_suggestion(att):
    if 'BMI' in att:
        return 'Maintaining a healthy weight may help reduce your risk of developing diabetes.'
    elif 'GenHealth' in att:
        return 'Maintaining a healthy lifestyle may help reduce your risk of developing diabetes.'
    elif 'HighBP' in att:
        return 'Effective control of high blood pressure may help reduce your risk of developing diabetes.'
    elif 'HighChol' in att:
        return 'Effective control of cholestrol level may help reduce your risk of developing diabetes.'
    elif 'Smoker' in att:
        return 'Quitting smoking may help reduce your risk of developing diabetes.'
    elif 'Sports' in att:
        return 'Engaging in regular physical activity may help reduce your risk of developing diabetes.'
    elif 'Fruits' in att:
        return 'Consuming more fruits as part of a balanced diet may help reduce your risk of developing diabetes.'
    elif 'Veggies' in att:
        return 'Consuming more vegetables as part of a balanced diet may help reduce your risk of developing diabetes.'
    elif 'Alcohol' in att:
        return 'Reducing alcohol consumption may help reduce your risk of developing diabetes.'
    
def plot_figure(data):
    os.makedirs('generated_html', exist_ok=True)
    samp_X = pd.read_csv('samp_X.csv',index_col=0)
    samp_Y = pd.read_csv('samp_Y.csv',index_col=0)
    fig = plt.figure(figsize=(10,8))
    ax = fig.add_subplot(projection='3d')
    ax.set_yticks(np.linspace(1,13,13),['<25','25-29','30-34','35-39','40-44','45-49','50-54','55-59','60-64','65-69','70-74','75-79','>79'])
    ax.set_zticks(np.linspace(1,5,5),['Excellent','Good','Average','Fair','Poor'])
    ax.set_zticklabels(['Excellent','Good','Average','Fair','Poor'],fontdict={'ha':'left'})
    ax.set_xlabel('BMI')
    ax.set_ylabel('Age')
    ax.xaxis.pane.fill = False
    ax.yaxis.pane.fill = False
    ax.zaxis.pane.fill = False
    X_samp_0 = samp_X[samp_Y['Diabetes']==0]
    X_samp_1 = samp_X[samp_Y['Diabetes']==1]
    ax.plot(X_samp_0['BMI'],X_samp_0['Age'],X_samp_0['GenHealth'],marker='o',markersize=5,linestyle='',zorder=1,alpha=0.7,color='lightblue',label='No diabetes');
    ax.plot(X_samp_1['BMI'],X_samp_1['Age'],X_samp_1['GenHealth'],marker='o',markersize=5,linestyle='',zorder=1,alpha=0.7,color='red',label='Diabetes');
    ax.plot(data['BMI'],data['Age'],data['GenHealth'],marker='o',markersize=5,linestyle='',zorder=2,color='k',label='Your condition');
    plt.legend(loc='upper center',ncol=3)
    plt.savefig('generated_html/fig.png')
    plt.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
