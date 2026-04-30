from fastapi import APIRouter, HTTPException
from models.schemas import EnrollRequest
from services.firebase_service import get_db
from datetime import datetime

router = APIRouter(prefix="/api")

@router.post("/enroll")
async def enroll_course(req: EnrollRequest):
    db = get_db()
    
    # Path: users/{user_id}/enrollments/{course_id}
    enrollment_ref = db.collection('users').document(req.user_id).collection('enrollments').document(req.course_id)
    doc = enrollment_ref.get()
    
    if not doc.exists:
        try:
            enrollment_ref.set({
                'course_id': req.course_id,
                'enrolled_at': datetime.utcnow(),
                'is_course_completed': False,
                'certificate_url': None
            })
            return {"success": True, "message": "Successfully enrolled", "is_new": True}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
    
    return {"success": True, "message": "Already enrolled", "is_new": False}
