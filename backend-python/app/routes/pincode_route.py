from fastapi import APIRouter, HTTPException
from app.services.pincode_service import fetch_pincode_details

router = APIRouter()

@router.get("/pincode/{pincode}")
def get_pincode(pincode: str):
    data = fetch_pincode_details(pincode)
    if not data:
        raise HTTPException(status_code=404, detail="Pincode not found")
    return data
