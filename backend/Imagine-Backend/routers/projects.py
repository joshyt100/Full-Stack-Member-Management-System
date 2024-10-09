from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, validator
from typing import List
from firebase_admin import firestore

router = APIRouter()
db = firestore.client()


class Project(BaseModel):
    name: str
    description: str
    url: str
    members: List[str] = []

    @validator("members", pre=True)
    def validate_members(cls, value):
        if isinstance(value, str):
            # Split the string into a list
            return [member.strip() for member in value.split(",") if member.strip()]
        elif isinstance(value, list):
            return value
        else:
            return []

    def to_dict(self):
        return {
            "name": self.name,
            "description": self.description,
            "url": self.url,
            "members": self.members,
        }


@router.get("/projects")
def get_projects():
    project_collection = db.collection("projects").stream()
    projects = []
    for project in project_collection:
        project_data = project.to_dict()
        project_data["id"] = project.id
        projects.append(project_data)
    return projects


@router.get("/projects/{project_id}")
def get_project_by_id(project_id: str):
    doc = db.collection("projects").document(project_id)
    get_doc = doc.get()

    if not get_doc.exists:
        print("Project does not exist")
        raise HTTPException(status_code=404, detail="Project does not exist")
    return get_doc.to_dict()


################################################Queries################################################


# Query by name
@router.get("/get_project_by_name")
def get_project_by_name(project_name: str):
    if not project_name:
        raise HTTPException(status_code=400, detail="Project name field is required")
    docs = db.collection("projects").where("name", "==", project_name).stream()
    projects_by_name = []

    for doc in docs:
        projects_by_name.append(doc.to_dict())
    return projects_by_name


################################################Other CRUD Methods############################################


@router.post("/projects")
def create_project(project: Project):
    db.collection("projects").add(project.to_dict())
    return "Project added successfully"


@router.put("/projects/{project_id}")
def update_projects(project_id: str, project: Project):
    doc = db.collection("projects").document(project_id)
    get_doc = doc.get()

    if not get_doc.exists:
        print("Project does not exist")
        raise HTTPException(status_code=404, detail="Project does not exist")
    doc.update(project.dict())
    return "Project updated successfully"


@router.delete("/projects/{project_id}")
def delete_member(project_id: str):
    doc = db.collection("projects").document(project_id)
    get_doc = doc.get()

    if not get_doc.exists:
        print("Member does not exist")
        raise HTTPException(status_code=404, detail="Member does not exist")
    doc.delete()
    return "Member deleted successfully"
