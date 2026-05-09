from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import pincode_route

app = FastAPI(title="Pincode Python API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(pincode_route.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Python Service is running"}
