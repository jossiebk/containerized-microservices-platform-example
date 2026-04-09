from fastapi import FastAPI
from pydantic import BaseModel
from services.shippingservice import calculate_shipping
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def log_requests(request, call_next):
    print(f"{request.method} {request.url.path}")
    response = await call_next(request)
    return response

class ShippingDto(BaseModel):
    city: str
    weight: float

@app.get("/api/shipping")
def get_shipping_options():
    return [
        {"city": "Guatemala", "estimatedDays": 2},
        {"city": "Antigua", "estimatedDays": 3},
        {"city": "Quetzaltenango", "estimatedDays": 4}
    ]

@app.post("/api/shipping/calculate")
def calculate(dto: ShippingDto):
    cost = calculate_shipping(dto.city, dto.weight)
    return {
        "city": dto.city,
        "weight": dto.weight,
        "cost": cost
    }

@app.get("/api/shipping/healthcheck")
def healthcheck():
    return {
        "status": "Healthy",
        "service": "Shipping API"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=5003, reload=True)