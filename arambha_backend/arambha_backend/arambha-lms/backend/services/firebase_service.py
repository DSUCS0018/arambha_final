import firebase_admin
from firebase_admin import credentials, firestore
import os

_db = None

def get_db():
    global _db
    if _db is None:
        try:
            # Check if default app exists, if not initialize
            firebase_admin.get_app()
        except ValueError:
            # We assume credentials.json is in the same directory or environment
            # In production, use Service Account JSON properly via env vars.
            cred_path = os.path.join(os.path.dirname(__file__), '..', 'credentials.json')
            if os.path.exists(cred_path):
                cred = credentials.Certificate(cred_path)
                firebase_admin.initialize_app(cred)
            else:
                # Fallback to default
                firebase_admin.initialize_app()
        
        _db = firestore.client()
    return _db
