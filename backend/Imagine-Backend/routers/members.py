from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from firebase_admin import firestore
from pydantic.networks import AnyHttpUrl
from enum import Enum

# from datetime import date

router = APIRouter()
db = firestore.client()


class Major(str, Enum):
    COMPUTER_SCIENCE = "Computer Science"
    BIOLOGY = "Biology"
    GENDER_STUDIES = "Gender Studies"
    MECH_E = "Mechanical Engineering"
    CIVIL_E = "Civil Engineering"


class Member(BaseModel):
    name: str
    major: Major
    bio: str
    gradDate: str
    role: str

    def to_dict(self):
        return {
            "name": self.name,
            "major": self.major.value,
            "bio": self.bio,
            "gradDate": self.gradDate,
            "role": self.role,
        }


# Get all members
@router.get("/members")
def get_members():
    docs = db.collection("members").stream()
    members = []
    for doc in docs:
        member_data = doc.to_dict()
        member_data["id"] = doc.id
        members.append(member_data)
    return members


# Get specific member by id
@router.get("/members/{member_id}")
def get_member_by_id(member_id: str):
    doc = db.collection("members").document(member_id)
    get_doc = doc.get()
    if not get_doc.exists:
        print("Member does not exist")
        raise HTTPException(status_code=404, detail="Member does not exist")
    return get_doc.to_dict()


################################Queries###############################################
########If no members are found with the query, an empty array will be returned#######


# Query by name
@router.get("/get_member_by_name")
def get_member_by_name(member_name: str):
    if not member_name:
        raise HTTPException(status_code=400, detail="Member name field is required")

    docs = db.collection("members").where("name", "==", member_name).stream()
    members_by_name = []

    for doc in docs:
        members_by_name.append(doc.to_dict())
    return members_by_name


# Query by role
@router.get("/get_member_by_role")
def get_member_by_role(member_role: str):
    if not member_role:
        raise HTTPException(status_code=400, detail="Member role field is required")
    docs = db.collection("members").where("role", "==", member_role).stream()
    members_by_role = []

    for doc in docs:
        members_by_role.append(doc.to_dict())
    return members_by_role


# Query by graduation year
@router.get("/get_member_by_grad")
def get_member_by_grad(member_grad: int):
    if not member_grad:
        raise HTTPException(
            status_code=400, detail="Member graduation year field is required"
        )
    docs = db.collection("members").where("grad", "==", member_grad).stream()
    members_by_grad = []

    for doc in docs:
        members_by_grad.append(doc.to_dict())
    return members_by_grad


# Query by major
@router.get("/get_member_by_major")
def get_member_by_major(member_major: str):
    if not member_major:
        raise HTTPException(status_code=400, detail="Member major field is required")
    docs = db.collection("members").where("major,", "==", member_major).stream()
    members_by_major = []

    for doc in docs:
        members_by_major.append(doc.to_dict())
    return members_by_major


################################Other CRUD functions##################################


@router.post("/members")
def create_member(member: Member):
    db.collection("members").add(member.to_dict())
    return {"message": "Member added successfully"}
    # member_id = doc.id
    # return {"id": member_id, **member.dict()}


@router.delete("/members/{member_id}")
def delete_member(member_id: str):
    doc = db.collection("members").document(member_id)
    get_doc = doc.get()

    if not get_doc.exists:
        print("Member does not exist")
        raise HTTPException(status_code=404, detail="Member does not exist")
    doc.delete()
    return "Member deleted successfully"


@router.put("/members/{member_id}")
def update_member(member_id: str, member: Member):
    doc = db.collection("members").document(member_id)
    get_doc = doc.get()

    if not get_doc.exists:
        print("Member does not exist")
        raise HTTPException(status_code=404, detail="Member does not exist")
    doc.update(member.to_dict())
    return "Member updated successfully"
