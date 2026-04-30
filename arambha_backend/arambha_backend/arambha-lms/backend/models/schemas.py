from pydantic import BaseModel
from typing import Optional

class ProgressSyncRequest(BaseModel):
    user_id: str
    course_id: str
    video_id: str
    current_position: float
    total_duration: float

class EnrollRequest(BaseModel):
    user_id: str
    course_id: str

class CertificateRequest(BaseModel):
    user_id: str
    course_id: str
    user_name: str
