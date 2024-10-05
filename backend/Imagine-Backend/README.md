# Imagine-Backend

To run locally
1) Make sure imagine.json is in your working directory
   * To obtain, you need to generate a private key:
   * Open firebase -> project settings -> service accounts -> click python and generate new private key -> rename to 'imagine.json' -> move to same directory as githup repo
  
2) In terminal
   *  if FastAPI is not installed -> 'pip install fastapi firebase-admin uvicorn'
   * 'python main.py'
   * 'uvicorn main:app --reload'
