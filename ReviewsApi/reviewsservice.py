from fastapi import FastAPI
from pymongo import MongoClient
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = MongoClient("mongodb://mongo-db:27017")
db = client["reviewsdb"]
collection = db["reviews"]

@app.middleware("http")
async def log_requests(request, call_next):
    print(f"{request.method} {request.url}")
    response = await call_next(request)
    return response

@app.get("/api/reviews")
def get_reviews():
    result = []
    for r in collection.find():
        result.append({
            "id": str(r["_id"]),
            "productName": r["productName"],
            "userName": r["userName"],
            "rating": r["rating"],
            "comment": r["comment"]
        })
    return result

@app.post("/api/reviews")
def create_review(review: dict):
    res = collection.insert_one(review)
    return {"id": str(res.inserted_id)}

@app.get("/api/reviews/product/{productName}")
def get_by_product(productName: str):
    result = []
    for r in collection.find({"productName": productName}):
        result.append({
            "id": str(r["_id"]),
            "productName": r["productName"],
            "userName": r["userName"],
            "rating": r["rating"],
            "comment": r["comment"]
        })
    return result

@app.get("/api/reviews/healthcheck")
def health():
    return "Reviews API OK"


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=5009, reload=True)