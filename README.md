# Diabeter
**Detect. Decide. Defend against diabetes.**

## 🧠 Inspiration

The motivation to develop **Diabeter** stems from the growing global burden of diabetes and the urgent need for early detection. Millions live with undiagnosed diabetes or elevated risk factors due to lifestyle, genetics, or medical history. Often, damage has already occurred by the time symptoms surface.

**Diabeter** aims to bridge this gap by providing a quick, accessible, and user-friendly tool to help individuals assess their risk and take early preventive action. By increasing awareness and encouraging proactive healthcare, we hope to reduce both personal and societal impacts of diabetes.

---

## 💡 What It Does

**Diabeter** is a full-stack web application built with **React** on the frontend and **FastAPI** on the backend. It provides a comprehensive risk-checking tool and informative visualizations based on machine learning models.

### 🧪 1. Risk Checker

Users input data across three categories:

- **Demographics**  
- **Medical Conditions**  
- **Lifestyle Habits**

This data is sent to a Python-based model via FastAPI, which returns:

- A **predicted probability** of developing diabetes  
- The **top five risk factors** using **LIME (Local Interpretable Model-agnostic Explanations)**  
- Personalized suggestions to reduce risk  
- Visual comparison to population baselines  

### 📊 2. Statistics Tab

This section provides global insights into the most influential risk factors for diabetes. It uses **SHAP (SHapley Additive exPlanations)** to break down how each feature affects the model's predictions, presented through interactive charts stored locally for performance.

### 📚 3. Resources Tab

A curated list of educational links about:

- Diabetes types  
- Preventive strategies  
- Healthy lifestyle guides  

These resources are locally stored and redirect users to trusted external sites.

---

## ⚙️ How It's Built

- **Frontend**: React, HTML/CSS, JavaScript  
- **Backend**: FastAPI (Python)  
- **Explainability**: LIME, SHAP  
- **Communication**: RESTful API (JSON)  
- **Data Visualization**: Pre-rendered charts (stored in `/public`)  

---

## 🚀 Getting Started

### 🛠 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/diabeter.git
   cd diabeter

2. Install React application:
    ```bash
    npm install

3. Install all the Python dependencies in `requirements.txt`.

4. Start the application:
    ```bash
    npm start

## 🗂️ Project Structure

```text
diabeter/
│
├── generated_html            # Python generated html
├── public/                   # Static assets (charts, images)
│   ├── figures/              # Statistics
│
├── src/                      # React frontend source
│   ├── pages/util            # Convert data to Python input format
│   ├── pages/questions       # Sections for different Questions
│   ├── pages/statistics      # Reusable components for statistics
│   ├── pages/                # Tabs like Risk Checker, Statistics & Resources
│   ├── App.js                # Main app logic
│   └── index.js              # Entry point for React app
|
├── lime                      # Lime explaner based on random forest model
├── model                     # Trained random forest model for prediction
├── model.py                  # Python backend function
├── package.json              # NPM configuration and scripts
├── requirements.txt          # Python dependencies
├── samp_X.csv                # Dataset for plotting comparison
├── samp_Y.csv                # Dataset for plotting comparison
└── README.md

