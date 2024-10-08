import os
import json
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import firebase_admin
from firebase_admin import credentials
from fastapi.middleware.cors import CORSMiddleware


# from fastapi.middleware.cors import CORSMiddleware  # Import CORS middleware
firebase_credentials = json.loads(os.getenv("FIREBASE_CREDENTIALS"))
cred = credentials.Certificate(firebase_credentials)
firebase_admin.initialize_app(cred)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#
from routers import members, projects

# Include routers
app.include_router(members.router)
app.include_router(projects.router)

# Run the app
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
